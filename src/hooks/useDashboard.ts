import { useState, useCallback, useEffect, useMemo } from 'react';
import * as apiClient from '@/services/apiClient';
import {
    Requisition,
    RequisitionStatus,
    Role,
    Section,
    FinancialSummary,
    ChartData
} from '@/types';
import { useAuth } from '@/context/AuthContext';

export const useDashboard = () => {
    const { currentUser, currentSection } = useAuth();
    const [requisitions, setRequisitions] = useState<Requisition[]>([]);
    const [sections, setSections] = useState<Section[]>([]);
    const [loading, setLoading] = useState(true);
    const [sectionFilter, setSectionFilter] = useState<string>('all');
    const [summary, setSummary] = useState<FinancialSummary | null>(null);
    const [error, setError] = useState<string | null>(null);

    const isHighLevelViewer = useMemo(() => {
        if (!currentUser) return false;
        return currentUser.role === Role.SUPER_ADMIN || (currentUser.role === Role.AUDITOR && !currentUser.section_id);
    }, [currentUser]);

    const fetchData = useCallback(async () => {
        if (!currentUser) return;

        try {
            setLoading(true);
            setError(null);

            const reqData = await apiClient.getRequisitions();
            setRequisitions(reqData);

            const sectionIdForSummary = (isHighLevelViewer && sectionFilter !== 'all')
                ? sectionFilter
                : currentSection?.id;

            if (sectionIdForSummary) {
                const summaryData = await apiClient.getFinancialSummary(sectionIdForSummary);
                setSummary(summaryData);
            } else {
                setSummary(null);
            }

            if (isHighLevelViewer && currentUser.church_id) {
                const churchData = await apiClient.getChurch(currentUser.church_id);
                setSections(churchData.sections);
            }
        } catch (err: any) {
            setError(err.message || 'Failed to fetch dashboard data');
        } finally {
            setLoading(false);
        }
    }, [currentUser, currentSection, isHighLevelViewer, sectionFilter]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const userVisibleRequisitions = useMemo(() => {
        let filtered = requisitions;
        if (!currentUser) return [];

        if (isHighLevelViewer && sectionFilter !== 'all') {
            filtered = filtered.filter(r => r.section_id === sectionFilter);
        }

        if (!isHighLevelViewer) {
            if (currentUser.role === Role.DEPARTMENT_HEAD) {
                return filtered.filter(r => r.department_id === currentUser.department_id);
            }
            if (currentUser.role === Role.MEMBER) {
                return filtered.filter(r => r.requested_by_id === currentUser.id);
            }
        }
        return filtered;
    }, [requisitions, currentUser, sectionFilter, isHighLevelViewer]);

    const stats = useMemo(() => {
        const total = userVisibleRequisitions.length;
        const pending = userVisibleRequisitions.filter(r => [RequisitionStatus.PENDING, RequisitionStatus.APPROVED_BY_DEPT_HEAD].includes(r.status as RequisitionStatus)).length;
        const awaitingPayment = userVisibleRequisitions.filter(r => r.status === RequisitionStatus.APPROVED_BY_SECTION_PRESIDENT).length;
        const totalAmount = userVisibleRequisitions.reduce((sum, r) => sum + r.amount_requested, 0);
        return { total, pending, awaitingPayment, totalAmount };
    }, [userVisibleRequisitions]);

    const statusChartData: ChartData[] = useMemo(() => {
        const statusCounts = userVisibleRequisitions.reduce((acc, req) => {
            acc[req.status] = (acc[req.status] || 0) + 1;
            return acc;
        }, {} as { [key in RequisitionStatus]: number });
        return Object.entries(statusCounts).map(([name, value]) => ({ name, value }));
    }, [userVisibleRequisitions]);

    return {
        requisitions: userVisibleRequisitions,
        sections,
        loading,
        error,
        summary,
        stats,
        statusChartData,
        sectionFilter,
        setSectionFilter,
        isHighLevelViewer,
        refresh: fetchData
    };
};
