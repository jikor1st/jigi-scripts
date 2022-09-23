import styled from '@emotion/styled';

import { Icon } from '@/baseComponents';
import { memo, MouseEvent } from 'react';

interface STopButtonProps {
  isBottom: boolean;
  isVisible: boolean;
}

const STopButton = styled.button<STopButtonProps>(
  ({ theme, isBottom, isVisible }) => {
    return {
      visibility: isVisible ? 'visible' : 'hidden',
      opacity: isVisible ? 1 : 0,
      position: !isBottom ? 'fixed' : 'absolute',
      right: 32,
      bottom: 44,
      overflow: 'hidden',
      borderRadius: '50%',
      transition:
        'background 0.23s ease-in-out, border 0.13s ease, opacity 0.3s ease',
      border: `1px solid ${theme.palette.divider.secondary}`,
      width: theme.typography.pxToRem(32),
      height: theme.typography.pxToRem(32),
      padding: 8,
      boxSizing: 'content-box',
      background: theme.palette.background.paper,
      '&:hover': {
        background: theme.palette.actions.hover,
      },
      '&:active': {
        borderColor: theme.palette.divider.secondary,
      },
    };
  },
);

const IconWrapper = styled.div(() => {
  return {
    transform: 'rotate(180deg)',
  };
});

interface TopButtonProps extends STopButtonProps {}

export const TopButton = memo(({ isBottom, isVisible }: TopButtonProps) => {
  const handleClickTopButton = (e: MouseEvent) => {
    e.preventDefault();

    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  return (
    <STopButton
      onClick={handleClickTopButton}
      isBottom={isBottom}
      isVisible={isVisible}
    >
      <IconWrapper>
        <Icon icon="ArrowDown" />
      </IconWrapper>
    </STopButton>
  );
});
