import ReportAdmin from '@/components/administrator/report/table';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import ReportEvent from '@/components/volunteer/events/reportEventForm';

export default async function UsersPage() {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/login");
  }

  const userRole = session?.user?.permission;

  switch (userRole) {
    case "administrator":
      return <ReportAdmin />
    case "volunteer":
      return <ReportEvent />
    default:
      return redirect("/paginal-inicial");
  }
}