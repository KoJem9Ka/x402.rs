import type { ComponentProps } from 'react';
import { cn } from '@/shared/utils/cn';
import * as Slot from '@radix-ui/react-slot';


type ContainerProps = ComponentProps<'div'> & {
  asChild?: boolean,
};

export function Container({ className, asChild, ...props }: ContainerProps) {
  const Comp = asChild ? Slot.Root : 'div';

  return (
    <Comp
      className={cn(
        'container px-4 mx-auto',
        className,
      )} {...props}
    />
  );
}
