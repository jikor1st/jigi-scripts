import styled from '@emotion/styled';

import { portalSelector } from './utils';

const Container = styled.div(() => {
  return {};
});

export const PortalRoot = () => {
  return <Container id={portalSelector.id} />;
};
