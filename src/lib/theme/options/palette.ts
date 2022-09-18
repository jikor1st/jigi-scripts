const lightPalette = {
  mode: 'light',
  primary: {
    main: '#0077FF',
    dark: '#0A3363',
    light: '#DCEDFF',
    contrast: '#F5FAFF',
  },
  secondary: {
    main: '#434B4E',
    dark: '#27282A',
    light: '#D8E2E9',
    contrast: '#FFFFFF',
  },
  error: {
    main: '#F22168',
    dark: '#6A0A2A',
    light: '#FF9FC0',
    contrast: '#FFF3F7',
  },
  success: {
    main: '#02D5AA',
    dark: '#0D4439',
    light: '#AFFFDF',
    contrast: '#FFFFFF',
  },
  background: {
    paper: 'rgba(255,255,255,0.72)',
    canvas: '#EFEFF1',
  },
  text: {
    primary: '#222222',
    secondary: '#7E7E7E',
    light: '#B5B5B5',
  },
  divider: {
    primary: '#808080',
    secondary: '#D4D4D4',
    light: '#FBFBFB',
  },
  actions: {
    disabled: 'rgba(34,34,34,.32)',
    hover: 'rgba(34,34,34,.07)',
  },
  shadow: {
    modal: '-3px 0px 8px 0px rgba(29, 32, 35, 0.12)',
  },
  unstabled_scrollbar: {
    '&::-webkit-scrollbar': {
      width: 4,
      borderRadius: 2,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(34,34,34,.32)',
      borderRadius: 2,
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'rgba(34,34,34,.06)',
    },
  },
} as const;
const darkPalette = {
  mode: 'dark',
  primary: {
    main: '#0077FF',
    dark: '#0A3363',
    light: '#AFD4FF',
    contrast: '#F5FAFF',
  },
  secondary: {
    main: '#ffffff',
    dark: '#27282A',
    light: '#D8E2E9',
    contrast: '#FFFFFF',
  },
  error: {
    main: '#F22168',
    dark: '#6A0A2A',
    light: '#FF9FC0',
    contrast: '#FFF3F7',
  },
  success: {
    main: '#02D5AA',
    dark: '#0D4439',
    light: '#AFFFDF',
    contrast: '#FFFFFF',
  },
  background: {
    paper: '#1e1e1e',
    canvas: '#242424',
  },
  text: {
    primary: '#ffffff',
    secondary: '#7E7E7E',
    light: '#B5B5B5',
  },
  divider: {
    primary: '#808080',
    secondary: '#D4D4D4',
    light: '#FBFBFB',
  },
  actions: {
    disabled: 'rgba(34,34,34,.32)',
    hover: 'rgba(255,255,255,.14)',
  },
  shadow: {
    modal: '-3px 0px 8px 0px rgba(29, 32, 35, 0.12)',
  },
  unstabled_scrollbar: {
    '&::-webkit-scrollbar': {
      width: 4,
      borderRadius: 2,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(34,34,34,.32)',
      borderRadius: 2,
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'rgba(34,34,34,.06)',
    },
  },
} as const;

export const paletteOptions = (mode: 'light' | 'dark' = 'light') =>
  mode === 'light' ? lightPalette : darkPalette;
