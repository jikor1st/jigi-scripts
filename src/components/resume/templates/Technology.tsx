import { TupleContainer, SubjectList } from '../moecules';
import { SectionWrapper, SectionTitle } from '../atoms';

import { RESUME } from '@/lib/constants';

export function Technology() {
  return (
    <SectionWrapper>
      <TupleContainer
        left={<SectionTitle>기술</SectionTitle>}
        right={{
          inform: RESUME.technology.inform,
          contents: <SubjectList list={RESUME.technology.category} />,
        }}
      />
    </SectionWrapper>
  );
}
