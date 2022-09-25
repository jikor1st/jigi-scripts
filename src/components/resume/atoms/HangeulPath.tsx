import { createElement, forwardRef, memo } from 'react';

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
}

export const HangeulPath = forwardRef<SVGSVGElement, HangeulPathProps>(
  ({ variant, stroke = '#000000', strokeWidth }, rootRef) => {
    return (
      <HangeulBox>
        {createElement(HANGEUL[variant], {
          stroke: stroke,
          strokeWidth: strokeWidth,
          isVisible: false,
          ref: rootRef,
        })}
      </HangeulBox>
    );
  },
);

HangeulPath.displayName = 'HangeulPath';
