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
import Cookies from 'js-cookie';
import NextCrypto from 'next-crypto';

const crypto = new NextCrypto(process.env.NEXT_PUBLIC_CRYPTO_SECRET || 'fallback_secret_key_1234567890');

const API_BASE_URL = 'https://625a-102-88-114-30.ngrok-free.app/api';

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

// Storage Utility Functions
export const saveAuthData = async (token: string, user: User) => {
    const encryptedToken = await crypto.encrypt(token);
    const encryptedUser = await crypto.encrypt(JSON.stringify(user));
    Cookies.set(AUTH_TOKEN_KEY, encryptedToken, { expires: 7 }); // 7 days
    Cookies.set(AUTH_USER_KEY, encryptedUser, { expires: 7 });
};

export const getAuthToken = async (): Promise<string | null> => {
    try {
        const encrypted = Cookies.get(AUTH_TOKEN_KEY);
        if (!encrypted) return null;
        return await crypto.decrypt(encrypted);
    } catch {
        return null;
    }
};

export const getAuthUser = async (): Promise<User | null> => {
    try {
        const encrypted = Cookies.get(AUTH_USER_KEY);
        if (!encrypted) return null;
        const decryptedUserJson = await crypto.decrypt(encrypted);
        return JSON.parse(decryptedUserJson);
    } catch {
        return null;
    }
};

export const clearAuthData = () => {
    Cookies.remove(AUTH_TOKEN_KEY);
    Cookies.remove(AUTH_USER_KEY);
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
    if (!(options.body instanceof FormData)) {
        headers.set('Content-Type', 'application/json');
    }
    headers.set('Accept', 'application/json');

    const token = await getAuthToken();
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
    await saveAuthData(loginResponse.token, loginResponse.user);

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
    data: any, // Accepts standard Object or FormData
): Promise<Requisition> => {
    const isFormData = typeof FormData !== 'undefined' && data instanceof FormData;
    return request<Requisition>('/requisitions', {
        method: 'POST',
        body: isFormData ? data : JSON.stringify(data),
    });
};

export const updateRequisition = (
    id: string,
    data: any, // Accepts standard Object or FormData
): Promise<Requisition> => {
    const isFormData = typeof FormData !== 'undefined' && data instanceof FormData;
    let method = 'PUT';
    if (isFormData) {
        method = 'POST'; // Laravel work-around for multipart/form-data
        data.append('_method', 'PUT');
    }
    return request<Requisition>(`/requisitions/${id}`, {
        method,
        body: isFormData ? data : JSON.stringify(data),
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
