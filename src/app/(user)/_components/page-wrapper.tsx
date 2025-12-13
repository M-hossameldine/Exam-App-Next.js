import PageHeader, { type PageHeaderProps } from './page-header';

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
    <main className="h-screen w-full flex flex-col items-stretch bg-secondary-50">
      <PageHeader title={title} icon={icon} goBackUrl={goBackUrl} />

      <div className="px-6 pb-6 w-full">{children}</div>
    </main>
  );
}
