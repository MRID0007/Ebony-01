const CompCard = ({ onOpenCompCard }) => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-light text-black tracking-widest mb-4">
          DIGITAL COMP CARD
        </h3>
        <p className="text-gray-600 mb-6">
          Download my professional composite card for casting and booking reference
        </p>
        <button
          onClick={onOpenCompCard}
          className="inline-block px-8 py-3 bg-black text-white font-light tracking-wider hover:bg-gray-800 transition-colors duration-300 cursor-pointer border-none"
        >
          VIEW & DOWNLOAD COMP CARD
        </button>
        <p className="text-sm text-gray-500 mt-4">
          Opens in full-screen viewer with download option
        </p>
      </div>
    </section>
  );
};

export default CompCard;
