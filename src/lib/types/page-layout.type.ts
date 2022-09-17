import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';

type GetLayout = (page: ReactElement) => ReactNode;

type PageLayoutProps<P = {}> = NextPage<P> & {
  getLayout?: GetLayout;
};

export type { PageLayoutProps };
