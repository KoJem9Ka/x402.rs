import { z } from 'zod/v4';


export enum ThemeEnum {
  System = 'System',
  Light = 'Light',
  Dark = 'Dark',
}

export const Theme = z.enum(ThemeEnum);
export type Theme = z.infer<typeof Theme>;
