import { ReactNode } from 'react';
import styled from 'styled-components';

const SListItem = styled.li(({ theme }) => {
  return {
    color: theme.palette.text.primary,
    position: 'relative',
    ...theme.typography.body1,
    paddingLeft: 10,
    '&:not(:last-child)': {
      marginBottom: theme.typography.pxToRem(8),
    },
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      left: 0,
      top: `calc((${theme.typography.body1.lineHeight} / 2) - 3px)`,
      width: 4,
      height: 4,
      borderRadius: '50%',
      background: theme.palette.primary.main,
    },
  };
});

interface ListItemProps {
  children?: ReactNode;
}

export function ListItem({ children }: ListItemProps) {
  return <SListItem>{children}</SListItem>;
}
