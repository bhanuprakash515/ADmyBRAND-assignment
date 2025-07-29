'use client';

import { SectionWrapper } from '@/components/ui/SectionWrapper';

export default function ProductDemo() {
  return (
    <SectionWrapper>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See ADmyBRAND AI Suite in Action</h2>
        <p className="text-white/80 max-w-2xl mx-auto">
          Watch how our intelligent tools streamline your campaigns — from ideation to deployment — in under 60 seconds.
        </p>
      </div>

      <div className="aspect-w-16 aspect-h-9 w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10">
        <iframe
           src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your actual video URL
          title="ADmyBRAND AI Suite Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-full h-full"
          allowFullScreen
        ></iframe>
      </div>
    </SectionWrapper>
  );
}
