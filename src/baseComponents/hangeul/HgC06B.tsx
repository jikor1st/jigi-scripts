import { forwardRef } from 'react';
import { HangeulSVGProps } from '@/lib/types';
import { SVG, initStroke } from './SVG';

export const HgC06B = forwardRef<SVGSVGElement, HangeulSVGProps>(
  ({ stroke, strokeWidth, isVisible, ...rest }, svgRef) => {
    const isDrawing = isVisible ? initStroke.draw : initStroke.erase;
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
                {...isDrawing}
              />
              <path
                d="M672.151,1168.227v46.186h43.684v-46.186"
                transform="translate(-672.151 -1168.227)"
                fill="none"
                stroke={stroke}
                strokeLinecap="square"
                strokeMiterlimit="10"
                strokeWidth={strokeWidth}
                {...isDrawing}
              />
            </g>
          </g>
        </g>
      </SVG>
    );
  },
);

HgC06B.displayName = 'HgC06B';
