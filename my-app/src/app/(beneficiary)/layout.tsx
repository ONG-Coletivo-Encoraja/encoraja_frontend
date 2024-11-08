import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/beneficiary/header/header";
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

  const isSidebarExpanded = true; // QUANDO ISSO AQUI TA TRUE O CHILDREN É ARRASTADO PRO LADO, SE MUDAR MANUALMENTE ELE VOLTA PRA POSIÇÃO QUE TAVA

  console.log("Sessão:", session);

  if (session.user.permission == "beneficiary") {
    return (
      <div lang="pt-br" className="bg-[#ededed] fixed inset-0">
        <div className={inter.className}>
          <div className="fixed top-0 w-full z-10">
            <Navbar />
          </div>
          <div className="relative flex h-screen overflow-hidden">
            <div className={isSidebarExpanded ? "w-[100px]" : "w-16"}> 
              <Sidebar />
            </div>
            <div
              className={`flex-1 ${
                isSidebarExpanded ? "ml-[100px]" : "ml-16"
              } overflow-y-auto transition-all duration-300 ease-in-out`} 
            >
              {children}
              <Toaster />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (session.user.permission == "administrator") {
    redirect("/home-admin");
  } else {
    redirect("/home-voluntario");
  }
}
