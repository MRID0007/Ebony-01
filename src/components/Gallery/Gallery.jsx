import { useState } from 'react';
import P01 from '../../assets/P-01.jpg';
import P02 from '../../assets/P-02.jpg';
import P03 from '../../assets/P-03.jpg';
import P04 from '../../assets/P-04.jpg';
import P05 from '../../assets/P-05.jpg';
import P06 from '../../assets/P-06.jpg';
import P07 from '../../assets/P-07.jpg';
import P08 from '../../assets/P-08.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Portfolio images
  const images = [
    {
      id: 1,
      src: P01,
      alt: 'Portfolio Image 1',
    },
    {
      id: 2,
      src: P02,
      alt: 'Portfolio Image 2',
    },
    {
      id: 3,
      src: P03,
      alt: 'Portfolio Image 3',
    },
    {
      id: 4,
      src: P04,
      alt: 'Portfolio Image 4',
    },
    {
      id: 5,
      src: P05,
      alt: 'Portfolio Image 5',
    },
    {
      id: 6,
      src: P06,
      alt: 'Portfolio Image 6',
    },
    {
      id: 7,
      src: P07,
      alt: 'Portfolio Image 7',
    },
    {
      id: 8,
      src: P08,
      alt: 'Portfolio Image 8',
    },
  ];

  return (
    <section id="portfolio" className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-white text-center mb-12 tracking-widest">
          PORTFOLIO
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
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
