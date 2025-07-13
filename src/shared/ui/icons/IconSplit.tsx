import type { ComponentProps } from 'react';


export const IconSplit = (props: ComponentProps<'svg'>) => (
  <svg xmlns='http://www.w3.org/2000/svg'
       width='24'
       height='24'
       viewBox='0 0 24 24'
       fill='none'
       stroke='currentColor'
       strokeWidth='2'
       strokeLinecap='round'
       strokeLinejoin='round'
       {...props}>
    <path d='M16 3h5v5'></path>
    <path d='M8 3H3v5'></path>
    <path d='M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3'></path>
    <path d='m3 21 7.828-7.828a4 4 0 0 1 2.828-1.172H21'></path>
  </svg>
);
