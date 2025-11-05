import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to console in development
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4" role="alert">
          <div className="max-w-md w-full text-center">
            <div className="text-white mb-6">
              <svg
                className="w-20 h-20 mx-auto mb-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <h1 className="text-2xl font-light tracking-wider mb-2">Something went wrong</h1>
              <p className="text-gray-400 mb-6">
                {this.props.fallbackMessage || 'We encountered an unexpected error. Please try again.'}
              </p>
            </div>

            <button
              onClick={this.handleReset}
              className="px-6 py-3 bg-white text-black font-light tracking-wider hover:bg-gray-200 transition-colors duration-300"
              aria-label="Try again"
            >
              TRY AGAIN
            </button>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left text-xs text-gray-500">
                <summary className="cursor-pointer mb-2">Error Details</summary>
                <pre className="bg-gray-900 p-4 rounded overflow-auto max-h-40">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
