import { cn } from '@/shared/utils/cn';
import type { ComponentProps } from 'react';
import { Slot } from '@radix-ui/react-slot';


export function PaperWithBloom({ asChild, className, ...props }: ComponentProps<'div'> & { asChild?: boolean }) {
  const Component = asChild ? Slot : 'div';

  return (
    <Component
      className={cn(
        'flex justify-center items-center p-1 rounded-small gap-1',
        'bg-linear-to-br dark:bg-linear-to-tl from-content1 to-foreground-100',
        'border border-foreground-200',
        className,
      )}
      {...props}
    />
  );
}
