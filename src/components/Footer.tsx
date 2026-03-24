import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] pt-40 pb-12 border-t border-[#111111]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-1">
            <Link href="#inicio" className="flex items-center gap-2 mb-6">
              <span className="font-heading font-black text-2xl tracking-tighter text-white">
                VICTORIA<span className="text-[#2E86DE]">.</span>
              </span>
            </Link>
            <p className="text-[#D9D9D9] text-sm leading-relaxed mb-6">
              {siteConfig.tagline}. Servicio profesional en {siteConfig.zone}.
            </p>
            {/* Social Links placeholder */}
            <div className="flex gap-4">
              {siteConfig.instagram && !siteConfig.instagram.includes("[") && (
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#2E86DE] transition-colors" aria-label="Instagram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white tracking-wide">Servicios</h4>
            <ul className="flex flex-col gap-3">
              {siteConfig.services.slice(0, 4).map(service => (
                <li key={service.id}>
                  <Link href="#servicios" className="text-sm text-[#D9D9D9] hover:text-[#2E86DE] transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white tracking-wide">Navegación</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#inicio" className="text-sm text-[#D9D9D9] hover:text-[#2E86DE] transition-colors">Inicio</Link></li>
              <li><Link href="#proceso" className="text-sm text-[#D9D9D9] hover:text-[#2E86DE] transition-colors">Cómo Trabajamos</Link></li>
              <li><Link href="#galeria" className="text-sm text-[#D9D9D9] hover:text-[#2E86DE] transition-colors">Galería</Link></li>
              <li><Link href="#faq" className="text-sm text-[#D9D9D9] hover:text-[#2E86DE] transition-colors">Preguntas Frecuentes</Link></li>
            </ul>
          </div>

          {/* Contact Fast Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white tracking-wide">Contacto</h4>
            <ul className="flex flex-col gap-4 text-sm text-[#D9D9D9]">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2E86DE] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  {siteConfig.address.includes("[") ? "Dirección" : siteConfig.address}<br/>
                  {siteConfig.zone}, {siteConfig.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#2E86DE] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{siteConfig.whatsapp.includes("[") ? "WhatsApp" : siteConfig.whatsapp}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2E86DE] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{siteConfig.hours.includes("[") ? "Horarios" : siteConfig.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.05)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#D9D9D9]/70 text-center md:text-left">
            {siteConfig.footer.copyright}
          </p>
          <div className="flex gap-4 text-xs text-[#D9D9D9]/70">
            <span className="hover:text-white transition-colors cursor-pointer">Privacidad</span>
            <span className="hover:text-white transition-colors cursor-pointer">Términos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
