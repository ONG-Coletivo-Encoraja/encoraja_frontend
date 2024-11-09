import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import EventsDetailsAdm from '@/components/administrator/events/eventsDetails';
import EventsDetailsBene from '@/components/beneficiary/events/eventsDetails';
import EventsDetailsVolu from '@/components/volunteer/events/eventsDetails';

export default async function ProfilePage() {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/login");
  }

  const userRole = session?.user?.permission;

  switch (userRole) {
    case "administrator":
      return <EventsDetailsAdm />
    case "beneficiary":
      return <EventsDetailsBene />;
    case "volunteer":
      return <EventsDetailsVolu />;
    default:
      return <p>Perfil não reconhecido</p>;
  }
}