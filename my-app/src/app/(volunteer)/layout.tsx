import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import Header from "@/components/volunteer/header/header";
import Sidebar from "@/components/volunteer/sidebar/sidebar";
import { Toaster } from "@/components/ui/toaster";


const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: ReactNode;
}

export default async function ProtectedLayout({ children }: LayoutProps) {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/login");
    return null;
  } 

  console.log("Sessão:", session);

  if (session.user.permission == "volunteer") { 
    
  return (
    <html lang="pt-br">
      <body className={inter.className}>
      <Header className="fixed top-0 w-full z-10" />
        <div className="flex pt-[60px]">
          <Sidebar />
          <div className="flex-1 overflow-hidden">
            {children}
            <Toaster />
          </div>
        </div>
      </body>
    </html>
  );
} 

if (session.user.permission == "administrator"){
  redirect("/home-admin");
} else {
  redirect("/home");
}

}
