import React from 'react';
import { useFinance } from '@/hooks/useFinance';
import {
    Requisition,
    RequisitionStatus,
} from '../types';
import Badge from './ui/Badge';
import Card from './ui/Card';

interface FinanceDashboardProps {
    navigate: (view: 'view_requisition', id: string) => void;
}

const RequisitionRow: React.FC<{ req: Requisition, onClick: () => void }> = ({ req, onClick }) => (
    <div onClick={onClick} className="flex justify-between items-center p-3 hover:bg-slate-50 rounded-lg cursor-pointer border-b last:border-b-0">
        <div>
            <p className="font-medium text-slate-700 truncate max-w-xs">{req.title}</p>
            <p className="text-sm text-slate-500">{req.id}</p>
        </div>
        <div className="text-right flex-shrink-0">
            <p className="font-semibold text-slate-800">₦{req.amount_requested.toLocaleString()}</p>
            <span className="text-xs text-slate-500">{new Date(req.created_at).toLocaleDateString()}</span>
        </div>
    </div>
);


const FinanceDashboard: React.FC<FinanceDashboardProps> = ({ navigate }) => {
    const { overview, loading, error, refresh } = useFinance();

    if (loading) {
        return <div className="text-center p-8">Loading finance data...</div>;
    }

    if (error) {
        return <div className="text-center p-8 text-red-500">Error: {error}</div>;
    }

    if (!overview) {
        return (
            <div className="text-center p-8 flex flex-col items-center gap-4">
                <p>Could not load finance overview. (Section data might be missing)</p>
                <button
                    onClick={() => refresh()}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-slate-800">Finance Hub</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                    <h3 className="text-sm font-medium text-slate-500">Awaiting Disbursement</h3>
                    <p className="text-3xl font-bold text-slate-800 mt-1">{overview.awaiting_disbursement.length}</p>
                </Card>
                <Card>
                    <h3 className="text-sm font-medium text-slate-500">Pending Receipt Verification</h3>
                    <p className="text-3xl font-bold text-slate-800 mt-1">{overview.pending_verification.length}</p>
                </Card>
                <Card>
                    <h3 className="text-sm font-medium text-slate-500">Total Disbursed (This Cycle)</h3>
                    <p className="text-3xl font-bold text-slate-800 mt-1">₦{overview.total_disbursed.toLocaleString()}</p>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <h3 className="font-semibold text-slate-800 mb-4">Awaiting Disbursement</h3>
                    {overview.awaiting_disbursement.length > 0 ? (
                        overview.awaiting_disbursement.map(req => <RequisitionRow key={req.id} req={req} onClick={() => navigate('view_requisition', req.id)} />)
                    ) : <p className="text-center text-slate-500 py-8">No requisitions are pending payment.</p>}
                </Card>
                <Card>
                    <h3 className="font-semibold text-slate-800 mb-4">Pending Receipt Verification</h3>
                    {overview.pending_verification.length > 0 ? (
                        overview.pending_verification.map(req => <RequisitionRow key={req.id} req={req} onClick={() => navigate('view_requisition', req.id)} />)
                    ) : <p className="text-center text-slate-500 py-8">No receipts to verify.</p>}
                </Card>
            </div>
            <Card>
                <h3 className="font-semibold text-slate-800 mb-4">Recently Completed Requisitions</h3>
                {overview.recently_completed.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <tbody>
                                {overview.recently_completed.map(req => (
                                    <tr key={req.id} className="border-b last:border-b-0">
                                        <td className="p-2">{req.id}</td>
                                        <td className="p-2">{req.title}</td>
                                        <td className="p-2">₦{req.amount_requested.toLocaleString()}</td>
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
