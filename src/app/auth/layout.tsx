export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-screen ">
      <aside className="flex justify-center items-center bg-gray-100 p-4 w-full">
        <h2>Auth</h2>
      </aside>
      <main className="flex justify-center items-center p-4 w-full">
        {children}
      </main>
    </div>
  );
}
