"use client";

import {
  Cable,
  HardDrive,
  Server,
  Globe,
  Headset,
} from "lucide-react";
import { motion, Variants } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const layanan = [
  {
    title: "Infrastruktur & Jaringan",
    subtitle: "Jaringan Kuat, Hasil Maksimal",
    description:
      "Pengelolaan dan pengembangan infrastruktur jaringan kampus untuk memastikan konektivitas stabil, cepat, dan aman di seluruh lingkungan Universitas Muhammadiyah Bengkulu.",
    icon: Cable,
    image: "/layanan1.jpeg",
  },
  {
    title: "Servis & Maintenance Perangkat",
    subtitle: "Servis Profesional dan Terpercaya",
    description:
      "Penanganan perangkat keras (hardware) and perangkat lunak (software) dilakukan secara teliti dan profesional untuk menjaga performa optimal perangkat kerja civitas akademika.",
    icon: HardDrive,
    image: "/layanan2.png",
  },
  {
    title: "Dukungan Teknis & IT Support",
    subtitle: "Siap Siaga Menghadapi Tantangan Teknologi",
    description:
      "Tim UPTTIK UMB selalu siap memberikan dukungan teknis, troubleshooting, serta solusi atas berbagai kendala teknologi informasi secara cepat dan tepat.",
    icon: Headset,
    image: "/layanan3.jpeg",
  },
  {
    title: "Konfigurasi Server & Data Center",
    subtitle: "Pengelolaan Server dan Network Device",
    description:
      "Instalasi, konfigurasi, dan monitoring server maupun perangkat jaringan di data center/rack guna menjamin keamanan dan stabilitas sistem informasi kampus.",
    icon: Server,
    image: "/layanan4.jpeg",
  },
  {
    title: "Pengembangan Website & Sistem Informasi",
    subtitle: "Solusi Digital untuk Institusi dan Unit Kerja",
    description:
      "Pengembangan website resmi, sistem informasi akademik, serta aplikasi berbasis web sesuai kebutuhan fakultas, program studi, dan unit kerja di lingkungan UMB.",
    icon: Globe,
    image: "/layanan5.png",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
};

const Layanan = () => {
  return (
    <section
      id="layanan"
      className="relative flex flex-col items-center justify-center py-24 xs:py-32 px-6 overflow-hidden bg-muted/50"
    >
      {/* Technical Frame Decorations - Visible on all devices */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Divider */}
        <div className="absolute top-0 left-0 w-full h-8 md:h-12">
          <svg className="w-full h-full preserve-3d" viewBox="0 0 1440 48" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="scale(1, -1) translate(0, -48)">
              <path d="M0 48H1440V24L1400 0H1200L1176 24H264L240 0H40L0 24V48Z" fill="currentColor" className="text-background" />
              <path d="M240 0L264 24H1176L1200 0" stroke="currentColor" strokeWidth="1" className="text-primary/10" />
            </g>
          </svg>
        </div>

        {/* Side Accents - Only on larger screens to avoid clutter on mobile */}
        <div className="hidden sm:block absolute top-8 md:top-12 bottom-8 md:bottom-12 left-0 w-[50px] border-l border-primary/10 h-full" />
        <div className="absolute top-8 md:top-12 bottom-8 md:bottom-12 right-0 w-[50px] border-r border-primary/10 h-full sm:hidden" /> {/* Small right border for mobile if needed, but usually looks cleaner without on very small screens */}
        <div className="hidden sm:block absolute top-8 md:top-12 bottom-8 md:bottom-12 right-0 w-[50px] border-r border-primary/10 h-full" />

        {/* Bottom Divider */}
        <div className="absolute bottom-0 left-0 w-full h-8 md:h-12">
          <svg className="w-full h-full preserve-3d" viewBox="0 0 1440 48" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1440V24L1400 0H1200L1176 24H264L240 0H40L0 24V48Z" fill="currentColor" className="text-background" />
            <path d="M240 0L264 24H1176L1200 0" stroke="currentColor" strokeWidth="1" className="text-primary/10" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary"
          >
            Our Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-center tracking-tight font-heading"
          >
            Layanan Unggulan Kami
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-center max-w-2xl text-muted-foreground text-lg md:text-xl"
          >
            Menyediakan solusi teknologi yang andal dan inovatif untuk memajukan sistem digital di lingkungan kampus.
          </motion.p>
        </div>

        {/* First Row - 3 Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4"
        >
          {layanan.slice(0, 3).map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className={cn(
                  "group relative aspect-[4/5] sm:aspect-video lg:aspect-square xl:aspect-[3/4] overflow-hidden bg-card border border-primary/5 cursor-pointer shadow-lg",
                  isEven
                    ? "rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl"
                    : "rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl"
                )}
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <span className="text-primary/20 font-bold text-4xl">UMB</span>
                  </div>
                )}

                {/* Text Content Overlay */}
                <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20">
                  {item.icon && (
                    <div className="mb-4">
                      <div className={cn(
                        "w-12 h-12 flex items-center justify-center bg-background border-2 border-primary/30 shadow-xl",
                        isEven ? "rounded-tr-2xl rounded-bl-2xl" : "rounded-tl-2xl rounded-br-2xl"
                      )}>
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  )}
                  <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-2 font-heading uppercase italic tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-semibold">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Second Row - 2 Cards Centered */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {layanan.slice(3).map((item, idx) => {
            // idx for slice(3) starts at 0, which is index 3 in original array
            // We want it to alternate correctly with the previous row
            const isEven = (idx + 1) % 2 === 0;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className={cn(
                  "group relative aspect-[4/5] sm:aspect-video xl:aspect-video overflow-hidden bg-card border border-primary/5 cursor-pointer shadow-lg",
                  isEven
                    ? "rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl"
                    : "rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl"
                )}
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <span className="text-primary/20 font-bold text-4xl">UMB</span>
                  </div>
                )}

                {/* Text Content Overlay */}
                <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20">
                  {item.icon && (
                    <div className="mb-4">
                      <div className={cn(
                        "w-12 h-12 flex items-center justify-center bg-background border-2 border-primary/30 shadow-xl",
                        isEven ? "rounded-tr-2xl rounded-bl-2xl" : "rounded-tl-2xl rounded-br-2xl"
                      )}>
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  )}
                  <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-2 font-heading uppercase italic tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-semibold">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

    </section>
  );
};

export default Layanan;
