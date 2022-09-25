import { forwardRef } from 'react';
import { HangeulSVGProps } from '@/lib/types';
import { SVG, initStroke } from './SVG';

export const HgC07S = forwardRef<SVGSVGElement, HangeulSVGProps>(
  ({ stroke, strokeWidth, isVisible, ...rest }, svgRef) => {
    const isDrawing = isVisible ? initStroke.draw : initStroke.erase;
    return (
      <SVG ref={svgRef} {...rest} viewBox="0 0 72 72">
        <g transform="translate(-843 -531)">
          <rect
            width="72"
            height="72"
            transform="translate(843 531)"
            fill="none"
          />
          <g transform="translate(856 545)">
            <path
              d="M793.912,1168.227v8.667a45.405,45.405,0,0,1-4.156,19.039c-3.372,6.968-10.641,12.144-19.313,16.073"
              transform="translate(-770.442 -1168.227)"
              fill="none"
              stroke={stroke}
              strokeLinecap="square"
              strokeMiterlimit="10"
              strokeWidth={strokeWidth}
              {...isDrawing}
            />
            <path
              d="M799.3,1178.882a45.394,45.394,0,0,0,4.156,19.038c3.373,6.968,10.64,12.144,19.313,16.074"
              transform="translate(-775.826 -1170.214)"
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

HgC07S.displayName = 'HgC07S';
