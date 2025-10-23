// components/AuditTrail.tsx
import React, { useCallback, useEffect, useState } from 'react';

import * as apiClient from '../services/apiClient';
import { AuditLog, User } from '../types';
import Card from './ui/Card';

interface AuditTrailProps {
    currentUser: User;
    navigate: (view: 'view_requisition', id: string) => void;
}

const AuditTrail: React.FC<AuditTrailProps> = ({ currentUser, navigate }) => {
    const [logs, setLogs] = useState<AuditLog[]>([]);
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState<User[]>([]);

    const fetchData = useCallback(async () => {
        if (!currentUser.church_id) {
            setLoading(false);
            return;
        }
        setLoading(true);
        const [logData, userData] = await Promise.all([
            apiClient.getAuditLogs(currentUser.church_id, currentUser.id),
            apiClient.getAllUsers(currentUser.church_id, currentUser.id)
        ]);
        setLogs(logData);
        setUsers(userData);
        setLoading(false);
    }, [currentUser.church_id, currentUser.id]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const getUserName = (id: number) => users.find(u => u.id === id)?.name || 'Unknown User';

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
