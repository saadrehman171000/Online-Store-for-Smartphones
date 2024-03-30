import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
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
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
