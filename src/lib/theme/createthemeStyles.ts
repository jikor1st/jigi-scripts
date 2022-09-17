import * as CSS from 'csstype';

export type NormalCssProperties = CSS.Properties<number | string>;

// export interface BaseCSSProperties extends NormalCssProperties {}

// export interface CSSProperties extends BaseCSSProperties {
//   [k: string]: unknown | CSSProperties;
// }

export interface CSSProperties extends NormalCssProperties {}
export interface SxProps {
  sx?: CSSProperties;
}
