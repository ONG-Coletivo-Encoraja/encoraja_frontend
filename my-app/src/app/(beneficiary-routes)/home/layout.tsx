import { ReactNode } from "react";
import { nextAuthOptions } from "../../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
  events: ReactNode;
}

export default async function ProtectedLayout({ children, events }: LayoutProps) {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    // Se não houver sessão, redirecione para a página de login
    redirect("/login");
    return null;
  }

  return (
    <div>
      {children}
      {events} 
    </div>
  );
}
