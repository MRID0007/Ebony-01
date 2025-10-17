import { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-white text-center mb-12 tracking-widest">
          CONTACT FOR FASHION MODELING BOOKINGS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-light text-white mb-4 tracking-wider">
                Let's Work Together
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I'm available for fashion shoots, editorial work, commercial projects, and
                collaborations. Feel free to reach out to discuss your next project.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-400">contact@ebonyash.fashion</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4">
              <a
                href="https://instagram.com/ebony.ash"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors flex items-center space-x-2"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="text-gray-400">@ebony.ash</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="access_key" value="7df5f1ba-edea-4dab-af1c-7e1e67012ab9" />
            <input type="hidden" name="subject" value="New Contact Form Submission from ebonyash.fashion" />
            <input type="hidden" name="from_name" value="Ebony March Portfolio" />

            {/* Honeypot spam protection */}
            <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />

            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full px-4 py-3 bg-white/5 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 bg-white/5 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                required
                rows="6"
                className="w-full px-4 py-3 bg-white/5 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors resize-none"
              ></textarea>
            </div>

            {/* Success Message */}
            {status === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500 text-green-500 text-center">
                Thank you for your message! I will get back to you soon.
              </div>
            )}

            {/* Error Message */}
            {status === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500 text-red-500 text-center">
                Something went wrong. Please try again or email me directly.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-3 bg-white text-black font-light tracking-wider hover:bg-gray-200 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-20 pt-8 border-t border-gray-800">
          <p>&copy; 2025 Ebony March. All rights reserved.</p>
          <p className="mt-2">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
