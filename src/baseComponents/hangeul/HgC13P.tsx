import { forwardRef } from 'react';
import { HangeulSVGProps } from '@/lib/types';
import { SVG, initStroke } from './SVG';

export const HgC13P = forwardRef<SVGSVGElement, HangeulSVGProps>(
  ({ stroke, strokeWidth, isVisible, ...rest }, svgRef) => {
    const isDrawing = isVisible ? initStroke.draw : initStroke.erase;
    return (
      <SVG ref={svgRef} {...rest} viewBox="0 0 72 72">
        <g transform="translate(-1633 -531)">
          <rect
            width="72"
            height="72"
            transform="translate(1633 531)"
            fill="none"
          />
          <g transform="translate(1647 544)">
            <line
              x2="43.684"
              transform="translate(0 0)"
              fill="none"
              stroke={stroke}
              strokeLinecap="square"
              strokeMiterlimit="10"
              strokeWidth={strokeWidth}
              {...isDrawing}
            />
            <line
              y2="46.186"
              transform="translate(8.481 0)"
              fill="none"
              stroke={stroke}
              strokeLinecap="square"
              strokeMiterlimit="10"
              strokeWidth={strokeWidth}
              {...isDrawing}
            />
            <line
              y2="46.186"
              transform="translate(35.204 0)"
              fill="none"
              stroke={stroke}
              strokeLinecap="square"
              strokeMiterlimit="10"
              strokeWidth={strokeWidth}
              {...isDrawing}
            />
            <line
              x2="43.684"
              transform="translate(0 46.186)"
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

HgC13P.displayName = 'HgC13P';
