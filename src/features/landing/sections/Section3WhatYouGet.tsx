import { Container } from '@/shared/ui/Container';
import { SectionHeading } from '@/features/landing/SectionHeading';
import { cn } from '@/shared/utils/cn';
import type { ComponentProps } from 'react';
import { Chip } from '@heroui/chip';
import { Button } from '@heroui/button';
import { Icon, Iconify } from '@/shared/ui/icons/Iconify';
import { Link } from '@heroui/link';
import { CardBody, CardHeader } from '@heroui/card';
import { Divider } from '@heroui/divider';
import { EldoraCard } from '@/shared/ui/EldoraCard';
import { CARD_WIDE_DIVIDERS } from '@/shared/ui/heroui/Card';
import { CHAINS_SUPPORTED } from '@/features/landing/constants/supported-chains';
import { CONFIG } from '@/shared/backbone/config';
import { clsx } from 'clsx';
import { IconSplit } from '@/shared/ui/icons/IconSplit';


export function Section3WhatYouGet({ className, ...props }: ComponentProps<'div'>) {
  return (
    <Container className={cn(className)} {...props}>
      <SectionHeading>
        {'What you get with '}
        <span className='neon-text'>x402.rs</span>
      </SectionHeading>

      <div className='space-y-6'>
        <EldoraCard classNames={CARD_WIDE_DIVIDERS}>
          <CardHeader className='justify-between'>
            <div className='flex items-center gap-3'>
              <div className='flex justify-center items-center p-3 rounded-small bg-foreground-200 neon-bg text-white'>
                <Iconify icon={Icon.Server} />
              </div>
              <h3 className='text-3xl font-bold'>Hosted Facilitator</h3>
            </div>

            <Button
              as='a'
              href={CONFIG.facilitatorUrl.href}
              target='_blank'
              className='group/btn shrink-0'
              variant='shadow'
              color='primary'
              endContent={<Iconify className='group-hover/btn:translate-x-1 transition size-5' icon={Icon.ArrowRight} />}
            >Try now</Button>
          </CardHeader>

          <Divider />

          <CardBody className='grid lg:grid-cols-2 gap-6'>
            <div className='flex flex-col gap-1 justify-between'>
              <p className='font-semibold text-xl'>Public, open, production-grade x402 facilitator, ready for use from any stack: JS, Go, Rust, curl.</p>
              <p>Built by early contributors to x402 ecosystem.</p>
              <div className='grow' />
              <p>
                <Link className='link' target='_blank' href={CONFIG.facilitatorUrl.href}>
                  {CONFIG.facilitatorUrl.host}
                </Link>
              </p>
            </div>

            <div className='space-y-3'>
              <p className='font-semibold'>Chains supported:</p>

              <div className='grid grid-cols-2 sm:grid-cols-3 gap-[1ch]'>
                {CHAINS_SUPPORTED.map((chain) => (
                  <Chip className={clsx('text-center max-w-none rounded-small border shadow-small', chain.isSoon ? 'border-default bg-default-100' : 'border-success bg-success-100 shadow-success-500')} key={chain.name}>
                    <span>{chain.name}</span>
                    {chain.isSoon ? <sup className='text-foreground/50'>{' (soon)'}</sup> : null}
                  </Chip>
                ))}
              </div>

              <p className='text-balance text-center'>
                <Link className='link lg:right-0' href={`mailto:${CONFIG.contacts.email}`}>
                  Want x402 support on your chain? Reach out
                </Link>
              </p>
            </div>
          </CardBody>
        </EldoraCard>

        <EldoraCard classNames={CARD_WIDE_DIVIDERS}>
          <CardHeader>
            <div className='flex items-center gap-3'>
              <div className='flex justify-center items-center p-3 rounded-small bg-foreground-200 neon-bg text-white'>
                <Iconify icon={Icon.Middleware} />
              </div>
              {/*<Image src={RustCrabSvg} alt='' className='size-12' />*/}
              <h3 className='text-3xl font-bold'>Rust middleware</h3>
            </div>
          </CardHeader>

          <Divider />

          <CardBody className='grid lg:grid-cols-2 gap-3 lg:gap-6 md:text-justify'>
            <div className='space-y-1'>
              <h4 className='font-semibold text-xl'>Send payment with Reqwest</h4>
              <p>Use Reqwest client middleware in Rust to send x402 payments. Supports custom logic for key management, token selection, and value caps. Bring your own signer.</p>
            </div>

            <div className='space-y-1'>
              <h4 className='font-semibold text-xl'>Receive payment with Axum</h4>
              <p>Drop-in middleware to enforce x402 payments on any Rust HTTP endpoint. Dynamic pricing coming soon.</p>
            </div>
          </CardBody>
        </EldoraCard>

        <EldoraCard classNames={CARD_WIDE_DIVIDERS}>
          <CardHeader>
            <div className='flex items-center gap-3'>
              <div className='flex justify-center items-center p-3 rounded-small bg-foreground-200 neon-bg text-white'>
                <IconSplit />
              </div>
              <h3 className='text-3xl font-bold'>
                Split payments{' '}
                <span className='font-normal text-foreground/50'><sup>(soon)</sup></span>
              </h3>
            </div>
          </CardHeader>

          <Divider />

          <CardBody className='space-y-1'>
            <p className='font-semibold text-xl'>Built-in revenue sharing for agents, platforms, and services.</p>
            <p>Attach payout rules to your endpoint: 30% to the API dev, 70% to the underlying model provider. Transparent, programmable, and enforced onchain.</p>
          </CardBody>
        </EldoraCard>
      </div>
    </Container>
  );
}
