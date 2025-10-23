// services/apiClient.ts
import {
	AuditLog,
	Church,
	FinanceOverview,
	FinancialSummary,
	Payment,
	PlatformData,
	Requisition,
	Role,
	Section,
	User,
} from '../types';

const API_BASE_URL = 'https://0f2eb399cbe1.ngrok-free.app/api'; // Using a relative URL for the proxy

// Define the structure of the login response
export type LoginResponse = {
    user: User;
    token: string;
};

// Keys for storing data
const AUTH_TOKEN_KEY = 'authToken';
const AUTH_USER_KEY = 'authUser';

// Storage Utility Functions (using localStorage as a stand-in for cookies/better storage)
export const saveAuthData = (token: string, user: User) => {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
};

export const getAuthToken = (): string | null => {
    return localStorage.getItem(AUTH_TOKEN_KEY);
};

export const getAuthUser = (): User | null => {
    const userJson = localStorage.getItem(AUTH_USER_KEY);
    return userJson ? JSON.parse(userJson) : null;
};

export const clearAuthData = () => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
};

let authUserId: string | null = null;

export const setAuthUserId = (id: string) => {
    authUserId = id;
};

export const clearAuthUserId = () => {
    authUserId = null;
};

async function request<T>(
    endpoint: string,
    options: RequestInit = {},
): Promise<T> {
    const headers = new Headers(options.headers || {});
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');

    // 1. Get the token from storage
    const token = getAuthToken();
    if (token) {
        // 2. Set the Authorization header with the Bearer scheme
        headers.set('Authorization', `Bearer ${token}`);
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers,
    });

    if (!response.ok) {
        // ... (error handling remains the same)
        const errorData = await response.json();
        throw new Error(errorData.message || 'An API error occurred');
    }

    return response.json();
}

// --- API Functions ---

export const login = async (email: string, password: string): Promise<User> => {
    // Note: The public function returns User, but handles LoginResponse internally
    console.log('API Client Login called');

    const loginResponse = await request<LoginResponse>('/login', {
        method: 'POST',
        body: JSON.stringify({email, password}),
    });

    // 1. Save the token and user details upon successful login
    console.log(loginResponse.token, loginResponse.user);
    saveAuthData(loginResponse.token, loginResponse.user);

    // 2. Return the user object, as the original function signature suggests
    return loginResponse.user;
};

export const registerChurch = (
    churchName: string,
    adminName: string,
    adminEmail: string,
    adminPassword: string,
): Promise<User> => {
    return request<User>('/register', {
        method: 'POST',
        body: JSON.stringify({
            churchName,
            adminName,
            adminEmail,
            adminPassword,
        }),
    });
};

export const getRequisitions = (userId: number): Promise<Requisition[]> => {
    return request<Requisition[]>(`/requisitions`);
};

export const getRequisitionById = (
    id: string,
    userId: number,
): Promise<Requisition> => {
    return request<Requisition>(`/requisitions/${id}`);
};

export const createRequisition = (
    data: Omit<
        Requisition,
        | 'id'
        | 'status'
        | 'createdAt'
        | 'activityLog'
        | 'approvals'
        | 'payment'
        | 'finalReceipt'
    >,
    userId: number,
): Promise<Requisition> => {
    return request<Requisition>('/requisitions', {
        method: 'POST',
        body: JSON.stringify(data),
    });
};

export const updateRequisition = (
    id: string,
    data: Partial<Requisition>,
    userId: number,
): Promise<Requisition> => {
    return request<Requisition>(`/requisitions/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    });
};

export const getFinancialSummary = (
    sectionId: number,
    userId: number,
): Promise<FinancialSummary> => {
    return request<FinancialSummary>(`/financial-summary/${sectionId}`);
};

export const getChurch = (
    churchId: string,
    userId: string,
): Promise<Church> => {
    return request<Church>(`/churches/${churchId}`);
};

export const processWorkflowAction = (
    reqId: string,
    userId: number,
    action: 'APPROVE' | 'REJECT' | 'REQUEST_CHANGES',
    comments: string,
): Promise<Requisition> => {
    return request<Requisition>(`/requisitions/${reqId}/action`, {
        method: 'POST',
        body: JSON.stringify({action, comments}),
    });
};

export const disbursePayment = (
    reqId: string,
    paymentDetails: Omit<Payment, 'timestamp'>,
    userId: string,
): Promise<Requisition> => {
    return request<Requisition>(`/requisitions/${reqId}/disburse`, {
        method: 'POST',
        body: JSON.stringify({paymentDetails}),
    });
};

export const uploadFinalReceipt = (
    reqId: string,
    userId: number,
    receiptFileName: string,
): Promise<Requisition> => {
    return request<Requisition>(`/requisitions/${reqId}/upload-receipt`, {
        method: 'POST',
        body: JSON.stringify({receiptFileName}), // In a real app, this would be a file upload
    });
};

export const verifyFinalReceipt = (
    reqId: string,
    userId: number,
    action: 'VERIFY' | 'REQUEST_CORRECTION',
    comments: string,
): Promise<Requisition> => {
    return request<Requisition>(`/requisitions/${reqId}/verify-receipt`, {
        method: 'POST',
        body: JSON.stringify({action, comments}),
    });
};

export const createSection = (
    churchId: number,
    name: string,
    userId: number,
): Promise<Section> => {
    return request<Section>(`/churches/${churchId}/sections`, {
        method: 'POST',
        body: JSON.stringify({name}),
    });
};

export const getAllUsers = (
    churchId: number,
    userId: number,
): Promise<User[]> => {
    return request<User[]>(`/churches/${churchId}/users`);
};

export const createUser = (
    userData: Omit<User, 'id'>,
    userId: number,
): Promise<User> => {
    return request<User>('/users', {
        method: 'POST',
        body: JSON.stringify(userData),
    });
};

export const getPlatformData = (userId: number): Promise<PlatformData> => {
    return request<PlatformData>('/platform-data');
};

export const extendSubscription = (
    churchId: number,
    months: number,
    userId: number,
): Promise<Church> => {
    return request<Church>(`/churches/${churchId}/extend-subscription`, {
        method: 'POST',
        body: JSON.stringify({months}),
    });
};

export const getAuditLogs = (
    churchId: number,
    userId: number,
): Promise<AuditLog[]> => {
    return request<AuditLog[]>(`/churches/${churchId}/audit-logs`);
};

export const getFinanceOverview = (
    sectionId: number,
    userId: number,
): Promise<FinanceOverview> => {
    return request<FinanceOverview>(`/finance-overview/${sectionId}`);
};
