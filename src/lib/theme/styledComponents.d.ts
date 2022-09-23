import 'styled-components';

import type {
  ThemeBreakpoints,
  ThemeTypography,
  ThemePalette,
  ThemeZIndex,
} from './themeType';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: ThemeBreakpoints;
    typography: ThemeTypography;
    palette: ThemePalette;
    zIndex: ThemeZIndex;
  }
}
