import { createElement, memo } from 'react';

import styled from '@emotion/styled';
import { HANGEUL } from '@/lib/constants';
import { HangeulSVGProps } from '@/lib/types';
import { UsePathAnimationReturn } from '@/lib/hooks';

const HangeulBox = styled.div(() => {
  return {
    '& > svg': {
      width: '100%',
      height: 'auto',
    },
  };
});

type OptionalHangeulSVGProps = {
  [K in keyof HangeulSVGProps]: HangeulSVGProps[K];
};

export interface HangeulPathProps
  extends Omit<OptionalHangeulSVGProps, 'visibility'> {
  variant: keyof typeof HANGEUL;
  registerSVG: UsePathAnimationReturn['registerSVG'];
}

export const HangeulPath = memo(
  ({
    variant,
    stroke = '#000000',
    strokeWidth,
    dropShadow = '',
    registerSVG,
  }: HangeulPathProps) => {
    return (
      <HangeulBox>
        {createElement(HANGEUL[variant], {
          dropShadow: dropShadow,
          stroke: stroke,
          strokeWidth: strokeWidth,
          visibility: 'hidden',
          ref: registerSVG,
        })}
      </HangeulBox>
    );
  },
);

HangeulPath.displayName = 'HangeulPath';
