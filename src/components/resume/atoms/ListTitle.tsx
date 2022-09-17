import { ReactNode } from 'react';
import styled from '@emotion/styled';

interface MarginBottom {
  mb?: number;
}

const SListTitle = styled.h3<MarginBottom>(({ theme, mb }) => {
  return {
    ...(mb && { marginBottom: theme.typography.pxToRem(mb) }),
    ...theme.typography.h5,
    [theme.breakpoints.down('lg')]: {
      ...theme.typography.subtitle1,
      fontWeight: theme.typography.fontWeight.Bold,
    },
  };
});

interface ListTitleProps extends MarginBottom {
  children?: ReactNode;
}

export function ListTitle({ children, mb }: ListTitleProps) {
  return <SListTitle mb={mb}>{children}</SListTitle>;
}
