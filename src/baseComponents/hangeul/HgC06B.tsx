import { forwardRef } from 'react';
import { HangeulSVGProps } from '@/lib/types';
import { SVG } from './SVG';

export const HgC06B = forwardRef<SVGSVGElement, HangeulSVGProps>(
  ({ stroke, strokeWidth, ...rest }, svgRef) => {
    return (
      <SVG ref={svgRef} {...rest} viewBox="0 0 72 72">
        <g transform="translate(-713 -531)">
          <rect
            width="72"
            height="72"
            transform="translate(713 531)"
            fill="none"
          />
          <g transform="translate(727 544)">
            <g transform="translate(0 0)">
              <line
                x2="43.684"
                transform="translate(0 16.686)"
                fill="none"
                stroke={stroke}
                strokeLinecap="square"
                strokeMiterlimit="10"
                strokeWidth={strokeWidth}
              />
              <path
                d="M672.151,1168.227v46.186h43.684v-46.186"
                transform="translate(-672.151 -1168.227)"
                fill="none"
                stroke={stroke}
                strokeLinecap="square"
                strokeMiterlimit="10"
                strokeWidth={strokeWidth}
              />
            </g>
          </g>
        </g>
      </SVG>
    );
  },
);

HgC06B.displayName = 'HgC06B';
