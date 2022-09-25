import { HangeulSVGProps } from '@/lib/types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
export const initStroke = {
  draw: {
    strokeDasharray: 270,
    strokeDashoffset: 0,
  },
  erase: {
    strokeDasharray: 270,
    strokeDashoffset: 270,
  },
};
export const SVG = styled.svg<Omit<HangeulSVGProps, 'stroke' | 'strokeWidth'>>(
  () => {
    return {};
  },
);
