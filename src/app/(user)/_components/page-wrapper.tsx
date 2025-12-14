import PageHeader, { type PageHeaderProps } from './page-header';
import AppBreadcrumb from './diplomas-breadcrumb';

type PageWrapperProps = PageHeaderProps & {
  children: React.ReactNode;
};

export default function PageWrapper({
  title,
  icon,
  goBackUrl,
  children,
}: PageWrapperProps) {
  return (
    <main className="h-screen w-full flex flex-col items-stretch bg-secondary-50 overflow-y-auto">
      <AppBreadcrumb />

      <PageHeader title={title} icon={icon} goBackUrl={goBackUrl} />

      <div className="px-6 pb-6 w-full h-full">{children}</div>
    </main>
  );
}
