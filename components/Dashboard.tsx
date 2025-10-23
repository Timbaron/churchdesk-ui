import React, { useEffect, useMemo, useState } from 'react';
import {
	Bar,
	BarChart,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

import { formatDate, formatUUID } from '@/utils';

import * as apiClient from '../services/apiClient';
import {
	ChartData,
	FinancialSummary,
	Requisition,
	RequisitionStatus,
	Role,
	Section,
	User,
} from '../types';
import Card from './ui/Card';

interface DashboardProps {
    currentUser: User;
    currentSection: Section | null;
    navigate: (view: 'requisitions' | 'view_requisition', id?: string) => void;
}

const DashboardCard: React.FC<{ title: string; value: string | number; description: string }> = ({ title, value, description }) => (
    <Card>
        <h3 className="text-sm font-medium text-slate-500">{title}</h3>
        <p className="text-3xl font-bold text-slate-800 mt-1">{value}</p>
        <p className="text-xs text-slate-500 mt-2">{description}</p>
    </Card>
);

const Dashboard: React.FC<DashboardProps> = ({ currentUser, currentSection, navigate }) => {
    const [requisitions, setRequisitions] = useState<Requisition[]>([]);
    const [sections, setSections] = useState<Section[]>([]);
    const [loading, setLoading] = useState(true);
    const [sectionFilter, setSectionFilter] = useState<string>('all');
    const [summary, setSummary] = useState<FinancialSummary | null>(null);

    const isHighLevelViewer = currentUser.role === Role.SUPER_ADMIN || (currentUser.role === Role.AUDITOR && !currentUser.sectionId);

    useEffect(() => {
        const fetchData = async () => {
            try {

                setLoading(true);
                const reqData = await apiClient.getRequisitions(currentUser.id);
                setRequisitions(reqData);

                const sectionIdForSummary = (isHighLevelViewer && sectionFilter !== 'all')
                    ? parseInt(sectionFilter)
                    : currentSection?.id;

                if (sectionIdForSummary) {
                    const summaryData = await apiClient.getFinancialSummary(sectionIdForSummary, currentUser.id);
                    setSummary(summaryData);
                }

                if (isHighLevelViewer && currentUser.church_id) {
                    const churchData = await apiClient.getChurch(currentUser.church_id, currentUser.id);
                    setSections(churchData.sections);
                }
                setLoading(false);
            }
            catch (e: any) {
                console.log('Error fetching dashboard data:', e);
                setLoading(false);
            }
        };
        fetchData();
    }, [currentUser, currentSection, isHighLevelViewer, sectionFilter]);

    const userVisibleRequisitions = useMemo(() => {
        let filtered = requisitions;
        if (isHighLevelViewer && sectionFilter !== 'all') {
            filtered = filtered.filter(r => r.sectionId === parseInt(sectionFilter));
        }
        if (!isHighLevelViewer) {
            if (currentUser.role === Role.DEPARTMENT_HEAD) {
                return filtered.filter(r => r.departmentId === currentUser.departmentId);
            }
            if (currentUser.role === Role.MEMBER) {
                return filtered.filter(r => r.requestedById === currentUser.id);
            }
        }
        return filtered;
    }, [requisitions, currentUser, sectionFilter, isHighLevelViewer]);

    const stats = useMemo(() => {
        const total = userVisibleRequisitions.length;
        const pending = userVisibleRequisitions.filter(r => [RequisitionStatus.PENDING, RequisitionStatus.APPROVED_BY_DEPT_HEAD].includes(r.status)).length;
        const awaitingPayment = userVisibleRequisitions.filter(r => r.status === RequisitionStatus.APPROVED_BY_SECTION_PRESIDENT).length;
        const totalAmount = userVisibleRequisitions.reduce((sum, r) => sum + r.amountRequested, 0);
        return { total, pending, awaitingPayment, totalAmount };
    }, [userVisibleRequisitions]);

    const statusChartData: ChartData[] = useMemo(() => {
        const statusCounts = userVisibleRequisitions.reduce((acc, req) => {
            acc[req.status] = (acc[req.status] || 0) + 1;
            return acc;
        }, {} as { [key in RequisitionStatus]: number });
        return Object.entries(statusCounts).map(([name, value]) => ({ name, value }));
    }, [userVisibleRequisitions]);

    if (loading) {
        return <div className="text-center p-8">Loading dashboard...</div>;
    }

    return (
        <div className="space-y-6">
            {isHighLevelViewer && (
                <div className="flex justify-end">
                    <div className="w-full md:w-1/4">
                        <label htmlFor="sectionFilter" className="block text-sm font-medium text-slate-700">Filter by Section</label>
                        <select
                            id="sectionFilter"
                            value={sectionFilter}
                            onChange={(e) => setSectionFilter(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-slate-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="all">All Sections</option>
                            {sections.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                        </select>
                    </div>
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <DashboardCard title="Total Requisitions" value={stats.total} description="All relevant requests" />
                <DashboardCard title="Pending Review" value={stats.pending} description="Awaiting approvals" />
                <DashboardCard title="Awaiting Payment" value={stats.awaitingPayment} description="Approved and ready for disbursement" />
                <DashboardCard title="Available Balance" value={summary ? `₦${summary.balance.toLocaleString()}` : 'N/A'} description="Current financial balance" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <Card className="lg:col-span-3">
                    <h3 className="font-semibold text-slate-800 mb-4">Requisitions by Status</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={statusChartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                            <XAxis dataKey="name" tick={{ fontSize: 10 }} interval={0} angle={-45} textAnchor="end" height={80} />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill="#3b82f6" name="No. of Requisitions" />
                        </BarChart>
                    </ResponsiveContainer>
                </Card>
                <Card className="lg:col-span-2">
                    <h3 className="font-semibold text-slate-800 mb-4">Recent Activity</h3>
                    {userVisibleRequisitions.length > 0 ? userVisibleRequisitions.slice(0, 5).map((req: Requisition) => (
                        <div key={req.id} onClick={() => navigate('view_requisition', req.id)} className="flex justify-between items-center p-3 hover:bg-slate-50 rounded-lg cursor-pointer border-b last:border-b-0">
                            <div>
                                <p className="font-medium text-slate-700 truncate max-w-xs">{req.title}</p>
                                <p className="text-sm text-slate-500">{formatUUID(req.id)}</p>
                            </div>
                            <div className="text-right flex-shrink-0">
                                <p className="font-semibold text-slate-800">₦{req.amount_requested.toLocaleString()}</p>
                                <span className="text-xs text-slate-500">{formatDate(req.created_at).date}</span>
                            </div>
                        </div>
                    )) : <p className="text-center text-slate-500 py-8">No recent requisition activity.</p>}
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;