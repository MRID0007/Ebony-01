import { useNavigate } from 'react-router-dom';
import Gallery from '../components/Gallery/Gallery';

function FullGallery() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      {/* Back Button */}
      <div className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-6 py-2 bg-white text-black font-light tracking-wider hover:bg-gray-200 transition-colors duration-300"
          >
            ← Back to Portfolio
          </button>
        </div>
      </div>

      {/* Full Gallery - No Limit */}
      <Gallery limit={null} />
    </div>
  );
}

export default FullGallery;
