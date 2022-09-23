import { ReactNode } from 'react';

import styled from 'styled-components';

const SMain = styled.main(() => {
  return {};
});

interface ResumMainProps {
  page: ReactNode;
}

export function MainLayout({ page }: ResumMainProps) {
  return <SMain>{page}</SMain>;
}
