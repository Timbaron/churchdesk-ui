import React, { useState } from 'react';
import { formatDate, formatUUID } from '../utils';

import { useRequisitionDetail } from '@/hooks/useRequisitionDetail';
import {
    Attachment,
    PaymentMethod,
    RequisitionStatus,
} from '../types';
import Badge from './ui/Badge';
import Card from './ui/Card';

interface RequisitionDetailProps {
    requisitionId: string;
    navigate: (view: 'requisitions' | 'new_requisition', id?: string) => void;
}

const ActionModal: React.FC<{ title: string; onCancel: () => void; onSubmit: (comment: string, action: 'APPROVE' | 'REJECT' | 'REQUEST_CHANGES') => void; isSubmitting: boolean }> = ({ title, onCancel, onSubmit, isSubmitting }) => {
    const [comment, setComment] = useState('');
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-md">
                <h3 className="font-semibold text-slate-800 mb-4 text-lg">{title}</h3>
                <textarea
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    placeholder="Add your comments (optional for approval, required for rejection/changes)"
                    rows={4}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm"
                />
                <div className="flex justify-end gap-2 mt-4">
                    <button onClick={onCancel} disabled={isSubmitting} className="px-4 py-2 bg-slate-200 rounded-md">Cancel</button>
                    <button onClick={() => onSubmit(comment, 'REQUEST_CHANGES')} disabled={isSubmitting} className="px-4 py-2 bg-orange-500 text-white rounded-md">Request Changes</button>
                    <button onClick={() => onSubmit(comment, 'REJECT')} disabled={isSubmitting} className="px-4 py-2 bg-red-600 text-white rounded-md">Reject</button>
                    <button onClick={() => onSubmit(comment, 'APPROVE')} disabled={isSubmitting} className="px-4 py-2 bg-green-600 text-white rounded-md">Approve</button>
                </div>
            </Card>
        </div>
    )
}

const FinanceVerificationModal: React.FC<{ onCancel: () => void; onSubmit: (comment: string, action: 'VERIFY' | 'REQUEST_CORRECTION') => void; isSubmitting: boolean }> = ({ onCancel, onSubmit, isSubmitting }) => {
    const [comment, setComment] = useState('');
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-md">
                <h3 className="font-semibold text-slate-800 mb-4 text-lg">Verify Final Receipt</h3>
                <textarea
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    placeholder="Add comments here. Required if requesting correction."
                    rows={4}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm"
                />
                <div className="flex justify-end gap-2 mt-4">
                    <button onClick={onCancel} disabled={isSubmitting} className="px-4 py-2 bg-slate-200 rounded-md">Cancel</button>
                    <button onClick={() => onSubmit(comment, 'REQUEST_CORRECTION')} disabled={isSubmitting} className="px-4 py-2 bg-orange-500 text-white rounded-md">Request Correction</button>
                    <button onClick={() => onSubmit(comment, 'VERIFY')} disabled={isSubmitting} className="px-4 py-2 bg-green-600 text-white rounded-md">Verify & Complete</button>
                </div>
            </Card>
        </div>
    )
}

const RequisitionDetail: React.FC<RequisitionDetailProps> = ({ requisitionId, navigate }) => {
    const {
        requisition,
        loading,
        error,
        isSubmitting,
        actions,
        permissions,
        helpers
    } = useRequisitionDetail(requisitionId);

    const [modal, setModal] = useState<'approve' | 'pay' | 'upload_receipt' | 'verify_receipt' | null>(null);
    const [paymentAmount, setPaymentAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(PaymentMethod.TRANSFER);
    const [paymentDate, setPaymentDate] = useState(new Date().toISOString().split('T')[0]);
    const [paymentRef, setPaymentRef] = useState('');
    const [paymentProof, setPaymentProof] = useState<File | null>(null);
    const [finalReceiptFile, setFinalReceiptFile] = useState<File | null>(null);

    // Update payment amount when requisition loads
    React.useEffect(() => {
        if (requisition) {
            setPaymentAmount(requisition.amount_requested.toString());
        }
    }, [requisition]);

    const handleActionSubmit = async (comments: string, action: 'APPROVE' | 'REJECT' | 'REQUEST_CHANGES') => {
        try {
            await actions.processAction(action, comments);
            setModal(null);
        } catch (err: any) {
            alert(`Failed to submit action: ${err.message}`);
        }
    };

    const handlePaymentSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await actions.disburse({
                amount_paid: parseFloat(paymentAmount),
                payment_method: paymentMethod,
                payment_date: paymentDate,
                reference_number: paymentRef || null,
                proof_file: paymentProof ? { name: paymentProof.name, url: '#' } : null,
            });
            setModal(null);
        } catch (err: any) {
            alert(`Failed to record payment: ${err.message}`);
        }
    };

    const handleFinalReceiptSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!finalReceiptFile) return;
        try {
            await actions.uploadReceipt(finalReceiptFile.name);
            setModal(null);
        } catch (err: any) {
            alert(`Failed to upload receipt: ${err.message}`);
        }
    };

    const handleVerificationSubmit = async (comments: string, action: 'VERIFY' | 'REQUEST_CORRECTION') => {
        try {
            await actions.verifyReceipt(action, comments);
            setModal(null);
        } catch (err: any) {
            alert(`Failed to process verification: ${err.message}`);
        }
    };

    const { canTakeAction, canDisburse, canUploadReceipt, canVerifyReceipt, canEditAndResubmit } = permissions;
    const { getUserName, getDepartmentName, getSectionName } = helpers;

    if (loading) return <div className="text-center p-8">Loading requisition details...</div>;
    if (error) return <div className="text-center p-8 text-red-500">{error}</div>;
    if (!requisition) return <div className="text-center p-8">Requisition not found.</div>;



    return (
        <div className="space-y-6">
            {/* Modals */}
            {modal === 'approve' && <ActionModal title="Review Requisition" onCancel={() => setModal(null)} onSubmit={handleActionSubmit} isSubmitting={isSubmitting} />}
            {modal === 'verify_receipt' && <FinanceVerificationModal onCancel={() => setModal(null)} onSubmit={handleVerificationSubmit} isSubmitting={isSubmitting} />}
            {modal === 'pay' && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <Card className="w-full max-w-lg">
                        <h3 className="font-semibold text-slate-800 mb-4 text-lg">Disburse Funds</h3>
                        <form onSubmit={handlePaymentSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div><label className="text-sm">Amount Paid</label><input type="number" value={paymentAmount} onChange={e => setPaymentAmount(e.target.value)} className="w-full px-3 py-2 border rounded-md" required /></div>
                                <div><label className="text-sm">Payment Method</label><select value={paymentMethod} onChange={e => setPaymentMethod(e.target.value as PaymentMethod)} className="w-full px-3 py-2 border rounded-md">{Object.values(PaymentMethod).map(m => <option key={m} value={m}>{m}</option>)}</select></div>
                                <div><label className="text-sm">Payment Date</label><input type="date" value={paymentDate} onChange={e => setPaymentDate(e.target.value)} className="w-full px-3 py-2 border rounded-md" required /></div>
                                <div><label className="text-sm">Reference (Optional)</label><input type="text" value={paymentRef} onChange={e => setPaymentRef(e.target.value)} className="w-full px-3 py-2 border rounded-md" /></div>
                            </div>
                            <div><label className="text-sm">Proof of Payment</label><input type="file" onChange={e => setPaymentProof(e.target.files ? e.target.files[0] : null)} className="mt-1 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" /></div>
                            <div className="flex justify-end gap-2 mt-4"><button type="button" onClick={() => setModal(null)} disabled={isSubmitting} className="px-4 py-2 bg-slate-200 rounded-md">Cancel</button><button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-green-600 text-white rounded-md">{isSubmitting ? 'Saving...' : 'Confirm Disbursement'}</button></div>
                        </form>
                    </Card>
                </div>
            )}
            {modal === 'upload_receipt' && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <Card className="w-full max-w-md">
                        <h3 className="font-semibold text-slate-800 mb-4 text-lg">Upload Final Expense Receipt</h3>
                        <form onSubmit={handleFinalReceiptSubmit}>
                            <input type="file" onChange={e => setFinalReceiptFile(e.target.files ? e.target.files[0] : null)} required className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                            <div className="flex justify-end gap-2 mt-4"><button type="button" onClick={() => setModal(null)} disabled={isSubmitting} className="px-4 py-2 bg-slate-200 rounded-md">Cancel</button><button type="submit" disabled={isSubmitting || !finalReceiptFile} className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:bg-blue-300">{isSubmitting ? 'Uploading...' : 'Upload & Submit for Verification'}</button></div>
                        </form>
                    </Card>
                </div>
            )}

            <Card>
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800">{requisition.title}</h1>
                        <p className="text-sm text-slate-500">{formatUUID(requisition.id)}</p>
                    </div>
                    <Badge status={requisition.status as RequisitionStatus} />
                </div>
                <div className="mt-4 border-t pt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    {/* Use snake_case properties */}
                    <div><p className="font-medium text-slate-600">Amount</p><p className="text-lg font-bold text-slate-800">₦{requisition.amount_requested.toLocaleString()}</p></div>
                    <div><p className="font-medium text-slate-600">Requested By</p><p className="text-slate-800">{getUserName(requisition.requested_by_id)}</p></div>
                    <div><p className="font-medium text-slate-600">Section</p><p className="text-slate-800">{getSectionName(requisition.section_id) || 'N/A'}</p></div>
                    <div><p className="font-medium text-slate-600">Department</p><p className="text-slate-800">{getDepartmentName(requisition.department_id) || 'N/A'}</p></div>
                    <div><p className="font-medium text-slate-600">Category</p><p className="text-slate-800">{requisition.category}</p></div>
                    <div><p className="font-medium text-slate-600">Date Created</p><p className="text-slate-800">{new Date(requisition.created_at).toLocaleString()}</p></div>
                    <div><p className="font-medium text-slate-600">Date Needed</p><p className="text-slate-800">{new Date(requisition.date_needed).toLocaleDateString()}</p></div>
                </div>
                <div className="mt-4 border-t pt-4">
                    <h3 className="font-semibold text-slate-800 mb-2">Purpose / Description</h3>
                    <p className="text-slate-600 whitespace-pre-wrap">{requisition.purpose}</p>
                </div>
            </Card>

            <div className="flex flex-wrap gap-4">
                {canTakeAction() && <button onClick={() => setModal('approve')} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Take Action</button>}
                {canDisburse() && <button onClick={() => setModal('pay')} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Disburse Funds</button>}
                {canUploadReceipt() && <button onClick={() => setModal('upload_receipt')} className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">{requisition.status === RequisitionStatus.RECEIPT_CORRECTION_REQUESTED ? 'Re-upload Receipt' : 'Upload Final Receipt'}</button>}
                {canVerifyReceipt() && <button onClick={() => setModal('verify_receipt')} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Verify Receipt</button>}
                {canEditAndResubmit() && <button onClick={() => navigate('new_requisition', requisition.id)} className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">Edit & Resubmit</button>}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                    <h3 className="font-semibold text-slate-800 mb-4">Timeline / Activity Log</h3>
                    <ul className="space-y-4">
                        {/* Use snake_case property: activity_log */}
                        {requisition.activity_log?.slice().reverse().map(log => (
                            <li key={log.id} className="flex gap-3">
                                {/* Use snake_case property: user_id */}
                                <div className="flex-shrink-0 h-8 w-8 bg-slate-200 rounded-full flex items-center justify-center text-xs font-bold text-slate-600">{getUserName(log.user_id).substring(0, 2)}</div>
                                <div>
                                    {/* Use snake_case property: user_id */}
                                    <p className="text-sm"><span className="font-medium">{getUserName(log.user_id)}</span> {log.action}</p>
                                    {log.details && <p className="text-sm bg-slate-100 p-2 rounded-md mt-1 italic">"{log.details}"</p>}
                                    <p className="text-xs text-slate-400 mt-1">{new Date(log.timestamp).toLocaleString()}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Card>

                <div className="space-y-6 lg:col-span-1">
                    {Array.isArray(requisition.attachments) && requisition.attachments.length > 0 && (
                        <Card>
                            <h3 className="font-semibold text-slate-800 mb-2">Attachments</h3>
                            <ul className="list-disc list-inside text-blue-600 text-sm">
                                {requisition.attachments.map((file: Attachment, i: number) => (
                                    <li key={i}>
                                        <a href="#" className="underline hover:no-underline">
                                            {file.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    )}
                    {requisition.payment && (
                        <Card>
                            <h3 className="font-semibold text-slate-800 mb-2">Payment Details</h3>
                            <div className="space-y-2 text-sm">
                                <p><span className="font-medium">Amount:</span> ₦{requisition.payment.amount_paid.toLocaleString()}</p>
                                <p><span className="font-medium">Method:</span> {requisition.payment.payment_method}</p>
                                <p><span className="font-medium">Date:</span> {new Date(requisition.payment.payment_date).toLocaleDateString()}</p>
                                <p><span className="font-medium">Reference:</span> {requisition.payment.reference_number || 'N/A'}</p>
                                <p><span className="font-medium">Recorded By:</span> {getUserName(requisition.payment.recorded_by_id)}</p>
                                {requisition.payment.proof_file && <p className="text-blue-600"><a href="#">View Proof</a></p>}
                            </div>
                        </Card>
                    )}
                    {requisition.final_receipt && (
                        <Card>
                            <h3 className="font-semibold text-slate-800 mb-2">Final Receipt</h3>
                            <p className="text-sm text-blue-600"><a href="#" className="underline hover:no-underline">{requisition.final_receipt.name}</a></p>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RequisitionDetail;
