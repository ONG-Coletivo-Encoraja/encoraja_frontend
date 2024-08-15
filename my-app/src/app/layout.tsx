

'use client'

import { Inter } from "next/font/google";
import Head from 'next/head';
import "../styles/globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { usePathname } from 'next/navigation';
import { checkIsPublicRoute } from '@/functions/check-is-public-route';
import PrivateRoute from '@/components/PrivateRoute';
import NextAuthSessionProvider from "@/providers/sessionProvider";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children } : { children: React.ReactNode })  {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthSessionProvider>
          {children}
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
