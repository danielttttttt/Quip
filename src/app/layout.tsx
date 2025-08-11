'use client';

import { Inter } from "next/font/google";
import { usePathname } from 'next/navigation';
import "./globals.css";
import Navigation from "@/components/Navigation";
import { AuthProvider } from "@/contexts/AuthContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  
  // Hide navigation on auth pages
  const hideNavigation = pathname === '/login' || pathname === '/signup';

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased min-h-screen bg-gray-50`}>
        <AuthProvider>
          {!hideNavigation && <Navigation />}
          <main className="min-h-screen">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}

