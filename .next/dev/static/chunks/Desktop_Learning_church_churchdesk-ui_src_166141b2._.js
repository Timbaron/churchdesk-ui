(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Learning/church/churchdesk-ui/src/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PaymentMethod",
    ()=>PaymentMethod,
    "RequisitionStatus",
    ()=>RequisitionStatus,
    "Role",
    ()=>Role,
    "SubscriptionStatus",
    ()=>SubscriptionStatus
]);
var Role = /*#__PURE__*/ function(Role) {
    Role["MEMBER"] = "Member";
    Role["DEPARTMENT_HEAD"] = "Department Head";
    Role["SECTION_PRESIDENT"] = "Section President";
    Role["FINANCE"] = "Finance";
    Role["AUDITOR"] = "Auditor";
    Role["SUPER_ADMIN"] = "Super Admin";
    Role["APP_OWNER"] = "App Owner";
    return Role;
}({});
var RequisitionStatus = /*#__PURE__*/ function(RequisitionStatus) {
    RequisitionStatus["PENDING"] = "Pending";
    RequisitionStatus["APPROVED_BY_DEPT_HEAD"] = "Approved by Dept. Head";
    RequisitionStatus["APPROVED_BY_SECTION_PRESIDENT"] = "Approved by Section President";
    RequisitionStatus["AWAITING_RECEIPT"] = "Awaiting Receipt";
    RequisitionStatus["PENDING_FINANCE_VERIFICATION"] = "Pending Finance Verification";
    RequisitionStatus["COMPLETED"] = "Completed";
    RequisitionStatus["REJECTED"] = "Rejected";
    RequisitionStatus["CHANGES_REQUESTED"] = "Changes Requested";
    RequisitionStatus["RECEIPT_CORRECTION_REQUESTED"] = "Receipt Correction Requested";
    return RequisitionStatus;
}({});
var PaymentMethod = /*#__PURE__*/ function(PaymentMethod) {
    PaymentMethod["TRANSFER"] = "Bank Transfer";
    PaymentMethod["CASH"] = "Cash";
    PaymentMethod["CHEQUE"] = "Cheque";
    return PaymentMethod;
}({});
var SubscriptionStatus = /*#__PURE__*/ function(SubscriptionStatus) {
    SubscriptionStatus["TRIAL"] = "Trial";
    SubscriptionStatus["ACTIVE"] = "Active";
    SubscriptionStatus["EXPIRED"] = "Expired";
    return SubscriptionStatus;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Learning/church/churchdesk-ui/src/components/icons/HomeIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const HomeIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        }, void 0, false, {
            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/icons/HomeIcon.tsx",
            lineNumber: 6,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/icons/HomeIcon.tsx",
        lineNumber: 5,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = HomeIcon;
const __TURBOPACK__default__export__ = HomeIcon;
var _c;
__turbopack_context__.k.register(_c, "HomeIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Learning/church/churchdesk-ui/src/components/icons/DocumentTextIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const DocumentTextIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        }, void 0, false, {
            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/icons/DocumentTextIcon.tsx",
            lineNumber: 6,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/icons/DocumentTextIcon.tsx",
        lineNumber: 5,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = DocumentTextIcon;
const __TURBOPACK__default__export__ = DocumentTextIcon;
var _c;
__turbopack_context__.k.register(_c, "DocumentTextIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Learning/church/churchdesk-ui/src/components/icons/PlusCircleIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const PlusCircleIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        }, void 0, false, {
            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/icons/PlusCircleIcon.tsx",
            lineNumber: 6,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/icons/PlusCircleIcon.tsx",
        lineNumber: 5,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = PlusCircleIcon;
const __TURBOPACK__default__export__ = PlusCircleIcon;
var _c;
__turbopack_context__.k.register(_c, "PlusCircleIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Learning/church/churchdesk-ui/src/components/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/src/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$components$2f$icons$2f$HomeIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/src/components/icons/HomeIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$components$2f$icons$2f$DocumentTextIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/src/components/icons/DocumentTextIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$components$2f$icons$2f$PlusCircleIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/src/components/icons/PlusCircleIcon.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const NavLink = ({ icon, label, isActive, href, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        onClick: onClick,
        className: `w-full flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-lg ${isActive ? 'bg-blue-500 text-white' : 'text-slate-600 hover:bg-slate-200'}`,
        children: [
            icon,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: label
            }, void 0, false, {
                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Sidebar.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Sidebar.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = NavLink;
const Sidebar = ({ currentUser, isOpen, setIsOpen })=>{
    _s();
    const { role } = currentUser;
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const canSeeAdmin = role === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Role"].SUPER_ADMIN;
    const canSeeFinance = role === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Role"].FINANCE || role === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Role"].SUPER_ADMIN || role === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Role"].SECTION_PRESIDENT;
    const canSeeAudit = role === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Role"].AUDITOR || role === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Role"].SUPER_ADMIN;
    const sidebarClasses = `
        w-64 bg-white border-r border-slate-200 flex flex-col p-4
        fixed inset-y-0 left-0 z-30
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0 md:flex
    `;
    const closeMobile = ()=>setIsOpen(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: sidebarClasses,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl font-bold text-slate-800",
                        children: [
                            "Church",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-blue-600",
                                children: "Desk"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Sidebar.tsx",
                                lineNumber: 57,
                                columnNumber: 27
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Sidebar.tsx",
                        lineNumber: 56,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsOpen(false),
                        className: "md:hidden text-slate-500 hover:text-slate-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-6 w-6",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M6 18L18 6M6 6l12 12"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Sidebar.tsx",
                                lineNumber: 61,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Sidebar.tsx",
                            lineNumber: 60,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Sidebar.tsx",
                        lineNumber: 59,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Sidebar.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex flex-col space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$components$2f$icons$2f$HomeIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Sidebar.tsx",
                            lineNumber: 68,
                            columnNumber: 27
                        }, void 0),
                        label: "Dashboard",
                        isActive: pathname === '/',
                        href: "/",
                        onClick: closeMobile
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Sidebar.tsx",
                        lineNumber: 67,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$components$2f$icons$2f$DocumentTextIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Sidebar.tsx",
                            lineNumber: 75,
                            columnNumber: 27
                        }, void 0),
                        label: "All Requisitions",
                        isActive: pathname?.startsWith('/requisitions') && pathname !== '/requisitions/new',
                        href: "/requisitions",
                        onClick: closeMobile
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Sidebar.tsx",
                        lineNumber: 74,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$components$2f$icons$2f$PlusCircleIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Sidebar.tsx",
                            lineNumber: 82,
                            columnNumber: 27
                        }, void 0),
                        label: "New Requisition",
                        isActive: pathname === '/requisitions/new',
                        href: "/requisitions/new",
                        onClick: closeMobile
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Sidebar.tsx",
                        lineNumber: 81,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-4 mt-4 border-t border-slate-200",
                        children: [
                            canSeeFinance && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Sidebar.tsx",
                                        lineNumber: 93,
                                        columnNumber: 149
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Sidebar.tsx",
                                    lineNumber: 93,
                                    columnNumber: 35
                                }, void 0),
                                label: "Finance Hub",
                                isActive: pathname === '/finance',
                                href: "/finance",
                                onClick: closeMobile
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Sidebar.tsx",
                                lineNumber: 92,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            canSeeAudit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Sidebar.tsx",
                                        lineNumber: 102,
                                        columnNumber: 149
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Sidebar.tsx",
                                    lineNumber: 102,
                                    columnNumber: 35
                                }, void 0),
                                label: "Audit Trail",
                                isActive: pathname === '/audit',
                                href: "/audit",
                                onClick: closeMobile
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Sidebar.tsx",
                                lineNumber: 101,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            canSeeAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065z"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Sidebar.tsx",
                                            lineNumber: 111,
                                            columnNumber: 149
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Sidebar.tsx",
                                            lineNumber: 111,
                                            columnNumber: 707
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Sidebar.tsx",
                                    lineNumber: 111,
                                    columnNumber: 35
                                }, void 0),
                                label: "Admin Panel",
                                isActive: pathname === '/admin',
                                href: "/admin",
                                onClick: closeMobile
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Sidebar.tsx",
                                lineNumber: 110,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Sidebar.tsx",
                        lineNumber: 90,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Sidebar.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Sidebar.tsx",
        lineNumber: 54,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Sidebar, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c1 = Sidebar;
const __TURBOPACK__default__export__ = Sidebar;
var _c, _c1;
__turbopack_context__.k.register(_c, "NavLink");
__turbopack_context__.k.register(_c1, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Learning/church/churchdesk-ui/src/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/src/context/AuthContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const Header = ({ onMenuClick })=>{
    _s();
    const { currentUser: user, currentChurch, currentSection, logout: onLogout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    if (!user) return null;
    const churchName = currentChurch?.name || 'ChurchDesk';
    const sectionName = currentSection?.name || 'Church-wide';
    const getInitials = (name)=>{
        const names = name.split(' ');
        if (names.length > 1) {
            return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
        }
        return name.substring(0, 2).toUpperCase();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "bg-white shadow-sm p-4 flex justify-between items-center border-b border-slate-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onMenuClick,
                        className: "md:hidden text-slate-600",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-6 w-6",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M4 6h16M4 12h16M4 18h16"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Header.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Header.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Header.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-semibold text-slate-800",
                                children: [
                                    "Welcome, ",
                                    user.name.split(' ')[0],
                                    "!"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Header.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500",
                                children: [
                                    churchName,
                                    " / ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: sectionName
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Header.tsx",
                                        lineNumber: 33,
                                        columnNumber: 64
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Header.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Header.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Header.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right hidden sm:block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold text-slate-700",
                                children: user.name
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Header.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500",
                                children: user.role
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Header.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Header.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold",
                        children: getInitials(user.name)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Header.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onLogout,
                        className: "text-slate-500 hover:text-slate-700",
                        title: "Logout",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-6 w-6",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Header.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Header.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Header.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Header.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/Header.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Header, "IYZwt+opqcO76d/uT4y+oWLozOQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Learning/church/churchdesk-ui/src/components/DashboardLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/src/components/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/src/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/src/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const DashboardLayout = ({ children })=>{
    _s();
    const { currentUser, currentChurch, currentSection, logout, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [isSidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardLayout.useEffect": ()=>{
            if (!isLoading && !currentUser) {
                router.push('/login');
            }
        }
    }["DashboardLayout.useEffect"], [
        isLoading,
        currentUser,
        router
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen w-screen flex items-center justify-center bg-slate-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mb-4"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/DashboardLayout.tsx",
                        lineNumber: 24,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-600 font-medium",
                        children: "Loading ChurchDesk..."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/DashboardLayout.tsx",
                        lineNumber: 25,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/DashboardLayout.tsx",
                lineNumber: 23,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/DashboardLayout.tsx",
            lineNumber: 22,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!currentUser) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen md:flex bg-slate-100",
        children: [
            isSidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black opacity-50 z-20 md:hidden transition-opacity",
                onClick: ()=>setSidebarOpen(false)
            }, void 0, false, {
                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/DashboardLayout.tsx",
                lineNumber: 38,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                currentUser: currentUser,
                isOpen: isSidebarOpen,
                setIsOpen: setSidebarOpen
            }, void 0, false, {
                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/DashboardLayout.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col overflow-hidden",
                children: [
                    currentChurch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onMenuClick: ()=>setSidebarOpen(true)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/DashboardLayout.tsx",
                        lineNumber: 52,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6 pb-20 md:pb-6",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/DashboardLayout.tsx",
                        lineNumber: 56,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/DashboardLayout.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/DashboardLayout.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DashboardLayout, "963eZ+PuJ6t2cpp5Xc0TIAmqjK0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = DashboardLayout;
const __TURBOPACK__default__export__ = DashboardLayout;
var _c;
__turbopack_context__.k.register(_c, "DashboardLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/Desktop/Learning/church/churchdesk-ui/src/hooks/useRequisitionDetail.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRequisitionDetail",
    ()=>useRequisitionDetail
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
const useRequisitionDetail = (requisitionId)=>{
    _s();
    const { currentUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [requisition, setRequisition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [churchData, setChurchData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        church: null,
        users: []
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fetchData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRequisitionDetail.useCallback[fetchData]": async ()=>{
            if (!currentUser) return;
            try {
                setLoading(true);
                setError(null);
                const [reqData, church, users] = await Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRequisitionById"](requisitionId),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChurch"](currentUser.church_id),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllUsers"](currentUser.church_id)
                ]);
                setRequisition(reqData);
                setChurchData({
                    church,
                    users
                });
            } catch (err) {
                setError(err.message || 'Failed to fetch requisition details.');
            } finally{
                setLoading(false);
            }
        }
    }["useRequisitionDetail.useCallback[fetchData]"], [
        requisitionId,
        currentUser
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRequisitionDetail.useEffect": ()=>{
            fetchData();
        }
    }["useRequisitionDetail.useEffect"], [
        fetchData
    ]);
    const processAction = async (action, comments)=>{
        if (!requisition || !currentUser) return;
        setIsSubmitting(true);
        try {
            const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["processWorkflowAction"](requisition.id, action, comments);
            setRequisition(updated);
            return updated;
        } catch (err) {
            throw err;
        } finally{
            setIsSubmitting(false);
        }
    };
    const disburse = async (paymentDetails)=>{
        if (!requisition || !currentUser) return;
        setIsSubmitting(true);
        try {
            const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disbursePayment"](requisition.id, {
                ...paymentDetails,
                recorded_by_id: currentUser.id
            });
            setRequisition(updated);
            return updated;
        } catch (err) {
            throw err;
        } finally{
            setIsSubmitting(false);
        }
    };
    const uploadReceipt = async (fileName)=>{
        if (!requisition || !currentUser) return;
        setIsSubmitting(true);
        try {
            const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadFinalReceipt"](requisition.id, fileName);
            setRequisition(updated);
            return updated;
        } catch (err) {
            throw err;
        } finally{
            setIsSubmitting(false);
        }
    };
    const verifyReceipt = async (action, comments)=>{
        if (!requisition || !currentUser) return;
        setIsSubmitting(true);
        try {
            const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyFinalReceipt"](requisition.id, action, comments);
            setRequisition(updated);
            return updated;
        } catch (err) {
            throw err;
        } finally{
            setIsSubmitting(false);
        }
    };
    const canTakeAction = ()=>{
        if (!requisition || !currentUser) return false;
        const { status, approvals, requested_by_id, department_id, section_id } = requisition;
        const { role, id, department_id: user_dept_id, section_id: user_sect_id } = currentUser;
        const hasAlreadyActed = approvals.some((a)=>a.approver_id === id);
        if (hasAlreadyActed) return false;
        if (status === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RequisitionStatus"].PENDING) {
            const requester = churchData.users.find((u)=>u.id === requested_by_id);
            if (!requester) return false;
            if (requester.role !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Role"].DEPARTMENT_HEAD && role === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Role"].DEPARTMENT_HEAD && user_dept_id === department_id) return true;
            if (requester.role === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Role"].DEPARTMENT_HEAD && role === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Role"].SECTION_PRESIDENT && user_sect_id === section_id) return true;
        }
        if (status === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RequisitionStatus"].APPROVED_BY_DEPT_HEAD && role === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Role"].SECTION_PRESIDENT && user_sect_id === section_id) return true;
        return false;
    };
    const canDisburse = ()=>requisition?.status === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RequisitionStatus"].APPROVED_BY_SECTION_PRESIDENT && currentUser?.role === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Role"].FINANCE && currentUser?.section_id === requisition.section_id;
    const canUploadReceipt = ()=>(requisition?.status === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RequisitionStatus"].AWAITING_RECEIPT || requisition?.status === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RequisitionStatus"].RECEIPT_CORRECTION_REQUESTED) && requisition.requested_by_id === currentUser?.id;
    const canVerifyReceipt = ()=>requisition?.status === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RequisitionStatus"].PENDING_FINANCE_VERIFICATION && currentUser?.role === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Role"].FINANCE && currentUser?.section_id === requisition.section_id;
    const canEditAndResubmit = ()=>requisition?.status === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RequisitionStatus"].CHANGES_REQUESTED && requisition.requested_by_id === currentUser?.id;
    const getUserName = (id)=>churchData.users.find((u)=>u.id === id)?.name || 'Unknown User';
    const getDepartmentName = (id)=>churchData.church?.sections.flatMap((s)=>s.departments).find((d)=>d.id === id)?.name;
    const getSectionName = (id)=>churchData.church?.sections.find((s)=>s.id === id)?.name;
    return {
        requisition,
        churchData,
        loading,
        error,
        isSubmitting,
        actions: {
            processAction,
            disburse,
            uploadReceipt,
            verifyReceipt
        },
        permissions: {
            canTakeAction,
            canDisburse,
            canUploadReceipt,
            canVerifyReceipt,
            canEditAndResubmit
        },
        helpers: {
            getUserName,
            getDepartmentName,
            getSectionName
        },
        refresh: fetchData
    };
};
_s(useRequisitionDetail, "fCosOyAhLABJgMNtVs0X+tScMUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Learning/church/churchdesk-ui/src/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STATUS_COLORS",
    ()=>STATUS_COLORS
]);
// FIX: Populate STATUS_COLORS to be used in Badge.tsx. This file was previously empty.
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/src/types.ts [app-client] (ecmascript)");
;
const STATUS_COLORS = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RequisitionStatus"].PENDING]: 'bg-yellow-100 text-yellow-800',
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RequisitionStatus"].APPROVED_BY_DEPT_HEAD]: 'bg-blue-100 text-blue-800',
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RequisitionStatus"].APPROVED_BY_SECTION_PRESIDENT]: 'bg-indigo-100 text-indigo-800',
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RequisitionStatus"].AWAITING_RECEIPT]: 'bg-cyan-100 text-cyan-800',
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RequisitionStatus"].PENDING_FINANCE_VERIFICATION]: 'bg-purple-100 text-purple-800',
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RequisitionStatus"].COMPLETED]: 'bg-green-100 text-green-800',
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RequisitionStatus"].REJECTED]: 'bg-red-100 text-red-800',
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RequisitionStatus"].CHANGES_REQUESTED]: 'bg-orange-100 text-orange-800',
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RequisitionStatus"].RECEIPT_CORRECTION_REQUESTED]: 'bg-orange-100 text-orange-800'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Learning/church/churchdesk-ui/src/components/ui/Badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/src/constants.ts [app-client] (ecmascript)");
;
;
const Badge = ({ status })=>{
    const colorClasses = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_COLORS"][status] || 'bg-gray-100 text-gray-800';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `px-2 py-1 text-xs font-medium rounded-full inline-block ${colorClasses}`,
        children: status
    }, void 0, false, {
        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/ui/Badge.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Badge;
const __TURBOPACK__default__export__ = Badge;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Learning/church/churchdesk-ui/src/components/ui/Card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Card = ({ children, className = '' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `bg-white rounded-xl shadow-md p-4 md:p-6 ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/ui/Card.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Card;
const __TURBOPACK__default__export__ = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/src/utils/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/src/utils/helpers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$hooks$2f$useRequisitionDetail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/src/hooks/useRequisitionDetail.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/src/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/src/components/ui/Badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/src/components/ui/Card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
;
;
;
;
const ActionModal = ({ title, onCancel, onSubmit, isSubmitting })=>{
    _s();
    const [comment, setComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "w-full max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-semibold text-slate-800 mb-4 text-lg",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    value: comment,
                    onChange: (e)=>setComment(e.target.value),
                    placeholder: "Add your comments (optional for approval, required for rejection/changes)",
                    rows: 4,
                    className: "w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                    lineNumber: 24,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-2 mt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onCancel,
                            disabled: isSubmitting,
                            className: "px-4 py-2 bg-slate-200 rounded-md",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                            lineNumber: 32,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onSubmit(comment, 'REQUEST_CHANGES'),
                            disabled: isSubmitting,
                            className: "px-4 py-2 bg-orange-500 text-white rounded-md",
                            children: "Request Changes"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                            lineNumber: 33,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onSubmit(comment, 'REJECT'),
                            disabled: isSubmitting,
                            className: "px-4 py-2 bg-red-600 text-white rounded-md",
                            children: "Reject"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                            lineNumber: 34,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onSubmit(comment, 'APPROVE'),
                            disabled: isSubmitting,
                            className: "px-4 py-2 bg-green-600 text-white rounded-md",
                            children: "Approve"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                            lineNumber: 35,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                    lineNumber: 31,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
            lineNumber: 22,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ActionModal, "vhAvzpEN661Y5K0yhbG0Td/NMg4=");
_c = ActionModal;
const FinanceVerificationModal = ({ onCancel, onSubmit, isSubmitting })=>{
    _s1();
    const [comment, setComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "w-full max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-semibold text-slate-800 mb-4 text-lg",
                    children: "Verify Final Receipt"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                    lineNumber: 47,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    value: comment,
                    onChange: (e)=>setComment(e.target.value),
                    placeholder: "Add comments here. Required if requesting correction.",
                    rows: 4,
                    className: "w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                    lineNumber: 48,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-2 mt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onCancel,
                            disabled: isSubmitting,
                            className: "px-4 py-2 bg-slate-200 rounded-md",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                            lineNumber: 56,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onSubmit(comment, 'REQUEST_CORRECTION'),
                            disabled: isSubmitting,
                            className: "px-4 py-2 bg-orange-500 text-white rounded-md",
                            children: "Request Correction"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                            lineNumber: 57,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onSubmit(comment, 'VERIFY'),
                            disabled: isSubmitting,
                            className: "px-4 py-2 bg-green-600 text-white rounded-md",
                            children: "Verify & Complete"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                            lineNumber: 58,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                    lineNumber: 55,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
            lineNumber: 46,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
        lineNumber: 45,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(FinanceVerificationModal, "vhAvzpEN661Y5K0yhbG0Td/NMg4=");
_c1 = FinanceVerificationModal;
const RequisitionDetail = ({ requisitionId, navigate })=>{
    _s2();
    const { requisition, loading, error, isSubmitting, actions, permissions, helpers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$hooks$2f$useRequisitionDetail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequisitionDetail"])(requisitionId);
    const [modal, setModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [paymentAmount, setPaymentAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [paymentMethod, setPaymentMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaymentMethod"].TRANSFER);
    const [paymentDate, setPaymentDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date().toISOString().split('T')[0]);
    const [paymentRef, setPaymentRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [paymentProof, setPaymentProof] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [finalReceiptFile, setFinalReceiptFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Update payment amount when requisition loads
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "RequisitionDetail.useEffect": ()=>{
            if (requisition) {
                setPaymentAmount(requisition.amount_requested.toString());
            }
        }
    }["RequisitionDetail.useEffect"], [
        requisition
    ]);
    const handleActionSubmit = async (comments, action)=>{
        try {
            await actions.processAction(action, comments);
            setModal(null);
        } catch (err) {
            alert(`Failed to submit action: ${err.message}`);
        }
    };
    const handlePaymentSubmit = async (e)=>{
        e.preventDefault();
        try {
            await actions.disburse({
                amount_paid: parseFloat(paymentAmount),
                payment_method: paymentMethod,
                payment_date: paymentDate,
                reference_number: paymentRef || null,
                proof_file: paymentProof ? {
                    name: paymentProof.name,
                    url: '#'
                } : null
            });
            setModal(null);
        } catch (err) {
            alert(`Failed to record payment: ${err.message}`);
        }
    };
    const handleFinalReceiptSubmit = async (e)=>{
        e.preventDefault();
        if (!finalReceiptFile) return;
        try {
            await actions.uploadReceipt(finalReceiptFile.name);
            setModal(null);
        } catch (err) {
            alert(`Failed to upload receipt: ${err.message}`);
        }
    };
    const handleVerificationSubmit = async (comments, action)=>{
        try {
            await actions.verifyReceipt(action, comments);
            setModal(null);
        } catch (err) {
            alert(`Failed to process verification: ${err.message}`);
        }
    };
    const { canTakeAction, canDisburse, canUploadReceipt, canVerifyReceipt, canEditAndResubmit } = permissions;
    const { getUserName, getDepartmentName, getSectionName } = helpers;
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center p-8",
        children: "Loading requisition details..."
    }, void 0, false, {
        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
        lineNumber: 139,
        columnNumber: 25
    }, ("TURBOPACK compile-time value", void 0));
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center p-8 text-red-500",
        children: error
    }, void 0, false, {
        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
        lineNumber: 140,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0));
    if (!requisition) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center p-8",
        children: "Requisition not found."
    }, void 0, false, {
        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
        lineNumber: 141,
        columnNumber: 30
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            modal === 'approve' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionModal, {
                title: "Review Requisition",
                onCancel: ()=>setModal(null),
                onSubmit: handleActionSubmit,
                isSubmitting: isSubmitting
            }, void 0, false, {
                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                lineNumber: 148,
                columnNumber: 37
            }, ("TURBOPACK compile-time value", void 0)),
            modal === 'verify_receipt' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FinanceVerificationModal, {
                onCancel: ()=>setModal(null),
                onSubmit: handleVerificationSubmit,
                isSubmitting: isSubmitting
            }, void 0, false, {
                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                lineNumber: 149,
                columnNumber: 44
            }, ("TURBOPACK compile-time value", void 0)),
            modal === 'pay' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "w-full max-w-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-slate-800 mb-4 text-lg",
                            children: "Disburse Funds"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                            lineNumber: 153,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handlePaymentSubmit,
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm",
                                                    children: "Amount Paid"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 38
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: paymentAmount,
                                                    onChange: (e)=>setPaymentAmount(e.target.value),
                                                    className: "w-full px-3 py-2 border rounded-md",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 84
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                            lineNumber: 156,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm",
                                                    children: "Payment Method"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 38
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: paymentMethod,
                                                    onChange: (e)=>setPaymentMethod(e.target.value),
                                                    className: "w-full px-3 py-2 border rounded-md",
                                                    children: Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaymentMethod"]).map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: m,
                                                            children: m
                                                        }, m, false, {
                                                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 269
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 87
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                            lineNumber: 157,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm",
                                                    children: "Payment Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 38
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    value: paymentDate,
                                                    onChange: (e)=>setPaymentDate(e.target.value),
                                                    className: "w-full px-3 py-2 border rounded-md",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 85
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                            lineNumber: 158,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm",
                                                    children: "Reference (Optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 38
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: paymentRef,
                                                    onChange: (e)=>setPaymentRef(e.target.value),
                                                    className: "w-full px-3 py-2 border rounded-md"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 93
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                            lineNumber: 159,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                    lineNumber: 155,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm",
                                            children: "Proof of Payment"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                            lineNumber: 161,
                                            columnNumber: 34
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            onChange: (e)=>setPaymentProof(e.target.files ? e.target.files[0] : null),
                                            className: "mt-1 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                            lineNumber: 161,
                                            columnNumber: 85
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                    lineNumber: 161,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-2 mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setModal(null),
                                            disabled: isSubmitting,
                                            className: "px-4 py-2 bg-slate-200 rounded-md",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                            lineNumber: 162,
                                            columnNumber: 74
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isSubmitting,
                                            className: "px-4 py-2 bg-green-600 text-white rounded-md",
                                            children: isSubmitting ? 'Saving...' : 'Confirm Disbursement'
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                            lineNumber: 162,
                                            columnNumber: 212
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                    lineNumber: 162,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                            lineNumber: 154,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                    lineNumber: 152,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                lineNumber: 151,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            modal === 'upload_receipt' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "w-full max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-slate-800 mb-4 text-lg",
                            children: "Upload Final Expense Receipt"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                            lineNumber: 170,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleFinalReceiptSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    onChange: (e)=>setFinalReceiptFile(e.target.files ? e.target.files[0] : null),
                                    required: true,
                                    className: "block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                    lineNumber: 172,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-2 mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setModal(null),
                                            disabled: isSubmitting,
                                            className: "px-4 py-2 bg-slate-200 rounded-md",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                            lineNumber: 173,
                                            columnNumber: 74
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isSubmitting || !finalReceiptFile,
                                            className: "px-4 py-2 bg-blue-600 text-white rounded-md disabled:bg-blue-300",
                                            children: isSubmitting ? 'Uploading...' : 'Upload & Submit for Verification'
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                            lineNumber: 173,
                                            columnNumber: 212
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                    lineNumber: 173,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                            lineNumber: 171,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                    lineNumber: 169,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                lineNumber: 168,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold text-slate-800",
                                        children: requisition.title
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                        lineNumber: 182,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-500",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUUID"])(requisition.id)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                        lineNumber: 183,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                lineNumber: 181,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                status: requisition.status
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                lineNumber: 185,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                        lineNumber: 180,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 border-t pt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium text-slate-600",
                                        children: "Amount"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                        lineNumber: 189,
                                        columnNumber: 26
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-bold text-slate-800",
                                        children: [
                                            "₦",
                                            requisition.amount_requested.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                        lineNumber: 189,
                                        columnNumber: 78
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                lineNumber: 189,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium text-slate-600",
                                        children: "Requested By"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                        lineNumber: 190,
                                        columnNumber: 26
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-800",
                                        children: getUserName(requisition.requested_by_id)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                        lineNumber: 190,
                                        columnNumber: 84
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                lineNumber: 190,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium text-slate-600",
                                        children: "Section"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                        lineNumber: 191,
                                        columnNumber: 26
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-800",
                                        children: getSectionName(requisition.section_id) || 'N/A'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                        lineNumber: 191,
                                        columnNumber: 79
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                lineNumber: 191,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium text-slate-600",
                                        children: "Department"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                        lineNumber: 192,
                                        columnNumber: 26
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-800",
                                        children: getDepartmentName(requisition.department_id) || 'N/A'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                        lineNumber: 192,
                                        columnNumber: 82
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                lineNumber: 192,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium text-slate-600",
                                        children: "Category"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                        lineNumber: 193,
                                        columnNumber: 26
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-800",
                                        children: requisition.category
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                        lineNumber: 193,
                                        columnNumber: 80
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                lineNumber: 193,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium text-slate-600",
                                        children: "Date Created"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                        lineNumber: 194,
                                        columnNumber: 26
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-800",
                                        children: new Date(requisition.created_at).toLocaleString()
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                        lineNumber: 194,
                                        columnNumber: 84
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                lineNumber: 194,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium text-slate-600",
                                        children: "Date Needed"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                        lineNumber: 195,
                                        columnNumber: 26
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-800",
                                        children: new Date(requisition.date_needed).toLocaleDateString()
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                        lineNumber: 195,
                                        columnNumber: 83
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                lineNumber: 195,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                        lineNumber: 187,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 border-t pt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-slate-800 mb-2",
                                children: "Purpose / Description"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                lineNumber: 198,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-600 whitespace-pre-wrap",
                                children: requisition.purpose
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                lineNumber: 199,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                        lineNumber: 197,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                lineNumber: 179,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-4",
                children: [
                    canTakeAction() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setModal('approve'),
                        className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
                        children: "Take Action"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                        lineNumber: 204,
                        columnNumber: 37
                    }, ("TURBOPACK compile-time value", void 0)),
                    canDisburse() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setModal('pay'),
                        className: "px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700",
                        children: "Disburse Funds"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                        lineNumber: 205,
                        columnNumber: 35
                    }, ("TURBOPACK compile-time value", void 0)),
                    canUploadReceipt() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setModal('upload_receipt'),
                        className: "px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700",
                        children: requisition.status === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RequisitionStatus"].RECEIPT_CORRECTION_REQUESTED ? 'Re-upload Receipt' : 'Upload Final Receipt'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                        lineNumber: 206,
                        columnNumber: 40
                    }, ("TURBOPACK compile-time value", void 0)),
                    canVerifyReceipt() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setModal('verify_receipt'),
                        className: "px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700",
                        children: "Verify Receipt"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                        lineNumber: 207,
                        columnNumber: 40
                    }, ("TURBOPACK compile-time value", void 0)),
                    canEditAndResubmit() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>navigate('new_requisition', requisition.id),
                        className: "px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600",
                        children: "Edit & Resubmit"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                        lineNumber: 208,
                        columnNumber: 42
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                lineNumber: 203,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "lg:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-slate-800 mb-4",
                                children: "Timeline / Activity Log"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                lineNumber: 213,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-4",
                                children: requisition.activity_log?.slice().reverse().map((log)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0 h-8 w-8 bg-slate-200 rounded-full flex items-center justify-center text-xs font-bold text-slate-600",
                                                children: getUserName(log.user_id).substring(0, 2)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                                lineNumber: 219,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium",
                                                                children: getUserName(log.user_id)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                                                lineNumber: 222,
                                                                columnNumber: 60
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " ",
                                                            log.action
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    log.details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm bg-slate-100 p-2 rounded-md mt-1 italic",
                                                        children: [
                                                            '"',
                                                            log.details,
                                                            '"'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 53
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-400 mt-1",
                                                        children: new Date(log.timestamp).toLocaleString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                                lineNumber: 220,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, log.id, true, {
                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                        lineNumber: 217,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                lineNumber: 214,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                        lineNumber: 212,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 lg:col-span-1",
                        children: [
                            Array.isArray(requisition.attachments) && requisition.attachments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-slate-800 mb-2",
                                        children: "Attachments"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                        lineNumber: 234,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-disc list-inside text-blue-600 text-sm",
                                        children: requisition.attachments.map((file, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "underline hover:no-underline",
                                                    children: file.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, i, false, {
                                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                                lineNumber: 237,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                        lineNumber: 235,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                lineNumber: 233,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            requisition.payment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-slate-800 mb-2",
                                        children: "Payment Details"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                        lineNumber: 248,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: "Amount:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 36
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " ₦",
                                                    requisition.payment.amount_paid.toLocaleString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                                lineNumber: 250,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: "Method:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 36
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " ",
                                                    requisition.payment.payment_method
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                                lineNumber: 251,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: "Date:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 36
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " ",
                                                    new Date(requisition.payment.payment_date).toLocaleDateString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                                lineNumber: 252,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: "Reference:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 36
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " ",
                                                    requisition.payment.reference_number || 'N/A'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                                lineNumber: 253,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: "Recorded By:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 36
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " ",
                                                    getUserName(requisition.payment.recorded_by_id)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                                lineNumber: 254,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            requisition.payment.proof_file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-blue-600",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    children: "View Proof"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 97
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                                lineNumber: 255,
                                                columnNumber: 68
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                        lineNumber: 249,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                lineNumber: 247,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            requisition.final_receipt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-slate-800 mb-2",
                                        children: "Final Receipt"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                        lineNumber: 261,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-blue-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "underline hover:no-underline",
                                            children: requisition.final_receipt.name
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                            lineNumber: 262,
                                            columnNumber: 66
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                        lineNumber: 262,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                                lineNumber: 260,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                        lineNumber: 231,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
                lineNumber: 211,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx",
        lineNumber: 146,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(RequisitionDetail, "rRDZ8bG/W+ddsrASI+RQMVoYO00=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$hooks$2f$useRequisitionDetail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequisitionDetail"]
    ];
});
_c2 = RequisitionDetail;
const __TURBOPACK__default__export__ = RequisitionDetail;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ActionModal");
__turbopack_context__.k.register(_c1, "FinanceVerificationModal");
__turbopack_context__.k.register(_c2, "RequisitionDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Learning/church/churchdesk-ui/src/app/requisitions/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$components$2f$DashboardLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/src/components/DashboardLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$components$2f$RequisitionDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/src/components/RequisitionDetail.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/src/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const RequisitionDetailPage = ()=>{
    _s();
    const { currentUser, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const id = params?.id;
    if (isLoading) return null;
    if (!currentUser || !id) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$components$2f$DashboardLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$components$2f$RequisitionDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            requisitionId: id,
            navigate: (view)=>{
                if (view === 'requisitions') {
                    router.push('/requisitions');
                } else if (view === 'new_requisition') {
                    router.push(`/requisitions/edit/${id}`); // Potentially handle editing
                }
            }
        }, void 0, false, {
            fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/app/requisitions/[id]/page.tsx",
            lineNumber: 20,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/app/requisitions/[id]/page.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(RequisitionDetailPage, "LRF+1ky/j6/hyM/MM0HodKF2FEE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = RequisitionDetailPage;
const __TURBOPACK__default__export__ = RequisitionDetailPage;
var _c;
__turbopack_context__.k.register(_c, "RequisitionDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Learning_church_churchdesk-ui_src_166141b2._.js.map