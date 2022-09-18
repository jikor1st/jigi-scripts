import styled from '@emotion/styled';
import { SectionWrapper, SectionTitle, InfoText } from '../atoms';

import { v4 } from 'uuid';

import { RESUME } from '@/lib/constants';

const SIntroduceContainer = styled.div(() => {
  return {
    maxWidth: 600,
  };
});

export function Introduction() {
  return (
    <SectionWrapper>
      <SIntroduceContainer>
        <SectionTitle
          mb={{
            sm: 34,
            lg: 56,
          }}
        >
          저는요!
        </SectionTitle>
        {RESUME.introduce.category.map(({ text }, index, arr) => {
          const marginBottom = index !== arr.length - 1 ? 44 : undefined;
          return (
            <InfoText mb={marginBottom} key={`introduce-${v4()}`}>
              {text}
            </InfoText>
          );
        })}
      </SIntroduceContainer>
    </SectionWrapper>
  );
}
