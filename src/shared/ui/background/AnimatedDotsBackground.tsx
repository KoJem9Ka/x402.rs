import { type ComponentProps, memo } from 'react';
import { cn } from '@/shared/utils/cn';


export const AnimatedDotsBackground = memo(({ className, ...props }: ComponentProps<'div'>) => (
  [...Array(20)].map((_, i) => (
    <div
      key={i}
      className={cn('absolute w-1 h-1 bg-secondary rounded-full opacity-60 floating-animation', className)}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${4 + Math.random() * 4}s`,
      }}
      {...props}
    ></div>
  ))
));
AnimatedDotsBackground.displayName = 'AnimatedDotsBackground';
