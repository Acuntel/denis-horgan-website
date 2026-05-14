import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import AdminDashboard from "./AdminDashboard";

export const dynamic = "force-dynamic";

export const metadata = { title: "Admin" };

export default function AdminPage() {
  if (!isAuthenticated()) redirect("/admin/login");
  return <AdminDashboard />;
}
