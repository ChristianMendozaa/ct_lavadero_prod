"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionWrapper } from "./ui/SectionWrapper";

const images = [
  { src: "/images/hero-bg.jpg", alt: "Vehículo con presentación impecable (Hero)", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/espuma.jpg", alt: "Lavado exterior avanzado con espuma" },
  { src: "/images/motor.jpg", alt: "Limpieza química de motor" },
  { src: "/images/chasis.jpg", alt: "Lavado detallado de chasis inferior" },
  { src: "/images/interior.jpg", alt: "Detalle completo de interiores y habitáculo" },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <SectionWrapper id="galeria" className="bg-[#111111]">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-xl">
          <h2 className="text-sm font-medium text-[#2E86DE] tracking-widest uppercase mb-4">
            Evidencia Visual
          </h2>
          <h3 className="font-heading font-black text-4xl md:text-5xl tracking-tighter text-white">
            Resultados que se ven y se sienten
          </h3>
        </div>
        <p className="text-[#D9D9D9] max-w-sm md:text-right">
          Documentamos la calidad de nuestro servicio para que tengas total confianza en el resultado.
        </p>
      </div>

      {/* Bento Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`relative rounded-2xl overflow-hidden group cursor-pointer border border-[#2E86DE]/10 hover:border-[#2E86DE]/50 transition-colors ${
              img.span || ""
            }`}
            onClick={() => setSelectedImg(img.src)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,27,42,0.8)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {img.alt}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            onClick={() => setSelectedImg(null)}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={selectedImg}
              alt="Vista ampliada"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
