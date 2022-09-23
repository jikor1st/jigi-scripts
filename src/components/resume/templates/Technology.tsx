import { TupleContainer } from '../organisms';
import { SubjectList } from '../moecules';
import { SectionWrapper, SectionTitle } from '../atoms';

import { RESUME } from '@/lib/constants';

// 기술
export function Technology() {
  return (
    <SectionWrapper id={RESUME.technology.header.id}>
      <TupleContainer
        left={<SectionTitle>{RESUME.technology.header.title}</SectionTitle>}
        right={{
          inform: RESUME.technology.inform,
          contents: <SubjectList list={RESUME.technology.category} />,
        }}
      />
    </SectionWrapper>
  );
}
