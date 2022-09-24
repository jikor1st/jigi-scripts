import { ReactElement } from 'react';
import styled from '@emotion/styled';

import { Seo } from '@/extendsComponents';

import {
  ResumePageLayout,
  Headline,
  Introduction,
  Technology,
  Experience,
  ContactAndOperate,
} from '@/components/resume/templates';

const SContainer = styled.div(() => {
  return {};
});

export default function ResumePage() {
  return (
    <div>
      <Seo
        title="지기역"
        siteName="이력서"
        description="프론트엔드 개발자 지기역 이력서"
        ogImage="https://jikor1st.github.io/assets/og/resume-og.png"
        ogUrl="https://jigi-scripts.vercel.app"
      />
      <SContainer>
        <Headline />
        <Introduction />
        <Technology />
        <Experience />
        <ContactAndOperate />
      </SContainer>
    </div>
  );
}

ResumePage.getLayout = function getLayout(page: ReactElement) {
  return <ResumePageLayout>{page}</ResumePageLayout>;
};
