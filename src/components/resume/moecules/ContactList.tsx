import { ReactNode } from 'react';
import styled from 'styled-components';

import { CopyLink } from '../atoms';

import { Icon, IconBaseProps } from '@/baseComponents';

import { v4 } from 'uuid';

const SContainer = styled.div(({ theme }) => {
  return {};
});
const SListWrap = styled.ul(({ theme }) => {
  return {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: `20px ${theme.typography.pxToRem(60)}`,
    flexWrap: 'wrap',
  };
});
const SListItem = styled.li(({ theme }) => {
  return {};
});
const STitleWrap = styled.div(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  };
});
const STitle = styled.h3(({ theme }) => {
  return {
    color: theme.palette.text.primary,
    ...theme.typography.h6,
    [theme.breakpoints.down('lg')]: {
      ...theme.typography.subtitle1,
      fontWeight: theme.typography.fontWeight.Bold,
    },
  };
});

interface ContactListProps {
  contactList: {
    title: string;
    type: string;
    icon?: IconBaseProps['icon'];
    href: string;
  }[];
}

export function ContactList({ contactList }: ContactListProps) {
  return (
    <SContainer>
      <SListWrap>
        {contactList.map(({ title, href, icon, type }) => {
          return (
            <SListItem key={`contact-list-${v4()}`}>
              <STitleWrap>
                {icon && <Icon icon={icon} />}
                <STitle>{title}</STitle>
              </STitleWrap>
              <CopyLink href={href} disabled={type !== 'link'} />
            </SListItem>
          );
        })}
      </SListWrap>
    </SContainer>
  );
}
