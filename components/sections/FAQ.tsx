'use client';

import { useState } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'What is ADmyBRAND AI Suite?',
    answer:
      'It’s a set of AI-powered tools to help you automate campaign creation, ad copy generation, analytics, and design.',
  },
  {
    question: 'Do I need coding knowledge to use it?',
    answer:
      'No, our tools are built for marketers and business owners without technical backgrounds.',
  },
  {
    question: 'Can I upgrade or downgrade my plan later?',
    answer:
      'Yes, you can switch plans at any time directly from your dashboard.',
  },
  {
    question: 'Is there a free trial available?',
    answer:
      'Yes, we offer a 7-day free trial with access to all features in the Pro plan.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <SectionWrapper>
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4 max-w-2xl mx-auto">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white/10 rounded-xl border border-white/10 p-4"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center text-left text-white text-lg font-medium"
            >
              {faq.question}
              <FaChevronDown
                className={`transition-transform ${
                  openIndex === i ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === i && (
              <p className="text-white/80 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
