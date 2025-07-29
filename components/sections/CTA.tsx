'use client';

import { Button } from '@/components/ui/Button';
import { SectionWrapper } from '@/components/ui/SectionWrapper';

export default function CTA() {
  return (
    <SectionWrapper className="text-center bg-white/5 backdrop-blur rounded-3xl p-10 shadow-2xl">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        See ADmyBRAND AI Suite in Action
      </h2>
      <p className="text-white/80 max-w-2xl mx-auto mb-6">
        Watch how our intelligent tools streamline your campaigns — from ideation to deployment — in under 60 seconds.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg">Get Started</Button>
        <Button size="lg" variant="outline">Watch Demo</Button>
      </div>
    </SectionWrapper>
  );
}
