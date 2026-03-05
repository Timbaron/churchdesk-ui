'use client';

import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import RequisitionDetail from '@/components/RequisitionDetail';
import { useAuth } from '@/context/AuthContext';
import { useRouter, useParams } from 'next/navigation';

const RequisitionDetailPage: React.FC = () => {
    const { currentUser, isLoading } = useAuth();
    const router = useRouter();
    const params = useParams();
    const id = params?.id;

    if (isLoading) return null;
    if (!currentUser || !id) return null;

    return (
        <DashboardLayout>
            <RequisitionDetail
                requisitionId={id as string}
                navigate={(view) => {
                    if (view === 'requisitions') {
                        router.push('/requisitions');
                    } else if (view === 'new_requisition') {
                        router.push(`/requisitions/edit/${id}`); // Potentially handle editing
                    }
                }}
            />
        </DashboardLayout>
    );
};

export default RequisitionDetailPage;
