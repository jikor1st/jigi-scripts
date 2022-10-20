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

const lineHeightMultiple = 1.75;

function pxToRem(px: number, htmlFontSize: number): `${number}rem` {
  return `${parseFloat((px / htmlFontSize).toFixed(3))}rem`;
}
function fontWeightStrToNum(weightStr: keyof typeof fontWeightValues) {
  return fontWeightValues[weightStr];
}

const initialHtmlFontSize = 16;

export const typographyOptions = {
  htmlFontSize: initialHtmlFontSize,
  fontWeight: fontWeightValues,
  pxToRem(px: number) {
    return pxToRem(px, initialHtmlFontSize);
  },
  h1: {
    fontFamily: 'Pretendard',
    fontSize: pxToRem(48, initialHtmlFontSize),
    lineHeight: pxToRem(48 * lineHeightMultiple, initialHtmlFontSize),
    fontWeight: fontWeightStrToNum('SemiBold'),
  },
  h2: {
    fontFamily: 'Pretendard',
    fontSize: pxToRem(44, initialHtmlFontSize),
    lineHeight: pxToRem(44 * lineHeightMultiple, initialHtmlFontSize),
    fontWeight: fontWeightStrToNum('SemiBold'),
  },
  h3: {
    fontFamily: 'Pretendard',
    fontSize: pxToRem(40, initialHtmlFontSize),
    lineHeight: pxToRem(40 * lineHeightMultiple, initialHtmlFontSize),
    fontWeight: fontWeightStrToNum('SemiBold'),
  },
  h4: {
    fontFamily: 'Pretendard',
    fontSize: pxToRem(36, initialHtmlFontSize),
    lineHeight: pxToRem(36 * lineHeightMultiple, initialHtmlFontSize),
    fontWeight: fontWeightStrToNum('Bold'),
  },
  h5: {
    fontFamily: 'Pretendard',
    fontSize: pxToRem(32, initialHtmlFontSize),
    lineHeight: pxToRem(32 * lineHeightMultiple, initialHtmlFontSize),
    fontWeight: fontWeightStrToNum('SemiBold'),
  },
  h6: {
    fontFamily: 'Pretendard',
    fontSize: pxToRem(28, initialHtmlFontSize),
    lineHeight: pxToRem(28 * lineHeightMultiple, initialHtmlFontSize),
    fontWeight: fontWeightStrToNum('SemiBold'),
  },
  subtitle1: {
    fontFamily: 'Pretendard',
    fontSize: pxToRem(24, initialHtmlFontSize),
    lineHeight: pxToRem(24 * lineHeightMultiple, initialHtmlFontSize),
    fontWeight: fontWeightStrToNum('Medium'),
  },
  subtitle2: {
    fontFamily: 'Pretendard',
    fontSize: pxToRem(18, initialHtmlFontSize),
    lineHeight: pxToRem(18 * lineHeightMultiple, initialHtmlFontSize),
    fontWeight: fontWeightStrToNum('Medium'),
  },
  body1: {
    fontFamily: 'Pretendard',
    fontSize: pxToRem(16, initialHtmlFontSize),
    lineHeight: pxToRem(16 * lineHeightMultiple, initialHtmlFontSize),
    fontWeight: fontWeightStrToNum('Medium'),
  },
  body2: {
    fontFamily: 'Pretendard',
    fontSize: pxToRem(14, initialHtmlFontSize),
    lineHeight: pxToRem(14 * lineHeightMultiple, initialHtmlFontSize),
    fontWeight: fontWeightStrToNum('Regular'),
  },
  caption: {
    fontFamily: 'Pretendard',
    fontSize: pxToRem(13, initialHtmlFontSize),
    lineHeight: pxToRem(13 * lineHeightMultiple, initialHtmlFontSize),
    fontWeight: fontWeightStrToNum('Regular'),
  },
  overline: {
    fontFamily: 'Pretendard',
    fontSize: pxToRem(11, initialHtmlFontSize),
    lineHeight: pxToRem(11 * lineHeightMultiple, initialHtmlFontSize),
    fontWeight: fontWeightStrToNum('Regular'),
  },
};
