'use client'

import { Inter } from "next/font/google";
import { ReactNode, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/administrator/header/header";
import Sidebar from "@/components/administrator/sidebar/sidebar";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] }); 

interface LayoutProps {
  children: ReactNode;
}

export default function ProtectedLayout({ children }: LayoutProps) {
  const { data: session } = useSession();
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  if (!session) {
    redirect("/login");
    return null;
  }
  
  useEffect(() => {
    const sidebarState = sessionStorage.getItem('sidebarExpanded') === 'true';
    setSidebarExpanded(sidebarState);
  }, []);

  const toggleSidebar = () => {
    const newSidebarState = !sidebarExpanded;
    setSidebarExpanded(newSidebarState);
    sessionStorage.setItem('sidebarExpanded', newSidebarState.toString());
  };


  if (session.user.permission === "administrator") {
    return (
      <div lang="pt-br" className="bg-[#ededed] fixed inset-0">
        <div className={inter.className}>
          <div className="fixed top-0 w-full z-10">
            <Header />
          </div>
          <div className="relative flex h-screen overflow-hidden">
            <div
              className={`fixed top-0 left-0 h-full transition-all duration-300 bg-white border-r ${
                sidebarExpanded ? 'w-[250px]' : 'w-[68px]'
              }`}
            >
              <Sidebar initialExpanded={sidebarExpanded} toggleSidebar={toggleSidebar} />
            </div>
            <div
              className={`flex-1 mt-16 transition-all duration-300 overflow-y-auto ${
                sidebarExpanded ? 'ml-[250px]' : 'ml-[68px]'
              }`}
            >
              {children}
              <Toaster />
            </div>
          </div>
        </div>
      </div>
    );  
  }

  if (session.user.permission === "beneficiary") {
    return redirect("/home");
  } else {
    return redirect("/home-voluntario");
  }
}