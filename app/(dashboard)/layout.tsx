import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { getPermission } = getKindeServerSession();
  const permission = await getPermission("dashboard:go");

  return (
    <div className="flex h-screen flex-col">
      {permission?.isGranted && <Navbar dashboard={true} />}
      {!permission?.isGranted && <Navbar dashboard={false} />}

      <div className="flex my-40 gap-32">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
