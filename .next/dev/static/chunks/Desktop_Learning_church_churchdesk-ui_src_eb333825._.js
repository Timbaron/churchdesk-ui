(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Learning/church/churchdesk-ui/src/utils/helpers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDate",
    ()=>formatDate,
    "formatUUID",
    ()=>formatUUID
]);
const formatDate = (dateString)=>{
    const date = new Date(dateString);
    // Format date
    const optionsDate = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const formattedDate = date.toLocaleDateString('en-US', optionsDate);
    // Format time
    const optionsTime = {
        hour: 'numeric',
        minute: 'numeric'
    };
    const formattedTime = date.toLocaleTimeString('en-US', optionsTime);
    return {
        date: formattedDate,
        time: formattedTime
    };
};
const formatUUID = (orderId)=>{
    const parts = orderId.split('-');
    return parts[0].toUpperCase();
};
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Learning/church/churchdesk-ui/src/utils/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/src/utils/helpers.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Learning/church/churchdesk-ui/src/hooks/useDashboard.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDashboard",
    ()=>useDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/src/services/apiClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/src/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/src/context/AuthContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
const useDashboard = ()=>{
    _s();
    const { currentUser, currentSection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [requisitions, setRequisitions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sections, setSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [sectionFilter, setSectionFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [summary, setSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const isHighLevelViewer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDashboard.useMemo[isHighLevelViewer]": ()=>{
            if (!currentUser) return false;
            return currentUser.role === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Role"].SUPER_ADMIN || currentUser.role === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Role"].AUDITOR && !currentUser.section_id;
        }
    }["useDashboard.useMemo[isHighLevelViewer]"], [
        currentUser
    ]);
    const fetchData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDashboard.useCallback[fetchData]": async ()=>{
            if (!currentUser) return;
            try {
                setLoading(true);
                setError(null);
                const reqData = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRequisitions"]();
                setRequisitions(reqData);
                const sectionIdForSummary = isHighLevelViewer && sectionFilter !== 'all' ? sectionFilter : currentSection?.id;
                if (sectionIdForSummary) {
                    const summaryData = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFinancialSummary"](sectionIdForSummary);
                    setSummary(summaryData);
                } else {
                    setSummary(null);
                }
                if (isHighLevelViewer && currentUser.church_id) {
                    const churchData = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChurch"](currentUser.church_id);
                    setSections(churchData.sections);
                }
            } catch (err) {
                setError(err.message || 'Failed to fetch dashboard data');
            } finally{
                setLoading(false);
            }
        }
    }["useDashboard.useCallback[fetchData]"], [
        currentUser,
        currentSection,
        isHighLevelViewer,
        sectionFilter
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDashboard.useEffect": ()=>{
            fetchData();
        }
    }["useDashboard.useEffect"], [
        fetchData
    ]);
    const userVisibleRequisitions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDashboard.useMemo[userVisibleRequisitions]": ()=>{
            let filtered = requisitions;
            if (!currentUser) return [];
            if (isHighLevelViewer && sectionFilter !== 'all') {
                filtered = filtered.filter({
                    "useDashboard.useMemo[userVisibleRequisitions]": (r)=>r.section_id === sectionFilter
                }["useDashboard.useMemo[userVisibleRequisitions]"]);
            }
            if (!isHighLevelViewer) {
                if (currentUser.role === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Role"].DEPARTMENT_HEAD) {
                    return filtered.filter({
                        "useDashboard.useMemo[userVisibleRequisitions]": (r)=>r.department_id === currentUser.department_id
                    }["useDashboard.useMemo[userVisibleRequisitions]"]);
                }
                if (currentUser.role === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Role"].MEMBER) {
                    return filtered.filter({
                        "useDashboard.useMemo[userVisibleRequisitions]": (r)=>r.requested_by_id === currentUser.id
                    }["useDashboard.useMemo[userVisibleRequisitions]"]);
                }
            }
            return filtered;
        }
    }["useDashboard.useMemo[userVisibleRequisitions]"], [
        requisitions,
        currentUser,
        sectionFilter,
        isHighLevelViewer
    ]);
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDashboard.useMemo[stats]": ()=>{
            const total = userVisibleRequisitions.length;
            const pending = userVisibleRequisitions.filter({
                "useDashboard.useMemo[stats]": (r)=>[
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RequisitionStatus"].PENDING,
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RequisitionStatus"].APPROVED_BY_DEPT_HEAD
                    ].includes(r.status)
            }["useDashboard.useMemo[stats]"]).length;
            const awaitingPayment = userVisibleRequisitions.filter({
                "useDashboard.useMemo[stats]": (r)=>r.status === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RequisitionStatus"].APPROVED_BY_SECTION_PRESIDENT
            }["useDashboard.useMemo[stats]"]).length;
            const totalAmount = userVisibleRequisitions.reduce({
                "useDashboard.useMemo[stats].totalAmount": (sum, r)=>sum + r.amount_requested
            }["useDashboard.useMemo[stats].totalAmount"], 0);
            return {
                total,
                pending,
                awaitingPayment,
                totalAmount
            };
        }
    }["useDashboard.useMemo[stats]"], [
        userVisibleRequisitions
    ]);
    const statusChartData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDashboard.useMemo[statusChartData]": ()=>{
            const statusCounts = userVisibleRequisitions.reduce({
                "useDashboard.useMemo[statusChartData].statusCounts": (acc, req)=>{
                    acc[req.status] = (acc[req.status] || 0) + 1;
                    return acc;
                }
            }["useDashboard.useMemo[statusChartData].statusCounts"], {});
            return Object.entries(statusCounts).map({
                "useDashboard.useMemo[statusChartData]": ([name, value])=>({
                        name,
                        value
                    })
            }["useDashboard.useMemo[statusChartData]"]);
        }
    }["useDashboard.useMemo[statusChartData]"], [
        userVisibleRequisitions
    ]);
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
_s(useDashboard, "1Rd0yBkbWxkf9MeF28PO2jKEmZU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/src/utils/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/src/utils/helpers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$hooks$2f$useDashboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/src/hooks/useDashboard.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/src/components/ui/Card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const DashboardCard = ({ title, value, description })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-medium text-slate-500",
                children: title
            }, void 0, false, {
                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-3xl font-bold text-slate-800 mt-1",
                children: value
            }, void 0, false, {
                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-slate-500 mt-2",
                children: description
            }, void 0, false, {
                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = DashboardCard;
const Dashboard = ({ navigate })=>{
    _s();
    const { requisitions: userVisibleRequisitions, sections, loading, summary, stats, statusChartData, sectionFilter, setSectionFilter, isHighLevelViewer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$hooks$2f$useDashboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboard"])();
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center p-8",
            children: "Loading dashboard..."
        }, void 0, false, {
            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
            lineNumber: 46,
            columnNumber: 16
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            isHighLevelViewer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full md:w-1/4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "sectionFilter",
                            className: "block text-sm font-medium text-slate-700",
                            children: "Filter by Section"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                            lineNumber: 54,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            id: "sectionFilter",
                            value: sectionFilter,
                            onChange: (e)=>setSectionFilter(e.target.value),
                            className: "mt-1 block w-full px-3 py-2 border border-slate-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "all",
                                    children: "All Sections"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                                    lineNumber: 61,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                sections.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: s.id,
                                        children: s.name
                                    }, s.id, false, {
                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                                        lineNumber: 62,
                                        columnNumber: 48
                                    }, ("TURBOPACK compile-time value", void 0)))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                            lineNumber: 55,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                    lineNumber: 53,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                lineNumber: 52,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardCard, {
                        title: "Total Requisitions",
                        value: stats.total,
                        description: "All relevant requests"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                        lineNumber: 68,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardCard, {
                        title: "Pending Review",
                        value: stats.pending,
                        description: "Awaiting approvals"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardCard, {
                        title: "Awaiting Payment",
                        value: stats.awaitingPayment,
                        description: "Approved and ready for disbursement"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                        lineNumber: 70,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardCard, {
                        title: "Available Balance",
                        value: summary ? `₦${summary.balance.toLocaleString()}` : 'N/A',
                        description: "Current financial balance"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                        lineNumber: 71,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                lineNumber: 67,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-5 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "lg:col-span-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-slate-800 mb-4",
                                children: "Requisitions by Status"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                                lineNumber: 76,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                width: "100%",
                                height: 300,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                    data: statusChartData,
                                    margin: {
                                        top: 5,
                                        right: 20,
                                        left: -10,
                                        bottom: 5
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                            dataKey: "name",
                                            tick: {
                                                fontSize: 10
                                            },
                                            interval: 0,
                                            angle: -45,
                                            textAnchor: "end",
                                            height: 80
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                                            lineNumber: 79,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {}, void 0, false, {
                                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                                            lineNumber: 80,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                                            lineNumber: 81,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {}, void 0, false, {
                                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                                            lineNumber: 82,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                            dataKey: "value",
                                            fill: "#3b82f6",
                                            name: "No. of Requisitions"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                                            lineNumber: 83,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                                    lineNumber: 78,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                                lineNumber: 77,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                        lineNumber: 75,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "lg:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-slate-800 mb-4",
                                children: "Recent Activity"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                                lineNumber: 88,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            userVisibleRequisitions.length > 0 ? userVisibleRequisitions.slice(0, 5).map((req)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>navigate('view_requisition', req.id),
                                    className: "flex justify-between items-center p-3 hover:bg-slate-50 rounded-lg cursor-pointer border-b last:border-b-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium text-slate-700 truncate max-w-xs",
                                                    children: req.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-slate-500",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUUID"])(req.id)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                                            lineNumber: 91,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right flex-shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold text-slate-800",
                                                    children: [
                                                        "₦",
                                                        req.amount_requested.toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-slate-500",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(req.created_at).date
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                                            lineNumber: 95,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, req.id, true, {
                                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                                    lineNumber: 90,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-slate-500 py-8",
                                children: "No recent requisition activity."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                                lineNumber: 100,
                                columnNumber: 26
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                        lineNumber: 87,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
                lineNumber: 74,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx",
        lineNumber: 50,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Dashboard, "BPO1K/9POSmGwxdSsTDYkShQhNQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$hooks$2f$useDashboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboard"]
    ];
});
_c1 = Dashboard;
const __TURBOPACK__default__export__ = Dashboard;
var _c, _c1;
__turbopack_context__.k.register(_c, "DashboardCard");
__turbopack_context__.k.register(_c1, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/src/components/Dashboard.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=Desktop_Learning_church_churchdesk-ui_src_eb333825._.js.map