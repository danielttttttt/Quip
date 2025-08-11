export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to{' '}
              <span className="text-primary">Quip</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect with friends, share your thoughts, and discover amazing content in a clean, modern social platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Get Started
              </button>
              <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Quip?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience social networking like never before with our innovative features and clean design.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600">
                Built with modern technologies for blazing fast performance and smooth user experience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure & Private</h3>
              <p className="text-gray-600">
                Your privacy matters. We use industry-standard security measures to protect your data.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Focused</h3>
              <p className="text-gray-600">
                Connect with like-minded people and build meaningful relationships in our vibrant community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already enjoying the Quip experience.
          </p>
          <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
            Join Quip Today
          </button>
        </div>
      </section>
    </div>
  );
}

