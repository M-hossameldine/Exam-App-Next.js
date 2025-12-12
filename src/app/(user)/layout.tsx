import LayoutSidebar from './_components/layout-sidebar';

type AuthorizedLayoutProps = {
  children: React.ReactNode;
};

export default function AuthorizedLayout({ children }: AuthorizedLayoutProps) {
  return (
    <div className="flex h-screen w-full">
      <LayoutSidebar />

      {children}
    </div>
  );
}
