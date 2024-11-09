import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import EventUpdateAdm from "@/components/administrator/events/eventsUpdate";
import EventUpdateVolu from "@/components/volunteer/events/eventsUpdate";

export default async function UpdateEventPage() {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/login");
  }

  const userRole = session?.user?.permission;

  switch (userRole) {
    case "administrator":
      return <EventUpdateAdm />
    case "volunteer":
      return <EventUpdateVolu />;
    default:
      return <p>Sem autorização</p>;
  }
}