import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';

type GetLayout = (page: ReactElement) => ReactNode;

type PageLayout<P = {}> = NextPage<P> & {
  getLayout?: GetLayout;
};

export type { PageLayout };
