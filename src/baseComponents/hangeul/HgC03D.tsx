import { forwardRef } from 'react';
import { HangeulSVGProps } from '@/lib/types';
import { SVG } from './SVG';

export const HgC03D = forwardRef<SVGSVGElement, HangeulSVGProps>(
  ({ stroke, strokeWidth, ...rest }, svgRef) => {
    return (
      <SVG ref={svgRef} {...rest} viewBox="0 0 72 72">
        <g transform="translate(-324 -531)">
          <rect
            width="72"
            height="72"
            transform="translate(324 531)"
            fill="none"
          />
          <path
            d="M440.246,1168.227H396.562v46.186h43.684"
            transform="translate(-58.062 -624.727)"
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
