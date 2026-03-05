'use client';

import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import RequisitionForm from '@/components/RequisitionForm';
import { useAuth } from '@/context/AuthContext';
import { useRouter, useParams } from 'next/navigation';

const EditRequisitionPage: React.FC = () => {
    const { currentUser, isLoading } = useAuth();
    const router = useRouter();
    const params = useParams();
    const id = params?.id as string;

    if (isLoading) return null;
    if (!currentUser || !id) return null;

    return (
        <DashboardLayout>
            <RequisitionForm
                requisitionId={id}
                navigate={(view, newId) => {
                    if (view === 'requisitions') {
                        router.push('/requisitions');
                    } else if (view === 'view_requisition' && newId) {
                        router.push(`/requisitions/${newId}`);
                    }
                }}
            />
        </DashboardLayout>
    );
};

export default EditRequisitionPage;
