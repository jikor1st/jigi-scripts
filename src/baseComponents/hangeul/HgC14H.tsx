import { forwardRef } from 'react';
import { HangeulSVGProps } from '@/lib/types';
import { SVG, initStroke } from './SVG';

export const HgC14H = forwardRef<SVGSVGElement, HangeulSVGProps>(
  ({ stroke, strokeWidth, isVisible, ...rest }, svgRef) => {
    const isDrawing = isVisible ? initStroke.draw : initStroke.erase;
    return (
      <SVG ref={svgRef} {...rest} viewBox="0 0 72 72">
        <g transform="translate(-1762 -531)">
          <rect
            width="72"
            height="72"
            transform="translate(1762 531)"
            fill="none"
          />
          <g transform="translate(1776 541)">
            <path
              d="M1435,1192.459h1.21c11.007,0,19.93,5.927,19.93,13.238h0c0,7.311-8.923,13.238-19.93,13.238h-2.421c-11.007,0-19.929-5.927-19.929-13.238h0c0-7.312,8.922-13.238,19.929-13.238H1435"
              transform="translate(-1413.157 -1166.785)"
              fill="none"
              stroke={stroke}
              strokeLinecap="butt"
              strokeMiterlimit="10"
              strokeWidth={strokeWidth}
              {...isDrawing}
            />
            <line
              x2="43.684"
              transform="translate(0 12.609)"
              fill="none"
              stroke={stroke}
              strokeLinecap="square"
              strokeMiterlimit="10"
              strokeWidth={strokeWidth}
              {...isDrawing}
            />
            <line
              y2="12.609"
              transform="translate(21.842 0)"
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

HgC14H.displayName = 'HgC14H';
