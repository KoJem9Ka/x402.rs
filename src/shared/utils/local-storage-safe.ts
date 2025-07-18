import { CONFIG } from '@/shared/backbone/config';
import { makeLocalStorageSafe } from '@/shared/utils/independent/make-local-storage-safe';
import { Theme } from '@/shared/types/theme';


export const localStorageSafe = makeLocalStorageSafe(CONFIG.appUniqueKey, {
  theme: Theme,
});
