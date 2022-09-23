import { ReactNode } from 'react';

import styled from 'styled-components';

import { InfoText } from '../atoms';

const SContainer = styled.div(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'row',
    height: 'auto',
    '&:not(:last-child)': {
      marginBottom: theme.typography.pxToRem(200),
    },
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column',
    },
  };
});
const SLeft = styled.div(({ theme }) => {
  return {
    paddingRight: theme.typography.pxToRem(36),
    flex: 3,
  };
});
const SRight = styled.div(({ theme }) => {
  return {
    flex: 9,
  };
});
const SRightContents = styled.div(() => {
  return {};
});

interface TupleContainerProps {
  left: ReactNode;
  right: {
    inform?: string;
    contents: ReactNode;
  };
}

export function TupleContainer({ left, right }: TupleContainerProps) {
  return (
    <SContainer>
      <SLeft>{left}</SLeft>
      <SRight>
        {right.inform && (
          <InfoText
            sx={{
              marginTop: {
                sm: 0,
                lg: 12,
              },
              marginBottom: {
                sm: 40,
                lg: 110,
              },
            }}
          >
            {right.inform}
          </InfoText>
        )}
        {right.contents && <SRightContents>{right.contents}</SRightContents>}
      </SRight>
    </SContainer>
  );
}
