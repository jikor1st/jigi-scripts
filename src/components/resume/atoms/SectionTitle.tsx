import { ReactNode } from 'react';
import styled from '@emotion/styled';

import { CSSWithBreakpoints } from '@/lib/theme';

const STitle = styled.h2<CSSWithBreakpoints>(({ theme, sx }) => {
  return {
    color: theme.palette.text.primary,
    ...theme.typography.h1,
    fontWeight: theme.typography.fontWeight.Bold,
    ...theme.breakpoints.createStyle(sx),
  };
});

interface SectionTitleProps extends CSSWithBreakpoints {
  children?: ReactNode;
}

export function SectionTitle({ children, ...rest }: SectionTitleProps) {
  return <STitle {...rest}>{children}</STitle>;
}
