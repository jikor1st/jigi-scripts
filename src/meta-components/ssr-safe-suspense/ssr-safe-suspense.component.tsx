import React from 'react';
import { useMounted } from '@/lib/hooks';

const SSRSafeSuspense = (
  props: React.ComponentProps<typeof React.Suspense>,
) => {
  const { fallback } = props;

  const isMounted = useMounted();

  if (isMounted) {
    return <React.Suspense {...props} />;
  }

  return <>{fallback}</>;
};

export { SSRSafeSuspense };
