import { useState, useCallback, useEffect, useMemo } from 'react';
import * as apiClient from '@/services/apiClient';
import { Requisition, Role, User } from '@/types';
import { useAuth } from '@/context/AuthContext';

export const useRequisitions = () => {
    const { currentUser } = useAuth();
    const [requisitions, setRequisitions] = useState<Requisition[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        if (!currentUser) return;

        try {
            setLoading(true);
            setError(null);

            const [reqData, userData] = await Promise.all([
                apiClient.getRequisitions(),
                apiClient.getAllUsers(currentUser.church_id)
            ]);

            setRequisitions(reqData.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()));
            setUsers(userData);
        } catch (err: any) {
            setError(err.message || 'Failed to fetch requisitions');
        } finally {
            setLoading(false);
        }
    }, [currentUser]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const userVisibleRequisitions = useMemo(() => {
        if (!currentUser) return [];
        let filtered: Requisition[] = requisitions;
        if (currentUser.role === Role.DEPARTMENT_HEAD) {
            filtered = filtered.filter(r => r.department_id === currentUser.department_id);
        } else if (currentUser.role === Role.MEMBER) {
            filtered = filtered.filter(r => r.requested_by_id === currentUser.id);
        }
        return filtered;
    }, [requisitions, currentUser]);

    return {
        requisitions: userVisibleRequisitions,
        users,
        loading,
        error,
        refresh: fetchData
    };
};
