import React from 'react';
import { useRequisitionForm } from '@/hooks/useRequisitionForm';
import { Role } from '../types';
import Card from './ui/Card';
import toast, { Toaster } from 'react-hot-toast';

interface RequisitionFormProps {
  requisitionId?: string; // For editing
  navigate: (view: 'requisitions' | 'view_requisition', id?: string) => void;
}

const RequisitionForm: React.FC<RequisitionFormProps> = ({ requisitionId, navigate }) => {
  const {
    formState,
    departments,
    isSubmitting,
    isLoading,
    error,
    isEditing,
    submit,
    role
  } = useRequisitionForm(requisitionId);

  const {
    title, setTitle,
    amount, setAmount,
    category, setCategory,
    dateNeeded, setDateNeeded,
    purpose, setPurpose,
    departmentId, setDepartmentId,
    setAttachments
  } = formState;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const savedRequisition = await submit();
    if (savedRequisition) {
      toast.success('Requisition saved successfully');
      navigate('view_requisition', savedRequisition.id);
    } else {
      toast.error('Failed to save requisition');
    }
  };

  if (isLoading) {
    return <div className="text-center p-8">Loading requisition data...</div>;
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-800">{isEditing ? 'Edit Requisition' : 'Create New Requisition'}</h1>
      <Card>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-slate-700">Title</label>
              <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md" required />
            </div>
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-slate-700">Amount Requested (₦)</label>
              <input type="number" id="amount" value={amount} onChange={e => setAmount(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md" required min="1" />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-slate-700">Category</label>
              <input type="text" id="category" value={category} onChange={e => setCategory(e.target.value)} placeholder="e.g., Equipment, Supplies, Event" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md" required />
            </div>
            <div>
              <label htmlFor="dateNeeded" className="block text-sm font-medium text-slate-700">Date Needed By</label>
              <input type="date" id="dateNeeded" value={dateNeeded} onChange={e => setDateNeeded(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md" required />
            </div>
            {role !== Role.DEPARTMENT_HEAD && (
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-slate-700">Department</label>
                <select id="department" value={departmentId} onChange={e => setDepartmentId(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md bg-white" required>
                  <option value="">Select a department</option>
                  {departments.map(dept => <option key={dept.id} value={dept.id}>{dept.name}</option>)}
                </select>
              </div>
            )}
          </div>
          <div>
            <label htmlFor="purpose" className="block text-sm font-medium text-slate-700">Purpose / Description</label>
            <textarea id="purpose" value={purpose} onChange={e => setPurpose(e.target.value)} rows={5} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Attachments (Optional)</label>
            <p className="text-xs text-slate-500 mb-2">Upload quotes, invoices, or other supporting documents.</p>
            <input type="file" multiple onChange={e => setAttachments(Array.from(e.target.files || []))} className="mt-1 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
          </div>

          {error && <p className="text-sm text-red-600 bg-red-50 p-3 rounded-md">{error}</p>}

          <div className="flex justify-end gap-4 pt-4 border-t">
            <button type="button" onClick={() => navigate('requisitions')} disabled={isSubmitting} className="px-6 py-2 bg-slate-200 rounded-md">Cancel</button>
            <button type="submit" disabled={isSubmitting} className="px-6 py-2 bg-blue-600 text-white rounded-md disabled:bg-blue-300">
              {isSubmitting ? 'Submitting...' : isEditing ? 'Save Changes & Resubmit' : 'Submit Requisition'}
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default RequisitionForm;
