const Privacy = () => {
  return (
    <section className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light text-black tracking-widest mb-8">
          PRIVACY POLICY
        </h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p className="text-sm text-gray-500">Last updated: October 17, 2025</p>

          <div>
            <h2 className="text-2xl font-light text-black mb-4">Introduction</h2>
            <p>
              Ebony March ("we", "our", or "us") operates ebonyash.fashion. This page informs you of our policies
              regarding the collection, use, and disclosure of personal data when you use our website and the
              choices you have associated with that data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-light text-black mb-4">Information Collection</h2>
            <p>
              We collect information that you provide directly to us through our contact form, including:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Message content</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-light text-black mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Respond to your inquiries and booking requests</li>
              <li>Communicate with you about professional opportunities</li>
              <li>Improve our website and services</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-light text-black mb-4">Data Storage</h2>
            <p>
              Contact form submissions are processed through Web3Forms, a third-party service. Your information
              is sent directly to our email and is not stored on our servers. Please review Web3Forms' privacy
              policy for information about their data practices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-light text-black mb-4">Cookies</h2>
            <p>
              Our website does not use cookies for tracking purposes. We do not collect any personal information
              automatically through cookies or similar technologies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-light text-black mb-4">Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Web3Forms - Contact form processing</li>
              <li>Cloudflare - Website hosting and security</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-light text-black mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Request access to your personal data</li>
              <li>Request correction or deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-light text-black mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:{' '}
              <a href="mailto:contact@ebonyash.fashion" className="underline hover:text-black transition-colors">
                contact@ebonyash.fashion
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="/#contact"
            className="inline-block px-8 py-3 bg-black text-white font-light tracking-wider hover:bg-gray-800 transition-colors duration-300"
          >
            BACK TO HOME
          </a>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
