import { ReactNode } from 'react';

import styled from '@emotion/styled';

const SMain = styled.main(() => {
  return {
    paddingBottom: 110,
  };
});

interface ResumMainProps {
  page: ReactNode;
}

export function MainLayout({ page }: ResumMainProps) {
  return <SMain>{page}</SMain>;
}
