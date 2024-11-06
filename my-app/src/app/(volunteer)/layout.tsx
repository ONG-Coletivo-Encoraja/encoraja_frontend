import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import Navbar from "@/components/volunteer/header/header";
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
      <div lang="pt-br">
        <div className={inter.className}>
          <div className="fixed top-0 w-full z-10">
            <Navbar />
          </div>
          <div className="flex h-full w-full">
            <div className="fixed w-16">
              <Sidebar />
            </div>
            <div className="flex-1 ml-16 bg-[#ededed]">
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
    redirect("/home");
  }

}
