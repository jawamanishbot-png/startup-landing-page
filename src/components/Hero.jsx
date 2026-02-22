import React from 'react';

const Hero = () => {
  return (
    <section className="pt-16 section-padding bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight">
              Build AI Agents in
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
                {' '}Minutes
              </span>
            </h1>
            <p className="mt-6 text-xl text-secondary-600 max-w-2xl mx-auto lg:mx-0">
              Create powerful AI agents without coding. Deploy intelligent automation 
              that scales with your business needs.
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary text-lg px-8 py-4">
                Start Building Free
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Watch Demo
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-secondary-500">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-accent-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No credit card required
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-accent-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                5-minute setup
              </div>
            </div>
          </div>
          
          {/* Right Column - Hero Image/Illustration */}
          <div className="relative">
            <div className="relative z-10">
              {/* Placeholder for hero illustration - using geometric shapes */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-4">
                  {/* Mock interface elements */}
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary-100 to-accent-100 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                        </svg>
                      </div>
                      <div>
                        <div className="h-2 bg-primary-300 rounded w-24 mb-1"></div>
                        <div className="h-1.5 bg-primary-200 rounded w-16"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded w-full"></div>
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-accent-50 rounded-lg p-4">
                      <div className="w-6 h-6 bg-accent-500 rounded mb-2"></div>
                      <div className="h-1.5 bg-accent-200 rounded w-full mb-1"></div>
                      <div className="h-1.5 bg-accent-200 rounded w-2/3"></div>
                    </div>
                    <div className="bg-primary-50 rounded-lg p-4">
                      <div className="w-6 h-6 bg-primary-500 rounded mb-2"></div>
                      <div className="h-1.5 bg-primary-200 rounded w-full mb-1"></div>
                      <div className="h-1.5 bg-primary-200 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent-400 to-primary-600 rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-primary-400 to-accent-600 rounded-full opacity-10 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;