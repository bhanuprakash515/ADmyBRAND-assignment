'use client';

import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';

const plans = [
  {
    name: 'Starter',
    price: '₹999/mo',
    features: ['Basic AI tools', 'Limited analytics', 'Email support'],
    featured: false,
  },
  {
    name: 'Pro',
    price: '₹2,499/mo',
    features: ['All AI tools', 'Advanced analytics', 'Priority support'],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    features: ['Custom AI models', 'Dedicated support', 'Full analytics'],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <SectionWrapper>
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        Flexible Pricing for Every Team
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-3xl border p-6 shadow-xl transition-transform hover:scale-105 ${
              plan.featured
                ? 'bg-gradient-to-br from-purple-600 to-pink-500 text-white border-white/10'
                : 'bg-white/5 text-white border-white/10'
            }`}
          >
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="text-xl font-semibold mb-4">{plan.price}</p>
            <ul className="mb-6 space-y-2">
              {plan.features.map((feat, i) => (
                <li key={i} className="text-white/80">
                  • {feat}
                </li>
              ))}
            </ul>
            <Button className="w-full bg-white text-black hover:bg-gray-100"> Subscribe </Button>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
