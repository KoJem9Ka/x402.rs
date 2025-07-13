'use client';
import type { ComponentProps } from 'react';
import { useThemeStore } from '@/features/theme/theme.store';


export function IconBlockchainXDC(props: ComponentProps<'svg'> & { isCurrentCoin?: boolean }) {
  const isDark = useThemeStore(state => state.isDark);
  const fill = props.isCurrentCoin ?? !isDark ? 'currentColor' : '#ABDFEF';
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M14.2747 11.7691L20.6846 3.67578H16.8989C16.1168 3.68362 15.4398 4.05134 14.8668 4.77894L11.6854 8.81951L8.50404 4.77894C7.92327 4.0435 7.24578 3.67578 6.47199 3.67578H3.9755C3.5494 3.67578 3.33679 3.85398 3.33679 4.20993C3.33679 4.38813 3.41782 4.57765 3.58077 4.77894L9.09614 11.7691L5.63896 16.1796L3.24399 19.2355C3.08147 19.4442 3 19.6341 3 19.8045C3.04662 20.1531 3.26316 20.3269 3.65048 20.3269H6.12388C6.8981 20.3269 7.57123 19.9631 8.14416 19.2355L11.6859 14.7187L15.2276 19.2355C15.8001 19.9631 16.4736 20.3269 17.2479 20.3269H21L14.2756 11.7691H14.2747Z' fill={fill} />
      <path d='M15.4619 11.783L18.7849 16.0039V7.5625L15.4619 11.783Z' fill={fill} />
    </svg>
  );
}
