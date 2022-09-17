import React, { ErrorInfo, ReactNode } from 'react';

//types
type renderFallbackProps<ErrorType extends Error = Error> = {
  error: ErrorType;
  reset: (...args: unknown[]) => void;
};

interface Props {
  children?: ReactNode;
  renderFallback?: (props: renderFallbackProps) => ReactNode;
}
interface State {
  error: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    error: null,
  };

  // 기본 에러 메세지 컴포넌트 지정
  private initialFallback: ReactNode = (<h1>에러가 발생했습니다.</h1>);

  private resetErrorBoundary = () => {
    this.setState({ error: null });
  };

  static getDerivedStateFromError(error: Error): State {
    return { error: error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    const { error } = this.state;
    const {
      children,
      renderFallback = ({ error, reset = this.resetErrorBoundary }) =>
        this.initialFallback,
    } = this.props;

    if (error !== null) {
      return renderFallback({
        error,
        reset: this.resetErrorBoundary,
      });
    }

    return children;
  }
}

export { ErrorBoundary };
