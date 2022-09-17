import { ReactNode } from 'react';

import styled from '@emotion/styled';

const SMain = styled.main(() => {
  return {};
});

interface ResumMainProps {
  page: ReactNode;
}

export function MainLayout({ page }: ResumMainProps) {
  return <SMain>{page}</SMain>;
}
