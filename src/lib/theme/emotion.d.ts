import '@emotion/react';

import type {
  ThemeBreakpoints,
  ThemeTypography,
  ThemePalette,
  ThemeZIndex,
} from './themeType';

declare module '@emotion/react' {
  export interface Theme {
    breakpoints: ThemeBreakpoints;
    typography: ThemeTypography;
    palette: ThemePalette;
    zIndex: ThemeZIndex;
  }
}
