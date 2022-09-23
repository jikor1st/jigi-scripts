import styled from 'styled-components';

import { HeaderLayout, MainLayout, FooterLayout } from '../organisms';

const SContainer = styled.div(({ theme }) => {
  return {
    background: theme.palette.background.paper,
    minWidth: '320px',
  };
});

interface ResumeLayoutProps extends React.PropsWithChildren<{}> {}

export function ResumePageLayout({ children }: ResumeLayoutProps) {
  return (
    <SContainer>
      <HeaderLayout />
      <MainLayout page={children} />
      <FooterLayout />
    </SContainer>
  );
}
