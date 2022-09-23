import { forwardRef } from 'react';
import { HangeulSVGProps } from '@/lib/types';
import { SVG } from './SVG';

export const HgC02N = forwardRef<SVGSVGElement, HangeulSVGProps>(
  ({ stroke, strokeWidth, ...rest }, svgRef) => {
    return (
      <SVG ref={svgRef} {...rest} viewBox="0 0 72 72">
        <g transform="translate(-194 -531)">
          <rect
            width="72"
            height="72"
            transform="translate(194 531)"
            fill="none"
          />
          <path
            d="M304.862,1168.227v46.186h43.684"
            transform="translate(-96.362 -624.727)"
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
