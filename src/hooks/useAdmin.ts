import { useState, useCallback, useEffect } from 'react';
import * as apiClient from '@/services/apiClient';
import { Church, Role, Section, User } from '@/types';
import { useAuth } from '@/context/AuthContext';

export const useAdmin = () => {
    const { currentUser } = useAuth();
    const [sections, setSections] = useState<Section[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [church, setChurch] = useState<Church | null>(null);
    const [loading, setLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        if (!currentUser?.church_id) return;

        try {
            setLoading(true);
            setError(null);
            const [churchData, allUsers] = await Promise.all([
                apiClient.getChurch(currentUser.church_id),
                apiClient.getAllUsers(currentUser.church_id)
            ]);
            setSections(churchData.sections);
            setChurch(churchData);
            setUsers(allUsers);
        } catch (err: any) {
            setError(err.message || 'Failed to fetch admin data');
        } finally {
            setLoading(false);
        }
    }, [currentUser]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const createSection = async (name: string) => {
        if (!currentUser?.church_id) return;
        setIsSubmitting(true);
        try {
            await apiClient.createSection(currentUser.church_id, name);
            await fetchData();
            return true;
        } catch (err: any) {
            setError(err.message || 'Failed to create section');
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    const createUser = async (userData: any) => {
        if (!currentUser?.church_id) return;
        setIsSubmitting(true);
        try {
            await apiClient.createUser({
                ...userData,
                church_id: currentUser.church_id,
                password: 'password123' // Default password as per previous implementation
            });
            await fetchData();
            return true;
        } catch (err: any) {
            setError(err.message || 'Failed to create user');
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        sections,
        users,
        church,
        loading,
        isSubmitting,
        error,
        actions: {
            createSection,
            createUser,
            refresh: fetchData
        },
        currentUserId: currentUser?.id
    };
};
