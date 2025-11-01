import type { Config } from "tailwindcss";


const config: Config = {
darkMode: ["class"],
content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
theme: {
extend: {
colors: {
brand: { 500: "#3b82f6", 600: "#2563eb" },
accent: { 500: "#22c55e", 600: "#16a34a" }
},
animation: {
float: "float 8s ease-in-out infinite",
},
keyframes: {
float: { "0%,100%":{transform:"translateY(0)"}, "50%":{transform:"translateY(-10px)"} }
}
},
},
plugins: [],
};


export default config;