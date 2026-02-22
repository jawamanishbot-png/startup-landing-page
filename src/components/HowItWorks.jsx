import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Your Template",
      description: "Start with one of our pre-built agent templates or create from scratch. Our library covers common use cases like customer support, data analysis, and workflow automation.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Configure & Customize",
      description: "Use our intuitive visual editor to customize your agent's behavior, set up integrations, and define workflows. No coding required - just point, click, and configure.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Deploy & Monitor",
      description: "Launch your AI agent with one click and monitor its performance through our comprehensive dashboard. Scale up or down as needed with real-time analytics and insights.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            How AgentFactory Works
          </h2>
          <p className="text-xl text-secondary-600">
            Build and deploy AI agents in three simple steps. 
            From concept to production in minutes, not months.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-primary-300 to-accent-300 hidden lg:block" />
              )}
              
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-500 rounded-2xl text-white mr-4">
                      <span className="text-xl font-bold">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-secondary-900">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-lg text-secondary-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <div className="flex items-center text-primary-600">
                    {step.icon}
                    <span className="ml-2 font-medium">Learn more</span>
                  </div>
                </div>
                
                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    {/* Step-specific mock interface */}
                    {index === 0 && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between mb-6">
                          <h4 className="font-semibold text-secondary-900">Choose Template</h4>
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {['Customer Support', 'Data Analysis', 'Email Automation', 'Lead Generation'].map((template, i) => (
                            <div key={i} className={`p-3 rounded-lg border-2 ${i === 0 ? 'border-primary-300 bg-primary-50' : 'border-gray-200'}`}>
                              <div className="text-sm font-medium text-secondary-700">{template}</div>
                              <div className="text-xs text-secondary-500 mt-1">Popular</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {index === 1 && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between mb-6">
                          <h4 className="font-semibold text-secondary-900">Visual Editor</h4>
                          <div className="text-xs bg-accent-100 text-accent-700 px-2 py-1 rounded-full">Live Preview</div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                              <div className="w-3 h-3 bg-white rounded-sm"></div>
                            </div>
                            <div className="flex-1">
                              <div className="h-2 bg-gray-300 rounded w-24 mb-1"></div>
                              <div className="h-1.5 bg-gray-200 rounded w-16"></div>
                            </div>
                            <div className="w-4 h-4 border-2 border-primary-400 rounded"></div>
                          </div>
                          <div className="flex items-center space-x-3 p-3 bg-accent-50 rounded-lg border border-accent-200">
                            <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center">
                              <div className="w-3 h-3 bg-white rounded-sm"></div>
                            </div>
                            <div className="flex-1">
                              <div className="h-2 bg-accent-300 rounded w-20 mb-1"></div>
                              <div className="h-1.5 bg-accent-200 rounded w-12"></div>
                            </div>
                            <div className="w-4 h-4 bg-accent-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {index === 2 && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between mb-6">
                          <h4 className="font-semibold text-secondary-900">Dashboard</h4>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
                            <span className="text-xs text-secondary-500">Live</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          <div className="text-center p-3 bg-primary-50 rounded-lg">
                            <div className="text-lg font-bold text-primary-600">2,847</div>
                            <div className="text-xs text-secondary-500">Tasks</div>
                          </div>
                          <div className="text-center p-3 bg-accent-50 rounded-lg">
                            <div className="text-lg font-bold text-accent-600">99.8%</div>
                            <div className="text-xs text-secondary-500">Uptime</div>
                          </div>
                          <div className="text-center p-3 bg-orange-50 rounded-lg">
                            <div className="text-lg font-bold text-orange-600">4.2s</div>
                            <div className="text-xs text-secondary-500">Avg Time</div>
                          </div>
                        </div>
                        <div className="h-16 bg-gradient-to-r from-primary-100 to-accent-100 rounded-lg p-3">
                          <div className="h-full bg-gradient-to-r from-primary-400 to-accent-400 rounded w-3/4 opacity-60"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;