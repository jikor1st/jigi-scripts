import { useEffect, useState } from 'react';
import { useDarkMode } from '@/lib/hooks';

import {
  typographyOptions,
  breakpointsOptions,
  paletteOptions,
  zIndexOptions,
} from './options';

const defaultTheme = {
  typography: typographyOptions,
  breakpoints: breakpointsOptions,
  zIndex: zIndexOptions,
};

const lightGlobalTheme = {
  ...defaultTheme,
  palette: paletteOptions.light,
};

const darkGlobalTheme = {
  ...defaultTheme,
  palette: paletteOptions.dark,
};

export function useGlobalTheme() {
  const [prepareGlobalTheme, setPrepareGlobalTheme] = useState(false);

  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    setPrepareGlobalTheme(true);
  }, []);
  return {
    prepareGlobalTheme,
    globalTheme: !isDarkMode ? lightGlobalTheme : darkGlobalTheme,
  };
}
