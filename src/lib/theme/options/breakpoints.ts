/**
xs : x-small
sm : small
md : medium
lg : large
xl : extra large
xxl : extra extra large
 */
import type {
  ThemeBreakpoints,
  Breakpoints,
  CreateStylesReturns,
} from '../themeType';

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
    const value = typeof point !== 'number' ? this.values[point] : point;
    return `@media (max-width:${value - PRECISION}px)`;
  },
  up(point) {
    const value = typeof point !== 'number' ? this.values[point] : point;
    return `@media (min-width:${value}px)`;
  },
  only(sPoint, ePoint) {
    const sValue = typeof sPoint !== 'number' ? this.values[sPoint] : sPoint;
    const eValue = typeof ePoint !== 'number' ? this.values[ePoint] : ePoint;
    return `@media (min-width:${sValue}px) and (max-width:${eValue}px)`;
  },
  not(sPoint, ePoint) {
    const sValue = typeof sPoint !== 'number' ? this.values[sPoint] : sPoint;
    const eValue = typeof ePoint !== 'number' ? this.values[ePoint] : ePoint;
    return `@media not all and (min-width:${sValue}px) and (max-width:${eValue}px)`;
  },
  createStyle(style) {
    if (!style) return {};
    const _this = this;
    const result: {
      [key: string]: string | number | { [key: string]: string | number };
    } = {};

    const tempArray: { [key: string]: { [key: string]: string | number } }[] =
      [];
    const _ = Object.entries(style).map(([cssProperty, cssValue]) => {
      if (typeof cssValue === 'number' || typeof cssValue === 'string') {
        result[cssProperty] = cssValue;
      } else {
        if (!cssValue) return;
        Object.entries(cssValue).map(([breakpoints, value]) => {
          tempArray.push({
            [breakpoints]: {
              [cssProperty]: value as string | number,
            },
          });
        });
      }

      const tempObj: { [key: string]: { [key: string]: string | number } } = {};
      tempArray.forEach(item => {
        const key = Object.keys(item)[0];
        tempObj[key] = { ...tempObj[key], ...item[key] };
        if (!tempObj) return;
        Object.entries(tempObj).map(([breakpoints, value], index) => {
          if (index === 0) {
            result[_this.down(breakpoints as Breakpoints)] = value;
            result[_this.up(breakpoints as Breakpoints)] = value;
          } else {
            result[_this.up(breakpoints as Breakpoints)] = value;
          }
        });
      });
    });

    return result;
  },
};
