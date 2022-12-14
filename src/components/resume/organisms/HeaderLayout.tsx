import { forwardRef } from 'react';
import styled from '@emotion/styled';

import { Icon } from '@/baseComponents';

import { ActionBarLayout } from '../moecules';
import Link from 'next/link';

const SContainer = styled.header(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    left: 0,
    height: 74,
    background: theme.palette.background.paper,
    backdropFilter: 'blur(20px)',
    zIndex: theme.zIndex.appBar,
    [theme.breakpoints.down('lg')]: {
      height: 58,
    },
  };
});

const SWrapper = styled.div(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    maxWidth: theme.breakpoints.values.xxl,
    margin: '0 auto',
    padding: '0 20px',
  };
});

const SLogo = styled.h1(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  };
});
const SSubTitle = styled.span(({ theme }) => {
  return {
    display: 'block',
    color: theme.palette.text.primary,
    marginTop: theme.typography.pxToRem(4),
    marginLeft: theme.typography.pxToRem(-6),
    ...theme.typography.body2,
  };
});

interface HeaderLayoutProps {
  pageTitle: string;
}

export const HeaderLayout = forwardRef<HTMLHeadElement, HeaderLayoutProps>(
  ({ pageTitle }, rootRef) => {
    return (
      <SContainer ref={rootRef}>
        <SWrapper>
          <Link href={'/resume'} passHref>
            <SLogo>
              <Icon icon="Symbol" color="primary" size={'large'} />
              <SSubTitle>{pageTitle}</SSubTitle>
            </SLogo>
          </Link>
          <ActionBarLayout />
        </SWrapper>
      </SContainer>
    );
  },
);

HeaderLayout.displayName = 'HeaderLayout';
