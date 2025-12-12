import { GraduationCap, UserRound } from 'lucide-react';

import { DEFAULT_AUTHORIZED_ROUTE } from '@/lib/constants/settings.constants';

export const LAYOUT_SIDEBAR_ITEMS = [
  {
    title: 'Diplomas',
    url: DEFAULT_AUTHORIZED_ROUTE,
    icon: GraduationCap,
  },
  {
    title: 'Account Settings',
    url: '/settings/profile',
    icon: UserRound,
  },
];
