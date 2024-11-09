import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import HomeAdmin from '@/components/administrator/home/home';
import HomeBene from '@/components/beneficiary/home/home';
import HomeVolu from '@/components/volunteer/home/home';

export default async function ProfilePage() {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/login");
  }

  const userRole = session?.user?.permission;

  switch (userRole) {
    case "administrator":
      return <HomeAdmin />
    case "beneficiary":
      return <HomeBene />;
    case "volunteer":
      return <HomeVolu />;
    default:
      return <p>Perfil não reconhecido</p>;
  }
}