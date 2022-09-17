import { ReactNode } from 'react';
import styled from '@emotion/styled';

const SSection = styled.section(({ theme }) => {
  return {
    maxWidth: theme.breakpoints.values.xxl,
    margin: '0 auto',
    '&:not(:last-child)': {
      marginBottom: 200,
    },
    padding: '0 20px',
    marginTop: `-${theme.typography.h2.lineHeight}`,
    [theme.breakpoints.down('lg')]: {
      marginTop: `-${theme.typography.h3.lineHeight}`,
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: `-${theme.typography.h4.lineHeight}`,
    },
  };
});

interface SectionWrapperProps {
  children?: ReactNode;
}

export function SectionWrapper({ children }: SectionWrapperProps) {
  return <SSection>{children}</SSection>;
}
