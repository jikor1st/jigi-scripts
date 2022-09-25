import type { AppProps, AppContext } from 'next/app';
import dynamic from 'next/dynamic';

import Head from 'next/head';
import { PageLayout } from '@/containers';

// react Query
import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';

import { RecoilRoot } from 'recoil';

// constants
import { REACT_QUERY_DEFAULT_OPTIONS } from '@/lib/constants';

// emotion
import styled from '@emotion/styled';
import { Global, ThemeProvider } from '@emotion/react';
// const ThemeProvider = dynamic(
//   async () => {
//     return import('@emotion/react').then(mode => mode.ThemeProvider);
//   },
//   { ssr: true },
// );

// theme
import { useGlobalTheme } from '@/lib/theme';

// styles
import { GlobalCss, ResetCss } from '@/lib/styles';

// types
import type { PageLayoutProps } from '@/lib/types';

interface AppPropsWithLayoutProps extends AppProps {
  Component: PageLayoutProps;
}

const queryClient = new QueryClient({
  defaultOptions: REACT_QUERY_DEFAULT_OPTIONS,
});

const VisibleSection = styled.div<{ isVisible: boolean }>(({ isVisible }) => {
  return {
    transition: 'opacity 0.14s ease-out',
    visibility: isVisible ? 'visible' : 'hidden',
    opacity: isVisible ? 1 : 0,
  };
});

const AppPage = ({ Component, pageProps }: AppPropsWithLayoutProps) => {
  const getLayout =
    Component.getLayout ?? (page => <PageLayout>{page}</PageLayout>);

  const { prepareGlobalTheme, globalTheme } = useGlobalTheme();

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <VisibleSection isVisible={prepareGlobalTheme}>
        <RecoilRoot>
          <ThemeProvider theme={globalTheme}>
            {/* <QueryClientProvider client={queryClient}> */}
            <Global styles={[ResetCss, GlobalCss]} />
            {getLayout(<Component {...pageProps} />)}
            {/* </QueryClientProvider> */}
          </ThemeProvider>
        </RecoilRoot>
      </VisibleSection>
    </>
  );
};

AppPage.getInitialProps = async ({ ctx }: AppContext) => {
  const { req } = ctx;
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default AppPage;
