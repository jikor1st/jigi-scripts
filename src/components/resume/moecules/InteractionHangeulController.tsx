import { Icon } from '@/baseComponents';

import styled from '@emotion/styled';

const SContainer = styled.div(({ theme }) => {
  return {
    display: 'inline-block',
    borderRadius: theme.typography.pxToRem(30),
    background: theme.palette.background.canvas,
    // boxShadow: theme.palette.shadow.modal,
    [theme.breakpoints.down('sm')]: {
      transformOrigin: 'left',
      transform: 'scale(0.84)',
    },
  };
});
const SWrapper = styled.div(({ theme }) => {
  return {
    display: 'flex',
    justifyContents: 'center',
    alignItems: 'center',
    gap: theme.typography.pxToRem(8),
    padding: `${theme.typography.pxToRem(6)} ${theme.typography.pxToRem(10)}`,
  };
});
const SCurrent = styled.p(({ theme }) => {
  return {
    color: theme.palette.text.primary,
    ...theme.typography.body1,
  };
});
const SButton = styled.button(({ theme }) => {
  return {
    overflow: 'hidden',
    position: 'relative',
    borderRadius: '50%',
    transition: 'background 0.23s ease-in-out, border 0.13s ease',
    border: '1px solid transparent',
    width: theme.typography.pxToRem(28),
    height: theme.typography.pxToRem(28),
    padding: 2,
    boxSizing: 'content-box',
    '&:hover': {
      background: theme.palette.actions.hover,
    },
    '&:active': {
      borderColor: theme.palette.divider.secondary,
    },
  };
});

interface InteractionHangeulControllerProps {
  current: string | number;
  onClickPrev: () => void;
  onClickNext: () => void;
}

export function InteractionHangeulController({
  current,
  onClickPrev,
  onClickNext,
}: InteractionHangeulControllerProps) {
  return (
    <SContainer>
      <SWrapper>
        <SButton onClick={onClickPrev}>
          <Icon icon="AudioPrev" size={28} />
        </SButton>
        <SCurrent>{current}</SCurrent>
        <SButton onClick={onClickNext}>
          <Icon icon="AudioNext" size={28} />
        </SButton>
      </SWrapper>
    </SContainer>
  );
}
