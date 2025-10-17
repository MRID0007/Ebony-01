const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Fashion Photographer",
      text: "Working with Ebony was an absolute pleasure. Her professionalism and ability to bring the vision to life made our editorial shoot exceptional.",
    },
    {
      id: 2,
      name: "Marcus Williams",
      role: "Creative Director",
      text: "Ebony's versatility and dedication shine through in every project. She's a true professional who elevates every shoot she's part of.",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Brand Manager",
      text: "Her energy and authenticity perfectly captured our brand's essence. We couldn't have asked for a better model for our campaign.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-black text-center mb-12 tracking-widest">
          TESTIMONIALS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-6">
                <svg
                  className="w-8 h-8 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-medium text-black">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
