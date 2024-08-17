'use client'

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface NextAuthSessionProviderPropos {
    children: ReactNode
}

export default function NextAuthSessionProvider({children} : NextAuthSessionProviderPropos) {
    return <SessionProvider>
        {children}
    </SessionProvider>
}