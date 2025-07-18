import { create } from 'zustand/react';
import { type RefObject, useEffect } from 'react';
import { throttle } from 'lodash-es';


export const useHeaderHeightStore = create<{
  height: number,
  setHeight: (height: number) => void,
}>()((set) => ({
  height: 64,
  setHeight: (height) => set({ height }),
}));

export function useHeaderHeightEngine(headerRef: RefObject<HTMLElement | null>) {
  const setHeaderHeight = useHeaderHeightStore(state => state.setHeight);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const onResize = throttle(() => {
      document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
      setHeaderHeight(header.offsetHeight);
    }, 150);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [headerRef, setHeaderHeight]);
}
