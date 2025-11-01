import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import CursorFollower from "@/components/CursorFollower";

export const metadata: Metadata = {
  title: "Sadra | Full-Stack Dev",
  description: "Premium interactive portfolio built with Next.js 14",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased selection:bg-brand-600/20 selection:text-current">
        <CursorFollower
        />

        <ThemeProvider>
          <main id="main">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
