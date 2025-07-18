'use client';
import { Card, type CardProps } from '@heroui/card';
import { useInViewport } from 'ahooks';
import { type RefObject, useRef } from 'react';
import type { SetRequired } from 'type-fest';
import { useMouse } from '@/shared/hooks/useMouse';
import { cn } from '@/shared/utils/cn';
import { useMediaPointer } from '@/shared/stores/responsive.store';


type EldoraCardProps = CardProps & {
  circleSize?: number,
  hoverClassName?: string,
};

export function EldoraCard({
  children,
  circleSize = 500,
  className,
  hoverClassName,
  ...props
}: EldoraCardProps) {
  const parentRef = useRef<HTMLDivElement>(null);

  return (
    <Card
      ref={parentRef}
      className={cn('group/card relative z-0 transform-gpu overflow-hidden transition-transform', className)}
      {...props as Record<never, never>}
    >
      <HoverEffect parentRef={parentRef} circleSize={circleSize} hoverClassName={hoverClassName} />
      {children}
    </Card>
  );
}

type HoverEffectProps = SetRequired<Pick<EldoraCardProps, 'circleSize' | 'hoverClassName'>, 'circleSize'> & {
  parentRef: RefObject<HTMLDivElement | null>,
};

function HoverEffect({ parentRef, hoverClassName, circleSize }: HoverEffectProps) {
  const [isInViewport] = useInViewport(parentRef);
  const mediaPointer = useMediaPointer();
  const mouse = useMouse({ parentRef, isEnabled: isInViewport && mediaPointer.isMouse });

  return mediaPointer.isMouse ? (
    <>
      <div
        className={cn(
          'absolute -z-10 -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-full transition-[transform,opacity,scale] duration-500 group-hover/card:scale-[2] pointer-events-none',
          mouse.elementX === null || mouse.elementY === null ? 'opacity-0' : 'opacity-50 dark:group-hover/card:opacity-50',
        )}
        style={{
          maskImage: `radial-gradient(${circleSize / 2}px circle at center, white, transparent)`,
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          left: `${mouse.elementX}px`,
          top: `${mouse.elementY}px`,
          // background: 'linear-gradient(135deg,#3BC4F2,#7A69F9,#F26378,#F5833F)',
          background: 'linear-gradient(135deg,hsl(var(--heroui-secondary)),hsl(var(--heroui-primary)),hsl(var(--heroui-secondary)),hsl(var(--heroui-primary)))',
          // background: 'hsl(var(--heroui-foreground))',
        }}
      />
      {/*<div className='absolute inset-px rounded-large bg-neutral-100/80 dark:bg-neutral-900/80'/>*/}
      <div className={cn('absolute -z-10 inset-px rounded-large bg-content1/80 dark:bg-content1/90 pointer-events-none', hoverClassName)} />
    </>
  ) : null;
}
