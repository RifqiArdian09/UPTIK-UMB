"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Marquee from "@/components/ui/marquee";
import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Habib",
    designation: "Business Manager",
    company: "PT. Teknologi Indonesia",
    testimonial:
      "Infrastruktur jaringan yang disediakan UPT TIK sangat stabil dan reliable. Kami tidak lagi khawatir tentang gangguan koneksi saat melakukan kegiatan penting. Keamanan data kami pun terjamin!",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Rifqi Ardian",
    designation: "Mahasiswa",
    company: "Universitas Muhammadiyah Bengkulu",
    testimonial:
      "UPT TIK selalu responsif terhadap kebutuhan kami, terutama dalam adaptasi teknologi baru. Tim dukungan teknisnya sangat cepat dan kompeten dalam menyelesaikan masalah. Pelayanan terbaik!",
    avatar: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    id: 3,
    name: "Salman Abdul Aziz",
    designation: "Karyawan",
    company: "Universitas Muhammadiyah Bengkulu",
    testimonial:
      "Layanan Analisis Big Data UPT TIK telah membantu kami mendapatkan wawasan akurat untuk pengambilan keputusan strategis kampus. Kinerja sistem informasi akademik pun kini jauh lebih efisien.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Ariel",
    designation: "Dosen",
    company: "Universitas Muhammadiyah Bengkulu",
    testimonial:
      "Komitmen UPT TIK terhadap keandalan dan inovasi teknologi benar-benar terbukti. Sistem yang mereka bangun sangat mendukung transformasi digital di lingkungan kampus kami.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 5,
    name: "Rafy",
    designation: "Siswa",
    company: "SMA Muhammadiyah 1 Bengkulu",
    testimonial:
      "Komitmen UPT TIK terhadap keandalan dan inovasi teknologi benar-benar terbukti. Sistem yang mereka bangun sangat mendukung transformasi digital di lingkungan kampus kami.",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="relative py-24 overflow-hidden bg-muted/30">
    <div className="container mx-auto px-6 mb-16 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
          Apa Kata <span className="text-primary italic">Mereka?</span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
          Kepercayaan dan kepuasan Anda adalah prioritas utama kami. Berikut adalah pengalaman dari mereka yang telah menggunakan layanan kami.
        </p>
      </motion.div>
    </div>

    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

      <Marquee pauseOnHover className="[--duration:40s] py-4">
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} {...t} />
        ))}
      </Marquee>

      <Marquee pauseOnHover reverse className="[--duration:45s] py-4">
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} {...t} />
        ))}
      </Marquee>
    </div>
  </section>
);

interface TestimonialProps {
  name: string;
  designation: string;
  testimonial: string;
  avatar: string;
}

const TestimonialCard = ({ name, designation, testimonial, avatar }: TestimonialProps) => (
  <div className="mx-6 w-[400px] group">
    <div className="relative h-full bg-card/60 backdrop-blur-md border border-border/50 p-8 rounded-[2rem] transition-all hover:bg-card hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5">
      <div className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
        <Quote size={40} className="fill-current" />
      </div>

      <div className="flex items-center gap-4 mb-6">
        <Avatar className="h-14 w-14 border-2 border-primary/20 p-0.5">
          <AvatarImage src={avatar} className="rounded-full object-cover" />
          <AvatarFallback className="bg-primary text-primary-foreground font-bold">
            {name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-bold text-lg leading-none mb-1 group-hover:text-primary transition-colors">
            {name}
          </p>
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
            {designation}
          </p>
        </div>
      </div>

      <p className="text-muted-foreground leading-relaxed italic">
        &quot;{testimonial}&quot;
      </p>

      <div className="mt-8 flex gap-1">
        {[1, 2, 3, 4, 5].map((s) => (
          <svg key={s} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  </div>
);

export default Testimonials;
