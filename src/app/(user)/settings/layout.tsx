import PageWrapper from '../_components/page-wrapper';
import SettingsSidebar from './_components/settings-sidebar';

import { UserRound } from 'lucide-react';

import { DEFAULT_AUTHORIZED_ROUTE } from '@/lib/constants/settings.constants';

type SettingsLayoutProps = {
  children: React.ReactNode;
};

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <PageWrapper
      title="Account Settings"
      icon={UserRound}
      goBackUrl={DEFAULT_AUTHORIZED_ROUTE}
    >
      <div className="flex h-full w-full">
        <SettingsSidebar />

        {children}
      </div>
    </PageWrapper>
  );
}
