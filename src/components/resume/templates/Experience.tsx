import { TupleContainer, SubjectInform, SubjectList } from '../moecules';
import { SectionWrapper, SectionTitle } from '../atoms';

import { RESUME } from '@/lib/constants';

import { v4 } from 'uuid';

export function Experience() {
  return (
    <SectionWrapper>
      <SectionTitle mb={80}>경험</SectionTitle>
      {RESUME.experience.category.map(
        ({ title, subTitle, date, inform, items }) => {
          return (
            <TupleContainer
              key={`experience-${v4()}`}
              left={
                <SubjectInform title={title} subTitle={subTitle} date={date} />
              }
              right={{
                inform: inform,
                contents: <SubjectList list={items} />,
              }}
            />
          );
        },
      )}
    </SectionWrapper>
  );
}
