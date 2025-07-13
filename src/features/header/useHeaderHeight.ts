import { create } from 'zustand/react';
import { type RefObject, useEffect } from 'react';
import { throttle } from 'lodash-es';


const useHeaderHeightStore = create<{
  height: number,
  setHeight: (height: number) => void,
}>()((set) => ({
  height: 0,
  setHeight: (height) => set({ height }),
}));

export function useHeaderHeight() {
  return useHeaderHeightStore(state => state.height);
}

export function useHeaderHeightEngine(headerRef: RefObject<HTMLElement | null>) {
  const setHeaderHeight = useHeaderHeightStore(state => state.setHeight);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const onResize = throttle(() => setHeaderHeight(header.offsetHeight), 150);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [headerRef, setHeaderHeight]);
}
