(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Learning/church/churchdesk-ui/src/services/apiClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// services/apiClient.ts
__turbopack_context__.s([
    "clearAuthData",
    ()=>clearAuthData,
    "clearAuthUserId",
    ()=>clearAuthUserId,
    "createRequisition",
    ()=>createRequisition,
    "createSection",
    ()=>createSection,
    "createUser",
    ()=>createUser,
    "disbursePayment",
    ()=>disbursePayment,
    "extendSubscription",
    ()=>extendSubscription,
    "getAllUsers",
    ()=>getAllUsers,
    "getAuditLogs",
    ()=>getAuditLogs,
    "getAuthToken",
    ()=>getAuthToken,
    "getAuthUser",
    ()=>getAuthUser,
    "getChurch",
    ()=>getChurch,
    "getFinanceOverview",
    ()=>getFinanceOverview,
    "getFinancialSummary",
    ()=>getFinancialSummary,
    "getPlatformData",
    ()=>getPlatformData,
    "getRequisitionById",
    ()=>getRequisitionById,
    "getRequisitions",
    ()=>getRequisitions,
    "login",
    ()=>login,
    "processWorkflowAction",
    ()=>processWorkflowAction,
    "registerChurch",
    ()=>registerChurch,
    "saveAuthData",
    ()=>saveAuthData,
    "setAuthUserId",
    ()=>setAuthUserId,
    "updateRequisition",
    ()=>updateRequisition,
    "uploadFinalReceipt",
    ()=>uploadFinalReceipt,
    "verifyFinalReceipt",
    ()=>verifyFinalReceipt
]);
const API_BASE_URL = 'https://7fe9ef0a6473.ngrok-free.app/api';
// Keys for storing data
const AUTH_TOKEN_KEY = 'authToken';
const AUTH_USER_KEY = 'authUser';
const saveAuthData = (token, user)=>{
    localStorage.setItem(AUTH_TOKEN_KEY, token);
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
};
const getAuthToken = ()=>{
    return localStorage.getItem(AUTH_TOKEN_KEY);
};
const getAuthUser = ()=>{
    const userJson = localStorage.getItem(AUTH_USER_KEY);
    return userJson ? JSON.parse(userJson) : null;
};
const clearAuthData = ()=>{
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
};
let authUserId = null;
const setAuthUserId = (id)=>{
    authUserId = id;
};
const clearAuthUserId = ()=>{
    authUserId = null;
};
async function request(endpoint, options = {}) {
    const headers = new Headers(options.headers || {});
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');
    const token = getAuthToken();
    if (token) {
        headers.set('Authorization', `Bearer ${token}`);
    }
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers
    });
    const json = await response.json();
    if (!response.ok || !json.status) {
        throw new Error(json.message || 'An API error occurred');
    }
    return json.data;
}
const login = async (email, password)=>{
    console.log('API Client Login called');
    const loginResponse = await request('/login', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        })
    });
    // 1. Save the token and user details upon successful login
    console.log(loginResponse.token, loginResponse.user);
    saveAuthData(loginResponse.token, loginResponse.user);
    // 2. Return the user object, as the original function signature suggests
    return loginResponse.user;
};
const registerChurch = (churchName, adminName, adminEmail, adminPassword)=>{
    return request('/register', {
        method: 'POST',
        body: JSON.stringify({
            churchName,
            adminName,
            adminEmail,
            adminPassword
        })
    });
};
const getRequisitions = ()=>{
    return request(`/requisitions`);
};
const getRequisitionById = (id)=>{
    return request(`/requisitions/${id}`);
};
const createRequisition = (data)=>{
    return request('/requisitions', {
        method: 'POST',
        body: JSON.stringify(data)
    });
};
const updateRequisition = (id, data)=>{
    return request(`/requisitions/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data)
    });
};
const getFinancialSummary = (sectionId)=>{
    return request(`/financial-summary/${sectionId}`);
};
const getChurch = (church_id)=>{
    return request(`/churches/${church_id}`);
};
const processWorkflowAction = (reqId, action, comments)=>{
    return request(`/requisitions/${reqId}/action`, {
        method: 'POST',
        body: JSON.stringify({
            action,
            comments
        })
    });
};
const disbursePayment = (reqId, paymentDetails)=>{
    return request(`/requisitions/${reqId}/disburse`, {
        method: 'POST',
        body: JSON.stringify({
            paymentDetails
        })
    });
};
const uploadFinalReceipt = (reqId, receiptFileName)=>{
    return request(`/requisitions/${reqId}/upload-receipt`, {
        method: 'POST',
        body: JSON.stringify({
            receiptFileName
        })
    });
};
const verifyFinalReceipt = (reqId, action, comments)=>{
    return request(`/requisitions/${reqId}/verify-receipt`, {
        method: 'POST',
        body: JSON.stringify({
            action,
            comments
        })
    });
};
const createSection = (church_id, name)=>{
    return request(`/churches/${church_id}/sections`, {
        method: 'POST',
        body: JSON.stringify({
            name
        })
    });
};
const getAllUsers = (church_id)=>{
    return request(`/churches/${church_id}/users`);
};
const createUser = (userData)=>{
    return request('/users', {
        method: 'POST',
        body: JSON.stringify(userData)
    });
};
const getPlatformData = ()=>{
    return request('/platform-data');
};
const extendSubscription = (church_id, months)=>{
    return request(`/churches/${church_id}/extend-subscription`, {
        method: 'POST',
        body: JSON.stringify({
            months
        })
    });
};
const getAuditLogs = (church_id)=>{
    return request(`/churches/${church_id}/audit-logs`);
};
const getFinanceOverview = (sectionId)=>{
    return request(`/finance-overview/${sectionId}`);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Learning/church/churchdesk-ui/src/context/AuthContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/src/services/apiClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const AuthProvider = ({ children })=>{
    _s();
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentChurch, setCurrentChurch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentSection, setCurrentSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Persist login state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const savedUser = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthUser"]();
            const token = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthToken"]();
            if (savedUser && token) {
                setCurrentUser(savedUser);
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setAuthUserId"](savedUser.id);
            }
            setIsLoading(false);
        }
    }["AuthProvider.useEffect"], []);
    // Fetch related church data when user is available
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            if (currentUser && currentUser.church_id) {
                const fetchChurchData = {
                    "AuthProvider.useEffect.fetchChurchData": async ()=>{
                        try {
                            const churchData = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChurch"](currentUser.church_id);
                            setCurrentChurch(churchData);
                            if (currentUser.section_id) {
                                const section = churchData.sections.find({
                                    "AuthProvider.useEffect.fetchChurchData.section": (s)=>s.id === currentUser.section_id
                                }["AuthProvider.useEffect.fetchChurchData.section"]);
                                setCurrentSection(section || null);
                            }
                        } catch (error) {
                            console.error("Failed to fetch church data:", error);
                        }
                    }
                }["AuthProvider.useEffect.fetchChurchData"];
                fetchChurchData();
            }
        }
    }["AuthProvider.useEffect"], [
        currentUser
    ]);
    const login = async (email, pass)=>{
        setIsLoading(true);
        try {
            const user = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["login"](email, pass);
            setCurrentUser(user);
            router.push('/');
        } finally{
            setIsLoading(false);
        }
    };
    const register = async (churchName, adminName, email, pass)=>{
        setIsLoading(true);
        try {
            const newUser = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerChurch"](churchName, adminName, email, pass);
            setCurrentUser(newUser);
            router.push('/');
        } finally{
            setIsLoading(false);
        }
    };
    const logout = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAuthData"]();
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$src$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAuthUserId"]();
        setCurrentUser(null);
        setCurrentChurch(null);
        setCurrentSection(null);
        router.push('/login');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            currentUser,
            currentChurch,
            currentSection,
            isLoading,
            login,
            register,
            logout
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/Learning/church/churchdesk-ui/src/context/AuthContext.tsx",
        lineNumber: 90,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AuthProvider, "TQER1lDGawNtr1MW3XVXYbslGBs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthProvider;
const useAuth = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Learning/church/churchdesk-ui/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Desktop/Learning/church/churchdesk-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Learning$2f$church$2f$churchdesk$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Desktop/Learning/church/churchdesk-ui/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Desktop/Learning/church/churchdesk-ui/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Desktop_Learning_church_churchdesk-ui_75f50af2._.js.map