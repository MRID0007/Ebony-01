const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`flex items-center justify-center ${className}`} role="status" aria-live="polite">
      <div className={`${sizeClasses[size]} border-4 border-gray-700 border-t-white rounded-full animate-spin`}></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
