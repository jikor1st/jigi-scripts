import { ReactNode } from 'react';
import styled from 'styled-components';

import { CSSWithBreakpoints } from '@/lib/theme';

interface SSectionProps extends CSSWithBreakpoints {
  styles?: React.CSSProperties;
}

const SSection = styled.section<SSectionProps>(({ theme, sx, styles }) => {
  return {
    maxWidth: theme.breakpoints.values.xxl,
    margin: '0 auto',
    '&:not(:last-child)': {
      marginBottom: 200,
    },
    padding: '0 20px',
    ...theme.breakpoints.createStyle(sx),
    ...styles,
  };
});

interface SectionWrapperProps extends CSSWithBreakpoints {
  id?: string;
  children?: ReactNode;
  styles?: React.CSSProperties | { [key: string]: React.CSSProperties };
}

export function SectionWrapper({ children, ...rest }: SectionWrapperProps) {
  return <SSection {...rest}>{children}</SSection>;
}
