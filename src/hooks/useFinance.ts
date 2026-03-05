import { useState, useCallback, useEffect } from 'react';
import * as apiClient from '@/services/apiClient';
import { FinanceOverview } from '@/types';
import { useAuth } from '@/context/AuthContext';

export const useFinance = () => {
    const { currentUser } = useAuth();
    const [overview, setOverview] = useState<FinanceOverview | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchFinanceData = useCallback(async () => {
        if (!currentUser?.section_id) {
            setLoading(false);
            return;
        }

        setLoading(true);
        setError(null);
        try {
            const data = await apiClient.getFinanceOverview(currentUser.section_id);
            setOverview(data);
        } catch (err: any) {
            setError(err.message || 'Failed to fetch finance overview');
        } finally {
            setLoading(false);
        }
    }, [currentUser?.section_id]);

    useEffect(() => {
        fetchFinanceData();
    }, [fetchFinanceData]);

    return {
        overview,
        loading,
        error,
        refresh: fetchFinanceData
    };
};
