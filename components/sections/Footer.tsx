'use client';

import { SectionWrapper } from '@/components/ui/SectionWrapper';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white py-10 mt-20">
      <SectionWrapper className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">
        <div className="font-semibold text-lg">ADmyBRAND</div>
        <div className="flex gap-6 text-white/70">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </div>
        <div className="text-white/50 text-xs">
          &copy; {new Date().getFullYear()} ADmyBRAND. All rights reserved.
        </div>
      </SectionWrapper>
    </footer>
  );
}
