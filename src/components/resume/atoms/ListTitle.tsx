import { ReactNode } from 'react';
import styled from 'styled-components';

import { CSSWithBreakpoints } from '@/lib/theme';

const SListTitle = styled.h3<CSSWithBreakpoints>(({ theme, sx }) => {
  return {
    color: theme.palette.text.primary,
    ...theme.typography.h5,
    [theme.breakpoints.down('lg')]: {
      ...theme.typography.subtitle1,
      fontWeight: theme.typography.fontWeight.Bold,
    },
    ...theme.breakpoints.createStyle(sx),
  };
});

interface ListTitleProps extends CSSWithBreakpoints {
  children?: ReactNode;
}

export function ListTitle({ children, ...rest }: ListTitleProps) {
  return <SListTitle {...rest}>{children}</SListTitle>;
}
