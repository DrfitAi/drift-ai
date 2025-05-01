// app/layout.tsx

import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Drift AI Prospecting",
  description: "Dusty editorial leadgen agent for cold outreach",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#f3f1ed] text-black font-sans min-h-screen antialiased">
        <div className="fixed inset-0 pointer-events-none z-[-1]">
          <div className="w-full h-full bg-[url('/grain.png')] opacity-[0.2] mix-blend-multiply" />
        </div>
        <main className="px-6 py-10 max-w-3xl mx-auto">{children}</main>
      </body>
    </html>
  );
}

