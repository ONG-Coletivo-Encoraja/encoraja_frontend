import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import Header from "@/components/administrator/header/header";
import Sidebar from "@/components/administrator/sidebar/sidebar";

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

  if (session.user.permission == "administrator") { 
    return (
      <html lang="pt-br">
        <body className={inter.className}>
          <Header className="fixed top-0 w-full z-10" />
          <div className="flex">
            <Sidebar />
          </div>
          <div className="flex-1 pt-[70px] ml-60 overflow-hidden">
              {children}
          </div>
        </body>
      </html>
    );
  } 

  if (session.user.permission == "beneficiary"){
    redirect("/home");
  } else {
    redirect("/home-voluntario");
  }
}