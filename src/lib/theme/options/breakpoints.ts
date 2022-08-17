/**
xs : x-small
sm : small
md : medium
lg : large
xl : extra large
xxl : extra extra large
 */

const breakpointsOptions = {
  options: {
    xs: 375,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  },
  media: {
    down: () => {},
    only: () => {},
    up: () => {},
    not: () => {},
  },
};

export { breakpointsOptions };
