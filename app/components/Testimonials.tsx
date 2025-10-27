'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechFlow Solutions",
    content: "This platform has completely transformed how we manage our operations. The intuitive interface and powerful features have increased our productivity by 300%. Absolutely game-changing!",
    avatar: "SJ",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "InnovateNow",
    content: "The analytics and reporting capabilities are outstanding. We've gained insights into our business that we never had before. The ROI has been incredible - we paid for itself in just 2 months.",
    avatar: "MC",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Operations Manager",
    company: "GrowthLab",
    content: "Implementation was seamless and the support team is phenomenal. They guided us through every step and continue to provide excellent service. Our team loves using it daily.",
    avatar: "ER",
    rating: 5
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder",
    company: "StartupVenture",
    content: "As a growing startup, we needed a solution that could scale with us. This platform has exceeded our expectations and helped us streamline processes we didn't even know were inefficient.",
    avatar: "DK",
    rating: 5
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "VP of Marketing",
    company: "BrandBoost",
    content: "The collaboration features have revolutionized how our remote team works together. Communication is clearer, projects move faster, and everyone stays aligned on our goals.",
    avatar: "LT",
    rating: 5
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10s
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10s
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10s
  }

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Loved by
            <span className="gradient-text"> Thousands</span> of Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what industry leaders are saying about our platform.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mx-auto max-w-4xl">
            <div className="text-center">
              {/* Quote Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-8">
                <Quote className="w-8 h-8 text-white" />
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[currentIndex].avatar}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-bold gradient-text">10K+</p>
            <p className="text-gray-600 mt-2">Happy Customers</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold gradient-text">99.9%</p>
            <p className="text-gray-600 mt-2">Uptime</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold gradient-text">4.9/5</p>
            <p className="text-gray-600 mt-2">Rating</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold gradient-text">24/7</p>
            <p className="text-gray-600 mt-2">Support</p>
          </div>
        </div>
      </div>
    </section>
  )
}