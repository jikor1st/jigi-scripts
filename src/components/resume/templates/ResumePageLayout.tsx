import styled from '@emotion/styled';

import { HeaderLayout, MainLayout, FooterLayout } from '../organisms';
import { TopButton } from '../atoms';
import { useIntersectionObserver, useScrollTrigger } from '@/lib/hooks';
import { useRef } from 'react';

const SContainer = styled.div(({ theme }) => {
  return {
    background: theme.palette.background.paper,
    minWidth: '320px',
  };
});
const SWrapper = styled.div(() => {
  return {
    position: 'relative',
  };
});

interface ResumeLayoutProps extends React.PropsWithChildren<{}> {}

export function ResumePageLayout({ children }: ResumeLayoutProps) {
  const footerElRef = useRef(null);
  const entry = useIntersectionObserver(footerElRef, { threshold: 0 });
  const isFooterVisible = !!entry?.isIntersecting;

  const { registerTriggerTarget, triggerStart } = useScrollTrigger();

  return (
    <SContainer ref={el => registerTriggerTarget(el as HTMLDivElement)}>
      <HeaderLayout />
      <SWrapper>
        <MainLayout page={children} />
        <TopButton
          isBottom={isFooterVisible}
          isVisible={triggerStart > window.innerHeight / 1.5}
        />
      </SWrapper>
      <FooterLayout ref={footerElRef} />
    </SContainer>
  );
}
