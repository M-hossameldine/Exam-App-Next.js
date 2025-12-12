import PageWrapper from '../../_components/page-wrapper';
import ExamsList from './_components/exams-list';

import { BookOpenCheck } from 'lucide-react';
import { DEFAULT_AUTHORIZED_ROUTE } from '@/lib/constants/settings.constants';

export default function Page() {
  return (
    <PageWrapper
      title="Exams"
      icon={BookOpenCheck}
      goBackUrl={DEFAULT_AUTHORIZED_ROUTE}
    >
      <ExamsList />
    </PageWrapper>
  );
}
