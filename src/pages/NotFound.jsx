import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center text-white">
        <h1 className="text-8xl md:text-9xl font-light tracking-widest mb-4">
          404
        </h1>
        <p className="text-xl md:text-2xl font-light tracking-wider mb-8 opacity-90">
          Page Not Found
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-white text-black font-light tracking-wider hover:bg-gray-200 transition-colors duration-300"
        >
          RETURN HOME
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
