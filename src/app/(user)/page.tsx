import PageWrapper from './_components/page-wrapper';
import DiplomasList from './_components/diplomas-list';

import { BookOpenCheck } from 'lucide-react';

export default async function Page() {
  return (
    <PageWrapper title="Diplomas" icon={BookOpenCheck}>
      <DiplomasList />
    </PageWrapper>
  );
}
