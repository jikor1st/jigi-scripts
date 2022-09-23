import { ReactElement } from 'react';
import styled from 'styled-components';

import { Seo } from '@/extendsComponents';

import {
  ResumePageLayout,
  Headline,
  Introduction,
  Technology,
  Experience,
  ContactAndOperate,
} from '@/components/resume/templates';

import { TopButton } from '@/components/resume/atoms';

const SContainer = styled.div(() => {
  return {};
});

export default function ResumePage() {
  return (
    <>
      <Seo
        title="지기역"
        siteName="이력서"
        description="프론트엔드 개발자 지기역 이력서"
      />
      <SContainer>
        <Headline />
        <Introduction />
        <Technology />
        <Experience />
        <ContactAndOperate />
      </SContainer>
      <TopButton />
    </>
  );
}

ResumePage.getLayout = function getLayout(page: ReactElement) {
  return <ResumePageLayout>{page}</ResumePageLayout>;
};
