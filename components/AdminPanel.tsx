import React, { useEffect, useState } from 'react';

import * as apiClient from '../services/apiClient';
import { Church, Role, Section, User } from '../types';
import Card from './ui/Card';

type AdminTab = 'users' | 'sections' | 'subscription';

const BillingPanel: React.FC<{ church: Church | null, currentUserId: number }> = ({ church, currentUserId }) => {
    if (!church) return <p>Loading subscription details...</p>;

    const isExpired = new Date(church.subscription_ends_at) < new Date();

    return (
        <div>
            <h2 className="text-xl font-semibold text-slate-700 mb-4">Subscription Details</h2>
            {isExpired && (
                <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                    <span className="font-medium">Subscription Expired!</span> Core features like creating new requisitions are disabled. Please renew to restore full functionality.
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="font-medium text-slate-500">Current Plan</p>
                    <p className="text-lg font-bold text-slate-800">{church.subscription_status}</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="font-medium text-slate-500">Expires On</p>
                    <p className={`text-lg font-bold ${isExpired ? 'text-red-600' : 'text-slate-800'}`}>
                        {new Date(church.subscription_ends_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </div>
            </div>
            <div className="mt-8">
                <h3 className="font-semibold text-slate-800 mb-4">Manage Your Subscription</h3>
                <p className="text-slate-600 mb-4">Choose a plan that works for your ministry's needs.</p>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 border p-4 rounded-lg text-center">
                        <h4 className="font-bold text-lg">Monthly Plan</h4>
                        <p className="text-2xl font-extrabold my-2">₦1,500 <span className="font-normal text-base text-slate-500">/month</span></p>
                        <button className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700">Choose Monthly</button>
                    </div>
                    <div className="flex-1 border-2 border-blue-600 p-4 rounded-lg text-center relative">
                        <span className="absolute -top-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">BEST VALUE</span>
                        <h4 className="font-bold text-lg">Yearly Plan</h4>
                        <p className="text-2xl font-extrabold my-2">₦15,000 <span className="font-normal text-base text-slate-500">/year</span></p>
                        <button className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700">Choose Yearly</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


const AdminPanel: React.FC<{ currentUser: User; church: Church | null }> = ({ currentUser, church }) => {
    const [activeTab, setActiveTab] = useState<AdminTab>('users');
    const [sections, setSections] = useState<Section[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    // Form states
    const [newSectionName, setNewSectionName] = useState('');
    const [newUserName, setNewUserName] = useState('');
    const [newUserEmail, setNewUserEmail] = useState('');
    const [newUserRole, setNewUserRole] = useState<Role>(Role.MEMBER);
    const [newUserSectionId, setNewUserSectionId] = useState<string>('');
    const [newUserDepartmentId, setNewUserDepartmentId] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const fetchData = async () => {
        if (!currentUser.church_id) return;
        setLoading(true);
        const [churchData, allUsers] = await Promise.all([
            apiClient.getChurch(currentUser.church_id, currentUser.id),
            apiClient.getAllUsers(currentUser.church_id, currentUser.id)
        ]);
        setSections(churchData.sections);
        setUsers(allUsers);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, [currentUser.id, currentUser.church_id]);

    // Reset department when section changes
    useEffect(() => {
        setNewUserDepartmentId('');
    }, [newUserSectionId]);

    const handleCreateSection = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newSectionName || !currentUser.church_id) return;
        setIsSubmitting(true);
        try {
            await apiClient.createSection(currentUser.church_id, newSectionName, currentUser.id);
            setNewSectionName('');
            await fetchData();
        } catch (error) {
            alert('Failed to create section.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCreateUser = async (e: React.FormEvent) => {
        e.preventDefault();
        const needsDepartment = newUserRole === Role.DEPARTMENT_HEAD || newUserRole === Role.MEMBER;
        if (!newUserName || !newUserEmail || !newUserRole || !newUserSectionId || !currentUser.church_id || (needsDepartment && !newUserDepartmentId)) {
            alert('Please fill all required fields, including department for members and heads.');
            return;
        }

        setIsSubmitting(true);
        try {
            const userData: Omit<User, 'id'> = {
                name: newUserName,
                email: newUserEmail,
                password: 'password123', // Default password
                role: newUserRole,
                section_id: newUserSectionId,
                department_id: needsDepartment ? newUserDepartmentId : null,
                church_id: currentUser.church_id,
            };
            await apiClient.createUser(userData, currentUser.id);
            setNewUserName('');
            setNewUserEmail('');
            setNewUserRole(Role.MEMBER);
            setNewUserSectionId('');
            setNewUserDepartmentId('');
            await fetchData();
        } catch (error: any) {
            alert(`Failed to create user: ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    }

    const availableDepartments = newUserSectionId
        ? sections.find(s => s.id === newUserSectionId)?.departments || []
        : [];

    const getDepartmentName = (deptId: number | null) => {
        if (!deptId) return 'N/A';
        return sections.flatMap(s => s.departments).find(d => d.id === deptId)?.name || 'N/A';
    }

    const renderContent = () => {
        if (loading) return <p>Loading admin data...</p>;
        switch (activeTab) {
            case 'users': return (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                        <h3 className="text-xl font-semibold text-slate-700 mb-4">Create New User</h3>
                        <form onSubmit={handleCreateUser} className="space-y-4 bg-slate-50 p-4 rounded-lg">
                            <div><label className="text-sm font-medium">Full Name</label><input type="text" value={newUserName} onChange={e => setNewUserName(e.target.value)} className="w-full mt-1 px-3 py-2 border rounded-md" required /></div>
                            <div><label className="text-sm font-medium">Email Address</label><input type="email" value={newUserEmail} onChange={e => setNewUserEmail(e.target.value)} className="w-full mt-1 px-3 py-2 border rounded-md" required /></div>
                            <div><label className="text-sm font-medium">Role</label><select value={newUserRole} onChange={e => setNewUserRole(e.target.value as Role)} className="w-full mt-1 px-3 py-2 border rounded-md" required>{Object.values(Role).filter(r => r !== Role.SUPER_ADMIN && r !== Role.APP_OWNER).map(role => (<option key={role} value={role}>{role}</option>))}</select></div>
                            <div><label className="text-sm font-medium">Section</label><select value={newUserSectionId} onChange={e => setNewUserSectionId(e.target.value)} className="w-full mt-1 px-3 py-2 border rounded-md" required><option value="">Select a section</option>{sections.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}</select></div>

                            {(newUserRole === Role.MEMBER || newUserRole === Role.DEPARTMENT_HEAD) && (
                                <div>
                                    <label className="text-sm font-medium">Department</label>
                                    <select value={newUserDepartmentId} onChange={e => setNewUserDepartmentId(e.target.value)} className="w-full mt-1 px-3 py-2 border rounded-md" required disabled={!newUserSectionId}>
                                        <option value="">Select a department</option>
                                        {availableDepartments.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                                    </select>
                                    {!newUserSectionId && <p className="text-xs text-slate-500 mt-1">Please select a section first.</p>}
                                </div>
                            )}

                            <div className="text-right"><button type="submit" disabled={isSubmitting} className="px-6 py-2 bg-blue-600 text-white rounded-md disabled:bg-blue-300">Add User</button></div>
                        </form>
                    </div>
                    <div className="lg:col-span-2">
                        <h3 className="text-xl font-semibold text-slate-700 mb-4">All Users</h3>
                        <div className="overflow-x-auto"><table className="w-full text-sm text-left text-slate-500"><thead className="text-xs text-slate-700 uppercase bg-slate-50"><tr><th className="px-6 py-3">Name</th><th className="px-6 py-3">Email</th><th className="px-6 py-3">Role</th><th className="px-6 py-3">Section</th><th className="px-6 py-3">Department</th></tr></thead><tbody>{users.map(user => (<tr key={user.id} className="bg-white border-b hover:bg-slate-50"><td className="px-6 py-4 font-medium text-slate-900">{user.name}</td><td className="px-6 py-4">{user.email}</td><td className="px-6 py-4">{user.role}</td><td className="px-6 py-4">{sections.find(s => s.id === user.sectionId)?.name || 'N/A'}</td><td className="px-6 py-4">{getDepartmentName(user.departmentId)}</td></tr>))}</tbody></table></div>
                    </div>
                </div>
            );
            case 'sections': return (
                <div>
                    <h2 className="text-xl font-semibold text-slate-700 mb-4">Manage Sections</h2>
                    <ul className="space-y-2 mb-6 max-w-md">{sections.map(section => (<li key={section.id} className="p-3 bg-slate-100 rounded-md">{section.name}</li>))}</ul>
                    <form onSubmit={handleCreateSection} className="max-w-md">
                        <h3 className="font-semibold mb-2">Create New Section</h3>
                        <div className="flex gap-2"><input type="text" value={newSectionName} onChange={e => setNewSectionName(e.target.value)} placeholder="e.g., Children's Section" className="flex-grow px-3 py-2 border rounded-md" /><button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:bg-blue-300">Create</button></div>
                    </form>
                </div>
            );
            case 'subscription': return <BillingPanel church={church} currentUserId={currentUser.id} />;
            default: return null;
        }
    }

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-slate-800">Admin Panel</h1>
            <Card>
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        <button onClick={() => setActiveTab('users')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'users' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>User Management</button>
                        <button onClick={() => setActiveTab('sections')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'sections' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>Sections</button>
                        <button onClick={() => setActiveTab('subscription')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'subscription' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>Subscription</button>
                    </nav>
                </div>
                <div className="pt-6">
                    {renderContent()}
                </div>
            </Card>
        </div>
    );
};

export default AdminPanel;
