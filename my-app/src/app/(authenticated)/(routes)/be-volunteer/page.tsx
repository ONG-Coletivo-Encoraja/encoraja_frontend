import { BeAVolunteer } from '@/components/beneficiary/beavolunteer/volunteerform';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function UsersPage() {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/login");
  }

  const userRole = session?.user?.permission;

  if (userRole === "beneficiary") {
    return <BeAVolunteer />
  } 
}