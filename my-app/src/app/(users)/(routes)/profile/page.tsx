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
      return <div className="h-screen" style={{
        backgroundImage: "url('/img/backgroundgirls.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="h-full w-full flex items-center justify-center">
          <AdminProfile />
        </div>
      </div>;
    case "beneficiary":
      return <BeneficiaryProfile />;
    case "volunteer":
      return <VolunteerProfile />;
    default:
      return <p>Perfil não reconhecido</p>;
  }
}





