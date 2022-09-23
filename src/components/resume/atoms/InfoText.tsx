import { ReactNode } from 'react';
import styled from '@emotion/styled';

import { CSSWithBreakpoints } from '@/lib/theme';

const SInfoText = styled.p<CSSWithBreakpoints>(({ theme, sx }) => {
  return {
    color: theme.palette.text.primary,
    ...theme.typography.subtitle2,
    [theme.breakpoints.down('lg')]: {
      ...theme.typography.body1,
    },
    ...theme.breakpoints.createStyle(sx),
  };
});

interface InfoTextProps extends CSSWithBreakpoints {
  children?: ReactNode;
}

export function InfoText({ children, ...rest }: InfoTextProps) {
  return <SInfoText {...rest}>{children}</SInfoText>;
}
