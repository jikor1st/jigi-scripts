import { ReactNode } from 'react';
import styled from '@emotion/styled';

import { CSSWithBreakpoints } from '@/lib/theme';

const STitle = styled.h2<CSSWithBreakpoints>(({ theme, sx }) => {
  return {
    color: theme.palette.text.primary,
    ...theme.typography.h2,
    [theme.breakpoints.down('lg')]: {
      ...theme.typography.h3,
    },
    [theme.breakpoints.down('sm')]: {
      ...theme.typography.h4,
    },
    ...theme.breakpoints.createStyle(sx),
  };
});

interface SectionTitleProps extends CSSWithBreakpoints {
  children?: ReactNode;
}

export function SectionTitle({ children, ...rest }: SectionTitleProps) {
  return <STitle {...rest}>{children}</STitle>;
}
