import { CONFIG } from '@/shared/backbone/config';


export function baseUrl(path?: string) {
  return [CONFIG.base, path]
    .filter(Boolean)
    .join('/')
    .replace(/\/{2,}/g, '/');
}
