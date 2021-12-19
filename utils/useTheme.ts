import { useEffect, useState } from 'react';

import { ThemeControl, ThemeVariant } from './types';

const useTheme = (): ThemeControl => {
  const [themeValue, themeDispatcher] = useState<ThemeVariant>('light');

  useEffect(() => {
    const localTheme = themeVariantOrDefault(localStorage.getItem('theme-r'));
    themeDispatcher(localTheme);
  }, []);

  useEffect(() => localStorage.setItem('theme-r', themeValue), [themeValue]);

  return { themeValue, themeDispatcher };
};

export const themeVariantOrDefault = (s: string | null) =>
  s === 'light' || s === 'dark' ? s : 'light';

export const themeSwitcher = (currentTheme: ThemeVariant) =>
  currentTheme === 'light' ? 'dark' : 'light';

export default useTheme;
