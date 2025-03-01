import React, { Component, ErrorInfo } from 'react';

type State = {
  hasError: boolean;
};

type Props = {
  children: React.ReactNode;
};

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}

const withErrorBoundary = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return (props: P) => (
    <ErrorBoundary>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );
};
export default withErrorBoundary;
