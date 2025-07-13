'use client';
import type { PropsWithChildren } from 'react';
import { useRouter } from 'next/navigation';
import { HeroUIProvider } from '@heroui/react';
import { ResponsiveStoreEngine } from '@/shared/stores/responsive.store';
import { ThemeStoreEngine } from '@/features/theme/theme.store';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/shared/backbone/query-client';


declare module '@react-types/shared' {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>['push']>[1]>;
  }
}

export function Providers({ children }: PropsWithChildren) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <QueryClientProvider client={queryClient}>
        {children}

        <ThemeStoreEngine />
        <ResponsiveStoreEngine />
      </QueryClientProvider>
    </HeroUIProvider>
  );
}
