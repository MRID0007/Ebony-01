import { useState, useEffect, useRef } from 'react';

const Cosplay = ({ limit }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [justifiedRows, setJustifiedRows] = useState([]);
  const [responsiveLimit, setResponsiveLimit] = useState(12);
  const containerRef = useRef(null);

  // Update responsive limit based on screen size
  useEffect(() => {
    const updateLimit = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setResponsiveLimit(6); // Mobile
      } else if (width < 1024) {
        setResponsiveLimit(9); // Tablet
      } else {
        setResponsiveLimit(12); // Desktop
      }
    };

    updateLimit();
    window.addEventListener('resize', updateLimit);
    return () => window.removeEventListener('resize', updateLimit);
  }, []);

  useEffect(() => {
    // Use placeholder images for cosplay section
    const placeholderImages = [
      {
        id: 1,
        src: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800',
        thumb: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400',
        alt: 'Cosplay example 1'
      },
      {
        id: 2,
        src: 'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?w=800',
        thumb: 'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?w=400',
        alt: 'Cosplay example 2'
      },
      {
        id: 3,
        src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800',
        thumb: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400',
        alt: 'Cosplay example 3'
      },
      {
        id: 4,
        src: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800',
        thumb: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400',
        alt: 'Cosplay example 4'
      },
      {
        id: 5,
        src: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800',
        thumb: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400',
        alt: 'Cosplay example 5'
      },
      {
        id: 6,
        src: 'https://images.unsplash.com/photo-1551298698-66b830a4f11c?w=800',
        thumb: 'https://images.unsplash.com/photo-1551298698-66b830a4f11c?w=400',
        alt: 'Cosplay example 6'
      }
    ];

    const activeLimit = limit !== undefined ? limit : responsiveLimit;
    const finalImages = activeLimit !== null && activeLimit !== false ? placeholderImages.slice(0, activeLimit) : placeholderImages;

    setImages(finalImages);
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

  return (
    <section id="cosplay" className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-full mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-white text-center mb-4 tracking-widest">
          COSPLAY
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg tracking-wide">
          Character transformations and creative costume design
        </p>

        {images.length === 0 ? (
          <div className="text-center text-gray-500 py-20">
            <p className="text-xl">Coming soon - Cosplay gallery launching shortly!</p>
            <p className="text-sm mt-4">Add cosplay images with C-01.jpg, C-02.jpg, etc. to the assets folder</p>
          </div>
        ) : (
          <>
            {/* Justified Gallery */}
            <div ref={containerRef}>
              {justifiedRows.map((row, rowIndex) => {
                const rowHeight = 300;
                const totalAspectRatio = row.reduce((sum, img) => sum + img.aspectRatio, 0);

                return (
                  <div key={rowIndex} className="flex gap-0" style={{ height: `${rowHeight}px` }}>
                    {row.map((image) => {
                      const widthPercentage = (image.aspectRatio / totalAspectRatio) * 100;

                      return (
                        <div
                          key={image.id}
                          className="group relative cursor-pointer overflow-hidden"
                          style={{
                            width: `${widthPercentage}%`,
                            height: '100%'
                          }}
                          onClick={() => setSelectedImage(image)}
                        >
                          <img
                            src={image.thumb}
                            alt={image.alt}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-75"
                          />
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>

            {/* View More Button */}
            {(limit !== undefined ? limit : responsiveLimit) !== null && images.length >= (limit !== undefined ? limit : responsiveLimit) && (
              <div className="text-center mt-12">
                <button
                  className="inline-block px-8 py-3 bg-white text-black font-light tracking-wider hover:bg-gray-200 transition-colors duration-300"
                >
                  VIEW MORE COSPLAY
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Cosplay;
