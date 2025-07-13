import { create } from 'zustand/react';
import { localStorageSafe } from '@/shared/utils/local-storage-safe';
import { type Theme, ThemeEnum } from '@/shared/types/theme';
import { useEffect } from 'react';
import { baseUrl } from '@/shared/utils/base-url';


type State = {
  theme: Theme,
  isDark: boolean,
  isPrefersDark: boolean,
}
type Actions = {
  setTheme: (theme: Theme, isPrefersDark?: boolean) => void,
}

const DEFAULT = {
  theme: ThemeEnum.System,
  isDark: true,
};

export const useThemeStore = create<State & Actions>()((set, get) => ({
  theme: DEFAULT.theme,
  isDark: DEFAULT.isDark,
  isPrefersDark: DEFAULT.isDark,
  setTheme: (theme, isPrefersDark) => {
    if (typeof isPrefersDark === 'undefined') isPrefersDark = get().isPrefersDark;

    const isDark = theme === ThemeEnum.System
      ? isPrefersDark
      : theme === ThemeEnum.Dark;

    set({ theme, isDark, isPrefersDark });

    document.documentElement.classList.toggle('dark', isDark);
    if (theme === DEFAULT.theme) localStorageSafe.theme.remove();
    else localStorageSafe.theme.set(theme);

    let isCreated = false;
    let favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"][type="image/svg+xml"]');
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      favicon.type = 'image/svg+xml';
      favicon.sizes = 'any';
      isCreated = true;
    }
    favicon.href = baseUrl(isPrefersDark ? '/favicon-dark-theme.svg' : '/favicon-light-theme.svg');
    if (isCreated) document.head.appendChild(favicon);
  },
}));

export function ThemeStoreEngine() {
  useEffect(() => {
    const theme = localStorageSafe.theme.getOr(DEFAULT.theme);
    const isPrefersDarkMedia = window.matchMedia('(prefers-color-scheme: dark)');
    const abortController = new AbortController();

    isPrefersDarkMedia.addEventListener('change', ({ matches: isPrefersDark }) => {
      const theme = useThemeStore.getState().theme;
      useThemeStore.getState().setTheme(theme, isPrefersDark);
    }, abortController);

    useThemeStore.getState().setTheme(theme, isPrefersDarkMedia.matches);

    return () => abortController.abort();
  }, []);

  return null;
}
