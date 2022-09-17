import styled from '@emotion/styled';

import { Icon } from '@/baseComponents';

const SContainer = styled.div(() => {
  return {};
});

const IconButton = styled.button(() => {
  return {};
});

export function ActionBarLayout() {
  return (
    <SContainer>
      <IconButton>
        <Icon icon="Sun" size={'medium'} />
      </IconButton>
    </SContainer>
  );
}
