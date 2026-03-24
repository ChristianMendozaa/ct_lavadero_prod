import { SectionWrapper } from "./ui/SectionWrapper";
import { siteConfig } from "@/lib/site-config";
import Image from "next/image";

export default function Trust() {
  return (
    <SectionWrapper id="confianza" className="bg-[#0D1B2A] border-y border-[rgba(255,255,255,0.05)] overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2E86DE] rounded-full opacity-5 blur-[150px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.1)]">
             <Image
                src="/images/interior.jpg"
                alt="Detalle de interiores profesional"
                fill
                className="object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-[#0D1B2A]/80 to-transparent" />
             
             {/* Badge Overlay */}
             <div className="absolute bottom-6 left-6 glass-card p-4 rounded-xl max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-2 h-2 rounded-full bg-[#2E86DE] animate-pulse" />
                   <span className="text-white font-bold uppercase tracking-wider text-sm">Tratamiento Premium</span>
                </div>
                <p className="text-[#D9D9D9] text-xs">Cuidamos los materiales originales de tu vehículo para prolongar su vida útil.</p>
             </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-sm font-medium text-[#2E86DE] tracking-widest uppercase mb-4">
            Por qué elegirnos
          </h2>
          <h3 className="font-heading font-black text-4xl md:text-5xl tracking-tighter mb-8 text-white">
            Un enfoque distinto en limpieza automotriz
          </h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1B3A5B] flex items-center justify-center border border-[#2E86DE]/30">
                <svg className="w-6 h-6 text-[#2E86DE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Realidad sobre promesas</h4>
                <p className="text-[#D9D9D9] leading-relaxed">No usamos fotos de stock ni hacemos promesas vacías. Lo que ves en nuestra galería es exactamente el nivel de detalle que aplicaremos a tu vehículo.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1B3A5B] flex items-center justify-center border border-[#2E86DE]/30">
                <svg className="w-6 h-6 text-[#2E86DE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Contacto Directo</h4>
                <p className="text-[#D9D9D9] leading-relaxed">Hablás directamente con nosotros mediante WhatsApp. Resolvemos tus dudas de inmediato y coordinamos el servicio sin intermediarios.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1B3A5B] flex items-center justify-center border border-[#2E86DE]/30">
                <svg className="w-6 h-6 text-[#2E86DE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Instalaciones Preparadas</h4>
                <p className="text-[#D9D9D9] leading-relaxed">Contamos con un espacio físico ({siteConfig.zone}) optimizado para realizar todos los servicios confirmados con las herramientas adecuadas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
