import { ReactElement } from 'react';
import styled from '@emotion/styled';

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
    <SContainer>
      <Headline />
      <Introduction />
      <Technology />
      <Experience />
      <ContactAndOperate />
    </SContainer>
  );
}

ResumePage.getLayout = function getLayout(page: ReactElement) {
  return <ResumePageLayout>{page}</ResumePageLayout>;
};
