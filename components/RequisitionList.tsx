// components/RequisitionList.tsx
import React, { useState, useEffect, useMemo } from 'react';
import { Requisition, User, Role, RequisitionStatus } from '../types';
import * as apiClient from '../services/apiClient';
import Card from './ui/Card';
import Badge from './ui/Badge';

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
          apiClient.getAllUsers(currentUser.churchId, currentUser.id)
      ]);
      setRequisitions(reqData.sort((a,b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
      setUsers(userData);
      setLoading(false);
    };
    fetchData();
  }, [currentUser]);

  const userVisibleRequisitions = useMemo(() => {
      let filtered = requisitions;
      if (currentUser.role === Role.DEPARTMENT_HEAD) {
          filtered = filtered.filter(r => r.departmentId === currentUser.departmentId);
      } else if (currentUser.role === Role.MEMBER) {
          filtered = filtered.filter(r => r.requestedById === currentUser.id);
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
  
  const getUserName = (id: number) => users.find(u => u.id === id)?.name || 'Unknown';

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
              {filteredRequisitions.map(req => (
                <tr key={req.id} className="bg-white border-b hover:bg-slate-50">
                  <td className="px-6 py-4 font-mono text-xs">{req.id}</td>
                  <td className="px-6 py-4 font-medium text-slate-900">{req.title}</td>
                  <td className="px-6 py-4">₦{req.amountRequested.toLocaleString()}</td>
                  <td className="px-6 py-4">{getUserName(req.requestedById)}</td>
                  <td className="px-6 py-4">{new Date(req.createdAt).toLocaleDateString()}</td>
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
