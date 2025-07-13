import { cn } from '@/shared/utils/cn';
import type { ComponentProps } from 'react';


export function MacOSWindowButtons({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div className={cn('flex items-center gap-2', className)} {...props}>
      <div className='w-3 h-3 bg-red-500 rounded-full cursor-pointer' />
      <div className='w-3 h-3 bg-yellow-500 rounded-full cursor-pointer' />
      <div className='w-3 h-3 bg-green-500 rounded-full cursor-pointer' />
    </div>
  );
}
