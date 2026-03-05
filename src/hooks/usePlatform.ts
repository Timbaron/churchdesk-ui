import { useState, useCallback, useEffect } from 'react';
import * as apiClient from '@/services/apiClient';
import { PlatformData, Church, User } from '@/types';
import { useAuth } from '@/context/AuthContext';

export const usePlatform = () => {
    const { currentUser } = useAuth();
    const [platformData, setPlatformData] = useState<PlatformData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const fetchData = useCallback(async () => {
        if (!currentUser) return;

        try {
            setLoading(true);
            setError(null);
            const data = await apiClient.getPlatformData();
            setPlatformData(data);
        } catch (err: any) {
            setError(err.message || 'Failed to fetch platform data');
        } finally {
            setLoading(false);
        }
    }, [currentUser]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const extendSubscription = async (churchId: string, months: number) => {
        if (!currentUser) return;
        setIsSubmitting(true);
        try {
            const updatedChurch = await apiClient.extendSubscription(churchId, months);
            setPlatformData(prev => {
                if (!prev) return null;
                return {
                    ...prev,
                    churches: prev.churches.map(c => c.id === updatedChurch.id ? updatedChurch : c)
                };
            });
            return updatedChurch;
        } catch (err: any) {
            setError(err.message || 'Failed to extend subscription');
            throw err;
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        platformData,
        loading,
        error,
        isSubmitting,
        actions: {
            extendSubscription,
            refresh: fetchData
        },
        owner: currentUser
    };
};
