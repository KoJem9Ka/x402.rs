import { Container } from '@/shared/ui/Container';
import { SectionHeading } from '@/features/landing/SectionHeading';
import type { ComponentProps } from 'react';
import { cn } from '@/shared/utils/cn';
import { EldoraCard } from '@/shared/ui/EldoraCard';
import { CardBody, CardFooter, CardHeader } from '@heroui/card';
import { Link } from '@heroui/link';
import { Icon, Iconify } from '@/shared/ui/icons/Iconify';
import { Tooltip } from '@heroui/tooltip';
import { CARD_WIDE } from '@/shared/ui/heroui/Card';
import { Button } from '@heroui/button';
import { CONFIG } from '@/shared/backbone/config';
import { IconBlockchainXDC } from '@/shared/ui/icons/IconBlockchainXDC';
import { NewsletterForm } from '@/features/landing/newsletter/NewsletterForm';
import { IconBlockchainOptimism } from '@/shared/ui/icons/IconBlockchainOptimism';


export function Section4StayInLoop({ className, ...props }: ComponentProps<'div'>) {
  return (
    <Container className={cn(className)} {...props}>
      <SectionHeading>
        {'Stay in the '}
        <span className='neon-text'>loop</span>
      </SectionHeading>

      <div className='grid md:grid-cols-2 gap-6'>
        <EldoraCard classNames={CARD_WIDE} className='text-center'>
          <CardHeader className='block text-xl font-bold tracking-tight'>
            Already building with x402?
          </CardHeader>

          <CardBody className='grow justify-center gap-1'>
            <p className='text-center text-balance'>
              Use the public facilitator at{' '}
              <Link className='inline link' href={CONFIG.facilitatorUrl.href} target='_blank'>{CONFIG.facilitatorUrl.host}</Link>
              {' '}for any chain:
            </p>

            <div className='flex mx-auto gap-1'>
              <Tooltip content='Base'>
                <div className='p-2 bg-foreground-200 rounded-small flex'><Iconify isColored icon={Icon.BlockchainBase} /></div>
              </Tooltip>
              <Tooltip content='Avalanche'>
                <div className='p-2 bg-foreground-200 rounded-small flex'><Iconify isColored icon={Icon.BlockchainAvalanche} /></div>
              </Tooltip>
              <Tooltip content='XDC'>
                <div className='p-2 bg-foreground-200 rounded-small flex'><IconBlockchainXDC /></div>
              </Tooltip>
              <Tooltip content='Arbitrum (soon)'>
                <div className='p-2 bg-foreground-200 rounded-small flex opacity-50'><Iconify isColored icon={Icon.BlockchainArbitrum} /></div>
              </Tooltip>
              <Tooltip content='Solana (soon)'>
                <div className='p-2 bg-foreground-200 rounded-small flex opacity-50'><Iconify isColored icon={Icon.BlockchainSolana} /></div>
              </Tooltip>
              <Tooltip content='Optimism (soon)'>
                <div className='p-2 bg-foreground-200 rounded-small flex opacity-50'><IconBlockchainOptimism /></div>
              </Tooltip>
            </div>
          </CardBody>

          <CardFooter>
            <Button
              as='a'
              href={CONFIG.facilitatorUrl.href}
              target='_blank'
              className='group/btn'
              endContent={<Iconify className='group-hover/btn:translate-x-1 transition size-5' icon={Icon.ArrowRight} />}
              fullWidth
              color='primary'
              variant='shadow'
            >Use hosted facilitator</Button>
          </CardFooter>
        </EldoraCard>

        <EldoraCard classNames={CARD_WIDE} className='text-balance text-center'>
          <CardHeader className='block text-xl font-bold tracking-tight'>
            Getting started with x402?
          </CardHeader>

          <CardBody className='justify-between gap-3 text-center'>
            <p>Or just exploring? Stay close as we add new tools, guides, and supported chains. Subscribe to our newsletter:</p>
            <NewsletterForm className='gap-3' />
          </CardBody>
        </EldoraCard>
      </div>
    </Container>
  );
}
