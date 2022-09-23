import styled from 'styled-components';

import { Icon } from '@/baseComponents';

const STopButton = styled.button(({ theme }) => {
  return {
    position: 'fixed',
    right: 32,
    bottom: 32,
    overflow: 'hidden',
    borderRadius: '50%',
    transition: 'background 0.23s ease-in-out, border 0.13s ease',
    border: `1px solid ${theme.palette.divider.secondary}`,
    width: theme.typography.pxToRem(32),
    height: theme.typography.pxToRem(32),
    padding: 8,
    boxSizing: 'content-box',
    '&:hover': {
      background: theme.palette.actions.hover,
    },
    '&:active': {
      borderColor: theme.palette.divider.secondary,
    },
  };
});
const IconWrapper = styled.div(() => {
  return {
    transform: 'rotate(180deg)',
  };
});

export function TopButton() {
  return (
    <STopButton>
      <IconWrapper>
        <Icon icon="ArrowDown" />
      </IconWrapper>
    </STopButton>
  );
}
