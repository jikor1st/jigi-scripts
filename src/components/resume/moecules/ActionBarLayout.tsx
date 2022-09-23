import styled from '@emotion/styled';

import { DarkMode, SelectBox } from '../atoms';

import { useHtmlFontSize } from '@/lib/hooks';

const SContainer = styled.div(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    [theme.breakpoints.down('lg')]: {
      gap: '12px',
    },
    [theme.breakpoints.down('lg')]: {
      gap: '8px',
    },
  };
});

export function ActionBarLayout() {
  const { htmlFontSize, changeHtmlFontSize } = useHtmlFontSize();
  const handleChangeFontSize = (value: string | number) => {
    changeHtmlFontSize(parseInt(value as string));
  };

  return (
    <SContainer>
      <SelectBox
        value={htmlFontSize}
        onChange={handleChangeFontSize}
        options={[
          {
            value: 14,
            text: '14px',
          },
          {
            value: 16,
            text: '16px',
          },
          {
            value: 18,
            text: '18px',
          },
          {
            value: 20,
            text: '20px',
          },
        ]}
      />
      <DarkMode />
    </SContainer>
  );
}
