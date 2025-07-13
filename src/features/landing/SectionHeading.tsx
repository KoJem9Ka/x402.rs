import { cn } from '@/shared/utils/cn';
import type { ComponentProps } from 'react';


export function SectionHeading({ className, ...props }: ComponentProps<'h2'>) {
  return (<>
    <h2 className={cn('text-5xl md:text-6xl font-black text-center tracking-tight text-balance', className)} {...props} />
    <div className='w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-8 mb-6' />
  </>);
}
