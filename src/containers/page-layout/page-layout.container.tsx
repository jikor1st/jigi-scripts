import React from 'react';

interface PageLayoutContainerProps extends React.PropsWithChildren<{}> {}

const PageLayoutContainer = ({ children }: PageLayoutContainerProps) => {
  return <>page-layout-{children}</>;
};

export { PageLayoutContainer };
