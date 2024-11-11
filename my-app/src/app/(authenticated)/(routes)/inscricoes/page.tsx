import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import Inscriptions from "@/components/administrator/inscriptions/inscriptionsPage";
import MyInscriptions from "@/components/shared/myInscriptionsTable";

export default async function EventsPage() {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/login");
  }

  const userRole = session?.user?.permission;

  switch (userRole) {
    case "administrator":
      return <Inscriptions />
    default:
      return <MyInscriptions />;
  }
}