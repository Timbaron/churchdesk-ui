// types.ts

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
  id: number;
  name: string;
  email: string;
  password?: string; // Added for authentication
  role: Role;
  departmentId: number | null;
  sectionId: number | null;
  churchId: number;
}

export interface Department {
  id: number;
  name: string;
  sectionId: number;
}

export interface Section {
  id: number;
  name: string;
  churchId: number;
  departments: Department[];
}

export enum SubscriptionStatus {
    TRIAL = 'Trial',
    ACTIVE = 'Active',
    EXPIRED = 'Expired',
}

export interface Church {
  id: number;
  name: string;
  sections: Section[];
  subscriptionStatus: SubscriptionStatus;
  subscriptionEndsAt: string; // ISO date string
}

export interface Approval {
  id: number;
  approverId: number;
  status: 'APPROVED' | 'REJECTED' | 'REQUESTED_CHANGES';
  comments: string | null;
  timestamp: string; // ISO date string
}

export interface ActivityLog {
  id: number;
  userId: number;
  action: string;
  details: string | null;
  timestamp: string; // ISO date string
}

export interface Attachment {
    name: string;
    url: string;
}

export interface Payment {
    amountPaid: number;
    paymentMethod: PaymentMethod;
    paymentDate: string; // YYYY-MM-DD
    referenceNumber: string | null;
    proofFile: Attachment | null;
    recordedById: number;
    timestamp: string; // ISO date string
}

export interface FinalReceipt {
    name: string;
    url: string;
    uploadedAt: string; // ISO date string
}

export interface Requisition {
  id: string;
  title: string;
  requestedById: number;
  departmentId: number;
  sectionId: number;
  churchId: number;
  amountRequested: number;
  category: string;
  purpose: string;
  dateNeeded: string; // YYYY-MM-DD
  createdAt: string; // ISO date string
  status: RequisitionStatus;
  approvals: Approval[];
  activityLog: ActivityLog[];
  attachments: Attachment[];
  payment: Payment | null;
  finalReceipt: FinalReceipt | null;
}

export interface ChartData {
    name: string;
    value: number;
}

export interface FinancialSummary {
    balance: number;
    totalInflow: number;
    totalOutflow: number;
}

export interface PlatformActivity {
    id: number;
    description: string;
    timestamp: string; // ISO date string
    category: 'NEW_CHURCH' | 'SUBSCRIPTION' | 'SYSTEM';
}


export interface PlatformData {
    churches: Church[];
    totalUsers: number;
    totalRequisitions: number;
    totalAmountRequested: number;
    requisitionStatusCounts: { [key in RequisitionStatus]?: number };
    subscriptionStatusCounts: { [key in SubscriptionStatus]?: number };
    recentActivities: PlatformActivity[];
}

export interface AuditLog extends ActivityLog {
    requisitionId: string;
    requisitionTitle: string;
}

export interface FinanceOverview {
    awaitingDisbursement: Requisition[];
    pendingVerification: Requisition[];
    recentlyCompleted: Requisition[];
    totalDisbursed: number;
}