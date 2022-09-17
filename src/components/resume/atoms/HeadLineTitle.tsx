import { ReactNode } from 'react';
import styled from '@emotion/styled';

const SHeadLineTitle = styled.h2(({ theme }) => {
  return {
    transform: 'translateY(-50%)',
    ...theme.typography.h1,
    [theme.breakpoints.down('lg')]: {
      ...theme.typography.h3,
    },
    [theme.breakpoints.down('sm')]: {
      ...theme.typography.h4,
    },
  };
});

interface HeadLIneTitleProps {
  children?: ReactNode;
}

export function HeadLineTitle({ children }: HeadLIneTitleProps) {
  return <SHeadLineTitle>{children}</SHeadLineTitle>;
}
