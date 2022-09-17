import React from 'react';

import styled from '@emotion/styled';

import { SxProps, CSSProperties } from '@/lib/theme';

const SBox = styled.div<{ sx: CSSProperties }>(({ theme, sx }) => {
  return {
    ...sx,
  };
});

interface BoxProps extends SxProps {
  children?: React.ReactNode;
  component?: React.ElementType;
}

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ children, component = 'div', sx = {} }, RootRef) => {
    return (
      <SBox ref={RootRef} as={component} sx={sx}>
        {children}
      </SBox>
    );
  },
);

Box.displayName = 'Box';
