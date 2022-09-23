import { forwardRef } from 'react';
import { HangeulSVGProps } from '@/lib/types';
import { SVG } from './SVG';

export const HgC05M = forwardRef<SVGSVGElement, HangeulSVGProps>(
  ({ stroke, strokeWidth, ...rest }, svgRef) => {
    return (
      <SVG ref={svgRef} {...rest} viewBox="0 0 72 72">
        <g transform="translate(-583 -531)">
          <rect
            width="72"
            height="72"
            transform="translate(583 531)"
            fill="none"
          />
          <path
            d="M586.968,1168.227h43.684v46.186H586.968v-46.186"
            transform="translate(10.532 -624.727)"
            fill="none"
            stroke={stroke}
            strokeLinecap="square"
            strokeMiterlimit="10"
            strokeWidth={strokeWidth}
          />
        </g>
      </SVG>
    );
  },
);

HgC05M.displayName = 'HgC05M';
