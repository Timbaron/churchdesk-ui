'use client';

import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import RequisitionList from '@/components/RequisitionList';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const RequisitionsPage: React.FC = () => {
    const { currentUser, isLoading } = useAuth();
    const router = useRouter();

    if (isLoading) return null;
    if (!currentUser) return null;

    return (
        <DashboardLayout>
            <RequisitionList
                navigate={(view, id) => {
                    if (view === 'view_requisition' && id) {
                        router.push(`/requisitions/${id}`);
                    } else if (view === 'new_requisition') {
                        router.push('/requisitions/new');
                    }
                }}
            />
        </DashboardLayout>
    );
};

export default RequisitionsPage;
