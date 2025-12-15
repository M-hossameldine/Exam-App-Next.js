import LayoutAside from './_components/layout-aside';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full">
      <LayoutAside className="w-full" />
      <main className="w-full flex flex-col justify-center items-center p-8 py-28">
        <div className="w-full max-w-md">{children}</div>
      </main>
    </div>
  );
}
