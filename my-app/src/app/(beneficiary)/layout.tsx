import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/beneficiary/header/header";
import Sidebar from "@/components/beneficiary/sidebar/sidebar";


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

  const isSidebarExpanded = true;

  console.log("Sessão:", session);

  if (session.user.permission == "beneficiary") {

    return (
      <html lang="pt-br">
        <body className={inter.className}>
          <Header className="fixed top-0 w-full z-10" />
          <div className="flex pt-[60px] h-full w-full">
            <div className="fixed w-16"> 
              <Sidebar />
            </div>
            <div className="flex-1 ml-16 bg-[#ededed]"> 
              {children}
              <Toaster />
            </div>
          </div>
        </body>
      </html>
    );
  }

  if (session.user.permission == "administrator") {
    redirect("/home-admin");
  } else {
    redirect("/home-voluntario");
  }

}
