// services/apiClient.ts
import {
    AuditLog,
    Church,
    FinanceOverview,
    FinancialSummary,
    Payment,
    PlatformData,
    Requisition,
    RequisitionStatus,
    Role,
    Section,
    SubscriptionStatus,
    User,
} from '../types';

const API_BASE_URL = 'https://7fe9ef0a6473.ngrok-free.app/api';

export type ApiResponse<T> = {
    status: boolean;
    message: string;
    data: T;
};

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

    const token = getAuthToken();
    if (token) {
        headers.set('Authorization', `Bearer ${token}`);
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers,
    });

    const json = await response.json() as ApiResponse<T>;

    if (!response.ok || !json.status) {
        throw new Error(json.message || 'An API error occurred');
    }

    return json.data;
}

// --- API Functions ---

export const login = async (email: string, password: string): Promise<User> => {
    console.log('API Client Login called');

    const loginResponse = await request<LoginResponse>('/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
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

export const getRequisitions = (): Promise<Requisition[]> => {
    return request<Requisition[]>(`/requisitions`);
};

export const getRequisitionById = (
    id: string,
): Promise<Requisition> => {
    return request<Requisition>(`/requisitions/${id}`);
};

export const createRequisition = (
    data: Omit<
        Requisition,
        | 'id'
        | 'status'
        | 'created_at'
        | 'updated_at'
        | 'activity_log'
        | 'approvals'
        | 'payment'
        | 'final_receipt'
        | 'requested_by'
        | 'department'
    >,
): Promise<Requisition> => {
    return request<Requisition>('/requisitions', {
        method: 'POST',
        body: JSON.stringify(data),
    });
};

export const updateRequisition = (
    id: string,
    data: Partial<Requisition>,
): Promise<Requisition> => {
    return request<Requisition>(`/requisitions/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    });
};

export const getFinancialSummary = (
    sectionId: string,
): Promise<FinancialSummary> => {
    return request<FinancialSummary>(`/financial-summary/${sectionId}`);
};

export const getChurch = (
    church_id: string,
): Promise<Church> => {
    return request<Church>(`/churches/${church_id}`);
};

export const processWorkflowAction = (
    reqId: string,
    action: 'APPROVE' | 'REJECT' | 'REQUEST_CHANGES',
    comments: string,
): Promise<Requisition> => {
    return request<Requisition>(`/requisitions/${reqId}/action`, {
        method: 'POST',
        body: JSON.stringify({ action, comments }),
    });
};

export const disbursePayment = (
    reqId: string,
    paymentDetails: Omit<Payment, 'timestamp'>,
): Promise<Requisition> => {
    return request<Requisition>(`/requisitions/${reqId}/disburse`, {
        method: 'POST',
        body: JSON.stringify({ paymentDetails }),
    });
};

export const uploadFinalReceipt = (
    reqId: string,
    receiptFileName: string,
): Promise<Requisition> => {
    return request<Requisition>(`/requisitions/${reqId}/upload-receipt`, {
        method: 'POST',
        body: JSON.stringify({ receiptFileName }), // In a real app, this would be a file upload
    });
};

export const verifyFinalReceipt = (
    reqId: string,
    action: 'VERIFY' | 'REQUEST_CORRECTION',
    comments: string,
): Promise<Requisition> => {
    return request<Requisition>(`/requisitions/${reqId}/verify-receipt`, {
        method: 'POST',
        body: JSON.stringify({ action, comments }),
    });
};

export const createSection = (
    church_id: string,
    name: string,
): Promise<Section> => {
    return request<Section>(`/churches/${church_id}/sections`, {
        method: 'POST',
        body: JSON.stringify({ name }),
    });
};

export const getAllUsers = (
    church_id: string,
): Promise<User[]> => {
    return request<User[]>(`/churches/${church_id}/users`);
};

export const createUser = (
    userData: Omit<User, 'id'>,
): Promise<User> => {
    return request<User>('/users', {
        method: 'POST',
        body: JSON.stringify(userData),
    });
};

export const getPlatformData = (): Promise<PlatformData> => {
    return request<PlatformData>('/platform-data');
};

export const extendSubscription = (
    church_id: string,
    months: number,
): Promise<Church> => {
    return request<Church>(`/churches/${church_id}/extend-subscription`, {
        method: 'POST',
        body: JSON.stringify({ months }),
    });
};

export const getAuditLogs = (
    church_id: string,
): Promise<AuditLog[]> => {
    return request<AuditLog[]>(`/churches/${church_id}/audit-logs`);
};

export const getFinanceOverview = (
    sectionId: string,
): Promise<FinanceOverview> => {
    return request<FinanceOverview>(`/finance-overview/${sectionId}`);
};
