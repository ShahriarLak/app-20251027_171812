'use client'

import { Check, Star } from 'lucide-react'
import { useState } from 'react'

interface PricingPlan {
  name: string
  price: number
  originalPrice?: number
  period: string
  description: string
  features: string[]
  popular?: boolean
  buttonText: string
  buttonVariant: 'outline' | 'solid' | 'gradient'
}

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: 29,
    period: "/month",
    description: "Perfect for small teams and startups getting started",
    features: [
      "Up to 5 team members",
      "10GB storage",
      "Basic analytics",
      "Email support",
      "Core integrations",
      "Mobile app access"
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "outline"
  },
  {
    name: "Professional",
    price: 99,
    originalPrice: 149,
    period: "/month",
    description: "Ideal for growing businesses and established teams",
    features: [
      "Up to 25 team members",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
      "All integrations",
      "Mobile app access",
      "Custom workflows",
      "API access",
      "Advanced security"
    ],
    popular: true,
    buttonText: "Get Started",
    buttonVariant: "gradient"
  },
  {
    name: "Enterprise",
    price: 299,
    originalPrice: 399,
    period: "/month",
    description: "For large organizations requiring maximum power",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Custom analytics",
      "24/7 dedicated support",
      "All integrations",
      "Mobile app access",
      "Custom workflows",
      "API access",
      "Enterprise security",
      "SLA guarantee",
      "Custom onboarding",
      "Account manager"
    ],
    buttonText: "Contact Sales",
    buttonVariant: "solid"
  }
]

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')

  const getPrice = (price: number) => {
    return billingPeriod === 'yearly' ? Math.floor(price * 0.8) : price
  }

  const getOriginalPrice = (originalPrice?: number) => {
    if (!originalPrice) return undefined
    return billingPeriod === 'yearly' ? Math.floor(originalPrice * 0.8) : originalPrice
  }

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent
            <span className="gradient-text"> Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                billingPeriod === 'yearly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
              <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                20% OFF
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular
                  ? 'ring-2 ring-purple-500 transform scale-105'
                  : 'border border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {plan.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-2">
                      {plan.originalPrice && (
                        <span className="text-2xl text-gray-400 line-through">
                          ${getOriginalPrice(plan.originalPrice)}
                        </span>
                      )}
                      <span className="text-5xl font-bold text-gray-900">
                        ${getPrice(plan.price)}
                      </span>
                      <span className="text-gray-600">
                        {billingPeriod === 'yearly' ? '/year' : plan.period}
                      </span>
                    </div>
                    {billingPeriod === 'yearly' && (
                      <p className="text-green-600 text-sm mt-2">
                        Save ${(plan.price * 12) - (getPrice(plan.price) * 12)} annually
                      </p>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <Check className="w-5 h-5 text-green-500 mt-0.5" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all transform hover:-translate-y-1 ${
                    plan.buttonVariant === 'gradient'
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg'
                      : plan.buttonVariant === 'solid'
                      ? 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-purple-500 hover:text-purple-600'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="text-sm text-gray-500">
            Need a custom solution? 
            <a href="#" className="text-purple-600 hover:text-purple-700 ml-1">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}