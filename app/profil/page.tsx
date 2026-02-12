"use client";

import { motion } from "motion/react";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Target, Landmark, UserCircle } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProfilePage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="pt-16 pb-20">
                {/* Hero Section Profil */}
                <section className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/team.jpeg"
                            alt="UMB Background"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/50" />
                        {/* Gradient Fade at Bottom */}
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto text-center px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Badge variant="outline" className="rounded-full px-6 py-2 border-white/20 bg-white/10 text-white mb-6 backdrop-blur-sm">
                                PROFIL INSTITUSI
                            </Badge>
                            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8 text-white drop-shadow-md">
                                Mengenal <span className="text-white italic">UPTTIK UMB</span>
                            </h1>
                            <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed font-medium drop-shadow-sm">
                                Pusat keunggulan teknologi informasi yang berdedikasi mendukung transformasi digital di lingkungan Universitas Muhammadiyah Bengkulu.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Tentang Kami */}
                <section className="py-20 px-6 bg-muted/30">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 mb-4">
                                    <Landmark className="h-6 w-6" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Tentang Kami</h2>
                                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed text-justify">
                                    <p>
                                        Unit Pelaksana Teknis Teknologi Informasi dan Komunikasi (UPTTIK) merupakan unit kerja strategis di Universitas Muhammadiyah Bengkulu yang bertanggung jawab penuh atas tata kelola digital kampus.
                                    </p>
                                    <p>
                                        Kami berkomitmen untuk menyediakan infrastruktur digital yang andal serta sistem informasi yang terintegrasi demi mewujudkan pelayanan prima bagi seluruh civitas akademika, sejalan dengan visi universitas dalam mengembangkan IPTEKS.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative rounded-[2.5rem] overflow-hidden border-8 border-background shadow-2xl skew-y-3"
                            >
                                <Image src="/visi.png" alt="Tentang UPTTIK" width={800} height={450} className="w-full h-full object-cover aspect-video" />
                                <div className="absolute inset-0 bg-primary/10" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Visi & Misi Vertical Storytelling */}
                <header className="py-20 text-center bg-background">
                    <div className="max-w-3xl mx-auto px-6">
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Identity & Purpose</span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                            Mendefinisikan Masa Depan Digital Kampus Melalui Visi yang Terarah.
                        </h1>
                    </div>
                </header>

                <section className="relative w-full py-32 overflow-hidden bg-gradient-to-br from-muted/50 to-primary/5 dark:from-background dark:to-primary/10">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
                    </div>
                    <div className="max-w-5xl mx-auto px-8 relative z-10 text-center">
                        <div className="mb-12 inline-flex items-center justify-center w-16 h-16 bg-background rounded-full shadow-lg">
                            <Target className="text-primary h-8 w-8" />
                        </div>
                        <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-8">Visi Kami</h2>
                        <blockquote className="text-3xl md:text-4xl font-medium text-foreground italic leading-snug">
                            &quot;Menjadi unit pelayanan teknologi informasi yang profesional dan inovatif dalam pengembangan IPTEKS, berorientasi kewirausahaan, serta menjunjung tinggi nilai-nilai keislaman dalam setiap layanan dan kontribusi.&quot;
                        </blockquote>
                    </div>
                </section>

                <section className="py-32 bg-background overflow-hidden">
                    <div className="max-w-7xl mx-auto px-8">
                        <div className="text-center mb-24">
                            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Misi Kami</h2>
                            <h3 className="text-3xl md:text-4xl font-extrabold text-foreground">Langkah Strategis Menuju Transformasi</h3>
                        </div>
                        <div className="space-y-32">
                            {/* Misi 01 */}
                            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                                <div className="w-full md:w-1/2 relative group">
                                    <div className="absolute -inset-4 bg-primary/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
                                    <Image
                                        alt="Layanan Profesional"
                                        className="relative rounded-xl shadow-2xl w-full h-[400px] object-cover"
                                        src="/tentanghome.jpeg"
                                        width={800}
                                        height={400}
                                    />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <span className="text-primary font-black text-6xl opacity-20 block mb-4">01</span>
                                    <h4 className="text-2xl font-bold text-foreground mb-6">Layanan Profesional & Andal</h4>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        Menyediakan layanan teknologi informasi yang andal, cepat, dan profesional untuk mendukung aktivitas akademik dan administrasi universitas.
                                    </p>
                                    <div className="mt-8 flex items-center gap-3 text-primary font-bold">
                                        <span className="w-8 h-px bg-primary"></span>
                                        <span className="text-sm uppercase tracking-widest">Service Excellence</span>
                                    </div>
                                </div>
                            </div>

                            {/* Misi 02 */}
                            <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
                                <div className="w-full md:w-1/2 relative group">
                                    <div className="absolute -inset-4 bg-muted rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
                                    <Image
                                        alt="Kemandirian Institusi"
                                        className="relative rounded-xl shadow-2xl w-full h-[400px] object-cover"
                                        src="/misi2.jpeg"
                                        width={800}
                                        height={400}
                                    />
                                </div>
                                <div className="w-full md:w-1/2 text-right md:text-left">
                                    <span className="text-primary font-black text-6xl opacity-20 block mb-4">02</span>
                                    <h4 className="text-2xl font-bold text-foreground mb-6">Mendukung Kemandirian Institusi</h4>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        Melalui pemanfaatan teknologi informasi yang optimal untuk mendukung kemandirian institusi.
                                    </p>
                                    <div className="mt-8 flex items-center justify-end md:justify-start gap-3 text-primary font-bold">
                                        <span className="w-8 h-px bg-primary"></span>
                                        <span className="text-sm uppercase tracking-widest">Digital Independence</span>
                                    </div>
                                </div>
                            </div>

                            {/* Misi 03 */}
                            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                                <div className="w-full md:w-1/2 relative group">
                                    <div className="absolute -inset-4 bg-primary/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
                                    <Image
                                        alt="Nilai Keislaman"
                                        className="relative rounded-xl shadow-2xl w-full h-[400px] object-cover"
                                        src="/misi3.png"
                                        width={800}
                                        height={400}
                                    />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <span className="text-primary font-black text-6xl opacity-20 block mb-4">03</span>
                                    <h4 className="text-2xl font-bold text-foreground mb-6">Integritas & Nilai Islam</h4>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        Menanamkan nilai-nilai Islam dalam pengelolaan teknologi informasi, dengan menjunjung tinggi integritas, amanah, dan tanggung jawab sosial.
                                    </p>
                                    <div className="mt-8 flex items-center gap-3 text-primary font-bold">
                                        <span className="w-8 h-px bg-primary"></span>
                                        <span className="text-sm uppercase tracking-widest">Islamic Values</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-20 px-6 relative overflow-hidden bg-background">

                    <div className="max-w-7xl mx-auto relative z-10">
                        {/* Header with Logo */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight uppercase">
                                Struktur Organisasi
                            </h2>
                        </motion.div>

                        {/* Organizational Chart */}
                        <div className="flex flex-col items-center gap-0">
                            {/* Level 1: Kepala UPTTIK */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="mb-0"
                            >
                                <OrgCard
                                    name="Dedy Abdullah, M. Eng"
                                    role="Ka. UPT TIK"
                                />
                            </motion.div>

                            {/* Vertical Line */}
                            <div className="w-1 h-12 md:h-16 bg-linear-to-b from-primary to-border" />

                            {/* Horizontal Line Container */}
                            <div className="relative w-full max-w-5xl px-4">
                                {/* Horizontal connector */}
                                <div className="absolute top-0 left-[24.5%] right-[24.5%] h-1 bg-border" />

                                {/* T-junction lines */}
                                <div className="absolute top-0 left-[24.5%] w-1 h-12 md:h-16 bg-border" />
                                <div className="absolute top-0 right-[24.5%] w-1 h-12 md:h-16 bg-border" />

                                {/* Level 2: Kepala Bidang */}
                                <div className="grid grid-cols-2 gap-4 md:gap-16 pt-12 md:pt-16">
                                    {/* Bidang Software */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="flex flex-col items-center"
                                    >
                                        <OrgCard
                                            name="M. Imanullah, S.Kom., M.T."
                                            role="Kabid. Software"
                                        />

                                        {/* Vertical Line */}
                                        <div className="w-1 h-10 md:h-12 bg-border" />

                                        {/* Horizontal Line for Staff */}
                                        <div className="relative w-full max-w-xl">
                                            <div className="absolute top-0 left-[24.5%] right-[24.5%] h-1 bg-border" />
                                            <div className="absolute top-0 left-[24.5%] w-1 h-10 md:h-12 bg-border" />
                                            <div className="absolute top-0 right-[24.5%] w-1 h-10 md:h-12 bg-border" />

                                            {/* Staff Software */}
                                            <div className="grid grid-cols-2 gap-2 md:gap-4 pt-10 md:pt-12">
                                                <OrgCard
                                                    name="Indra Novemri"
                                                    role="Teknisi Software"
                                                    isStaff
                                                />
                                                <OrgCard
                                                    name="M. Aldy Alfarish"
                                                    role="Teknisi Software"
                                                    isStaff
                                                />
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Bidang Jaringan */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="flex flex-col items-center"
                                    >
                                        <OrgCard
                                            name="N. Ario Seno, S. Kom"
                                            role="Kabid. Jaringan"
                                        />

                                        {/* Vertical Line */}
                                        <div className="w-1 h-10 md:h-12 bg-border" />

                                        {/* Staff Jaringan */}
                                        <div className="w-full max-w-[160px] md:max-w-xs pt-0">
                                            <OrgCard
                                                name="Abi Julian"
                                                role="Teknisi Jaringan"
                                                isStaff
                                            />
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};


const OrgCard = ({ name, role, isStaff }: { name: string, role: string, isStaff?: boolean }) => (
    <div className={cn(
        "bg-muted/60 dark:bg-black rounded-xl md:rounded-[2rem] shadow-lg md:shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-transparent dark:border-white/5 w-full md:min-w-[220px]",
        isStaff ? "px-2 py-2 md:px-6 md:py-4" : "px-3 py-3 md:px-8 md:py-6"
    )}>
        <div className="flex items-center gap-4">


            {/* Name and Role */}
            <div className="text-center flex-1 min-w-0">
                <h4 className={cn(
                    "font-black text-gray-900 dark:text-white leading-tight mb-0.5 md:mb-1",
                    isStaff ? "text-[7px] md:text-sm" : "text-[9px] md:text-lg"
                )}>
                    {name}
                </h4>
                <p className={cn(
                    "text-gray-600 dark:text-gray-300 font-medium",
                    isStaff ? "text-[6px] md:text-xs" : "text-[8px] md:text-sm"
                )}>
                    {role}
                </p>
            </div>
        </div>
    </div>
);

export default ProfilePage;


