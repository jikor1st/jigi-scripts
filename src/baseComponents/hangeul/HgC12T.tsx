import { forwardRef } from 'react';
import { HangeulSVGProps } from '@/lib/types';
import { SVG } from './SVG';

export const HgC12T = forwardRef<SVGSVGElement, HangeulSVGProps>(
  ({ stroke, strokeWidth, ...rest }, svgRef) => {
    return (
      <SVG ref={svgRef} {...rest} viewBox="0 0 72 72">
        <g transform="translate(-1504 -531)">
          <rect
            width="72"
            height="72"
            transform="translate(1504 531)"
            fill="none"
          />
          <g transform="translate(1518 544)">
            <path
              d="M1272.241,1168.227h-43.684v46.186h43.684"
              transform="translate(-1228.557 -1168.227)"
              fill="none"
              stroke={stroke}
              strokeLinecap="square"
              strokeMiterlimit="10"
              strokeWidth={strokeWidth}
            />
            <line
              x2="43.684"
              transform="translate(0 23.093)"
              fill="none"
              stroke={stroke}
              strokeLinecap="square"
              strokeMiterlimit="10"
              strokeWidth={strokeWidth}
            />
          </g>
        </g>
      </SVG>
    );
  },
);
