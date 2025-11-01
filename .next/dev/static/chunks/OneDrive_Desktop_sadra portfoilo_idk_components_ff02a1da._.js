(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/sadra portfoilo/idk/components/ThemeProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useThemeMode",
    ()=>useThemeMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/sadra portfoilo/idk/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/sadra portfoilo/idk/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const ThemeCtx = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    theme: "dark",
    toggle: ()=>{}
});
function ThemeProvider({ children }) {
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dark");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            const stored = localStorage.getItem("theme");
            if (stored) setTheme(stored);
            else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) setTheme("light");
        }
    }["ThemeProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            const root = document.documentElement;
            root.classList.remove("light");
            if (theme === "light") root.classList.add("light");
            localStorage.setItem("theme", theme);
        }
    }["ThemeProvider.useEffect"], [
        theme
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ThemeProvider.useMemo[value]": ()=>({
                theme,
                toggle: ({
                    "ThemeProvider.useMemo[value]": ()=>setTheme({
                            "ThemeProvider.useMemo[value]": (t)=>t === "dark" ? "light" : "dark"
                        }["ThemeProvider.useMemo[value]"])
                })["ThemeProvider.useMemo[value]"]
            })
    }["ThemeProvider.useMemo[value]"], [
        theme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeCtx.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/sadra portfoilo/idk/components/ThemeProvider.tsx",
        lineNumber: 31,
        columnNumber: 8
    }, this);
}
_s(ThemeProvider, "ilu5EJsynaJKSU+B3OBmbJwAF+Y=");
_c = ThemeProvider;
function useThemeMode() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeCtx);
}
_s1(useThemeMode, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/sadra portfoilo/idk/components/CursorFollower.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CursorFollower
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/sadra portfoilo/idk/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/sadra portfoilo/idk/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/sadra portfoilo/idk/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/sadra portfoilo/idk/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/sadra portfoilo/idk/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/sadra portfoilo/idk/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function isTouchOrCoarsePointer() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    const coarse = window.matchMedia?.("(pointer: coarse)")?.matches ?? false;
    return hasTouch || coarse;
}
function CursorFollower() {
    _s();
    const prefersReduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [enabled, setEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCoarse, setIsCoarse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ripples, setRipples] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const rippleIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(-9999);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(-9999);
    const ringX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(x, {
        stiffness: 340,
        damping: 32,
        mass: 0.6
    });
    const ringY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(y, {
        stiffness: 340,
        damping: 32,
        mass: 0.6
    });
    const dotX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(x, {
        stiffness: 560,
        damping: 36,
        mass: 0.4
    });
    const dotY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(y, {
        stiffness: 560,
        damping: 36,
        mass: 0.4
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CursorFollower.useEffect": ()=>{
            setIsCoarse(isTouchOrCoarsePointer());
            const mm = window.matchMedia?.("(pointer: coarse)");
            const onChange = {
                "CursorFollower.useEffect.onChange": ()=>setIsCoarse(isTouchOrCoarsePointer())
            }["CursorFollower.useEffect.onChange"];
            mm?.addEventListener?.("change", onChange);
            return ({
                "CursorFollower.useEffect": ()=>mm?.removeEventListener?.("change", onChange)
            })["CursorFollower.useEffect"];
        }
    }["CursorFollower.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CursorFollower.useEffect": ()=>{
            if (!enabled || isCoarse) return;
            document.body.classList.add("custom-cursor");
            return ({
                "CursorFollower.useEffect": ()=>document.body.classList.remove("custom-cursor")
            })["CursorFollower.useEffect"];
        }
    }["CursorFollower.useEffect"], [
        enabled,
        isCoarse
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CursorFollower.useEffect": ()=>{
            if (prefersReduced || isCoarse) return;
            let raf = 0;
            const moveHandler = {
                "CursorFollower.useEffect.moveHandler": (e)=>{
                    const nx = e.clientX, ny = e.clientY;
                    if (!raf) {
                        raf = requestAnimationFrame({
                            "CursorFollower.useEffect.moveHandler": ()=>{
                                x.set(nx);
                                y.set(ny);
                                raf = 0;
                            }
                        }["CursorFollower.useEffect.moveHandler"]);
                    }
                    if (!enabled) setEnabled(true);
                }
            }["CursorFollower.useEffect.moveHandler"];
            const downHandler = {
                "CursorFollower.useEffect.downHandler": (e)=>{
                    const id = ++rippleIdRef.current;
                    setRipples({
                        "CursorFollower.useEffect.downHandler": (prev)=>[
                                ...prev.slice(-4),
                                {
                                    id,
                                    x: e.clientX,
                                    y: e.clientY
                                }
                            ]
                    }["CursorFollower.useEffect.downHandler"]);
                    setTimeout({
                        "CursorFollower.useEffect.downHandler": ()=>setRipples({
                                "CursorFollower.useEffect.downHandler": (prev)=>prev.filter({
                                        "CursorFollower.useEffect.downHandler": (r)=>r.id !== id
                                    }["CursorFollower.useEffect.downHandler"])
                            }["CursorFollower.useEffect.downHandler"])
                    }["CursorFollower.useEffect.downHandler"], 600);
                }
            }["CursorFollower.useEffect.downHandler"];
            window.addEventListener("mousemove", moveHandler, {
                passive: true
            });
            window.addEventListener("mousedown", downHandler, {
                passive: true
            });
            return ({
                "CursorFollower.useEffect": ()=>{
                    window.removeEventListener("mousemove", moveHandler);
                    window.removeEventListener("mousedown", downHandler);
                    if (raf) cancelAnimationFrame(raf);
                }
            })["CursorFollower.useEffect"];
        }
    }["CursorFollower.useEffect"], [
        x,
        y,
        prefersReduced,
        isCoarse,
        enabled
    ]);
    if (prefersReduced || isCoarse) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none fixed inset-0 z-[9999] cursor-layer mix-blend-screen",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    x: ringX,
                    y: ringY
                },
                className: "absolute",
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 0.2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "cursor-ring w-[28px] h-[28px] -ml-[14px] -mt-[14px] rounded-full"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/sadra portfoilo/idk/components/CursorFollower.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/sadra portfoilo/idk/components/CursorFollower.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    x: dotX,
                    y: dotY
                },
                className: "absolute",
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 0.18
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "cursor-dot w-2 h-2 -ml-1 -mt-1 rounded-full"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/sadra portfoilo/idk/components/CursorFollower.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/sadra portfoilo/idk/components/CursorFollower.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            ripples.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    className: "absolute rounded-full cursor-ripple",
                    style: {
                        left: r.x,
                        top: r.y,
                        width: 40,
                        height: 40,
                        marginLeft: -20,
                        marginTop: -20
                    },
                    initial: {
                        opacity: 0.55,
                        scale: 0.6
                    },
                    animate: {
                        opacity: 0,
                        scale: 2.3
                    },
                    transition: {
                        duration: 0.62,
                        ease: [
                            0.16,
                            1,
                            0.3,
                            1
                        ]
                    }
                }, r.id, false, {
                    fileName: "[project]/OneDrive/Desktop/sadra portfoilo/idk/components/CursorFollower.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/sadra portfoilo/idk/components/CursorFollower.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_s(CursorFollower, "kstR6izahhNTBW2QuDNIZj97AdM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$sadra__portfoilo$2f$idk$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = CursorFollower;
var _c;
__turbopack_context__.k.register(_c, "CursorFollower");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Desktop_sadra%20portfoilo_idk_components_ff02a1da._.js.map