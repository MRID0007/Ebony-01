import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import GallerySkeleton from '../Loading/GallerySkeleton';

const Gallery = ({ limit }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [justifiedRows, setJustifiedRows] = useState([]);
  const [responsiveLimit, setResponsiveLimit] = useState(20);
  const [loading, setLoading] = useState(true);
  const [imageLoadError, setImageLoadError] = useState({});
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef(null);
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Update responsive limit based on screen size
  useEffect(() => {
    const updateLimit = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setResponsiveLimit(8); // Mobile
      } else if (width < 1024) {
        setResponsiveLimit(12); // Tablet
      } else {
        setResponsiveLimit(20); // Desktop
      }
    };

    updateLimit();
    window.addEventListener('resize', updateLimit);
    return () => window.removeEventListener('resize', updateLimit);
  }, []);

  useEffect(() => {
    setLoading(true);

    // Load high-res images
    const highResModules = import.meta.glob('../../assets/P-*.{jpg,jpeg}', { eager: true });

    // Load thumbnails
    const thumbnailModules = import.meta.glob('../../assets/thumbnails/P-*.{jpg,jpeg}', { eager: true });

    const loadedImages = Object.entries(highResModules)
      .map(([path, module]) => {
        const filename = path.split('/').pop();
        const match = filename.match(/P-(\d+)\.(jpg|jpeg)/);
        if (match) {
          const number = parseInt(match[1], 10);
          const ext = match[2];

          // Find corresponding thumbnail
          const thumbPath = `../../assets/thumbnails/P-${String(number).padStart(2, '0')}.${ext}`;
          const thumbModule = thumbnailModules[thumbPath];

          return {
            id: number,
            src: module.default, // High-res for modal
            thumb: thumbModule ? thumbModule.default : module.default, // Thumbnail for grid, fallback to high-res
            alt: `Ebony March professional fashion modeling portfolio photo ${number}`
          };
        }
        return null;
      })
      .filter(img => img !== null)
      .sort((a, b) => a.id - b.id);

    // Apply limit: use prop if specified, otherwise use responsive limit
    const activeLimit = limit !== undefined ? limit : responsiveLimit;
    const finalImages = activeLimit !== null && activeLimit !== false ? loadedImages.slice(0, activeLimit) : loadedImages;

    setImages(finalImages);
    setLoading(false);
  }, [limit, responsiveLimit]);

  // Load images and calculate aspect ratios
  useEffect(() => {
    if (images.length === 0) return;

    const loadImageDimensions = async () => {
      const imagesWithDimensions = await Promise.all(
        images.map((img) => {
          return new Promise((resolve) => {
            const image = new Image();
            image.onload = () => {
              resolve({
                ...img,
                aspectRatio: image.width / image.height
              });
            };
            image.onerror = () => {
              setImageLoadError(prev => ({ ...prev, [img.id]: true }));
              resolve({
                ...img,
                aspectRatio: 0.75 // Default aspect ratio
              });
            };
            image.src = img.thumb;
          });
        })
      );

      // Justify images into rows
      const rowHeight = 300;
      const containerWidth = containerRef.current?.offsetWidth || window.innerWidth;
      const rows = [];
      let currentRow = [];
      let currentRowWidth = 0;

      imagesWithDimensions.forEach((img, index) => {
        const imgWidth = rowHeight * img.aspectRatio;

        if (currentRowWidth + imgWidth > containerWidth && currentRow.length > 0) {
          rows.push([...currentRow]);
          currentRow = [img];
          currentRowWidth = imgWidth;
        } else {
          currentRow.push(img);
          currentRowWidth += imgWidth;
        }

        if (index === imagesWithDimensions.length - 1 && currentRow.length > 0) {
          rows.push(currentRow);
        }
      });

      setJustifiedRows(rows);
    };

    loadImageDimensions();

    const handleResize = () => loadImageDimensions();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images]);

  // Keyboard navigation for modal
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e) => {
      const currentIndex = images.findIndex(img => img.id === selectedImage.id);

      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          navigateImage('prev', currentIndex);
          break;
        case 'ArrowRight':
          e.preventDefault();
          navigateImage('next', currentIndex);
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, images]);

  // Focus trap in modal
  useEffect(() => {
    if (selectedImage && modalRef.current) {
      // Focus close button when modal opens
      closeButtonRef.current?.focus();

      // Prevent body scroll
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [selectedImage]);

  const navigateImage = (direction, currentIndex) => {
    if (direction === 'prev' && currentIndex > 0) {
      setSelectedImage(images[currentIndex - 1]);
    } else if (direction === 'next' && currentIndex < images.length - 1) {
      setSelectedImage(images[currentIndex + 1]);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Touch handlers for swipe gestures
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    const currentIndex = images.findIndex(img => img.id === selectedImage?.id);

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Swiped left - next image
        navigateImage('next', currentIndex);
      } else {
        // Swiped right - previous image
        navigateImage('prev', currentIndex);
      }
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleImageError = (imageId) => {
    setImageLoadError(prev => ({ ...prev, [imageId]: true }));
  };

  if (loading) {
    return (
      <section id="portfolio" className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-full mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-white text-center mb-12 tracking-widest">
            FASHION MODEL PORTFOLIO
          </h2>
          <GallerySkeleton count={responsiveLimit} />
        </div>
      </section>
    );
  }

  const currentIndex = selectedImage ? images.findIndex(img => img.id === selectedImage.id) : -1;
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;

  return (
    <section id="portfolio" className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-full mx-auto" id="main-content">
        <h2 className="text-4xl md:text-5xl font-light text-white text-center mb-12 tracking-widest">
          FASHION MODEL PORTFOLIO
        </h2>

        {/* Justified Gallery */}
        <div ref={containerRef} role="list" aria-label="Fashion portfolio gallery">
          {justifiedRows.map((row, rowIndex) => {
            const rowHeight = 300;
            const totalAspectRatio = row.reduce((sum, img) => sum + img.aspectRatio, 0);

            return (
              <div key={rowIndex} className="flex gap-0" style={{ height: `${rowHeight}px` }}>
                {row.map((image) => {
                  const widthPercentage = (image.aspectRatio / totalAspectRatio) * 100;

                  return (
                    <button
                      key={image.id}
                      role="listitem"
                      className="group relative cursor-pointer overflow-hidden focus:outline-none focus:ring-2 focus:ring-white"
                      style={{
                        width: `${widthPercentage}%`,
                        height: '100%',
                        minHeight: '44px',
                        minWidth: '44px'
                      }}
                      onClick={() => setSelectedImage(image)}
                      aria-label={`View ${image.alt} in full size`}
                    >
                      {imageLoadError[image.id] ? (
                        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                          <span className="text-white text-sm">Failed to load</span>
                        </div>
                      ) : (
                        <img
                          src={image.thumb}
                          alt={image.alt}
                          loading="lazy"
                          onError={() => handleImageError(image.id)}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-75"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* View More Button */}
        {(limit !== undefined ? limit : responsiveLimit) !== null && (
          <div className="text-center mt-12">
            <Link
              to="/full-gallery"
              className="inline-block px-8 py-3 bg-white text-black font-light tracking-wider hover:bg-gray-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              style={{ minHeight: '44px', minWidth: '44px' }}
              aria-label="View more portfolio images"
            >
              VIEW MORE
            </Link>
          </div>
        )}
      </div>

      {/* Modal with keyboard navigation and swipe gestures */}
      {selectedImage && (
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in-scale"
          onClick={closeModal}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close Button */}
          <button
            ref={closeButtonRef}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
            onClick={closeModal}
            style={{ minHeight: '44px', minWidth: '44px' }}
            aria-label="Close image viewer"
          >
            &times;
          </button>

          {/* Previous Button */}
          {hasPrev && (
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev', currentIndex);
              }}
              style={{ minHeight: '44px', minWidth: '44px' }}
              aria-label="Previous image"
            >
              ‹
            </button>
          )}

          {/* Next Button */}
          {hasNext && (
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next', currentIndex);
              }}
              style={{ minHeight: '44px', minWidth: '44px' }}
              aria-label="Next image"
            >
              ›
            </button>
          )}

          {/* Image Counter */}
          <div className="absolute top-4 left-4 text-white text-sm" aria-live="polite">
            <span id="modal-title" className="sr-only">{selectedImage.alt}</span>
            {currentIndex + 1} / {images.length}
          </div>

          {/* Image */}
          {imageLoadError[selectedImage.id] ? (
            <div className="bg-gray-800 p-8 rounded text-white text-center">
              <p>Failed to load image</p>
            </div>
          ) : (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
              onError={() => handleImageError(selectedImage.id)}
            />
          )}

          {/* Swipe Hint for Mobile */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xs opacity-50 md:hidden">
            Swipe left or right to navigate
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
