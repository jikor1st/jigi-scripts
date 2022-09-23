import { TupleContainer } from '../organisms';
import { SubjectInform, SubjectList } from '../moecules';
import { SectionWrapper, SectionTitle } from '../atoms';

import { RESUME } from '@/lib/constants';

import { v4 } from 'uuid';

// 경험
export function Experience() {
  return (
    <SectionWrapper id={RESUME.experience.header.id}>
      <SectionTitle
        sx={{
          marginBottom: {
            sm: 28,
            lg: 80,
          },
        }}
      >
        {RESUME.experience.header.title}
      </SectionTitle>
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
