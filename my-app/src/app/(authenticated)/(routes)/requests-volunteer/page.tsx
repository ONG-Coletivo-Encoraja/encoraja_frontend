import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { RequestVolunteerList } from "@/components/administrator/users/requestVolunteerList";

export default async function UsersPage() {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/login");
  }

  const userRole = session?.user?.permission;

  if (userRole === "administrator") {
    return <RequestVolunteerList />
  } 
}