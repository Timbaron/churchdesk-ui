'use client';

import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import AdminPanel from '@/components/AdminPanel';
import { useAuth } from '@/context/AuthContext';

const AdminPage: React.FC = () => {
    const { currentUser, isLoading } = useAuth();

    if (isLoading) return null;
    if (!currentUser) return null;

    return (
        <DashboardLayout>
            <AdminPanel />
        </DashboardLayout>
    );
};

export default AdminPage;
