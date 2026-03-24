import { SectionWrapper } from "./ui/SectionWrapper";
import { siteConfig } from "@/lib/site-config";

export default function Process() {
  return (
    <SectionWrapper id="proceso" className="bg-[#0D1B2A] border-y border-[rgba(46,134,222,0.1)]">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-sm font-medium text-[#2E86DE] tracking-widest uppercase mb-4">
          Cómo Trabajamos
        </h2>
        <h3 className="font-heading font-black text-4xl md:text-5xl tracking-tighter mb-6 text-white">
          Proceso claro, resultados impecables
        </h3>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Connecting line for desktop */}
        <div className="hidden md:block absolute top-[45px] left-10 right-10 h-0.5 bg-gradient-to-r from-transparent via-[#2E86DE]/50 to-transparent z-0" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
          {siteConfig.process.map((item, index) => (
            <div key={item.step} className="flex flex-col items-center text-center group">
              {/* Number Circle */}
              <div className="w-24 h-24 rounded-full bg-[#111111] border-2 border-[#1B3A5B] flex items-center justify-center mb-6 shadow-xl relative group-hover:border-[#2E86DE] group-hover:shadow-[0_0_30px_rgba(46,134,222,0.3)] transition-all duration-300">
                <span className="font-heading font-black text-4xl text-[#2E86DE] group-hover:text-white transition-colors duration-300">
                  {item.step}
                </span>
                {/* Ping animation effect */}
                <div className="absolute inset-0 rounded-full border border-[#2E86DE] opacity-0 group-hover:animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]" />
              </div>

              {/* Content */}
              <h4 className="text-xl font-heading font-bold mb-3 text-white">
                {item.title}
              </h4>
              <p className="text-[#D9D9D9] text-sm leading-relaxed max-w-xs mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
