'use client';

import React from 'react';
import { cn } from '@/lib/utils/tailwind-merge';

import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export type AppBreadcrumbProps = {
  items: {
    label: string;
    href: string;
  }[];
};

export function AppBreadcrumb({ items }: AppBreadcrumbProps) {
  return (
    <Breadcrumb className="p-4 bg-white">
      <BreadcrumbList>
        {items?.map?.((item, index) => {
          const isLast = index === items.length - 1;
          const isFirst = index === 0;
          return (
            <React.Fragment key={index}>
              {!isFirst && <BreadcrumbSeparator>/</BreadcrumbSeparator>}

              <BreadcrumbItem>
                <BreadcrumbLink
                  asChild
                  className={cn(
                    isLast && !isFirst
                      ? 'text-primary hover:text-primary-hover'
                      : 'text-secondary-400 hover:text-secondary-500'
                  )}
                >
                  <Link href={item.href}>{item.label}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
