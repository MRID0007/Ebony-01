const GallerySkeleton = ({ count = 12 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" role="status" aria-label="Loading gallery">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="aspect-[3/4] bg-gray-800 animate-pulse rounded-sm"
          aria-hidden="true"
        >
          <div className="w-full h-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_100%] animate-shimmer"></div>
        </div>
      ))}
      <span className="sr-only">Loading gallery images...</span>
    </div>
  );
};

export default GallerySkeleton;
