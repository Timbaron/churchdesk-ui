import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import RequisitionList from './components/RequisitionList';
import RequisitionDetail from './components/RequisitionDetail';
import RequisitionForm from './components/RequisitionForm';
import AdminPanel from './components/AdminPanel';
import FinanceDashboard from './components/FinanceDashboard';
import AuditTrail from './components/AuditTrail';
import AppOwnerDashboard from './components/AppOwnerDashboard';
import LandingPage from './components/LandingPage';
import { User, Role, Section, Church } from './types';
import * as apiClient from './services/apiClient';

type View = 'dashboard' | 'requisitions' | 'view_requisition' | 'new_requisition' | 'admin' | 'finance' | 'audit';

const LoginPage: React.FC<{ onLogin: (email: string, pass: string) => Promise<void>; onNavigateToRegister: () => void; }> = ({ onLogin, onNavigateToRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
        try {
            await onLogin(email, password);
        } catch (err: any) {
            setError(err.message || 'Login failed.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-100">
            <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-sm">
                <h1 className="text-2xl font-bold text-center text-slate-800 mb-6">Login to ChurchDesk</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700">Email Address</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700">Password</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm" />
                         <p className="text-xs text-slate-400 mt-1">Hint: The password for all test users is 'password123'</p>
                    </div>
                    {error && <p className="text-sm text-red-600">{error}</p>}
                    <button type="submit" disabled={isLoading} className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:bg-blue-300">
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                <p className="text-center text-sm text-slate-600 mt-6">
                    Don't have an account?{' '}
                    <button onClick={onNavigateToRegister} className="font-medium text-blue-600 hover:underline">
                        Register your church
                    </button>
                </p>
            </div>
        </div>
    );
};

const RegisterPage: React.FC<{ onRegister: (church: string, name: string, email: string, pass: string) => Promise<void>; onNavigateToLogin: () => void; }> = ({ onRegister, onNavigateToLogin }) => {
    const [churchName, setChurchName] = useState('');
    const [adminName, setAdminName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
        try {
            await onRegister(churchName, adminName, email, password);
        } catch (err: any) {
             setError(err.message || 'Registration failed.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-100">
            <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-slate-800 mb-6">Register Your Church</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                     <div>
                        <label className="block text-sm font-medium text-slate-700">Church Name</label>
                        <input type="text" value={churchName} onChange={e => setChurchName(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm" />
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-slate-700">Your Full Name (Super Admin)</label>
                        <input type="text" value={adminName} onChange={e => setAdminName(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700">Your Email Address</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700">Password</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm" />
                    </div>
                     {error && <p className="text-sm text-red-600">{error}</p>}
                    <button type="submit" disabled={isLoading} className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:bg-blue-300">
                        {isLoading ? 'Registering...' : 'Create Account'}
                    </button>
                </form>
                 <p className="text-center text-sm text-slate-600 mt-6">
                    Already have an account?{' '}
                    <button onClick={onNavigateToLogin} className="font-medium text-blue-600 hover:underline">
                        Login
                    </button>
                </p>
            </div>
        </div>
    );
};

const App: React.FC = () => {
    const [appState, setAppState] = useState<'landing' | 'login' | 'register' | 'app'>('landing');
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [currentChurch, setCurrentChurch] = useState<Church | null>(null);
    const [currentSection, setCurrentSection] = useState<Section | null>(null);

    const [view, setView] = useState<View>('dashboard');
    const [activeRequisitionId, setActiveRequisitionId] = useState<string | undefined>(undefined);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const performLogin = (user: User) => {
        apiClient.setAuthUserId(user.id);
        setCurrentUser(user);
        setAppState('app');
    };
    
    useEffect(() => {
        if (currentUser) {
            const fetchUserData = async () => {
                if(currentUser.churchId > 0) {
                    try {
                        const churchData = await apiClient.getChurch(currentUser.churchId, currentUser.id);
                        setCurrentChurch(churchData);
                         if (currentUser.sectionId) {
                            const section = churchData.sections.find(s => s.id === currentUser.sectionId);
                            setCurrentSection(section || null);
                        } else {
                            setCurrentSection(null);
                        }
                    } catch (error) {
                        console.error("Failed to fetch church data:", error);
                        // Handle error, maybe log out
                    }
                }
            };
            fetchUserData();
        }
    }, [currentUser]);
    
    const handleLogin = async (email: string, pass: string) => {
        const user = await apiClient.login(email, pass);
        performLogin(user);
    };

    const handleRegister = async (churchName: string, adminName: string, email: string, pass: string) => {
        const newUser = await apiClient.registerChurch(churchName, adminName, email, pass);
        performLogin(newUser); // Auto-login after registration
    };

    const handleLogout = () => {
        apiClient.clearAuthUserId();
        setCurrentUser(null);
        setCurrentChurch(null);
        setCurrentSection(null);
        setView('dashboard');
        setSidebarOpen(false);
        setAppState('landing');
    };
    
    const navigate = (newView: View, id?: string) => {
        setView(newView);
        setActiveRequisitionId(id);
        if (window.innerWidth < 768) { // Close sidebar on mobile navigation
            setSidebarOpen(false);
        }
    };

    const renderContent = () => {
        if (!currentUser) return null;
        switch (view) {
            case 'dashboard':
                return <Dashboard currentUser={currentUser} currentSection={currentSection} navigate={navigate} />;
            case 'requisitions':
                return <RequisitionList currentUser={currentUser} navigate={navigate} />;
            case 'view_requisition':
                return activeRequisitionId ? <RequisitionDetail requisitionId={activeRequisitionId} currentUser={currentUser} navigate={navigate} /> : <p>No requisition selected.</p>;
            case 'new_requisition':
                 return <RequisitionForm currentUser={currentUser} navigate={navigate} requisitionId={activeRequisitionId} />;
            case 'admin':
                return <AdminPanel currentUser={currentUser} church={currentChurch} />;
            case 'finance':
                return <FinanceDashboard currentUser={currentUser} navigate={navigate} />;
            case 'audit':
                return <AuditTrail currentUser={currentUser} navigate={navigate} />;
            default:
                return <div>Page not found</div>;
        }
    };

    if (appState === 'landing') {
        return <LandingPage onNavigateToAuth={() => setAppState('login')} />;
    }
    if (appState === 'login') {
        return <LoginPage onLogin={handleLogin} onNavigateToRegister={() => setAppState('register')} />;
    }
    if (appState === 'register') {
        return <RegisterPage onRegister={handleRegister} onNavigateToLogin={() => setAppState('login')} />;
    }

    if (currentUser && currentUser.role === Role.APP_OWNER) {
        return <AppOwnerDashboard owner={currentUser} onLogout={handleLogout} />;
    }
    
    return (
        <div className="relative min-h-screen md:flex">
            {/* Overlay for mobile */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            {currentUser && (
                <Sidebar 
                    currentUser={currentUser} 
                    currentView={view} 
                    navigate={navigate} 
                    isOpen={isSidebarOpen}
                    setIsOpen={setSidebarOpen}
                />
            )}
            
            <div className="flex-1 flex flex-col overflow-hidden">
                {currentUser && currentChurch && (
                    <Header 
                        user={currentUser} 
                        churchName={currentChurch.name} 
                        sectionName={currentSection?.name || 'Church-wide'} 
                        onLogout={handleLogout} 
                        onMenuClick={() => setSidebarOpen(true)}
                    />
                )}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-100 p-4 md:p-6">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default App;
