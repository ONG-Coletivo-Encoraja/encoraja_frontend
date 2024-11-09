import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { AdminProfile } from "@/components/administrator/profile/profile";
import { BeneficiaryProfile } from "@/components/beneficiary/profile/profile";
import { VolunteerProfile } from "@/components/volunteer/profile/profile";

export default async function ProfilePage() {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/login");
  }

  const userRole = session?.user?.permission;

  switch (userRole) {
    case "administrator":
      return <AdminProfile />
    case "beneficiary":
      return <BeneficiaryProfile />;
    case "volunteer":
      return <VolunteerProfile />;
    default:
      return <p>Perfil não reconhecido</p>;
  }
}