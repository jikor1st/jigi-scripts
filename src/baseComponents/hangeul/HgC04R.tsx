import { forwardRef } from 'react';
import { HangeulSVGProps } from '@/lib/types';
import { SVG } from './SVG';

export const HgC04R = forwardRef<SVGSVGElement, HangeulSVGProps>(
  ({ stroke, strokeWidth, ...rest }, svgRef) => {
    return (
      <SVG ref={svgRef} {...rest} viewBox="0 0 72 72">
        <g transform="translate(-453 -531)">
          <rect
            width="72"
            height="72"
            transform="translate(453 531)"
            fill="none"
          />
          <path
            d="M488.123,1168.227h43.684v23.093H488.123v23.093h43.684"
            transform="translate(-20.624 -624.727)"
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

HgC04R.displayName = 'HgC04R';
