import { Container } from '@/shared/ui/Container';
import { cn } from '@/shared/utils/cn';
import type { ComponentProps } from 'react';
import { Icon, Iconify } from '@/shared/ui/icons/Iconify';
import { Link } from '@heroui/link';
import { CONFIG } from '@/shared/backbone/config';


export function Footer({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div className={cn('bg-content1 py-12 max-sm:text-center', className)} {...props}>
      <Container className='flex flex-wrap-reverse gap-6 max-w-2xl shrink-0 w-fit'>
        <div className='text-balance w-full sm:max-w-xs'>
          <p className='text-3xl neon-text font-bold'>x402.rs</p>
          <p className=''>Chain-agnostic payment infrastructure for the AI-enhanced world.</p>

          <div className='flex gap-2 mt-2 max-sm:justify-center'>
            <Link href={CONFIG.contacts.telegramUrl.href} target='_blank' className='link'>
              <Iconify className='mr-1' icon={Icon.Telegram} />
            </Link>

            <Link href={CONFIG.contacts.twitterUrl.href} target='_blank' className='link'>
              <Iconify className='mr-1' icon={Icon.TwitterX} />
            </Link>

            <Link href={CONFIG.contacts.githubUrl.href} target='_blank' className='link'>
              <Iconify className='mr-1' icon={Icon.GitHub} />
            </Link>

            <Link href={`mailto:${CONFIG.contacts.email}`} target='_blank' className='link'>
              <Iconify className='mr-1' icon={Icon.DogSymbol} />
            </Link>
          </div>
        </div>

        <div className='flex flex-col max-sm:items-center max-sm:w-full'>
          <p className='text-lg font-bold'>Navigation</p>
          <Link href='#'>Home</Link>
          <Link href='#'>Docs</Link>
          <Link href='#'>Tools</Link>
          <Link href='#'>Newsletter</Link>
        </div>
      </Container>
    </div>
  );
}
