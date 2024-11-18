import { ReactNode } from "react";
import { nextAuthOptions } from "@/utils/nextAuthOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";

interface PrivateLayoutProps {
    children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
    const session = await getServerSession(nextAuthOptions)

    if (session) {
        redirect('/pagina-inicial')
    }

    return <>
        {children}
        <Toaster />
    </>
}