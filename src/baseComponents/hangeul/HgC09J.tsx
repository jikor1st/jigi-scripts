import { forwardRef } from 'react';
import { HangeulSVGProps } from '@/lib/types';
import { SVG } from './SVG';

export const HgC09J = forwardRef<SVGSVGElement, HangeulSVGProps>(
  ({ stroke, strokeWidth, ...rest }, svgRef) => {
    return (
      <SVG ref={svgRef} {...rest} viewBox="0 0 72 72">
        <g transform="translate(-1109 -531)">
          <rect
            width="72"
            height="72"
            transform="translate(1109 531)"
            fill="none"
          />
          <g transform="translate(1122 545)">
            <path
              d="M973.368,1168.227v8.667a45.409,45.409,0,0,1-4.156,19.039c-3.373,6.968-10.64,12.144-19.313,16.073"
              transform="translate(-949.899 -1168.227)"
              fill="none"
              stroke={stroke}
              strokeLinecap="square"
              strokeMiterlimit="10"
              strokeWidth={strokeWidth}
            />
            <path
              d="M978.751,1178.882a45.406,45.406,0,0,0,4.156,19.038c3.373,6.968,10.64,12.144,19.313,16.074"
              transform="translate(-955.282 -1170.214)"
              fill="none"
              stroke={stroke}
              strokeLinecap="square"
              strokeMiterlimit="10"
              strokeWidth={strokeWidth}
            />
            <line
              x2="43.684"
              transform="translate(1.627 0)"
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
