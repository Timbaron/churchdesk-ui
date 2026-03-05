'use client';

import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import FinanceDashboard from '@/components/FinanceDashboard';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const FinancePage: React.FC = () => {
    const { currentUser, isLoading } = useAuth();
    const router = useRouter();

    if (isLoading) return null;
    if (!currentUser) return null;

    return (
        <DashboardLayout>
            <FinanceDashboard
                navigate={(view, id) => {
                    if (view === 'view_requisition' && id) {
                        router.push(`/requisitions/${id}`);
                    }
                }}
            />
        </DashboardLayout>
    );
};

export default FinancePage;
