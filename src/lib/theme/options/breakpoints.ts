/**
xs : x-small
sm : small
md : medium
lg : large
xl : extra large
xxl : extra extra large
 */
import type { ThemeBreakpoints } from '../themeType';

const PRECISION = 0.02;

export const breakpointsOptions: ThemeBreakpoints = {
  values: {
    xs: 375,
    sm: 576, // mobile
    md: 768,
    lg: 992, // tablet
    xl: 1200, // over desktop
    xxl: 1440,
  },
  down(point) {
    const value = this.values[point];
    return `@media (max-width:${value - PRECISION}px)`;
  },
  up(point) {
    const value = this.values[point];
    return `@media (min-width:${value}px)`;
  },
  only(sPoint, ePoint) {
    const sValue = this.values[sPoint];
    const eValue = this.values[ePoint];
    return `@media (min-width:${sValue}px) and (max-width:${eValue}px)`;
  },
  not(sPoint, ePoint) {
    const sValue = this.values[sPoint];
    const eValue = this.values[ePoint];
    return `@media not all and (min-width:${sValue}px) and (max-width:${eValue}px)`;
  },
};
