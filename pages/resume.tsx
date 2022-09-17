import { ReactElement } from 'react';

import styled from '@emotion/styled';
import { Typography, Icon } from '@/baseComponents';

import {
  ResumePageLayout,
  Headline,
  Introduction,
  Technology,
  Experience,
} from '@/components/resume/templates';

import { RESUME } from '@/lib/constants';

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
    </SContainer>
  );
}

ResumePage.getLayout = function getLayout(page: ReactElement) {
  return <ResumePageLayout>{page}</ResumePageLayout>;
};
