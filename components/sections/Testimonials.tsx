'use client';

import { SectionWrapper } from '@/components/ui/SectionWrapper';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Marketing Lead, Zentech',
    quote: 'ADmyBRAND AI Suite transformed our campaign efficiency — we saw a 35% lift in conversions!',
  },
  {
    name: 'Rajesh Iyer',
    role: 'Founder, ShopHub',
    quote: 'I never thought AI could write such engaging ad copy. Saved us time and money.',
  },
  {
    name: 'Meena Patel',
    role: 'CMO, Finovia',
    quote: 'From analytics to targeting, everything just works. Incredible suite of tools!',
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper>
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        What Our Users Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 text-white shadow-xl"
          >
            <p className="text-white/90 italic mb-4">“{testimonial.quote}”</p>
            <div className="text-white font-semibold">{testimonial.name}</div>
            <div className="text-white/60 text-sm">{testimonial.role}</div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
