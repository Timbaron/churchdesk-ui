'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import DashboardLayout from '@/components/DashboardLayout';
import LandingPage from '@/components/LandingPage';
import AppOwnerDashboard from '@/components/AppOwnerDashboard';
import { useAuth } from '@/context/AuthContext';
import { Role } from '@/types';
import { useRouter } from 'next/navigation';

// Dynamically import client-side heavy components
const Dashboard = dynamic(() => import('@/components/Dashboard'), { ssr: false });

export default function Home() {
    const { currentUser, isLoading } = useAuth();
    const router = useRouter();

    if (isLoading) {
        return (
            <div className="h-screen w-screen flex items-center justify-center bg-slate-100">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
        );
    }

    if (!currentUser) {
        return <LandingPage onNavigateToAuth={() => router.push('/login')} />;
    }

    if (currentUser.role === Role.APP_OWNER) {
        return <AppOwnerDashboard />;
    }

    // Helper for Dashboard component which expects a 'navigate' function
    const navigate = (view: string, id?: string) => {
        if (view === 'view_requisition' && id) {
            router.push(`/requisitions/${id}`);
        } else if (view === 'requisitions') {
            router.push('/requisitions');
        } else if (view === 'new_requisition') {
            router.push('/requisitions/new');
        }
    };

    return (
        <DashboardLayout>
            <Dashboard
                navigate={navigate as any}
            />
        </DashboardLayout>
    );
}
