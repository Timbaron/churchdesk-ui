export enum Role {
    MEMBER = 'Member',
    DEPARTMENT_HEAD = 'Department Head',
    SECTION_PRESIDENT = 'Section President',
    FINANCE = 'Finance',
    AUDITOR = 'Auditor',
    SUPER_ADMIN = 'Super Admin',
    APP_OWNER = 'App Owner',
}

export enum RequisitionStatus {
    PENDING = 'Pending',
    APPROVED_BY_DEPT_HEAD = 'Approved by Dept. Head',
    APPROVED_BY_SECTION_PRESIDENT = 'Approved by Section President',
    AWAITING_RECEIPT = 'Awaiting Receipt',
    PENDING_FINANCE_VERIFICATION = 'Pending Finance Verification',
    COMPLETED = 'Completed',
    REJECTED = 'Rejected',
    CHANGES_REQUESTED = 'Changes Requested',
    RECEIPT_CORRECTION_REQUESTED = 'Receipt Correction Requested',
}

export enum PaymentMethod {
    TRANSFER = 'Bank Transfer',
    CASH = 'Cash',
    CHEQUE = 'Cheque',
}

export interface User {
    id: string;
    name: string;
    email: string;
    password?: string;
    role: Role;
    department_id: string | null;
    section_id: string | null;
    church_id: string;
}

export interface Department {
    id: string;
    name: string;
    section_id: string;
    created_at?: string;
    updated_at?: string;
}

export interface Section {
    id: string;
    name: string;
    church_id: string;
    departments: Department[];
}

export enum SubscriptionStatus {
    TRIAL = 'Trial',
    ACTIVE = 'Active',
    EXPIRED = 'Expired',
}

export interface Church {
    id: string;
    name: string;
    sections: Section[];
    subscription_status: SubscriptionStatus;
    subscription_ends_at: string;
}

export interface Approval {
    id: string;
    requisition_id: string;
    approver_id: string;
    status: 'APPROVED' | 'REJECTED' | 'REQUESTED_CHANGES';
    comments: string | null;
    timestamp: string;
}

export interface ActivityLog {
    id: string;
    user_id: string;
    action: string;
    details: string | null;
    timestamp: string;
}

export interface Attachment {
    name: string;
    url: string;
}

export interface Payment {
    amount_paid: number;
    payment_method: PaymentMethod;
    payment_date: string;
    reference_number: string | null;
    proof_file: Attachment | null;
    recorded_by_id: string;
    timestamp: string;
}

export interface FinalReceipt {
    name: string;
    url: string;
    uploaded_at: string;
}

export interface Requisition {
    id: string;
    title: string;
    requested_by_id: string;
    department_id: string;
    section_id: string;
    church_id: string;
    amount_requested: number;
    category: string;
    purpose: string;
    date_needed: string;
    created_at: string;
    updated_at: string;
    status: RequisitionStatus | string;
    attachments: Attachment[] | null;
    final_receipt: FinalReceipt | null;
    requested_by: User;
    department: Department;
    approvals: Approval[];
    activity_log?: ActivityLog[];
    payment?: Payment | null;
}

export interface ChartData {
    name: string;
    value: number;
}

export interface FinancialSummary {
    balance: number;
    total_inflow: number;
    total_outflow: number;
}

export interface PlatformActivity {
    id: string;
    description: string;
    timestamp: string;
    category: 'NEW_CHURCH' | 'SUBSCRIPTION' | 'SYSTEM';
}

export interface PlatformData {
    churches: Church[];
    total_users: number;
    total_requisitions: number;
    total_amount_requested: number;
    requisition_status_counts: {[key in RequisitionStatus]?: number};
    subscription_status_counts: {[key in SubscriptionStatus]?: number};
    recent_activities: PlatformActivity[];
}

export interface AuditLog extends ActivityLog {
    requisition_id: string;
    requisition_title: string;
}

export interface FinanceOverview {
    awaiting_disbursement: Requisition[];
    pending_verification: Requisition[];
    recently_completed: Requisition[];
    total_disbursed: number;
}
