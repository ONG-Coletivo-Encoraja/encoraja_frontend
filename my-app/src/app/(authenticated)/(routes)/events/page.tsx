import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { EventsList as EventListAdm } from "@/components/administrator/events/eventsList";
import { EventsList as EventListVolu } from "@/components/volunteer/events/eventsList";
import { EventsList as EventListBene } from "@/components/beneficiary/events/eventsList";

export default async function EventsPage() {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/login");
  }

  const userRole = session?.user?.permission;

  switch (userRole) {
    case "administrator":
      return <EventListAdm />
    case "beneficiary":
      return <EventListBene />;
    case "volunteer":
      return <EventListVolu />;
    default:
      return <p>Perfil não reconhecido</p>;
  }
}