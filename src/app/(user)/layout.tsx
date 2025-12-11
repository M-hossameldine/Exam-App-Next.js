import LayoutSidebar from './_components/layout-sidebar';

type AuthorizedLayoutProps = {
  children: React.ReactNode;
};

export default function AuthorizedLayout({ children }: AuthorizedLayoutProps) {
  return (
    <div className="flex h-screen">
      <LayoutSidebar />

      <main className="w-full">{children}</main>
    </div>
  );
}
