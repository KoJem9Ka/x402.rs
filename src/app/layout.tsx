import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import { clsx } from 'clsx';
import { Providers } from '@/app/providers';
// @ts-expect-error ???
import '@/shared/css/globals.css';


export const metadata: Metadata = {
  title: 'x402.rs',
  description: 'x402 infra for agents and people',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang='en' className='dark'>
    <body className={clsx(
      'antialiased bg-background text-foreground',
      'min-height-screen flex flex-col',
    )}>
    <Providers>
      {children}
    </Providers>
    </body>
    </html>
  );
}
