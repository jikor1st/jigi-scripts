import { useState } from 'react';

import { PageLayout } from '@/core/types';

import { AsyncBoundary } from '@/core-components';

import { dummyApi } from '@/lib/api';

interface ErrorFallbackProps {
  error: Error;
  onClickReloading: () => void;
}

const GetDummyComponent = ({ isLoading = false }) => {
  if (isLoading) return <>로딩중입니다.</>;
  const { data: test } = dummyApi.get.useTest({
    serverTime: 2000,
    occurError: {
      // message: 'error',
    },
  });

  return <>{test?.testData}</>;
};

const ErrorFallback = ({ error, onClickReloading }: ErrorFallbackProps) => {
  return (
    <div>
      <p>에러발생 - {error?.message}</p>
      <button onClick={onClickReloading}>리로딩</button>
    </div>
  );
};

const AsyncBoundaryPage: PageLayout = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const handleNewError = () => {
    setIsError(true);
  };
  return (
    <AsyncBoundary
      pendingFallback={<GetDummyComponent isLoading />}
      rejectedFallback={({ error, reset }) => {
        return (
          <ErrorFallback
            error={error}
            onClickReloading={() => {
              setIsError(false);
              reset();
            }}
          />
        );
      }}
    >
      <GetDummyComponent />
    </AsyncBoundary>
  );
};

export default AsyncBoundaryPage;
