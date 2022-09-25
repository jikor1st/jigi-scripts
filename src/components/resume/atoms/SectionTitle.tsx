import { ReactNode } from 'react';
import styled from '@emotion/styled';

import { CSSWithBreakpoints } from '@/lib/theme';

import { Icon } from '@/baseComponents';

const STitle = styled.h2<CSSWithBreakpoints>(({ theme, sx }) => {
  return {
    position: 'relative',
    display: 'inline-block',
    color: theme.palette.text.primary,
    ...theme.typography.h1,
    fontWeight: theme.typography.fontWeight.Bold,
    ...theme.breakpoints.createStyle(sx),
  };
});
const SIconWrap = styled.span(({ theme }) => {
  return {
    fontSize: 0,
    lineHeight: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    transform: 'translate(70%,-10%)',
  };
});
interface SectionTitleProps extends CSSWithBreakpoints {
  children?: ReactNode;
}

export function SectionTitle({ children, ...rest }: SectionTitleProps) {
  return (
    <STitle {...rest}>
      <SIconWrap>
        <Icon icon="Required" color="primary" />
      </SIconWrap>
      {children}
    </STitle>
  );
}
