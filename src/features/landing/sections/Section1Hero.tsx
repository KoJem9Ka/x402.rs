'use client';
import { Container } from '@/shared/ui/Container';
import { Button } from '@heroui/button';
import type { ComponentProps, ReactNode } from 'react';
import { clsx } from 'clsx';
import { useHeaderHeight } from '@/features/header/useHeaderHeight';
import { CONFIG } from '@/shared/backbone/config';


export function Section1Hero({ className, curlWithMoneySSRSlot, ...props }: ComponentProps<'div'> & {
  curlWithMoneySSRSlot?: ReactNode,
}) {
  const headerHeight = useHeaderHeight();
  const h1ClassesNormal = 'bg-gradient-to-br dark:bg-gradient-to-tl from-foreground-500 to-foreground bg-clip-text';

  return (
    <Container
      className={clsx('relative flex flex-col items-center justify-center text-center text-balance min-height-screen', className)}
      style={{ marginTop: `-${headerHeight}px`, paddingBlock: `${headerHeight + 16}px` }}
      {...props}
    >
      <h1 className='max-w-4xl text-6xl md:text-8xl font-black leading-none tracking-tight text-transparent'>
        <span className='neon-text'>x402</span>{' '}
        <span className={h1ClassesNormal}>infra</span>{' '}
        <span className={h1ClassesNormal}>for</span>{' '}
        <span className='text-primary'>agents</span>{' '}
        <span className={h1ClassesNormal}>and</span>{' '}
        <span className='text-success'>people</span>
      </h1>

      <p className='mt-6 text-lg md:text-xl tracking-wide'>Chain-agnostic. Stack-agnostic. Fast.</p>

      {curlWithMoneySSRSlot}

      <div className='flex flex-wrap justify-center gap-4 mt-8'>
        <Button
          as='a'
          href={CONFIG.facilitatorUrl.href}
          target='_blank'
          radius='full'
          size='lg'
          variant='shadow'
          color='primary'
        >Use hosted facilitator</Button>

        <Button radius='full' size='lg' variant='faded'>Docs</Button>
      </div>
    </Container>
  );
}
