import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { AuthProvider } from "@/context/AuthContext";
import { Metadata } from 'next';
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
    title: 'ChurchDesk - Church Management Platform',
    description: 'A modern platform for church requisition and financial management.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased min-h-screen bg-slate-50`}>
                <AuthProvider>
                    {children}
                </AuthProvider>
                <Toaster position="top-right" />
            </body>
        </html>
    );
}
