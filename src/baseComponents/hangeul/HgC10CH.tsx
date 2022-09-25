import { forwardRef } from 'react';
import { HangeulSVGProps } from '@/lib/types';
import { SVG, initStroke } from './SVG';

export const HgC10CH = forwardRef<SVGSVGElement, HangeulSVGProps>(
  ({ stroke, strokeWidth, isVisible, ...rest }, svgRef) => {
    const isDrawing = isVisible ? initStroke.draw : initStroke.erase;
    return (
      <SVG ref={svgRef} {...rest} viewBox="0 0 72 72">
        <g transform="translate(-1242 -531)">
          <rect
            width="72"
            height="72"
            transform="translate(1242 531)"
            fill="none"
          />
          <g transform="translate(1255 542)">
            <path
              d="M1065.588,1160.9v14.63a45.394,45.394,0,0,1-4.156,19.039c-3.373,6.968-10.64,12.144-19.312,16.073"
              transform="translate(-1042.119 -1160.896)"
              fill="none"
              stroke={stroke}
              strokeLinecap="square"
              strokeMiterlimit="10"
              strokeWidth={strokeWidth}
              {...isDrawing}
            />
            <path
              d="M1070.97,1178.882a45.409,45.409,0,0,0,4.156,19.038c3.373,6.968,10.641,12.144,19.314,16.074"
              transform="translate(-1047.501 -1164.251)"
              fill="none"
              stroke={stroke}
              strokeLinecap="square"
              strokeMiterlimit="10"
              strokeWidth={strokeWidth}
              {...isDrawing}
            />
            <line
              x2="43.684"
              transform="translate(1.627 11.622)"
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

HgC10CH.displayName = 'HgC10CH';
