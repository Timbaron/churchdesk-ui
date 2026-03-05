import { useState, useCallback, useEffect } from 'react';
import * as apiClient from '@/services/apiClient';
import {
    Church,
    PaymentMethod,
    Requisition,
    RequisitionStatus,
    Role,
    User
} from '@/types';
import { useAuth } from '@/context/AuthContext';

export const useRequisitionDetail = (requisitionId: string) => {
    const { currentUser } = useAuth();
    const [requisition, setRequisition] = useState<Requisition | null>(null);
    const [churchData, setChurchData] = useState<{ church: Church | null; users: User[] }>({ church: null, users: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const fetchData = useCallback(async () => {
        if (!currentUser) return;

        try {
            setLoading(true);
            setError(null);
            const [reqData, church, users] = await Promise.all([
                apiClient.getRequisitionById(requisitionId),
                apiClient.getChurch(currentUser.church_id),
                apiClient.getAllUsers(currentUser.church_id)
            ]);
            setRequisition(reqData);
            setChurchData({ church, users });
        } catch (err: any) {
            setError(err.message || 'Failed to fetch requisition details.');
        } finally {
            setLoading(false);
        }
    }, [requisitionId, currentUser]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const processAction = async (action: 'APPROVE' | 'REJECT' | 'REQUEST_CHANGES', comments: string) => {
        if (!requisition || !currentUser) return;
        setIsSubmitting(true);
        try {
            const updated = await apiClient.processWorkflowAction(requisition.id, action, comments);
            setRequisition(updated);
            return updated;
        } catch (err: any) {
            throw err;
        } finally {
            setIsSubmitting(false);
        }
    };

    const disburse = async (paymentDetails: any) => {
        if (!requisition || !currentUser) return;
        setIsSubmitting(true);
        try {
            const updated = await apiClient.disbursePayment(requisition.id, {
                ...paymentDetails,
                recorded_by_id: currentUser.id
            });
            setRequisition(updated);
            return updated;
        } catch (err: any) {
            throw err;
        } finally {
            setIsSubmitting(false);
        }
    };

    const uploadReceipt = async (receiptFile: File) => {
        if (!requisition || !currentUser) return;
        setIsSubmitting(true);
        try {
            const updated = await apiClient.uploadFinalReceipt(requisition.id, receiptFile);
            setRequisition(updated);
            return updated;
        } catch (err: any) {
            throw err;
        } finally {
            setIsSubmitting(false);
        }
    };

    const verifyReceipt = async (action: 'VERIFY' | 'REQUEST_CORRECTION', comments: string) => {
        if (!requisition || !currentUser) return;
        setIsSubmitting(true);
        try {
            const updated = await apiClient.verifyFinalReceipt(requisition.id, action, comments);
            setRequisition(updated);
            return updated;
        } catch (err: any) {
            throw err;
        } finally {
            setIsSubmitting(false);
        }
    };

    const canTakeAction = () => {
        if (!requisition || !currentUser) return false;
        const { status, approvals, requested_by_id, department_id, section_id } = requisition;
        const { role, id, department_id: user_dept_id, section_id: user_sect_id } = currentUser;

        const hasAlreadyActed = approvals?.some(a => a.approver_id === id);
        if (hasAlreadyActed) return false;

        if (status === RequisitionStatus.PENDING) {
            const requester = churchData.users.find(u => u.id === requested_by_id);
            if (!requester) return false;
            if (requester.role !== Role.DEPARTMENT_HEAD && role === Role.DEPARTMENT_HEAD && user_dept_id === department_id) return true;
            if (requester.role === Role.DEPARTMENT_HEAD && role === Role.SECTION_PRESIDENT && user_sect_id === section_id) return true;
        }

        if (status === RequisitionStatus.APPROVED_BY_DEPT_HEAD && role === Role.SECTION_PRESIDENT && user_sect_id === section_id) return true;

        return false;
    };

    const canDisburse = () =>
        requisition?.status === RequisitionStatus.APPROVED_BY_SECTION_PRESIDENT &&
        currentUser?.role === Role.FINANCE &&
        currentUser?.section_id === requisition.section_id;

    const canUploadReceipt = () =>
        (requisition?.status === RequisitionStatus.AWAITING_RECEIPT ||
            requisition?.status === RequisitionStatus.RECEIPT_CORRECTION_REQUESTED) &&
        requisition.requested_by_id === currentUser?.id;

    const canVerifyReceipt = () =>
        requisition?.status === RequisitionStatus.PENDING_FINANCE_VERIFICATION &&
        currentUser?.role === Role.FINANCE &&
        currentUser?.section_id === requisition.section_id;

    const canEditAndResubmit = () =>
        requisition?.status === RequisitionStatus.CHANGES_REQUESTED &&
        requisition.requested_by_id === currentUser?.id;

    const getUserName = (id: string) => churchData.users.find(u => u.id === id)?.name || 'Unknown User';
    const getDepartmentName = (id: string) => churchData.church?.sections.flatMap(s => s.departments).find(d => d.id === id)?.name;
    const getSectionName = (id: string) => churchData.church?.sections.find(s => s.id === id)?.name;

    return {
        requisition,
        churchData,
        loading,
        error,
        isSubmitting,
        actions: {
            processAction,
            disburse,
            uploadReceipt,
            verifyReceipt
        },
        permissions: {
            canTakeAction,
            canDisburse,
            canUploadReceipt,
            canVerifyReceipt,
            canEditAndResubmit
        },
        helpers: {
            getUserName,
            getDepartmentName,
            getSectionName
        },
        refresh: fetchData
    };
};
