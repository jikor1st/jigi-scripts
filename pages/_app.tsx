import type { AppProps, AppContext } from 'next/app';
import Head from 'next/head';
import { PageLayout } from '@/containers';

import { useEffect, useState } from 'react';

// react Query
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { RecoilRoot } from 'recoil';

// constants
import { REACT_QUERY_DEFAULT_OPTIONS } from '@/lib/constants';

// emotion
import styled, { ThemeProvider } from 'styled-components';

// theme
import { useGlobalTheme } from '@/lib/theme';

// styles
import { GlobalCss, ResetCss } from '@/lib/styles';

// types
import type { PageLayoutProps } from '@/lib/types';
import { useDarkMode } from '@/lib/hooks';

interface AppPropsWithLayoutProps extends AppProps {
  Component: PageLayoutProps;
}

const queryClient = new QueryClient({
  defaultOptions: REACT_QUERY_DEFAULT_OPTIONS,
});

const VisibleSection = styled.div(() => {
  return {};
});

const AppPage = ({ Component, pageProps }: AppPropsWithLayoutProps) => {
  const getLayout =
    Component.getLayout ?? (page => <PageLayout>{page}</PageLayout>);

  const { prepareGlobalTheme, globalTheme } = useGlobalTheme();

  const body = (
    <RecoilRoot>
      <ThemeProvider theme={globalTheme}>
        <QueryClientProvider client={queryClient}>
          {/* <InitialApp {...initialAppProps} /> */}
          <ResetCss />
          <GlobalCss />
          {getLayout(<Component {...pageProps} />)}
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </ThemeProvider>
    </RecoilRoot>
  );

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <div>{prepareGlobalTheme && body}</div>
    </>
  );
};

AppPage.getInitialProps = async ({ ctx }: AppContext) => {
  const { req } = ctx;
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default AppPage;
