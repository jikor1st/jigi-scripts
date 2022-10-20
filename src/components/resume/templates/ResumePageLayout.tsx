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

interface ResumeLayoutProps extends React.PropsWithChildren<{}> {
  pageTitle: string;
  footerNavVisible?: boolean;
}

export function ResumePageLayout({
  children,
  pageTitle,
  footerNavVisible = true,
}: ResumeLayoutProps) {
  const footerElRef = useRef(null);
  const entry = useIntersectionObserver(footerElRef, { threshold: 0 });
  const isFooterVisible = !!entry?.isIntersecting;

  const { registerTriggerTarget, triggerStart } = useScrollTrigger();

  const isVisible =
    typeof window !== 'undefined' && triggerStart > window.innerHeight / 1.5;

  return (
    <SContainer ref={el => registerTriggerTarget(el as HTMLDivElement)}>
      <HeaderLayout pageTitle={pageTitle} />
      <SWrapper>
        <MainLayout page={children} />
        <TopButton isBottom={isFooterVisible} isVisible={isVisible} />
      </SWrapper>
      <FooterLayout
        ref={footerElRef}
        pageTitle={pageTitle}
        footerNavVisible={footerNavVisible}
      />
    </SContainer>
  );
}
