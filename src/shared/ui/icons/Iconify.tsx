import type { ComponentProps } from 'react';
import { cn } from '@/shared/utils/cn';


export enum Icon {
  Terminal = 'lucide--terminal',
  Bolt = 'solar--bolt-bold',

  Sparkle = 'fluent--sparkle-24-filled',
  BlackHole = 'solar--black-hole-bold',
  Cpu = 'solar--cpu-bolt-linear',

  ShieldStar = 'solar--shield-star-bold',
  Chain = 'solar--link-round-angle-bold',

  DogSymbol = 'lucide--at-sign',

  ExternalLink = 'lucide--external-link',
  ArrowRight = 'solar--arrow-right-outline',

  Server = 'solar--server-2-bold',
  Letter = 'solar--letter-bold-duotone',

  Middleware = 'solar--slider-vertical-bold',

  BlockchainBase = 'token-branded--base',
  BlockchainAvalanche = 'token-branded--avalanche',
  BlockchainXdc = 'token-branded--xdc',
  BlockchainArbitrum = 'token-branded--arbitrum-one',
  BlockchainSolana = 'token-branded--solana',
  BlockchainOptimism = 'token-branded--optimism',

  Telegram = 'simple-icons--telegram',
  TwitterX = 'simple-icons--x',
  GitHub = 'simple-icons--github',

  LoadingSpinner = 'svg-spinners--ring-resize',

  ThemeAuto = 'line-md--light-dark',
  ThemeDark = 'line-md--moon-filled',
  ThemeDarkToLight = 'line-md--moon-filled-to-sunny-filled-transition',
  ThemeLight = 'line-md--sunny-filled',
  ThemeLightToDark = 'line-md--sunny-filled-loop-to-moon-filled-transition',
}

type IconifyProps = ComponentProps<'span'> & {
  icon: Icon;
  isColored?: boolean,
}

export function Iconify({ className, icon, isColored, ...props }: IconifyProps) {
  return (
    <span className={cn(
      'size-6 shrink-0',
      isColored ? 'iconify-color' : 'iconify text-current',
      icon,
      className,
    )} {...props} />
  );
}

