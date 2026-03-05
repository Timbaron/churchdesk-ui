import React from 'react';
import { useAudit } from '@/hooks/useAudit';
import { User } from '../types';
import Card from './ui/Card';

interface AuditTrailProps {
    navigate: (view: 'view_requisition', id: string) => void;
}

const AuditTrail: React.FC<AuditTrailProps> = ({ navigate }) => {
    const { logs, users, loading } = useAudit();

    const getUserName = (id: string) => users.find(u => u.id === id)?.name || 'Unknown User';

    if (loading) {
        return <div className="text-center p-8">Loading audit trail...</div>;
    }

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-slate-800">Audit Trail</h1>
            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-slate-500">
                        <thead className="text-xs text-slate-700 uppercase bg-slate-50">
                            <tr>
                                <th className="px-6 py-3">Timestamp</th>
                                <th className="px-6 py-3">User</th>
                                <th className="px-6 py-3">Action</th>
                                <th className="px-6 py-3">Details</th>
                                <th className="px-6 py-3">On Requisition</th>
                            </tr>
                        </thead>
                        <tbody>
                            {logs.map(log => (
                                <tr key={log.id} className="bg-white border-b hover:bg-slate-50">
                                    <td className="px-6 py-4 whitespace-nowrap">{new Date(log.timestamp).toLocaleString()}</td>
                                    <td className="px-6 py-4 font-medium text-slate-900">{getUserName(log.user_id)}</td>
                                    <td className="px-6 py-4">{log.action}</td>
                                    <td className="px-6 py-4 italic text-slate-600 max-w-xs truncate">{log.details || 'N/A'}</td>
                                    <td className="px-6 py-4">
                                        <button onClick={() => navigate('view_requisition', log.requisition_id)} className="font-medium text-blue-600 hover:underline">
                                            {log.requisition_id}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {logs.length === 0 && (
                    <p className="text-center text-slate-500 py-8">No audit logs found.</p>
                )}
            </Card>
        </div>
    );
};

export default AuditTrail;
