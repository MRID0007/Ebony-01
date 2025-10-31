import { useState } from 'react';

const Commissions = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Commission request:', formData);
    alert('Thank you for your commission request! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      projectType: '',
      budget: '',
      description: ''
    });
  };

  const services = [
    {
      title: 'Fashion Modeling',
      description: 'Professional fashion shoots for brands and designers',
      price: 'Starting at $200/hour',
      icon: '👗'
    },
    {
      title: 'Cosplay Photography',
      description: 'Character photoshoots and convention appearances',
      price: 'Starting at $150/hour',
      icon: '🎭'
    },
    {
      title: 'Editorial Work',
      description: 'Magazine features and editorial spreads',
      price: 'Custom pricing',
      icon: '📸'
    },
    {
      title: 'Brand Collaborations',
      description: 'Social media content and brand partnerships',
      price: 'Custom pricing',
      icon: '✨'
    }
  ];

  return (
    <section id="commissions" className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-white text-center mb-4 tracking-widest">
          COMMISSIONS
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg tracking-wide">
          Professional modeling services and collaborations
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-8 border border-gray-700 hover:border-white transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-light text-white mb-3 tracking-wider">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {service.description}
              </p>
              <p className="text-white font-light tracking-wide">
                {service.price}
              </p>
            </div>
          ))}
        </div>

        {/* Commission Request Form */}
        <div className="bg-gray-800/30 backdrop-blur-sm p-8 md:p-12 border border-gray-700">
          <h3 className="text-3xl font-light text-white mb-8 text-center tracking-wider">
            REQUEST A COMMISSION
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 tracking-wide">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900/50 border border-gray-600 text-white px-4 py-3 focus:outline-none focus:border-white transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 tracking-wide">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900/50 border border-gray-600 text-white px-4 py-3 focus:outline-none focus:border-white transition-colors duration-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="projectType" className="block text-gray-300 mb-2 tracking-wide">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900/50 border border-gray-600 text-white px-4 py-3 focus:outline-none focus:border-white transition-colors duration-300"
                >
                  <option value="">Select a service</option>
                  <option value="fashion">Fashion Modeling</option>
                  <option value="cosplay">Cosplay Photography</option>
                  <option value="editorial">Editorial Work</option>
                  <option value="brand">Brand Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-gray-300 mb-2 tracking-wide">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-gray-900/50 border border-gray-600 text-white px-4 py-3 focus:outline-none focus:border-white transition-colors duration-300"
                >
                  <option value="">Select budget range</option>
                  <option value="under-500">Under $500</option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000-2500">$1,000 - $2,500</option>
                  <option value="2500-plus">$2,500+</option>
                  <option value="negotiable">Negotiable</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-gray-300 mb-2 tracking-wide">
                Project Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell me about your project, timeline, and any specific requirements..."
                className="w-full bg-gray-900/50 border border-gray-600 text-white px-4 py-3 focus:outline-none focus:border-white transition-colors duration-300 resize-none"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-12 py-4 bg-white text-black font-light tracking-widest hover:bg-gray-200 transition-colors duration-300 text-sm"
              >
                SUBMIT REQUEST
              </button>
            </div>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center text-gray-400">
          <p className="text-sm tracking-wide">
            Response time: Within 2-3 business days
          </p>
          <p className="text-sm tracking-wide mt-2">
            For urgent inquiries, please use the contact section below
          </p>
        </div>
      </div>
    </section>
  );
};

export default Commissions;
