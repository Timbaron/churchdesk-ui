// components/Sidebar.tsx
import React from 'react';
import { User, Role } from '../types';
import HomeIcon from './icons/HomeIcon';
import DocumentTextIcon from './icons/DocumentTextIcon';
import PlusCircleIcon from './icons/PlusCircleIcon';

interface SidebarProps {
    currentUser: User;
    currentView: string;
    navigate: (view: 'dashboard' | 'requisitions' | 'new_requisition' | 'admin' | 'finance' | 'audit') => void;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const NavLink: React.FC<{
    icon: React.ReactNode;
    label: string;
    isActive: boolean;
    onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-lg ${
            isActive 
                ? 'bg-blue-500 text-white' 
                : 'text-slate-600 hover:bg-slate-200'
        }`}
    >
        {icon}
        <span>{label}</span>
    </button>
);

const Sidebar: React.FC<SidebarProps> = ({ currentUser, currentView, navigate, isOpen, setIsOpen }) => {
    const { role } = currentUser;

    const canSeeAdmin = role === Role.SUPER_ADMIN;
    const canSeeFinance = role === Role.FINANCE || role === Role.SUPER_ADMIN || role === Role.SECTION_PRESIDENT;
    const canSeeAudit = role === Role.AUDITOR || role === Role.SUPER_ADMIN;

    const sidebarClasses = `
        w-64 bg-white border-r border-slate-200 flex flex-col p-4
        fixed inset-y-0 left-0 z-30
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0 md:flex
    `;

    return (
        <aside className={sidebarClasses}>
            <div className="flex justify-between items-center mb-8">
                <div className="text-2xl font-bold text-slate-800">
                    Church<span className="text-blue-600">Desk</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="md:hidden text-slate-500 hover:text-slate-800">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <nav className="flex flex-col space-y-2">
                <NavLink 
                    icon={<HomeIcon className="h-5 w-5" />} 
                    label="Dashboard" 
                    isActive={currentView === 'dashboard'} 
                    onClick={() => navigate('dashboard')} 
                />
                <NavLink 
                    icon={<DocumentTextIcon className="h-5 w-5" />} 
                    label="All Requisitions" 
                    isActive={currentView === 'requisitions' || currentView === 'view_requisition'}
                    onClick={() => navigate('requisitions')} 
                />
                <NavLink 
                    icon={<PlusCircleIcon className="h-5 w-5" />} 
                    label="New Requisition" 
                    isActive={currentView === 'new_requisition'}
                    onClick={() => navigate('new_requisition')} 
                />

                {/* Role-specific links */}
                <div className="pt-4 mt-4 border-t border-slate-200">
                    {canSeeFinance && (
                        <NavLink 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                            label="Finance Hub" 
                            isActive={currentView === 'finance'}
                            onClick={() => navigate('finance')} 
                        />
                    )}
                    {canSeeAudit && (
                         <NavLink 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
                            label="Audit Trail" 
                            isActive={currentView === 'audit'}
                            onClick={() => navigate('audit')} 
                        />
                    )}
                    {canSeeAdmin && (
                        <NavLink 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                            label="Admin Panel" 
                            isActive={currentView === 'admin'}
                            onClick={() => navigate('admin')} 
                        />
                    )}
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;