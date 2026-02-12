"use client";

import { Separator } from "@/components/ui/separator";
import {
  Send,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type FooterLink = {
  name: string;
  href?: string;
};

const footerLinks: { title: string; links: FooterLink[] }[] = [
  {
    title: "Layanan",
    links: [
      { name: "Infrastruktur" },
      { name: "Sistem Informasi" },
      { name: "IT Support" },
      { name: "Website Kampus" },
    ],
  },
  {
    title: "Akademik",
    links: [
      { name: "SIAKAD", href: "https://siakad.umb.ac.id/umb/" },
      { name: "SIMARU", href: "https://simaru.umb.ac.id/" },
      { name: "SIKAMU", href: "https://sikamu.umb.ac.id/" },
      { name: "SISENJA", href: "https://presensi.umb.ac.id/login" },
      { name: "SIKAWAN", href: "https://sikawan.umb.ac.id/" },
    ],
  },
];

const Footer = () => {
  return (
    <footer id="footer" className="w-full bg-slate-50 dark:bg-[#0d0d0d] text-slate-600 dark:text-slate-400 pt-16 pb-8 border-t border-slate-200 dark:border-white/5 font-geist relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* WhatsApp Urgent Section */}
        {/* WhatsApp Urgent Section */}
        <div className="bg-white dark:bg-black rounded-3xl p-6 lg:p-12 mb-16 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 border border-slate-200 dark:border-white/10 relative overflow-hidden shadow-sm dark:shadow-2xl">

          <div className="flex flex-col lg:flex-row items-center gap-8 z-10">
            {/* WhatsApp Icon with Glow */}
            <div className="relative">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#25D366]/10 rounded-full flex items-center justify-center border border-[#25D366]/20 shadow-[0_0_20px_2px_rgba(37,211,102,0.15)] dark:shadow-[0_0_20px_2px_rgba(37,211,102,0.3)]">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                </svg>
              </div>
              <span className="absolute bottom-1 right-1 w-4 h-4 bg-[#25D366] rounded-full border-2 border-white dark:border-[#1a1a1a] animate-pulse"></span>
            </div>
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-xl lg:text-3xl font-bold tracking-tight mb-2 text-slate-900 dark:text-white">Butuh Bantuan Mendesak?</h2>
              <p className="text-black dark:text-white text-base lg:text-lg font-medium max-w-md">
                Tim support IT UPTTIK aktif dan siap membantu kendala teknis Anda secara real-time.
              </p>
            </div>
          </div>
          {/* Action Button */}
          <div className="z-10 w-full lg:w-auto">
            <Link
              href="https://wa.me/6285199416317"
              target="_blank"
              className="inline-flex items-center justify-center w-full lg:w-auto px-4 py-3.5 lg:px-8 lg:py-4 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white dark:hover:bg-[#25D366] dark:hover:border-[#25D366] dark:hover:text-black font-semibold rounded-full transition-all duration-300 group whitespace-nowrap"
            >
              <span className="mr-2 text-sm sm:text-base">Chat WhatsApp Sekarang</span>
              <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Secondary Links and Info */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 mb-16">
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 flex items-center justify-center">
                <Image src="/favicon.ico" alt="Logo" width={40} height={40} className="h-10 w-10" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">UPTTIK <span className="text-primary">UMB</span></span>
            </div>
            <p className="text-black dark:text-white text-sm leading-relaxed">
              Membangun masa depan digital Universitas Muhammadiyah Bengkulu melalui teknologi informasi yang andal dan inovatif.
            </p>
          </div>

          {[footerLinks[0], footerLinks[1]].map((section) => (
            <div key={section.title} className="col-span-1">
              <h4 className="text-slate-900 dark:text-white font-semibold mb-6 uppercase tracking-widest text-xs font-geist">{section.title}</h4>
              <ul className="space-y-3 text-black dark:text-white text-sm">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.href ? (
                      <Link href={link.href} className="hover:text-primary transition-colors">
                        {link.name}
                      </Link>
                    ) : (
                      <span className="text-black dark:text-white cursor-default">
                        {link.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-slate-900 dark:text-white font-semibold mb-6 uppercase tracking-widest text-xs font-geist">Kontak</h4>
            <div className="space-y-4 text-sm text-black dark:text-white">
              <div className="flex gap-4">
                <MapPin className="text-primary w-5 h-5 flex-shrink-0" />
                <span>Jl. Bali, Komplek Universitas Muhammadiyah Gedung D, Kampung Bali, Bengkulu</span>
              </div>
              <div className="flex gap-4">
                <Mail className="text-primary w-5 h-5 flex-shrink-0" />
                <span>upttik.umb@gmail.com</span>
              </div>
              <div className="flex gap-4">
                <Phone className="text-primary w-5 h-5 flex-shrink-0" />
                <span>+62 851-9941-6317</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-200 dark:bg-white/5 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-xs text-black dark:text-white uppercase tracking-wider font-medium text-center">
          <p>© {new Date().getFullYear()} UPTTIK Universitas Muhammadiyah Bengkulu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
