// components/FinanceDashboard.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { User, Requisition, FinanceOverview, RequisitionStatus } from '../types';
import * as apiClient from '../services/apiClient';
import Card from './ui/Card';
import Badge from './ui/Badge';

interface FinanceDashboardProps {
  currentUser: User;
  navigate: (view: 'view_requisition', id: string) => void;
}

const RequisitionRow: React.FC<{req: Requisition, onClick: () => void}> = ({ req, onClick }) => (
    <div onClick={onClick} className="flex justify-between items-center p-3 hover:bg-slate-50 rounded-lg cursor-pointer border-b last:border-b-0">
        <div>
            <p className="font-medium text-slate-700 truncate max-w-xs">{req.title}</p>
            <p className="text-sm text-slate-500">{req.id}</p>
        </div>
        <div className="text-right flex-shrink-0">
            <p className="font-semibold text-slate-800">₦{req.amountRequested.toLocaleString()}</p>
            <span className="text-xs text-slate-500">{new Date(req.createdAt).toLocaleDateString()}</span>
        </div>
    </div>
);


const FinanceDashboard: React.FC<FinanceDashboardProps> = ({ currentUser, navigate }) => {
    const [overview, setOverview] = useState<FinanceOverview | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(async () => {
        if (!currentUser.sectionId) {
            setLoading(false);
            return;
        }
        setLoading(true);
        const data = await apiClient.getFinanceOverview(currentUser.sectionId, currentUser.id);
        setOverview(data);
        setLoading(false);
    }, [currentUser.sectionId, currentUser.id]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    if (loading) {
        return <div className="text-center p-8">Loading finance data...</div>;
    }

    if (!overview || !currentUser.sectionId) {
        return <div className="text-center p-8">Could not load finance overview.</div>;
    }
    
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-slate-800">Finance Hub</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                    <h3 className="text-sm font-medium text-slate-500">Awaiting Disbursement</h3>
                    <p className="text-3xl font-bold text-slate-800 mt-1">{overview.awaitingDisbursement.length}</p>
                </Card>
                <Card>
                    <h3 className="text-sm font-medium text-slate-500">Pending Receipt Verification</h3>
                    <p className="text-3xl font-bold text-slate-800 mt-1">{overview.pendingVerification.length}</p>
                </Card>
                <Card>
                    <h3 className="text-sm font-medium text-slate-500">Total Disbursed (This Cycle)</h3>
                    <p className="text-3xl font-bold text-slate-800 mt-1">₦{overview.totalDisbursed.toLocaleString()}</p>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                 <Card>
                    <h3 className="font-semibold text-slate-800 mb-4">Awaiting Disbursement</h3>
                    {overview.awaitingDisbursement.length > 0 ? (
                        overview.awaitingDisbursement.map(req => <RequisitionRow key={req.id} req={req} onClick={() => navigate('view_requisition', req.id)} />)
                    ) : <p className="text-center text-slate-500 py-8">No requisitions are pending payment.</p>}
                </Card>
                 <Card>
                    <h3 className="font-semibold text-slate-800 mb-4">Pending Receipt Verification</h3>
                     {overview.pendingVerification.length > 0 ? (
                        overview.pendingVerification.map(req => <RequisitionRow key={req.id} req={req} onClick={() => navigate('view_requisition', req.id)} />)
                    ) : <p className="text-center text-slate-500 py-8">No receipts to verify.</p>}
                </Card>
            </div>
             <Card>
                <h3 className="font-semibold text-slate-800 mb-4">Recently Completed Requisitions</h3>
                 {overview.recentlyCompleted.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <tbody>
                                {overview.recentlyCompleted.map(req => (
                                    <tr key={req.id} className="border-b last:border-b-0">
                                        <td className="p-2">{req.id}</td>
                                        <td className="p-2">{req.title}</td>
                                        <td className="p-2">₦{req.amountRequested.toLocaleString()}</td>
                                        <td className="p-2"><Badge status={RequisitionStatus.COMPLETED} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : <p className="text-center text-slate-500 py-8">No requisitions have been completed recently.</p>}
            </Card>
        </div>
    );
};

export default FinanceDashboard;
