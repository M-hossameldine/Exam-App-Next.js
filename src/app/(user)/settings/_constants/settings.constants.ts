import { CircleUserRound, Lock } from 'lucide-react';

export const SETTINGS_SIDEBAR_ITEMS = [
  {
    title: 'Profile',
    url: '/settings/profile',
    icon: CircleUserRound,
    matchRegex: /settings\/profile/,
  },
  {
    title: 'Change Password',
    url: '/settings/change-password',
    icon: Lock,
    matchRegex: /settings\/change-password/,
  },
] as const;
