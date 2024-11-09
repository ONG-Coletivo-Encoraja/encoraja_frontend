'use client';

import { Toaster } from "@/components/ui/toaster";
import { useSession } from "next-auth/react";
import { ReactNode, useEffect, useState } from "react";
import HeaderAdm from "@/components/administrator/header/header";
import HeaderBene from "@/components/beneficiary/header/header";
import HeaderVolu from "@/components/volunteer/header/header";
import SidebarAdm from "@/components/administrator/sidebar/sidebar";
import SidebarBene from "@/components/beneficiary/sidebar/sidebar";
import SidebarVolu from "@/components/volunteer/sidebar/sidebar";

interface LayoutProps {
    children: ReactNode;
  }

export default function RootLayout({ children } : LayoutProps)  {
    const { data: session } = useSession();
    const [sidebarExpanded, setSidebarExpanded] = useState(false);

    useEffect(() => {
        const sidebarState = sessionStorage.getItem('sidebarExpanded') === 'true';
        setSidebarExpanded(sidebarState);
      }, []);
    
      const toggleSidebar = () => {
        const newSidebarState = !sidebarExpanded;
        setSidebarExpanded(newSidebarState);
        sessionStorage.setItem('sidebarExpanded', newSidebarState.toString());
      };

      // if (!session) {
      //   redirect("/login");
      //   return null;
      // }

      if (session?.user.permission === "administrator") {
        return (
          <div lang="pt-br" className="bg-[#ededed] fixed inset-0">
            <div>
              <div className="fixed top-0 w-full z-10">
                <HeaderAdm />
              </div>
              <div className="relative flex h-screen overflow-hidden">
                <div
                  className={`fixed top-0 left-0 h-full transition-all duration-300 bg-white border-r ${
                    sidebarExpanded ? 'w-[250px]' : 'w-[68px]'
                  }`}
                >
                  <SidebarAdm initialExpanded={sidebarExpanded} toggleSidebar={toggleSidebar} />
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

      if (session?.user.permission === "beneficiary") {
        return (
          <div lang="pt-br" className="bg-[#ededed] fixed inset-0">
            <div>
              <div className="fixed top-0 w-full z-10">
                <HeaderBene />
              </div>
              <div className="relative flex h-screen overflow-hidden">
                <div
                  className={`fixed top-0 left-0 h-full transition-all duration-300 bg-white border-r ${
                    sidebarExpanded ? 'w-[250px]' : 'w-[68px]'
                  }`}
                >
                  <SidebarBene initialExpanded={sidebarExpanded} toggleSidebar={toggleSidebar} />
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

      if (session?.user.permission === "volunteer") {
        return (
          <div lang="pt-br" className="bg-[#ededed] fixed inset-0">
            <div>
              <div className="fixed top-0 w-full z-10">
                <HeaderVolu />
              </div>
              <div className="relative flex h-screen overflow-hidden">
                <div
                  className={`fixed top-0 left-0 h-full transition-all duration-300 bg-white border-r ${
                    sidebarExpanded ? 'w-[250px]' : 'w-[68px]'
                  }`}
                >
                  <SidebarVolu initialExpanded={sidebarExpanded} toggleSidebar={toggleSidebar} />
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
}