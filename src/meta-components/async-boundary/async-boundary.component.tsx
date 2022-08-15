import React from 'react';

// meta-components
import { ErrorBoundary, SSRSafeSuspense } from '@/meta-components';

// types
type ErrorBoundaryProps = React.ComponentProps<typeof ErrorBoundary>;

interface AsyncBoundaryProps
  extends Omit<ErrorBoundaryProps, 'renderFallback'> {
  pendingFallback: React.ComponentProps<typeof SSRSafeSuspense>['fallback'];
  rejectedFallback: ErrorBoundaryProps['renderFallback'];
}

const AsyncBoundary = ({
  children,
  rejectedFallback,
  pendingFallback,
}: AsyncBoundaryProps) => {
  return (
    <ErrorBoundary renderFallback={rejectedFallback}>
      <SSRSafeSuspense fallback={pendingFallback}>{children}</SSRSafeSuspense>
    </ErrorBoundary>
  );
};

export { AsyncBoundary };
