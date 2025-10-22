// components/AppOwnerDashboard.tsx
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { User, PlatformData, Church, SubscriptionStatus, PlatformActivity } from '../types';
import * as apiClient from '../services/apiClient';
import Card from './ui/Card';

const SubscriptionBadge: React.FC<{ status: SubscriptionStatus }> = ({ status }) => {
    const colorMap = {
        [SubscriptionStatus.TRIAL]: 'bg-blue-100 text-blue-800',
        [SubscriptionStatus.ACTIVE]: 'bg-green-100 text-green-800',
        [SubscriptionStatus.EXPIRED]: 'bg-red-100 text-red-800',
    };
    return <span className={`px-2 py-1 text-xs font-medium rounded-full ${colorMap[status]}`}>{status}</span>;
}

const ExtendSubscriptionModal: React.FC<{
    church: Church;
    ownerId: number;
    onClose: () => void;
    onSuccess: (updatedChurch: Church) => void;
}> = ({ church, ownerId, onClose, onSuccess }) => {
    const [months, setMonths] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const updatedChurch = await apiClient.extendSubscription(church.id, months, ownerId);
            onSuccess(updatedChurch);
        } catch (error) {
            alert('Failed to extend subscription.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-md">
                <h3 className="font-semibold text-slate-800 mb-2 text-lg">Extend Subscription</h3>
                <p className="text-sm text-slate-600 mb-4">For <span className="font-bold">{church.name}</span></p>
                <form onSubmit={handleSubmit}>
                    <label className="block text-sm font-medium text-slate-700">Add Months</label>
                    <input 
                        type="number"
                        value={months}
                        onChange={e => setMonths(parseInt(e.target.value))}
                        min="1"
                        max="24"
                        className="mt-1 w-full px-3 py-2 border rounded-md"
                        required
                    />
                    <p className="text-xs text-slate-500 mt-1">This will add {months} month(s) to the current expiry date.</p>
                    <div className="flex justify-end gap-2 mt-6">
                        <button type="button" onClick={onClose} disabled={isSubmitting} className="px-4 py-2 bg-slate-200 rounded-md">Cancel</button>
                        <button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-blue-600 text-white rounded-md">{isSubmitting ? 'Saving...' : 'Confirm Extension'}</button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

const StatCard: React.FC<{ title: string; value: string | number; }> = ({ title, value }) => (
    <Card>
        <h3 className="font-medium text-slate-500 text-sm">{title}</h3>
        <p className="text-3xl font-bold text-slate-800 mt-1">{value}</p>
    </Card>
);

const ActivityIcon: React.FC<{ category: PlatformActivity['category'] }> = ({ category }) => {
    switch (category) {
        case 'NEW_CHURCH': return <div className="bg-green-100 text-green-600 p-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 00-1.447.894V12h-2V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17a1 1 0 001.447.894l4-2A1 1 0 0010 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17" /></svg></div>;
        case 'SUBSCRIPTION': return <div className="bg-yellow-100 text-yellow-600 p-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" /></svg></div>;
        case 'SYSTEM': return <div className="bg-blue-100 text-blue-600 p-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg></div>;
        default: return null;
    }
}


const AppOwnerDashboard: React.FC<{ owner: User; onLogout: () => void; }> = ({ owner, onLogout }) => {
    const [platformData, setPlatformData] = useState<PlatformData | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedChurch, setSelectedChurch] = useState<Church | null>(null);
    const [churchFilter, setChurchFilter] = useState<SubscriptionStatus | 'all'>('all');
    
    const fetchData = useCallback(async () => {
        setLoading(true);
        const data = await apiClient.getPlatformData(owner.id);
        setPlatformData(data);
        setLoading(false);
    }, [owner.id]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleExtendSuccess = (updatedChurch: Church) => {
        setPlatformData(prevData => {
            if (!prevData) return null;
            return {
                ...prevData,
                churches: prevData.churches.map(c => c.id === updatedChurch.id ? updatedChurch : c),
            };
        });
        setSelectedChurch(null); // Close modal
    };
    
    const subscriptionChartData = useMemo(() => {
        if (!platformData?.subscriptionStatusCounts) return [];
        return Object.entries(platformData.subscriptionStatusCounts).map(([name, value]) => ({ name, value }));
    }, [platformData]);
    
    const requisitionChartData = useMemo(() => {
        if (!platformData?.requisitionStatusCounts) return [];
        return Object.entries(platformData.requisitionStatusCounts).map(([name, value]) => ({ name, value }));
    }, [platformData]);

    const filteredChurches = useMemo(() => {
        if (!platformData) return [];
        if (churchFilter === 'all') return platformData.churches;
        return platformData.churches.filter(c => c.subscriptionStatus === churchFilter);
    }, [platformData, churchFilter]);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    if (loading || !platformData) {
        return <div className="h-screen flex items-center justify-center">Loading Platform Data...</div>
    }

    return (
        <div className="bg-slate-100 min-h-screen">
            {selectedChurch && <ExtendSubscriptionModal church={selectedChurch} ownerId={owner.id} onClose={() => setSelectedChurch(null)} onSuccess={handleExtendSuccess} />}
            <header className="bg-white shadow-sm p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-slate-800">Church<span className="text-blue-500">Desk</span> - Platform Owner</h1>
                <div className="flex items-center space-x-4">
                    <p className="font-semibold text-slate-700">{owner.name}</p>
                    <button onClick={onLogout} className="text-sm text-blue-600 hover:underline">Logout</button>
                </div>
            </header>
            <main className="p-4 md:p-8 space-y-8">
                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    <StatCard title="Total Churches" value={platformData.churches.length} />
                    <StatCard title="Total Users" value={platformData.totalUsers} />
                    <StatCard title="Total Requisitions" value={platformData.totalRequisitions} />
                    <StatCard title="Total Value Requested" value={`₦${(platformData.totalAmountRequested/1000000).toFixed(1)}M`} />
                    <StatCard title="Active Subscriptions" value={platformData.subscriptionStatusCounts?.Active || 0} />
                    <StatCard title="Trial Accounts" value={platformData.subscriptionStatusCounts?.Trial || 0} />
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <Card className="lg:col-span-2">
                        <h2 className="text-lg font-semibold text-slate-700 mb-4">Requisition Status Overview</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={requisitionChartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                                <XAxis dataKey="name" tick={{ fontSize: 10 }} interval={0} angle={-45} textAnchor="end" height={80}/>
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="value" fill="#3b82f6" name="Count" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>
                    <Card>
                         <h2 className="text-lg font-semibold text-slate-700 mb-4">Subscription Distribution</h2>
                         <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie data={subscriptionChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                                     {subscriptionChartData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                         </ResponsiveContainer>
                    </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <Card className="lg:col-span-2">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold text-slate-700">Registered Churches</h2>
                            <select value={churchFilter} onChange={e => setChurchFilter(e.target.value as any)} className="px-3 py-1 border border-slate-300 rounded-md bg-white text-sm">
                                <option value="all">All Statuses</option>
                                <option value={SubscriptionStatus.ACTIVE}>Active</option>
                                <option value={SubscriptionStatus.TRIAL}>Trial</option>
                                <option value={SubscriptionStatus.EXPIRED}>Expired</option>
                            </select>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-slate-700 uppercase bg-slate-50">
                                    <tr>
                                        <th className="px-6 py-3">Church Name</th>
                                        <th className="px-6 py-3">Subscription Status</th>
                                        <th className="px-6 py-3">Expires On</th>
                                        <th className="px-6 py-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredChurches.map(church => (
                                        <tr key={church.id} className="bg-white border-b hover:bg-slate-50">
                                            <td className="px-6 py-4 font-medium">{church.name}</td>
                                            <td className="px-6 py-4"><SubscriptionBadge status={church.subscriptionStatus} /></td>
                                            <td className="px-6 py-4">{new Date(church.subscriptionEndsAt).toLocaleDateString()}</td>
                                            <td className="px-6 py-4">
                                                <button onClick={() => setSelectedChurch(church)} className="font-medium text-blue-600 hover:underline">Manage</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                     <Card>
                        <h2 className="text-xl font-semibold text-slate-700 mb-4">Recent Platform Activity</h2>
                        <ul className="space-y-4">
                            {platformData.recentActivities.map(activity => (
                                <li key={activity.id} className="flex items-start gap-4">
                                    <ActivityIcon category={activity.category} />
                                    <div>
                                        <p className="text-sm text-slate-700">{activity.description}</p>
                                        <p className="text-xs text-slate-500">{new Date(activity.timestamp).toLocaleString()}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default AppOwnerDashboard;
