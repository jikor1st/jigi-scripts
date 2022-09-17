import styled from '@emotion/styled';

import { HeaderLayout, MainLayout } from '../organisms';

const SContainer = styled.div(() => {
  return {
    minWidth: '320px',
  };
});

interface ResumeLayoutProps extends React.PropsWithChildren<{}> {}

export function ResumePageLayout({ children }: ResumeLayoutProps) {
  return (
    <SContainer>
      <HeaderLayout />
      <MainLayout page={children} />
    </SContainer>
  );
}
