import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import RegisterEventAdm from "@/components/administrator/events/eventForm";
import RegisterEventVolu from "@/components/volunteer/events/eventForm";

export default async function RegisterEventPage() {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/login");
  }

  const userRole = session?.user?.permission;

  switch (userRole) {
    case "administrator":
      return <RegisterEventAdm />
    case "volunteer":
      return <RegisterEventVolu />;
    default:
      return <p>Sem autorização</p>;
  }
}