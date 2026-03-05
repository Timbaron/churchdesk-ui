'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { currentUser, currentChurch, currentSection, logout, isLoading } = useAuth();
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !currentUser) {
            router.push('/login');
        }
    }, [isLoading, currentUser, router]);

    if (isLoading) {
        return (
            <div className="h-screen w-screen flex items-center justify-center bg-slate-100">
                <div className="flex flex-col items-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mb-4"></div>
                    <p className="text-slate-600 font-medium">Loading ChurchDesk...</p>
                </div>
            </div>
        );
    }

    if (!currentUser) {
        return null;
    }

    return (
        <div className="relative min-h-screen md:flex bg-slate-100">
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-20 md:hidden transition-opacity"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            <Sidebar
                currentUser={currentUser}
                isOpen={isSidebarOpen}
                setIsOpen={setSidebarOpen}
            />

            <div className="flex-1 flex flex-col overflow-hidden">
                {currentChurch && (
                    <Header
                        onMenuClick={() => setSidebarOpen(true)}
                    />
                )}
                <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6 pb-20 md:pb-6">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
