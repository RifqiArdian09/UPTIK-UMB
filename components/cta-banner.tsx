"use client";

import { Send, Search } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatedGridPattern } from "./ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function CTABanner() {
  return (
    <div className="px-6 py-20 overflow-hidden">
      {/* 
        Kami menggunakan 'dark' secara permanen di sini agar Banner CTA selalu tampil 
        sebagai elemen kontras yang premium (gelap) baik di tema terang maupun gelap.
      */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative overflow-hidden w-full dark bg-foreground text-background max-w-7xl mx-auto rounded-[3rem] py-16 md:py-24 px-8 md:px-20 shadow-2xl"
      >
        <AnimatedGridPattern
          numSquares={40}
          maxOpacity={0.08}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_right,white,rgba(255,255,255,0.4),transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 text-white"
          )}
        />
        <AnimatedGridPattern
          numSquares={40}
          maxOpacity={0.08}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_top_left,white,rgba(255,255,255,0.4),transparent)]",
            "inset-x-0 inset-y-0 h-[200%] skew-y-12 text-white"
          )}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10"
            >
              Transformasi Digital Terpadu
            </motion.span>
            <h3 className="text-3xl md:text-5xl xl:text-6xl font-black leading-[1.1] tracking-tight mb-8">
              Siap Bertransformasi <br />
              <span className="italic text-primary">Bersama UPTTIK?</span>
            </h3>
            <p className="text-lg md:text-xl text-background/60 leading-relaxed max-w-xl mb-12">
              Optimalkan setiap aspek operasional dan akademis Anda dengan dukungan infrastruktur TI serta solusi sistem informasi kelas dunia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button size="xl" className="rounded-2xl group shadow-xl shadow-primary/25 bg-primary text-primary-foreground hover:scale-105 transition-transform">
                Konsultasi Sekarang <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
              <Button size="xl" variant="outline" className="rounded-2xl border-background/20 hover:bg-background/10 text-background">
                Lihat Katalog Layanan <Search className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"
            />
            <div className="relative z-10 p-10 xl:p-12 bg-background/5 border border-background/10 rounded-[2.5rem] backdrop-blur-xl">
              <div className="space-y-6">
                {[
                  { label: "Uptime Server", value: "99.9%" },
                  { label: "Keamanan Sistem", value: "Enterprise" },
                  { label: "Dukungan Teknis", value: "24/7" },
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-background/10 pb-4 last:border-0 last:pb-0">
                    <span className="text-background/60 text-sm xl:text-base font-medium whitespace-nowrap mr-4">{stat.label}</span>
                    <span className="text-lg xl:text-xl font-bold italic text-primary">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
