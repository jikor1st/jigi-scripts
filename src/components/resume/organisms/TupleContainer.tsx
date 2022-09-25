import { ReactNode } from 'react';

import styled from '@emotion/styled';

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
      '&:not(:last-child)': {
        marginBottom: theme.typography.pxToRem(150),
      },
    },
    [theme.breakpoints.down('sm')]: {
      '&:not(:last-child)': {
        marginBottom: theme.typography.pxToRem(100),
      },
    },
  };
});
const SLeft = styled.div(({ theme }) => {
  return {
    paddingRight: theme.typography.pxToRem(36),
    flex: 3,
  };
});
const SRight = styled.div(() => {
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
  const infoItem = () => {
    return (
      <>
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
      </>
    );
  };

  return (
    <SContainer>
      <SLeft>{left}</SLeft>
      <SRight>
        {infoItem()}
        {right.contents && <SRightContents>{right.contents}</SRightContents>}
      </SRight>
    </SContainer>
  );
}
