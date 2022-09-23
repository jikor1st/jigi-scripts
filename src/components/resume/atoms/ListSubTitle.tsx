import { ReactNode } from 'react';
import styled from '@emotion/styled';

import { CSSWithBreakpoints } from '@/lib/theme';

const SListSubTitle = styled.h3<CSSWithBreakpoints>(({ theme, sx }) => {
  return {
    color: theme.palette.text.primary,
    ...theme.typography.subtitle2,
    fontWeight: theme.typography.fontWeight.Bold,
    ...theme.breakpoints.createStyle(sx),
  };
});

interface ListSubTitleProps extends CSSWithBreakpoints {
  children?: ReactNode;
}

export function ListSubTitle({ children, ...rest }: ListSubTitleProps) {
  return <SListSubTitle {...rest}>{children}</SListSubTitle>;
}
