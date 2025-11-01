"use client";
import { useThemeMode } from "@/components/ThemeProvider";
import { Sun, Moon } from "lucide-react";


export default function ModeToggle() {
const { theme, toggle } = useThemeMode();
return (
<button onClick={toggle} className="p-2 rounded-xl hover:bg-white/10 light:hover:bg-black/10 transition">
{theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
</button>
);
}