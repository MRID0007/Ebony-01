import aboutImage from '../../assets/P-08.jpg';

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
              ABOUT EBONY - PROFESSIONAL MODEL
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I'm a professional fashion and editorial model with a passion for bringing
                creative visions to life. With years of experience in the modeling industry, I've had
                the privilege of working with talented photographers, designers, and brands across
                Australia and internationally.
              </p>
              <p>
                My approach to modeling is rooted in versatility and professionalism. Whether
                it's high fashion runway shows, commercial brand campaigns, or editorial photo shoots,
                I bring dedication, creativity, and authenticity to every project. I specialize in
                bringing the designer's vision to life while adding my own unique energy to each shot.
              </p>
              <p>
                Based in Australia, I'm available for fashion modeling assignments, editorial work,
                commercial campaigns, and creative collaborations worldwide. My experience spans
                runway modeling, print campaigns, digital content creation, and brand partnerships.
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
