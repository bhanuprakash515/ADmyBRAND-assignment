'use client';

import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { FaMagic, FaRobot, FaChartLine, FaDatabase, FaBullhorn, FaPaintBrush } from 'react-icons/fa';

const features = [
  {
    icon: <FaMagic className="text-white text-3xl" />,
    title: 'AI Campaign Generator',
    desc: 'Generate marketing campaigns instantly using AI.'
  },
  {
    icon: <FaRobot className="text-white text-3xl" />,
    title: 'Ad Copy Creator',
    desc: 'Create compelling ad copy tailored to your audience.'
  },
  {
    icon: <FaChartLine className="text-white text-3xl" />,
    title: 'Performance Analytics',
    desc: 'Track and optimize your marketing performance.'
  },
  {
    icon: <FaDatabase className="text-white text-3xl" />,
    title: 'Data Intelligence',
    desc: 'Harness customer insights with smart analytics.'
  },
  {
    icon: <FaBullhorn className="text-white text-3xl" />,
    title: 'Audience Targeting',
    desc: 'Find and reach your perfect customer segment.'
  },
  {
    icon: <FaPaintBrush className="text-white text-3xl" />,
    title: 'Creative Studio',
    desc: 'Design banners and visuals with AI assistance.'
  },
];

export default function Features() {
  return (
    <SectionWrapper id="features">
      <h2  className="text-3xl md:text-4xl font-bold text-center text-white mb-10">AI Tools in the Suite</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl p-6 transition-transform hover:scale-105"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-white/80">{feature.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
