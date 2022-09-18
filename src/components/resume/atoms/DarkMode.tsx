import styled from '@emotion/styled';

import { Icon } from '@/baseComponents';
import { useDarkMode } from '@/lib/hooks';

const SContainer = styled.div(() => {
  return {};
});

const SIconButton = styled.button(({ theme }) => {
  return {
    overflow: 'hidden',
    position: 'relative',
    borderRadius: '50%',
    transition: 'background 0.23s ease-in-out, border 0.13s ease',
    border: '1px solid transparent',
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

const SSliderContainer = styled.div<{ isDarkMode: boolean }>(
  ({ theme, isDarkMode }) => {
    const rotateWithDarkMode = !isDarkMode ? 0 : 180;
    return {
      fontSize: 0,
      boxSizing: 'content-box',
      position: 'absolute',
      top: 0,
      left: '50%',
      width: theme.typography.pxToRem(96),
      height: theme.typography.pxToRem(96),
      padding: 8,
      transform: `translateX(-50%) rotate(${rotateWithDarkMode}deg)`,
      transition: 'transform 0.23s ease-in-out',
    };
  },
);
const SSliderSun = styled.div(() => {
  return {
    fontSize: 0,
    position: 'absolute',
    top: 8,
    left: '50%',
    transform: 'translateX(-50%)',
  };
});
const SSliderMoon = styled.div(() => {
  return {
    fontSize: 0,
    position: 'absolute',
    bottom: 8,
    left: '50%',
    transform: 'translateX(-50%) rotate(180deg)',
  };
});

export function DarkMode() {
  const { isDarkMode, toggle } = useDarkMode();
  const handleClickToggleDarkMode = () => {
    toggle();
  };

  return (
    <SContainer>
      <SIconButton onClick={handleClickToggleDarkMode}>
        <SSliderContainer isDarkMode={isDarkMode}>
          <SSliderSun>
            <Icon icon="Sun" size={'medium'} />
          </SSliderSun>
          <SSliderMoon>
            <Icon icon="Moon" size={'medium'} />
          </SSliderMoon>
        </SSliderContainer>
      </SIconButton>
    </SContainer>
  );
}
