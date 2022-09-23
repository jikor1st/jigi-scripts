import React from 'react';

import styled from '@emotion/styled';

import { CSSWithBreakpoints } from '@/lib/theme';

const SBox = styled.div<CSSWithBreakpoints>(({ theme, sx }) => {
  return {
    ...theme.breakpoints.createStyle(sx),
  };
});

interface BoxProps extends CSSWithBreakpoints {
  children?: React.ReactNode;
  component?: React.ElementType;
}

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ children, component = 'div', ...rest }, RootRef) => {
    return (
      <SBox ref={RootRef} as={component} {...rest}>
        {children}
      </SBox>
    );
  },
);

Box.displayName = 'Box';
