import { TupleContainer } from '../organisms';
import { SubjectInform, ContactList } from '../moecules';
import { SectionWrapper, SectionTitle } from '../atoms';

import { RESUME } from '@/lib/constants';
export function ContactAndOperate() {
  return (
    <SectionWrapper>
      <TupleContainer
        left={
          <SectionTitle
            sx={{
              marginBottom: {
                sm: 28,
                lg: 80,
              },
            }}
          >
            {RESUME.contact.header.title}
          </SectionTitle>
        }
        right={{
          contents: <ContactList contactList={RESUME.contact.category} />,
        }}
      />
    </SectionWrapper>
  );
}
