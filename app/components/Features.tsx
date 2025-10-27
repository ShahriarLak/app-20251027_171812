'use client'

import { Zap, Shield, BarChart, Users, Clock, Globe } from 'lucide-react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

const features: Feature[] = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description: "Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology stack.",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption, SOC 2 compliance, and advanced threat protection.",
    color: "from-green-400 to-blue-500"
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Advanced Analytics",
    description: "Make data-driven decisions with comprehensive analytics, real-time insights, and custom dashboards.",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Team Collaboration",
    description: "Seamlessly collaborate with your team using built-in communication tools and workflow management.",
    color: "from-blue-400 to-indigo-500"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24/7 Support",
    description: "Round-the-clock customer support with dedicated account managers and priority response times.",
    color: "from-red-400 to-pink-500"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Scale",
    description: "Deploy worldwide with our global infrastructure, CDN network, and multi-region redundancy.",
    color: "from-teal-400 to-cyan-500"
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="gradient-text"> Modern Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to streamline operations, boost productivity, and scale your business to new heights.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <a
                  href="#"
                  className="text-purple-600 font-medium hover:text-purple-700 inline-flex items-center gap-2"
                >
                  Learn more
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  )
}