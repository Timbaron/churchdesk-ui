import { useState, useCallback, useEffect } from 'react';
import * as apiClient from '@/services/apiClient';
import { AuditLog, User } from '@/types';
import { useAuth } from '@/context/AuthContext';

export const useAudit = () => {
    const { currentUser } = useAuth();
    const [logs, setLogs] = useState<AuditLog[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchAuditData = useCallback(async () => {
        if (!currentUser?.church_id) return;

        setLoading(true);
        setError(null);
        try {
            const [logData, userData] = await Promise.all([
                apiClient.getAuditLogs(currentUser.church_id),
                apiClient.getAllUsers(currentUser.church_id)
            ]);
            setLogs(logData);
            setUsers(userData);
        } catch (err: any) {
            setError(err.message || 'Failed to fetch audit data');
        } finally {
            setLoading(false);
        }
    }, [currentUser?.church_id]);

    useEffect(() => {
        fetchAuditData();
    }, [fetchAuditData]);

    return {
        logs,
        users,
        loading,
        error,
        refresh: fetchAuditData
    };
};
