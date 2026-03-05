'use client';

import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import RequisitionForm from '@/components/RequisitionForm';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const NewRequisitionPage: React.FC = () => {
    const { currentUser, isLoading } = useAuth();
    const router = useRouter();

    if (isLoading) return null;
    if (!currentUser) return null;

    return (
        <DashboardLayout>
            <RequisitionForm
                navigate={(view) => {
                    if (view === 'requisitions') {
                        router.push('/requisitions');
                    }
                }}
            />
        </DashboardLayout>
    );
};

export default NewRequisitionPage;
