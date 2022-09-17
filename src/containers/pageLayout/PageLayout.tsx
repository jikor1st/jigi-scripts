import React from 'react';

interface PageLayoutProps extends React.PropsWithChildren<{}> {}

const PageLayout = ({ children }: PageLayoutProps) => {
  return <>{children}</>;
};

export { PageLayout };
