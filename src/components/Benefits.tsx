import { SectionWrapper } from "./ui/SectionWrapper";
import { siteConfig } from "@/lib/site-config";
import Image from "next/image";

// Simple icon mapping since we don't have lucide-react or similar yet
const icons = {
  detail: (
    <svg className="w-10 h-10 text-[#2E86DE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  camera: (
    <svg className="w-10 h-10 text-[#2E86DE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  shield: (
    <svg className="w-10 h-10 text-[#2E86DE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  eye: (
    <svg className="w-10 h-10 text-[#2E86DE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
};

export default function Benefits() {
  return (
    <SectionWrapper id="beneficios" className="bg-[#111111] border-y border-[rgba(255,255,255,0.05)]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {siteConfig.benefits.map((benefit, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#0D1B2A]/50 border border-[rgba(46,134,222,0.1)] hover:border-[#2E86DE]/30 hover:bg-[#0D1B2A]/80 transition-all duration-300 group"
          >
            <div className="w-20 h-20 rounded-2xl bg-[#111111] flex items-center justify-center mb-6 shadow-xl border border-[rgba(255,255,255,0.03)] group-hover:scale-110 transition-transform duration-300">
              {icons[benefit.icon as keyof typeof icons] || icons.shield}
            </div>
            <h3 className="text-xl font-heading font-bold mb-3 text-white">
              {benefit.title}
            </h3>
            <p className="text-[#D9D9D9] text-sm leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
