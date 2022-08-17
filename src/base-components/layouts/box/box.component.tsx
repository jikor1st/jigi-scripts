import React from 'react';

import styled from '@emotion/styled';

type CssProps = {};

type PaddingValue = number | string;
type PaddingNested =
  | PaddingValue
  | [PaddingValue]
  | [PaddingValue, PaddingValue]
  | [PaddingValue, PaddingValue, PaddingValue]
  | [PaddingValue, PaddingValue, PaddingValue, PaddingValue];

interface Padding {
  padding: PaddingNested;
  p: PaddingNested;

  px: PaddingValue;
  py: PaddingValue;

  paddingTop: PaddingValue;
  pt: PaddingValue;

  paddingBottom: PaddingValue;
  pb: PaddingValue;

  paddingLeft: PaddingValue;
  pl: PaddingValue;

  paddingRight: PaddingValue;
  pr: PaddingValue;
}

interface CommonComponentProps extends Padding {}

interface BoxProps extends CommonComponentProps {
  children?: React.ReactNode;
}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ children }, RootRef) => {
    return <BoxStyled ref={RootRef}>{children}</BoxStyled>;
  },
);

const BoxStyled = styled.div(() => {
  return {};
});

export { Box };
