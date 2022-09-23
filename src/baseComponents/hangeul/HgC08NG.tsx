import { forwardRef } from 'react';
import { HangeulSVGProps } from '@/lib/types';
import { SVG } from './SVG';

export const HgC08NG = forwardRef<SVGSVGElement, HangeulSVGProps>(
  ({ stroke, strokeWidth, ...rest }, svgRef) => {
    return (
      <SVG ref={svgRef} {...rest} viewBox="0 0 72 72">
        <g transform="translate(-976 -531)">
          <rect
            width="72"
            height="72"
            transform="translate(976 531)"
            fill="none"
          />
          <g transform="translate(989 544)">
            <path
              d="M881.16,1168.227H882.5c12.2,0,22.082,10.339,22.082,23.093h0c0,12.754-9.886,23.094-22.082,23.094h-2.683c-12.2,0-22.082-10.34-22.082-23.094h0c0-12.754,9.886-23.093,22.082-23.093h1.341"
              transform="translate(-857.737 -1168.227)"
              fill="none"
              stroke={stroke}
              strokeLinecap="butt"
              strokeMiterlimit="10"
              strokeWidth={strokeWidth}
            />
          </g>
        </g>
      </SVG>
    );
  },
);
