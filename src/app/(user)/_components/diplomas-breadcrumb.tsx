'use client';

import { useParams, usePathname } from 'next/navigation';

import { deslugifyTitle } from '@/lib/utils/navigation';

import { AppBreadcrumb } from '@/components/ui/app-breadcrumb';

export default function DiplomasBreadcrumb() {
  const { diplomaId, diplomaSlug, examId, slug } = useParams<{
    diplomaId: string;
    diplomaSlug: string;
    examId: string;
    slug: string;
  }>();

  const pathname = usePathname();

  const isAccountSettingsPage = pathname.includes('/settings/');

  const items = [
    {
      label: 'Home',
      href: '/',
    },
    ...(isAccountSettingsPage
      ? [
          {
            label: 'Account Settings',
            href: '/settings/profile',
          },
        ]
      : []),
    ...(diplomaId
      ? [
          {
            label: 'Exams',
            href: `/diplomas/${diplomaId}/${diplomaSlug}`,
          },
        ]
      : []),
    ...(examId
      ? [
          {
            label: deslugifyTitle(slug),
            href: `/diplomas/${diplomaId}/${diplomaSlug}/exams/${examId}/${slug}`,
          },
          {
            label: 'Questions',
            href: `/diplomas/${diplomaId}/${diplomaSlug}/exams/${examId}/${slug}`,
          },
        ]
      : []),
  ];

  return <AppBreadcrumb items={items} />;
}
