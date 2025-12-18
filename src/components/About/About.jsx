import aboutImage from '../../assets/images/P-08.jpg';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={aboutImage}
                alt="Ebony March - Professional Fashion Model Portrait"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-light text-black tracking-widest">
              ABOUT ME
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I am a model who specialises in editorial and commercial shoots. I enjoy a focus on shape and emotion through posing, and love experimenting with lighting to bring life to photos.
              </p>
              <p>
                Modeling is an art form I deeply love. I used to think it was just about being in front of the camera, but it's also about you: your body, how you present yourself, and whom you identify with.
              </p>
              <p>
                Under different lights, lenses and creative direction, modeling gives me a chance to become a different person, one shutter click at a time.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-light text-black">3+</div>
                <div className="text-sm text-gray-600 tracking-wider">YEARS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-black">100+</div>
                <div className="text-sm text-gray-600 tracking-wider">SHOOTS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-black">50+</div>
                <div className="text-sm text-gray-600 tracking-wider">CLIENTS</div>
              </div>
            </div>

            {/* Measurements */}
            <div className="pt-8 space-y-2 text-sm text-gray-600">
              <div className="flex justify-between border-b border-gray-200 py-2">
                <span>Height</span>
                <span className="font-light">5'6" / 168 cm</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 py-2">
                <span>Bust</span>
                <span className="font-light">36" / 93 cm</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 py-2">
                <span>Waist</span>
                <span className="font-light">27" / 68 cm</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 py-2">
                <span>Hips</span>
                <span className="font-light">38" / 96 cm</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 py-2">
                <span>Shoes</span>
                <span className="font-light">38</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 py-2">
                <span>Hair</span>
                <span className="font-light">Brown</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 py-2">
                <span>Eyes</span>
                <span className="font-light">Blue</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
