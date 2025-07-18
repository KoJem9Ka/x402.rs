import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import { clsx } from 'clsx';
import { Geologica } from 'next/font/google';
import { Providers } from '@/app/providers';
// import { Sansation } from 'next/font/google';
// import { Rozha_One } from 'next/font/google';
// import { Oranienbaum } from 'next/font/google';
// import { Abhaya_Libre } from 'next/font/google';
// @ts-expect-error ???
import '@/shared/css/globals.css';


const geologica = Geologica({
  weight: ['400', '600', '700', '900'],
  style: 'normal',
  subsets: ['latin'],
  display: 'block',
  variable: '--font-geologica-raw',
});


export const metadata: Metadata = {
  title: 'x402.rs',
  description: 'x402 infra for agents and people',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang='en' className={clsx('dark', geologica.variable)}>
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
