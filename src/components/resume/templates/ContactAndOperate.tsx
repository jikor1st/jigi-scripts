import { TupleContainer } from '../organisms';
import { SubjectInform, ContactList } from '../moecules';
import { SectionWrapper } from '../atoms';

import { RESUME } from '@/lib/constants';
export function ContactAndOperate() {
  return (
    <SectionWrapper>
      <TupleContainer
        left={<SubjectInform title={RESUME.contact.header.title} />}
        right={{
          contents: <ContactList contactList={RESUME.contact.category} />,
        }}
      />
    </SectionWrapper>
  );
}
