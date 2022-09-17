const fontWeightValues = {
  Black: 900,
  ExtraBold: 800,
  Bold: 700,
  SemiBold: 600,
  Medium: 500,
  Regular: 400,
  Light: 300,
  ExtraLight: 200,
  Thin: 100,
};

const lineHeightMultiple = 1.5;

function pxToRem(px: number, htmlFontSize: number): `${number}rem` {
  return `${px / htmlFontSize}rem`;
}
function fontWeightStrToNum(weightStr: keyof typeof fontWeightValues) {
  return fontWeightValues[weightStr];
}

export const typographyOptions = (htmlFontSize = 16) =>
  ({
    htmlFontSize: htmlFontSize,
    fontWeight: fontWeightValues,
    pxToRem(px: number) {
      return `${px / this.htmlFontSize}rem`;
    },
    h1: {
      fontFamily: 'Pretendard',
      fontSize: pxToRem(68, htmlFontSize),
      lineHeight: pxToRem(68 * lineHeightMultiple, htmlFontSize),
      fontWeight: fontWeightStrToNum('SemiBold'),
    },
    h2: {
      fontFamily: 'Pretendard',
      fontSize: pxToRem(60, htmlFontSize),
      lineHeight: pxToRem(60 * lineHeightMultiple, htmlFontSize),
      fontWeight: fontWeightStrToNum('SemiBold'),
    },
    h3: {
      fontFamily: 'Pretendard',
      fontSize: pxToRem(48, htmlFontSize),
      lineHeight: pxToRem(48 * lineHeightMultiple, htmlFontSize),
      fontWeight: fontWeightStrToNum('SemiBold'),
    },
    h4: {
      fontFamily: 'Pretendard',
      fontSize: pxToRem(40, htmlFontSize),
      lineHeight: pxToRem(40 * lineHeightMultiple, htmlFontSize),
      fontWeight: fontWeightStrToNum('Bold'),
    },
    h5: {
      fontFamily: 'Pretendard',
      fontSize: pxToRem(32, htmlFontSize),
      lineHeight: pxToRem(32 * lineHeightMultiple, htmlFontSize),
      fontWeight: fontWeightStrToNum('SemiBold'),
    },
    h6: {
      fontFamily: 'Pretendard',
      fontSize: pxToRem(28, htmlFontSize),
      lineHeight: pxToRem(28 * lineHeightMultiple, htmlFontSize),
      fontWeight: fontWeightStrToNum('SemiBold'),
    },
    subtitle1: {
      fontFamily: 'Pretendard',
      fontSize: pxToRem(24, htmlFontSize),
      lineHeight: pxToRem(24 * lineHeightMultiple, htmlFontSize),
      fontWeight: fontWeightStrToNum('Medium'),
    },
    subtitle2: {
      fontFamily: 'Pretendard',
      fontSize: pxToRem(18, htmlFontSize),
      lineHeight: pxToRem(18 * lineHeightMultiple, htmlFontSize),
      fontWeight: fontWeightStrToNum('Regular'),
    },
    body1: {
      fontFamily: 'Pretendard',
      fontSize: pxToRem(16, htmlFontSize),
      lineHeight: pxToRem(16 * lineHeightMultiple, htmlFontSize),
      fontWeight: fontWeightStrToNum('Regular'),
    },
    body2: {
      fontFamily: 'Pretendard',
      fontSize: pxToRem(14, htmlFontSize),
      lineHeight: pxToRem(14 * lineHeightMultiple, htmlFontSize),
      fontWeight: fontWeightStrToNum('Regular'),
    },
    caption: {
      fontFamily: 'Pretendard',
      fontSize: pxToRem(13, htmlFontSize),
      lineHeight: pxToRem(13 * lineHeightMultiple, htmlFontSize),
      fontWeight: fontWeightStrToNum('Regular'),
    },
    overline: {
      fontFamily: 'Pretendard',
      fontSize: pxToRem(11, htmlFontSize),
      lineHeight: pxToRem(11 * lineHeightMultiple, htmlFontSize),
      fontWeight: fontWeightStrToNum('Regular'),
    },
  } as const);
