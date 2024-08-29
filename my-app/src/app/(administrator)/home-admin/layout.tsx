import { ReactNode } from "react";
import { nextAuthOptions } from "../../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
  createEvents: ReactNode;
}

export default async function ProtectedLayout({ children, createEvents }: LayoutProps) {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    // Se não houver sessão, redirecione para a página de login
    redirect("/login");
    return null;
  }

  return (
    <div>
      {children}
      {createEvents} 
    </div>
  );
}
