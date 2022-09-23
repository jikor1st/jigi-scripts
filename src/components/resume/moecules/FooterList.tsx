import { ReactNode } from 'react';
import styled from 'styled-components';

import { v4 } from 'uuid';

const SContainer = styled.div(() => {
  return {};
});
const SListTitle = styled.h4(({ theme }) => {
  return {
    color: theme.palette.text.primary,
    ...theme.typography.subtitle2,
    fontWeight: theme.typography.fontWeight.Bold,
    marginBottom: '4px',
    [theme.breakpoints.down('sm')]: {
      ...theme.typography.body1,
      fontWeight: theme.typography.fontWeight.Bold,
    },
  };
});
const SListWrap = styled.ul(() => {
  return {};
});

const SListItem = styled.li(({ theme }) => {
  return {
    cursor: 'pointer',
    color: theme.palette.text.secondary,
    ...theme.typography.body1,
    transition: 'all 0.23s ease-in-out',
    '&:hover': {
      color: theme.palette.text.primary,
      textDecoration: 'underline',
    },
  };
});

interface FooterList {
  title: string;
  list: string[] | ReactNode[];
}

export function FooterList({ title, list }: FooterList) {
  return (
    <SContainer>
      <SListTitle>{title}</SListTitle>
      <SListWrap>
        {list.map(item => {
          return <SListItem key={`footer-list-${v4()}`}>{item}</SListItem>;
        })}
      </SListWrap>
    </SContainer>
  );
}
