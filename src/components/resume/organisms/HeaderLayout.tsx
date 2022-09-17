import styled from '@emotion/styled';

import { Icon } from '@/baseComponents';

import { ActionBarLayout } from '../moecules';

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
  };
});

const SWrapper = styled.div(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: theme.breakpoints.values.xxl,
    margin: '0 auto',
    padding: '0 20px',
  };
});

const SLogo = styled.h1(() => {
  return {
    display: 'flex',
    alignItems: 'center',
  };
});
const SSubTitle = styled.span(({ theme }) => {
  return {
    display: 'block',
    marginTop: theme.typography.pxToRem(4),
    marginLeft: theme.typography.pxToRem(-6),
    ...theme.typography.body2,
  };
});

export function HeaderLayout() {
  return (
    <SContainer>
      <SWrapper>
        <SLogo>
          <Icon icon="Symbol" color="primary" size={'large'} />
          <SSubTitle>이력서</SSubTitle>
        </SLogo>
        <ActionBarLayout />
      </SWrapper>
    </SContainer>
  );
}
