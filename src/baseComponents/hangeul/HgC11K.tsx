import { forwardRef } from 'react';
import { HangeulSVGProps } from '@/lib/types';
import { SVG, initStroke } from './SVG';

export const HgC11K = forwardRef<SVGSVGElement, HangeulSVGProps>(
  ({ stroke, strokeWidth, isVisible, ...rest }, svgRef) => {
    const isDrawing = isVisible ? initStroke.draw : initStroke.erase;
    return (
      <SVG ref={svgRef} {...rest} viewBox="0 0 72 72">
        <g transform="translate(-1374 -531)">
          <rect
            width="72"
            height="72"
            transform="translate(1374 531)"
            fill="none"
          />
          <g transform="translate(1388 544)">
            <path
              d="M1137.98,1168.227h43.684s0,39.292-36.029,46.187"
              transform="translate(-1137.98 -1168.227)"
              fill="none"
              stroke={stroke}
              strokeLinecap="square"
              strokeMiterlimit="10"
              strokeWidth={strokeWidth}
              {...isDrawing}
            />
            <line
              x2="31.423"
              transform="translate(3.705 21.89)"
              fill="none"
              stroke={stroke}
              strokeLinecap="square"
              strokeMiterlimit="10"
              strokeWidth={strokeWidth}
              {...isDrawing}
            />
          </g>
        </g>
      </SVG>
    );
  },
);

HgC11K.displayName = 'HgC11K';
