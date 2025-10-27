'use client'

import { useState } from 'react'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 3000)
      setEmail('')
    }
  }

  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 rounded-3xl">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative px-8 py-20 sm:py-24 lg:py-32">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
                Transform Your Business
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                  With Modern SaaS
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-slide-up">
                Streamline operations, boost productivity, and scale your business with our 
                cutting-edge platform trusted by 10,000+ companies worldwide.
              </p>

              {/* Email Signup Form */}
              <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 disabled:opacity-75"
                  >
                    {isSubmitted ? 'Success!' : 'Get Started'}
                    {!isSubmitted && <ArrowRight size={20} />}
                  </button>
                </div>
                {isSubmitted && (
                  <p className="text-green-300 mt-2 animate-fade-in">
                    Thanks! We'll be in touch soon.
                  </p>
                )}
              </form>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors flex items-center gap-2 glass-morphism">
                  <Play size={20} />
                  Watch Demo
                </button>
                <p className="text-gray-300 text-sm">
                  ⭐⭐⭐⭐⭐ Trusted by 10,000+ businesses
                </p>
              </div>
            </div>
          </div>

          {/* Floating elements for visual appeal */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce-slow"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-yellow-400/20 rounded-full animate-bounce-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-20 w-12 h-12 bg-pink-400/20 rounded-full animate-bounce-slow" style={{animationDelay: '2s'}}></div>
        </div>
      </div>
    </section>
  )
}