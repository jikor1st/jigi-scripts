import styled from '@emotion/styled';
import { MouseEvent, useState } from 'react';

import { DarkMode, SelectBox } from '../atoms';

const SContainer = styled.div(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    gap: '18px',
  };
});

export function ActionBarLayout() {
  const [htmlFontSize, setHtmlFontSize] = useState(16);
  const handleChangeFontSize = (value: string | number) => {
    setHtmlFontSize(parseInt(value as string));
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
