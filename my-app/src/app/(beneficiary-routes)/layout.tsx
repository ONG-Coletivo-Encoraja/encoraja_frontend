import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import Header from "@/components/home/header";
import Sidebar from "@/components/home/sidebar";
import ContextProvider from "@/components/home/context-provider";

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

  return (
    <html lang="pt-br">
      <body className={inter.className}>
          <Header />
          <div className="flex">
            <Sidebar />
            <div className="w-full overflow-x-auto">
              <div className="sm:h-[calc(99vh-60px)] overflow-auto ">
                <div className="w-full flex justify-center mx-auto   overflow-auto h-[calc(100vh - 120px)] overflow-y-auto relative">
                  <div className="w-full md:max-w-6xl">{children}</div>
                </div>
              </div>
            </div>
          </div>
      </body>
    </html>
  );
}

