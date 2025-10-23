// components/RequisitionList.tsx
import React, { useEffect, useMemo, useState } from 'react';

import { formatUUID } from '@/utils';

import * as apiClient from '../services/apiClient';
import { Requisition, RequisitionStatus, Role, User } from '../types';
import Badge from './ui/Badge';
import Card from './ui/Card';

interface RequisitionListProps {
  currentUser: User;
  navigate: (view: 'view_requisition' | 'new_requisition', id?: string) => void;
}

const RequisitionList: React.FC<RequisitionListProps> = ({ currentUser, navigate }) => {
  const [requisitions, setRequisitions] = useState<Requisition[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<RequisitionStatus | 'all'>('all');
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [reqData, userData] = await Promise.all([
        apiClient.getRequisitions(currentUser.id),
        apiClient.getAllUsers(currentUser.church_id, currentUser.id)
      ]);
      console.log('reqData', reqData)
      console.log('userData', userData)
      setRequisitions(reqData.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()));
      setUsers(userData);
      setLoading(false);
    };
    fetchData();
  }, [currentUser]);

  const userVisibleRequisitions = useMemo(() => {
    let filtered: Requisition[] = requisitions;
    if (currentUser.role === Role.DEPARTMENT_HEAD) {
      filtered = filtered.filter(r => r.department_id === currentUser.departmentId);
    } else if (currentUser.role === Role.MEMBER) {
      filtered = filtered.filter(r => r.requested_by_id === currentUser.id);
    }
    return filtered;
  }, [requisitions, currentUser]);

  const filteredRequisitions = useMemo(() => {
    return userVisibleRequisitions.filter(req => {
      const matchesSearch = req.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        req.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || req.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [userVisibleRequisitions, searchTerm, statusFilter]);

  const getUserName = (id: string) => users.find(u => u.id === id)?.name || 'Unknown';

  if (loading) {
    return <div className="text-center p-8">Loading requisitions...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-bold text-slate-800">Requisitions</h1>
        <button onClick={() => navigate('new_requisition')} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full md:w-auto">
          Create New Requisition
        </button>
      </div>

      <Card>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Search by title or ID..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 px-3 py-2 border border-slate-300 rounded-md"
          />
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value as RequisitionStatus | 'all')}
            className="w-full md:w-1/4 px-3 py-2 border border-slate-300 rounded-md bg-white"
          >
            <option value="all">All Statuses</option>
            {Object.values(RequisitionStatus).map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-500">
            <thead className="text-xs text-slate-700 uppercase bg-slate-50">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Requested By</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3"><span className="sr-only">View</span></th>
              </tr>
            </thead>
            <tbody>
              {filteredRequisitions.map((req: Requisition) => (
                <tr key={req.id} className="bg-white border-b hover:bg-slate-50">
                  <td className="px-6 py-4 font-mono text-xs">{formatUUID(req.id)}</td>
                  <td className="px-6 py-4 font-medium text-slate-900">{req.title}</td>
                  <td className="px-6 py-4">₦{req.amount_requested.toLocaleString()}</td>
                  <td className="px-6 py-4">{getUserName(req.requested_by_id)}</td>
                  <td className="px-6 py-4">{new Date(req.created_at).toLocaleDateString()}</td>
                  <td className="px-6 py-4"><Badge status={req.status} /></td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={() => navigate('view_requisition', req.id)} className="font-medium text-blue-600 hover:underline">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredRequisitions.length === 0 && (
          <p className="text-center text-slate-500 py-8">No requisitions found.</p>
        )}
      </Card>
    </div>
  );
};

export default RequisitionList;
