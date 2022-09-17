import { useMemo } from 'react';

import { Theme } from '@emotion/react';

import { useDarkMode } from '@/lib/hooks';

import {
  typographyOptions,
  breakpointsOptions,
  paletteOptions,
  zIndexOptions,
} from './options';

const globalThemeOptions = ({
  colorMode,
  htmlFontSize,
}: {
  colorMode: 'light' | 'dark';
  htmlFontSize: number;
}): Theme => ({
  breakpoints: breakpointsOptions,
  typography: typographyOptions(htmlFontSize),
  palette: paletteOptions(colorMode),
  zIndex: zIndexOptions,
});

function useGlobalTheme() {
  const { colorMode } = useDarkMode();
  const htmlFontSize = 16;
  return {
    globalTheme: useMemo(
      () => globalThemeOptions({ colorMode, htmlFontSize }),
      [colorMode, htmlFontSize],
    ),
  };
}

export { useGlobalTheme };
