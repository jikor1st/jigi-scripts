/** breakpoints */
export type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export interface ThemeBreakpoints {
  values: Record<Breakpoints, number>;
  down(point: Breakpoints): string;
  up(point: Breakpoints): string;
  only(sPoint: Breakpoints, ePoint: Breakpoints): string;
  not(sPoint: Breakpoints, ePoint: Breakpoints): string;
}

/** typography */
export type TypefaceKey =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline';

export type FontWieghts =
  | 'Black'
  | 'ExtraBold'
  | 'Bold'
  | 'SemiBold'
  | 'Medium'
  | 'Regular'
  | 'Light'
  | 'ExtraLight'
  | 'Thin';

interface FontSystem {
  fontFamily: string;
  fontSize: `${number}rem`;
  lineHeight: `${number}rem`;
  fontWeight: number;
}

type Typeface = Record<TypefaceKey, FontSystem>;

export interface ThemeTypography extends Typeface {
  htmlFontSize: number;
  fontWeight: Record<FontWieghts, number>;
  pxToRem(px: number): string;
}

/** palette */
export interface PaletteState {
  main: string;
  dark: string;
  light: string;
  contrast: string;
}
export interface PaletteBasic {
  primary: string;
  secondary: string;
  light: string;
}

export interface Palette {
  primary: PaletteState;
  secondary: PaletteState;
  error: PaletteState;
  success: PaletteState;
  text: PaletteBasic;
  divider: PaletteBasic;
  background: {
    paper: string;
    canvas: string;
  };
  actions: {
    disabled: string;
    hover: string;
  };
  shadow: {
    modal: string;
  };
  unstabled_scrollbar: {
    '&::-webkit-scrollbar': {
      width: number;
      borderRadius: number;
    };
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: string;
      borderRadius: number;
    };
    '&::-webkit-scrollbar-track': {
      backgroundColor: string;
    };
  };
}

export interface ThemePalette extends Palette {}

type ZIndexKey = 'modal' | 'appBar';

export interface ThemeZIndex extends Record<ZIndexKey, number> {}
