import type { CardProps } from '@heroui/card';
import { clsx } from 'clsx';


export const CARD_BASE: CardProps['classNames'] = {
  base: [
    'group/card overflow-hidden cursor-default z-0 !transition-[transform,box-shadow]',
    'bg-gradient-to-br dark:bg-gradient-to-tl from-content1 to-foreground-100',
    'inset-ring inset-ring-foreground-300 shadow-xl shadow-foreground-500/10',
    'hover:inset-ring-foreground-400 hover:shadow-foreground-500/20',
  ],
};

export const CARD_WIDE: CardProps['classNames'] = {
  ...CARD_BASE,
  header: 'pt-6 px-6 pb-2 last:pb-6',
  body: 'first:pt-6 py-2 px-6 last:pb-6',
  footer: 'pt-2 first:pt-6 pb-6 px-6',
};

export const CARD_WIDE_DIVIDERS: CardProps['classNames'] = {
  ...CARD_BASE,
  header: 'p-6',
  body: 'p-6',
  footer: 'p-6',
};

export function CardHoverShimmer() {
  return (
    <div
      className={clsx(
        'absolute inset-0 pointer-events-none z-30 portrait:hidden',
        'bg-linear-130 from-transparent from-45% via-white dark:via-white/30 via-50% to-transparent to-55% bg-size-[200%]',
        'transition-all duration-1000',
        '[background-position-x:-50%]',
        'group-hover/card:[background-position-x:150%]',
      )}
    />
  );
}
