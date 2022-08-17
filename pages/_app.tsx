import type { AppProps, AppContext } from 'next/app';

import { PageLayoutContainer } from '@/containers';

// react Query
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// constants
import { QUERY_CLIENT_DEFAULT_OPTIONS } from '@/lib/constants';

// emotion
import { ThemeProvider, Global } from '@emotion/react';

// theme
import { globalTheme } from '@/lib/theme';

// styles
import { globalCss, resetCss } from '@/lib/styles';

// types
import type { PageLayout } from '@/lib/types';

interface AppPropsWithLayoutProps extends AppProps {
  Component: PageLayout;
}

const queryClient = new QueryClient({
  defaultOptions: QUERY_CLIENT_DEFAULT_OPTIONS,
});

const AppPage = ({ Component, pageProps }: AppPropsWithLayoutProps) => {
  const getLayout =
    Component.getLayout ??
    (page => <PageLayoutContainer>{page}</PageLayoutContainer>);
  return (
    <ThemeProvider theme={globalTheme}>
      <QueryClientProvider client={queryClient}>
        <Global styles={[resetCss, globalCss]} />
        {getLayout(<Component {...pageProps} />)}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

AppPage.getInitialProps = async ({ ctx }: AppContext) => {
  const { req } = ctx;
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default AppPage;
