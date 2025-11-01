"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";


type Theme = "dark" | "light";
const ThemeCtx = createContext<{ theme: Theme; toggle: () => void }>({ theme: "dark", toggle: () => {} });


export function ThemeProvider({ children }: { children: React.ReactNode }) {
const [theme, setTheme] = useState<Theme>("dark");


useEffect(() => {
const stored = localStorage.getItem("theme") as Theme | null;
if (stored) setTheme(stored);
else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) setTheme("light");
}, []);


useEffect(() => {
const root = document.documentElement;
root.classList.remove("light");
if (theme === "light") root.classList.add("light");
localStorage.setItem("theme", theme);
}, [theme]);


const value = useMemo(() => ({ theme, toggle: () => setTheme(t => (t === "dark" ? "light" : "dark")) }), [theme]);


return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}


export function useThemeMode() { return useContext(ThemeCtx); }