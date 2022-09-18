import { ReactNode } from 'react';
import styled from '@emotion/styled';

interface MarginBottom {
  mb?: number;
}

const SInfoText = styled.p<MarginBottom>(({ theme, mb }) => {
  return {
    color: theme.palette.text.primary,
    ...(mb && { marginBottom: theme.typography.pxToRem(mb) }),
    ...theme.typography.subtitle2,
    [theme.breakpoints.down('lg')]: {
      ...theme.typography.body1,
    },
  };
});

interface InfoTextProps extends MarginBottom {
  children?: ReactNode;
}

export function InfoText({ children, mb }: InfoTextProps) {
  return <SInfoText mb={mb}>{children}</SInfoText>;
}
