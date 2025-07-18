import { Container } from '@/shared/ui/Container';
import { Button } from '@heroui/button';
import type { ComponentProps } from 'react';
import { clsx } from 'clsx';
import { CONFIG } from '@/shared/backbone/config';


type Props = ComponentProps<'div'>

export function Section1Hero({ className, ...props }: Props) {
  return (
    <Container
      className={clsx(
        'relative flex flex-col items-center justify-center text-center text-balance min-height-screen',
        '-mt-header py-[calc(var(--header-height)+1rem)]',
        className,
      )}
      {...props}
    >
      {/*<h1 className='max-w-4xl text-6xl md:text-8xl font-black leading-none tracking-tight font-sans-base'>*/}
      {/*  <span className='bg-gradient-to-br dark:bg-gradient-to-tl from-foreground-500 to-foreground bg-clip-text text-transparent'>*/}
      {/*    {'x402 infra for '}*/}
      {/*  </span>*/}
      {/*  <span className='bg-clip-text bg-gradient-to-br dark:bg-gradient-to-tl from-secondary-500 to-secondary-600 text-transparent'>agents</span>*/}
      {/*  <span className='bg-gradient-to-br dark:bg-gradient-to-tl from-foreground-500 to-foreground bg-clip-text text-transparent'>*/}
      {/*    {' and '}*/}
      {/*  </span>*/}
      {/*  <span className='bg-clip-text bg-gradient-to-br dark:bg-gradient-to-tl from-primary-300 to-primary-600 text-transparent'>people</span>*/}
      {/*</h1>*/}
      <h1 className={clsx(
        'max-w-4xl text-6xl md:text-8xl font-black leading-none tracking-tight font-sans-base pb-5',
        'bg-gradient-to-br dark:bg-gradient-to-tl from-foreground-500 to-foreground bg-clip-text text-transparent',
      )}>
        x402 infra for{' '}
        <span className='underline decoration-secondary'>agents</span>
        {' '}and{' '}
        <span className='underline decoration-primary'>people</span>
      </h1>

      <p className='mt-6 text-lg md:text-xl tracking-wide'>Chain-agnostic. Stack-agnostic. Fast.</p>

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

        {/* TODO: docs */}
        {/*<Button radius='full' size='lg' variant='faded'>Docs</Button>*/}
      </div>
    </Container>
  );
}
