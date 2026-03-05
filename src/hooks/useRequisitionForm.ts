import { useState, useCallback, useEffect } from 'react';
import * as apiClient from '@/services/apiClient';
import { Department, Role } from '@/types';
import { useAuth } from '@/context/AuthContext';

interface RequisitionData {
    title: string;
    amount_requested: number;
    category: string;
    date_needed: string;
    purpose: string;
    department_id: string;
    attachments?: { name: string; url: string }[];
}

export const useRequisitionForm = (requisitionId?: string) => {
    const { currentUser } = useAuth();
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [dateNeeded, setDateNeeded] = useState('');
    const [purpose, setPurpose] = useState('');
    const [departmentId, setDepartmentId] = useState<string>(currentUser?.department_id || '');
    const [attachments, setAttachments] = useState<File[]>([]);
    const [departments, setDepartments] = useState<Department[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoading, setIsLoading] = useState(!!requisitionId);
    const [error, setError] = useState<string | null>(null);

    const isEditing = !!requisitionId;

    const loadInitialData = useCallback(async () => {
        if (!currentUser) return;

        try {
            setIsLoading(true);
            setError(null);

            if (currentUser.church_id) {
                const churchData = await apiClient.getChurch(currentUser.church_id);
                const userSection = churchData.sections.find(s => s.id === currentUser.section_id);
                if (userSection) {
                    setDepartments(userSection.departments);
                }
            }

            if (requisitionId) {
                const req = await apiClient.getRequisitionById(requisitionId);
                setTitle(req.title);
                setAmount(req.amount_requested.toString());
                setCategory(req.category);
                setDateNeeded(req.date_needed);
                setPurpose(req.purpose);
                setDepartmentId(req.department_id);
            }
        } catch (err: any) {
            setError(err.message || 'Failed to load initial data');
        } finally {
            setIsLoading(false);
        }
    }, [currentUser, requisitionId]);

    useEffect(() => {
        loadInitialData();
    }, [loadInitialData]);

    const submit = async () => {
        if (!currentUser || !currentUser.section_id || !departmentId) {
            setError('Your user profile is missing required section or department information.');
            return null;
        }

        setIsSubmitting(true);
        setError(null);

        const requisitionData = {
            title,
            amount_requested: parseFloat(amount),
            category,
            date_needed: dateNeeded,
            purpose,
            department_id: departmentId,
            section_id: currentUser.section_id!,
            church_id: currentUser.church_id,
            requested_by_id: currentUser.id,
            attachments: attachments.map(f => ({ name: f.name, url: '#' })),
        };

        try {
            let savedRequisition;
            if (isEditing) {
                savedRequisition = await apiClient.updateRequisition(requisitionId!, requisitionData);
            } else {
                savedRequisition = await apiClient.createRequisition(requisitionData);
            }
            return savedRequisition;
        } catch (err: any) {
            setError(err.message || 'An unexpected error occurred.');
            return null;
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        formState: {
            title, setTitle,
            amount, setAmount,
            category, setCategory,
            dateNeeded, setDateNeeded,
            purpose, setPurpose,
            departmentId, setDepartmentId,
            attachments, setAttachments
        },
        departments,
        isSubmitting,
        isLoading,
        error,
        isEditing,
        submit,
        role: currentUser?.role
    };
};
