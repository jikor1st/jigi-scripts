import { forwardRef } from 'react';
import { HangeulSVGProps } from '@/lib/types';
import { SVG, initStroke } from './SVG';

export const HgC01G = forwardRef<SVGSVGElement, HangeulSVGProps>(
  ({ stroke, strokeWidth, isVisible, ...rest }, svgRef) => {
    const isDrawing = isVisible ? initStroke.draw : initStroke.erase;
    return (
      <SVG ref={svgRef} {...rest} viewBox="0 0 72 72">
        <g transform="translate(-64 -531)">
          <rect
            width="72"
            height="72"
            transform="translate(64 531)"
            fill="none"
          />
          <path
            d="M211.862,1168.227h43.684s0,39.292-36.029,46.187"
            transform="translate(-133.362 -624.727)"
            fill="none"
            stroke={stroke}
            strokeLinecap="square"
            strokeMiterlimit="10"
            strokeWidth={strokeWidth}
            {...isDrawing}
          />
        </g>
      </SVG>
    );
  },
);

HgC01G.displayName = 'HgC01G';
