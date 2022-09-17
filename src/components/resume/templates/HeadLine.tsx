import styled from '@emotion/styled';

import { HeadLineTitle } from '../atoms';

interface ResumeHead {}

const SSection = styled.section(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    minHeight: `calc(100vh - 74px)`,
    maxWidth: theme.breakpoints.values.xxl,
    margin: '0 auto',
    padding: '0 20px',
  };
});
const SHighlight = styled.span(({ theme }) => {
  return {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeight.Bold,
  };
});

export function Headline({}: ResumeHead) {
  return (
    <SSection>
      <HeadLineTitle>
        방문해주셔서 감사합니다!
        <br />
        프론트엔드 개발자 <SHighlight>지기역</SHighlight>입니다.
      </HeadLineTitle>
    </SSection>
  );
}
