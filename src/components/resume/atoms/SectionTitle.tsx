import { ReactNode } from 'react';
import styled from '@emotion/styled';

import { WithBreakpoints } from '@/lib/theme';

const STitle = styled.h2<{ mb?: WithBreakpoints }>(({ theme, mb }) => {
  return {
    color: theme.palette.text.primary,
    ...theme.typography.h2,
    [theme.breakpoints.down('lg')]: {
      ...theme.typography.h3,
    },
    [theme.breakpoints.down('sm')]: {
      ...theme.typography.h4,
    },
    ...theme.breakpoints.breakpointsCss('marginBottom', mb),
  };
});

interface SectionTitleProps {
  children?: ReactNode;
  mb?: WithBreakpoints;
}

export function SectionTitle({ children, mb }: SectionTitleProps) {
  return <STitle mb={mb}>{children}</STitle>;
}
