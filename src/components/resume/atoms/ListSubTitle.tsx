import { ReactNode } from 'react';
import styled from '@emotion/styled';

interface MarginBottom {
  mb?: number;
}

const SListSubTitle = styled.h3<MarginBottom>(({ theme, mb }) => {
  return {
    color: theme.palette.text.primary,
    ...(mb && { marginBottom: theme.typography.pxToRem(mb) }),
    ...theme.typography.subtitle2,
    fontWeight: theme.typography.fontWeight.Bold,
  };
});

interface ListSubTitleProps extends MarginBottom {
  children?: ReactNode;
}

export function ListSubTitle({ children, mb }: ListSubTitleProps) {
  return <SListSubTitle mb={mb}>{children}</SListSubTitle>;
}
