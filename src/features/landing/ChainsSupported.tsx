import { Tooltip } from '@heroui/tooltip';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/shared/utils/cn';
import { type ComponentProps } from 'react';
import { Icon, Iconify } from '@/shared/ui/icons/Iconify';
import { IconBlockchainXDC } from '@/shared/ui/icons/IconBlockchainXDC';
import { IconBlockchainOptimism } from '@/shared/ui/icons/IconBlockchainOptimism';
import { PaperWithBloom } from '@/shared/ui/PaperWithBloom';


type Props = ComponentProps<'div'> & {
  isWithLabel?: boolean,
};

export function ChainsSupported({ isWithLabel, className, ...props }: Props) {
  return (
    <div className={cn('flex flex-wrap justify-center gap-1', className)} {...props}>
      {CHAINS_SUPPORTED.map(chain => {
        return (
          <Tooltip key={chain.name} content={`${chain.name}${chain.isSoon ? ' (soon)' : ''}`}>
            <PaperWithBloom asChild className={chain.isSoon ? 'opacity-50' : undefined}>
              <span>
                <Slot className='size-8'>{chain.icon}</Slot>

                {isWithLabel ? (
                  <span className='max-sm:text-sm'>{chain.name}</span>
                ) : null}
              </span>
            </PaperWithBloom>
          </Tooltip>
        );
      })}
    </div>
  );
}


export const CHAINS_SUPPORTED = [{
  name: 'Base',
  className: 'bg-primary/20 border-primary shadow-primary/20',
  border: 'bg-blue-500/20',
  icon: <Iconify isColored icon={Icon.BlockchainBase} />,
}, {
  name: 'Avalanche',
  className: 'bg-rose-500/20 border-rose-500 shadow-rose-500/20',
  border: 'bg-rose-500/20',
  icon: <Iconify isColored icon={Icon.BlockchainAvalanche} />,
}, {
  name: 'XDC',
  className: 'bg-cyan-500/20 border-cyan-500 shadow-cyan-500/20',
  border: 'bg-teal-500/20',
  icon: <IconBlockchainXDC />,
}, {
  name: 'Arbitrum',
  className: 'bg-blue-700/20 border-blue-700 shadow-blue-700/20',
  border: 'bg-blue-700/20',
  icon: <Iconify isColored icon={Icon.BlockchainArbitrum} />,
  isSoon: true,
}, {
  name: 'Solana',
  className: 'bg-purple-500/20 border-purple-500 shadow-purple-500/20',
  border: 'bg-purple-500/20',
  icon: <Iconify isColored icon={Icon.BlockchainSolana} />,
  isSoon: true,
}, {
  name: 'Optimism',
  className: 'bg-red-500/20 border-red-500 shadow-red-500/20',
  border: 'bg-red-500/20',
  icon: <IconBlockchainOptimism />,
  isSoon: true,
}];
