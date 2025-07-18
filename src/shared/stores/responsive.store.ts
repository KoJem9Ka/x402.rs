'use client';
import { throttle } from 'lodash-es';
import { useLayoutEffect } from 'react';
import { create } from 'zustand/react';


const DEFAULT_BREAKPOINTS = {
  isSm: false, isMaxSm: true,
  isMd: false, isMaxMd: true,
  isLg: false, isMaxLg: true,
  isXl: false, isMaxXl: true,
  is2Xl: false, isMax2Xl: true,
};
type Breakpoints = typeof DEFAULT_BREAKPOINTS;

type State = Breakpoints & { isTouchscreen: boolean, isMouse: boolean };
type Actions = { update: VoidFunction, init: VoidFunction };


const useResponsiveStore = create<State & Actions>()((set) => {
  const gte = (breakpoint: number) => window.innerWidth >= breakpoint;
  const getBreakpoints = (): Breakpoints => {
    const REM = parseFloat(getComputedStyle(document.documentElement).fontSize);

    // https://tailwindcss.com/docs/responsive-design
    const isSm = gte(40 * REM);
    const isMd = gte(48 * REM);
    const isLg = gte(64 * REM);
    const isXl = gte(80 * REM);
    const is2Xl = gte(96 * REM);

    return ({
      isSm, isMaxSm: !isSm,
      isMd, isMaxMd: !isMd,
      isLg, isMaxLg: !isLg,
      isXl, isMaxXl: !isXl,
      is2Xl, isMax2Xl: !is2Xl,
    });
  };

  return ({
    ...DEFAULT_BREAKPOINTS,
    isTouchscreen: true, isMouse: false,
    init: () => {
      set({
        isTouchscreen: window.matchMedia('(pointer: coarse)').matches,
        isMouse: window.matchMedia('(pointer: fine)').matches,
      });
    },
    update: () => set(getBreakpoints()),
  });
});

export const useIsSm = () => useResponsiveStore(state => state.isSm);

export function useMediaPointer() {
  const isTouchscreen = useResponsiveStore(state => state.isTouchscreen);
  const isMouse = useResponsiveStore(state => state.isMouse);
  return { isTouchscreen, isMouse };
}


export function ResponsiveStoreEngine() {
  useLayoutEffect(() => {
    const onWindowResize = throttle(useResponsiveStore.getState().update, 150);

    useResponsiveStore.getState().init();
    onWindowResize();
    window.addEventListener('resize', onWindowResize);

    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  return null;
}
