import { useQuery } from 'react-query';
import { fakePromise } from '@/lib/utils';

interface TestData {
  testData: string;
}

const dummyApi = {
  get: {
    test: ({
      serverTime = 1000,
      occurError,
    }: {
      serverTime?: number;
      occurError?: { code?: number; message?: string };
    } = {}) =>
      useQuery('dummyApi/get/test', async () =>
        fakePromise<TestData>(
          { testData: '테스트 데이터입니다.' },
          serverTime,
          { error: occurError },
        ),
      ),
  },
};

export { dummyApi };
