import LayoutAside from "./_components/layout-aside";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-screen ">
      <LayoutAside className="w-full" />
      <main className="flex justify-center items-center p-4 w-full">
        {children}
      </main>
    </div>
  );
}
