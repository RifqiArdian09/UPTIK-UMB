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
    image: "/layanan5.jpeg",
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
  hidden: { opacity: 0, y: 30 },
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
      className="relative flex flex-col items-center justify-center py-24 xs:py-32 px-6 overflow-hidden bg-muted/30"
    >
      
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
            className="text-4xl md:text-5xl lg:text-6xl font-black text-center tracking-tight"
          >
            Layanan Unggulan Kami
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
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
          {layanan.slice(0, 3).map((item) => {
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="group relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-muted cursor-pointer"
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
                <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  {item.icon && (
                    <div className="mb-3">
                      <item.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  )}
                  <h3 className="text-lg md:text-xl font-bold text-white leading-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[11px] md:text-sm text-white/90 leading-relaxed line-clamp-4 md:line-clamp-none">
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
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:max-w-4xl mx-auto"
        >
          {layanan.slice(3).map((item) => {
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="group relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-muted cursor-pointer"
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
                <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  {item.icon && (
                    <div className="mb-3">
                      <item.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  )}
                  <h3 className="text-lg md:text-xl font-bold text-white leading-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[11px] md:text-sm text-white/90 leading-relaxed line-clamp-4 md:line-clamp-none">
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
