import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Gallery = ({ limit }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [justifiedRows, setJustifiedRows] = useState([]);
  const [responsiveLimit, setResponsiveLimit] = useState(20);
  const containerRef = useRef(null);

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
    const activeLimit = limit !== undefined && limit !== null ? limit : responsiveLimit;
    const finalImages = activeLimit ? loadedImages.slice(0, activeLimit) : loadedImages;

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
          // Finish current row and start new one
          rows.push([...currentRow]);
          currentRow = [img];
          currentRowWidth = imgWidth;
        } else {
          currentRow.push(img);
          currentRowWidth += imgWidth;
        }

        // Last image - push remaining row
        if (index === imagesWithDimensions.length - 1 && currentRow.length > 0) {
          rows.push(currentRow);
        }
      });

      setJustifiedRows(rows);
    };

    loadImageDimensions();

    // Recalculate on resize
    const handleResize = () => loadImageDimensions();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images]);

  return (
    <section id="portfolio" className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-full mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-white text-center mb-12 tracking-widest">
          FASHION MODEL PORTFOLIO
        </h2>

        {/* Justified Gallery - Equal row heights, fills full width like brick wall */}
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
        {(limit !== undefined && limit !== null ? limit : responsiveLimit) && (
          <div className="text-center mt-12">
            <Link
              to="/full-gallery"
              className="inline-block px-8 py-3 bg-white text-black font-light tracking-wider hover:bg-gray-200 transition-colors duration-300"
            >
              VIEW MORE
            </Link>
          </div>
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

export default Gallery;
