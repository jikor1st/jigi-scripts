import type { NextPage } from 'next';

import styled from '@emotion/styled';
import { ErrorView } from '@/components/common';
import { useEffect, useState } from 'react';

const OverView = styled.span(({ theme }) => {
  return {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  };
});

const Highlighter = styled.span(({ theme }) => {
  return {
    color: theme.palette.error.main,
  };
});

const Custom404Page: NextPage = () => {
  const [currentHref, setCurrentHref] = useState('');

  useEffect(() => {
    setCurrentHref(window.location.href);
  }, []);
  return (
    <ErrorView
      errorCode={404}
      errorMessage={
        <>
          <OverView>요청하신 </OverView>페이지를 찾을 수 없습니다.
        </>
      }
      errorText={
        <>
          입력하신 <Highlighter>{currentHref}</Highlighter> 주소를 찾을 수
          없습니다. 올바른 페이지 주소를 입력하시거나 홈으로 이동해주시길
          바랍니다.{' '}
          <OverView>
            <br />
          </OverView>
          서비스 이용에 불편을 드려서 죄송합니다.
        </>
      }
    />
  );
};

export default Custom404Page;
