import { forwardRef } from 'react';
import { HangeulSVGProps } from '@/lib/types';
import { SVG, initStroke } from './SVG';

export const HgC12T = forwardRef<SVGSVGElement, HangeulSVGProps>(
  ({ stroke, strokeWidth, isVisible, ...rest }, svgRef) => {
    const isDrawing = isVisible ? initStroke.draw : initStroke.erase;
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
              {...isDrawing}
            />
            <line
              x2="43.684"
              transform="translate(0 23.093)"
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

HgC12T.displayName = 'HgC12T';
