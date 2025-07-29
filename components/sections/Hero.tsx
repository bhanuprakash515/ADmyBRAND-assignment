'use client';

import { Button } from '@/components/ui/Button';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import Image from 'next/image';

export default function Hero() {
  return (
    <SectionWrapper className="flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-3xl font-bold text-white">
          Supercharge Your Marketing with <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
            ADmyBRAND AI Suite
          </span>
        </h1>
        <p className="text-lg text-neutral-300 max-w-xl">
          Experience AI-driven tools that automate your campaigns, analyze results, and boost conversions — all in one suite.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:justify-start justify-center">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">Watch Demo</Button>
        </div>
      </div>

      {/* Right Content (Hero Image or Video) */}
      <div className="flex-1 relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
        <div className="absolute inset-0 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/10 shadow-2xl overflow-hidden">
          <Image
            src="/hero.png" // Put your image in /public
            alt="AI dashboard illustration"
            fill
            className="object-cover rounded-3xl"
            priority
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
