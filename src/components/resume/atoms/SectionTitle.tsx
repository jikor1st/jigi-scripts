import { ReactNode } from 'react';
import styled from '@emotion/styled';

interface MarginBottom {
  mb?: number;
}

const STitle = styled.h2<MarginBottom>(({ theme, mb }) => {
  return {
    ...theme.typography.h2,
    ...(mb && { marginBottom: theme.typography.pxToRem(mb) }),
    [theme.breakpoints.down('lg')]: {
      ...theme.typography.h3,
    },
    [theme.breakpoints.down('sm')]: {
      ...theme.typography.h4,
    },
  };
});

interface SectionTitleProps extends MarginBottom {
  children?: ReactNode;
}

export function SectionTitle({ children, mb }: SectionTitleProps) {
  return <STitle mb={mb}>{children}</STitle>;
}
