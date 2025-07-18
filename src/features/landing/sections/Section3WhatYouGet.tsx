'use client';

import { Container } from '@/shared/ui/Container';
import { SectionHeading } from '@/features/landing/SectionHeading';
import { cn } from '@/shared/utils/cn';
import type { ComponentProps } from 'react';
import { Button } from '@heroui/button';
import { Icon, Iconify } from '@/shared/ui/icons/Iconify';
import { Link } from '@heroui/link';
import { CardBody, CardHeader } from '@heroui/card';
import { Divider } from '@heroui/divider';
import { EldoraCard } from '@/shared/ui/EldoraCard';
import { CARD_WIDE_DIVIDERS } from '@/shared/ui/heroui/Card';
import { CONFIG } from '@/shared/backbone/config';
import { IconSplit } from '@/shared/ui/icons/IconSplit';
import { useIsSm } from '@/shared/stores/responsive.store';
import { ChainsSupported } from '@/features/landing/ChainsSupported';
import { PaperWithBloom } from '@/shared/ui/PaperWithBloom';


export function Section3WhatYouGet({ className, ...props }: ComponentProps<'div'>) {
  const isSm = useIsSm();

  return (
    <Container className={cn(className)} {...props}>
      <SectionHeading>What you get with x402.rs</SectionHeading>

      <div className='space-y-6'>
        <EldoraCard classNames={CARD_WIDE_DIVIDERS}>
          <CardHeader className='items-start max-sm:flex-col gap-3'>
            <div className='sm:grow flex items-center gap-3'>
              <PaperWithBloom className='p-3'>
                <Iconify icon={Icon.Server} />
              </PaperWithBloom>

              <h3 className='text-xl sm:text-3xl font-bold'>Hosted Facilitator</h3>
            </div>

            <Button
              as='a'
              href={CONFIG.facilitatorUrl.href}
              target='_blank'
              size={isSm ? 'md' : 'sm'}
              fullWidth={!isSm}
              className='group/btn shrink-0 ml-auto'
              variant='shadow'
              color='primary'
              endContent={<Iconify className='group-hover/btn:translate-x-1 transition size-5' icon={Icon.ArrowRight} />}
            >Try now</Button>
          </CardHeader>

          <Divider />

          <CardBody className='grid lg:grid-cols-2 gap-6'>
            <div className='flex flex-col gap-1 justify-between'>
              <p className='font-semibold text-xl'>Public, open, production-grade x402 facilitator, ready for use from any stack: JS, Go, Rust, curl.</p>
              <p className='text-foreground-500'>Built by early contributors to x402 ecosystem.</p>
              <div className='grow' />
              <p>
                <Link className='link' target='_blank' href={CONFIG.facilitatorUrl.href}>
                  {CONFIG.facilitatorUrl.host}
                </Link>
              </p>
            </div>

            <div className='space-y-3'>
              <p className='font-semibold'>Chains supported:</p>

              <ChainsSupported className='grid grid-cols-2 sm:grid-cols-3 gap-2 max-sm:text-smal' isWithLabel />

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
              <PaperWithBloom className='p-3'>
                <Iconify icon={Icon.Middleware} />
              </PaperWithBloom>

              <h3 className='text-xl sm:text-3xl font-bold'>Rust middleware</h3>
            </div>
          </CardHeader>

          <Divider />

          <CardBody className='grid lg:grid-cols-2 gap-3 lg:gap-6 md:text-justify'>
            <div className='space-y-1'>
              <h4 className='font-semibold text-xl'>Send payment with Reqwest</h4>
              <p>Use Reqwest client middleware to send x402 payments. Supports custom logic for key management, token selection, and value caps. Bring your own signer.</p>
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
              <PaperWithBloom className='p-3'>
                <IconSplit />
              </PaperWithBloom>

              <h3 className='text-xl sm:text-3xl font-bold'>
                Split payments{' '}
                <sup className='font-normal text-foreground/50'>(soon)</sup>
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
