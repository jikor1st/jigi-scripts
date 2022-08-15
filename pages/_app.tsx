import type { AppProps, AppContext } from 'next/app';

import { PageLayoutContainer } from '@/containers';

// react Query
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// types
import type { PageLayout } from '@/core/types';

interface AppPropsWithLayoutProps extends AppProps {
  Component: PageLayout;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      retry: 0,
      refetchOnWindowFocus: false,
      // refetchOnMount: true,
      refetchOnReconnect: true,
    },
  },
});

const AppPage = ({ Component, pageProps }: AppPropsWithLayoutProps) => {
  const getLayout =
    Component.getLayout ??
    (page => <PageLayoutContainer>{page}</PageLayoutContainer>);
  return (
    <QueryClientProvider client={queryClient}>
      {getLayout(<Component {...pageProps} />)}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

AppPage.getInitialProps = async ({ ctx }: AppContext) => {
  const { req } = ctx;
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default AppPage;
