import { HangeulSVGProps } from '@/lib/types';
import styled, { css } from 'styled-components';
import { cssGenerator } from './hangeulUtils';

export const SVG = styled.svg<Omit<HangeulSVGProps, 'stroke' | 'strokeWidth'>>(
  ({ dropShadow, visibility, opacity }) => {
    return {
      ...css({
        ...cssGenerator(dropShadow, {
          filter: `drop-shadow(${dropShadow})`,
        }),
        ...cssGenerator(visibility, {
          visibility: visibility,
        }),
        ...cssGenerator(opacity, {
          opacity: opacity,
        }),
      }),
    };
  },
);
