import { useState } from 'react';
// High-res images for modal
import P01 from '../../assets/P-01.jpg';
import P02 from '../../assets/P-02.jpg';
import P03 from '../../assets/P-03.jpg';
import P04 from '../../assets/P-04.jpg';
import P05 from '../../assets/P-05.jpg';
import P06 from '../../assets/P-06.jpg';
import P07 from '../../assets/P-07.jpg';
import P08 from '../../assets/P-08.jpg';
// Optimized thumbnails for gallery grid
import P01Thumb from '../../assets/thumbnails/P-01.jpg';
import P02Thumb from '../../assets/thumbnails/P-02.jpg';
import P03Thumb from '../../assets/thumbnails/P-03.jpg';
import P04Thumb from '../../assets/thumbnails/P-04.jpg';
import P05Thumb from '../../assets/thumbnails/P-05.jpg';
import P06Thumb from '../../assets/thumbnails/P-06.jpg';
import P07Thumb from '../../assets/thumbnails/P-07.jpg';
import P08Thumb from '../../assets/thumbnails/P-08.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Portfolio images
  const images = [
    {
      id: 1,
      src: P01,
      thumb: P01Thumb,
      alt: 'Ebony March fashion modeling portrait - professional editorial shoot',
    },
    {
      id: 2,
      src: P02,
      thumb: P02Thumb,
      alt: 'Ebony March high fashion photography - runway and editorial work',
    },
    {
      id: 3,
      src: P03,
      thumb: P03Thumb,
      alt: 'Ebony March commercial modeling photo - brand campaign shoot',
    },
    {
      id: 4,
      src: P04,
      thumb: P04Thumb,
      alt: 'Ebony March editorial fashion shoot - minimalist style photography',
    },
    {
      id: 5,
      src: P05,
      thumb: P05Thumb,
      alt: 'Ebony March professional modeling portfolio - fashion photography',
    },
    {
      id: 6,
      src: P06,
      thumb: P06Thumb,
      alt: 'Ebony March fashion model - contemporary editorial work',
    },
    {
      id: 7,
      src: P07,
      thumb: P07Thumb,
      alt: 'Ebony March modeling portfolio - high fashion editorial shoot',
    },
    {
      id: 8,
      src: P08,
      thumb: P08Thumb,
      alt: 'Ebony March professional fashion photography - modeling portfolio',
    },
  ];

  return (
    <section id="portfolio" className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-white text-center mb-12 tracking-widest">
          FASHION MODEL PORTFOLIO
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
                src={image.thumb}
                alt={image.alt}
                loading="lazy"
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
