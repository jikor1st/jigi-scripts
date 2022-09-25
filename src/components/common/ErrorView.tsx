import styled from '@emotion/styled';
import NextLink from 'next/link';

import { Icon } from '@/baseComponents';
import { ReactNode } from 'react';

const SContainer = styled.section(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    padding: '0 40px',
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
  };
});

const SWrapper = styled.div(() => {
  return {
    textAlign: 'center',
    maxWidth: 460,
  };
});

const SErrorCode = styled.h2(({ theme }) => {
  return {
    color: theme.palette.error.main,
    ...theme.typography.h3,
  };
});

const SErrorMsgWrapper = styled.h3(({ theme }) => {
  return {
    display: 'flex',
    gap: 12,
    textAlign: 'left',
    marginTop: 8,
  };
});
const SErrorMsg = styled.span(({ theme }) => {
  return {
    display: 'block',
    marginTop: theme.typography.pxToRem(-7),
    ...theme.typography.h6,
  };
});

const SErrorText = styled.p(({ theme }) => {
  return {
    ...theme.typography.body1,
    marginTop: 30,
  };
});

const SButton = styled.button(({ theme }) => {
  const isDarkMode = theme.palette.mode === 'dark';
  return {
    ...theme.typography.body1,
    marginTop: 50,
    padding: '8px 18px',
    borderRadius: theme.typography.pxToRem(40),
    border: `1px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    textAlign: 'center',
    transition: 'all 0.12s ease',
    '&:hover': {
      color: theme.palette.secondary.dark,
      background: isDarkMode ? '#ffffff' : theme.palette.actions.hover,
      borderColor: theme.palette.secondary.dark,
    },
  };
});

interface ErrorViewProps {
  errorCode: number | string;
  errorMessage: string | ReactNode;
  errorText?: string | ReactNode;
  onResetError?: () => void;
}

export const ErrorView: React.FC<ErrorViewProps> = ({
  errorCode,
  errorMessage,
  errorText = '서비스 이용에 불편을 드려서 죄송합니다.',
  onResetError,
}) => {
  // const navigate = useNavigate();
  return (
    <SContainer>
      <SWrapper>
        <SErrorCode>{errorCode}</SErrorCode>
        <SErrorMsgWrapper>
          <Icon icon="Warning" variant="filled" color="error" />
          <SErrorMsg>{errorMessage}</SErrorMsg>
        </SErrorMsgWrapper>
        <SErrorText>{errorText}</SErrorText>
        <NextLink href={'/resume'} as={'/'} passHref>
          <SButton
            onClick={() => {
              // if (typeof onResetError === 'function') onResetError();
              // navigate('/');
            }}
          >
            홈으로 돌아가기
          </SButton>
        </NextLink>
      </SWrapper>
    </SContainer>
  );
};
