import type { PressEvent } from '@react-types/shared/src/events';
import type { MouseEvent } from 'react';
import { useHeaderHeightStore } from '@/features/header/useHeaderHeight';


export function navScroll(idOrEvent: string | PressEvent | MouseEvent<HTMLAnchorElement>) {
  console.log('navScroll');
  let element: HTMLElement | null;
  if (typeof idOrEvent === 'string') {
    element = document.getElementById(idOrEvent);
  } else {
    if ('preventDefault' in idOrEvent) idOrEvent.preventDefault();
    const anchor = idOrEvent.target as HTMLAnchorElement;
    const targetId = anchor.getAttribute('href')?.replace(/^.*?#/, '');
    if (!targetId) return;
    element = document.getElementById(targetId);
  }
  if (!element) return;

  const scrollTo = element.offsetTop - (useHeaderHeightStore.getState().height + 10);
  window.scrollTo({ top: scrollTo, behavior: 'smooth' });
}
