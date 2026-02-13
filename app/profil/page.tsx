"use client";

import { motion } from "motion/react";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Target, Landmark, Compass, Users2, Building2 } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProfilePage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground grid-bg">
            <Navbar />
            <main id="tentang" className="pt-16 pb-20">
                {/* Hero Section */}
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
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto text-center px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Badge variant="outline" className="rounded-full px-6 py-2 border-white/20 bg-white/10 text-white mb-6 backdrop-blur-sm gap-2">
                                <Building2 className="h-4 w-4" />
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

                {/* Tentang Kami Section */}
                <section id="about" className="py-24 px-6 bg-background">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <div className="flex w-full justify-center lg:justify-start">
                                    <div className="relative inline-flex items-center justify-center">
                                        <div className="relative w-20 h-20 bg-background border-2 border-primary/30 rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-lg rounded-br-lg flex items-center justify-center shadow-xl">
                                            <Landmark className="h-10 w-10 text-primary" />
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center lg:text-left">
                                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground font-heading uppercase italic">Tentang Kami</h2>
                                </div>

                                {/* Mobile Image */}
                                <div className="lg:hidden relative group">
                                    <div className="relative z-10 rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl overflow-hidden border-2 border-primary/10 shadow-2xl">
                                        <Image
                                            src="/visi.png"
                                            alt="Tentang UPTTIK"
                                            width={800}
                                            height={450}
                                            className="w-full h-full object-cover aspect-video"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent z-10" />
                                        <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-white/20 rounded-tr-2xl pointer-events-none z-20"></div>
                                        <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-white/20 rounded-bl-2xl pointer-events-none z-20"></div>
                                    </div>
                                </div>

                                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed text-justify font-medium">
                                    <p>
                                        Unit Pelaksana Teknis Teknologi Informasi dan Komunikasi (UPTTIK) merupakan unit kerja strategis di Universitas Muhammadiyah Bengkulu yang bertanggung jawab penuh atas tata kelola digital kampus.
                                    </p>
                                    <p>
                                        Kami berkomitmen untuk menyediakan infrastruktur digital yang andal serta sistem informasi yang terintegrasi demi mewujudkan pelayanan prima bagi seluruh civitas akademika, sejalan dengan visi universitas dalam mengembangkan IPTEKS.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Desktop Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative group hidden lg:block"
                            >
                                <div className="relative z-10 rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-xl rounded-br-xl overflow-hidden border-2 border-primary/10 shadow-2xl">
                                    <Image
                                        src="/visi.png"
                                        alt="Tentang UPTTIK"
                                        width={800}
                                        height={450}
                                        className="w-full h-full object-cover aspect-video"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent z-10" />
                                    <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-white/20 rounded-tr-3xl pointer-events-none z-20"></div>
                                    <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-white/20 rounded-bl-3xl pointer-events-none z-20"></div>
                                </div>
                                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full border border-primary/20 animate-pulse z-0" />
                                <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl z-0" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Vision Header */}
                <header className="py-20 text-center">
                    <div className="max-w-3xl mx-auto px-6">
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Identity & Purpose</span>
                        <motion.h1
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight"
                        >
                            Mendefinisikan Masa Depan Digital Kampus Melalui Visi yang Terarah.
                        </motion.h1>
                    </div>
                </header>

                {/* Visi Section */}
                <section id="visi" className="relative w-full py-32 overflow-hidden bg-gradient-to-br from-muted/50 to-primary/5 dark:from-background dark:to-primary/10">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
                    </div>
                    <div className="max-w-5xl mx-auto px-8 relative z-10 text-center">
                        <div className="relative mb-12 inline-flex items-center justify-center">
                            <div className="relative w-20 h-20 bg-background border-2 border-primary/30 rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-lg rounded-bl-lg flex items-center justify-center shadow-xl">
                                <Target className="text-primary h-10 w-10" />
                            </div>
                        </div>
                        <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-8">Visi Kami</h2>
                        <motion.blockquote
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 1 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.03,
                                    },
                                },
                            }}
                            className="text-3xl md:text-4xl font-medium text-foreground italic leading-snug"
                        >
                            &quot;{"Menjadi unit pelayanan teknologi informasi yang profesional dan inovatif dalam pengembangan IPTEKS, berorientasi kewirausahaan, serta menjunjung tinggi nilai-nilai keislaman dalam setiap layanan dan kontribusi.".split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: { opacity: 1 }
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}&quot;
                        </motion.blockquote>
                    </div>
                </section>

                {/* Misi Section */}
                <section id="misi" className="py-32 overflow-visible bg-background relative">
                    <div className="max-w-7xl mx-auto px-8">
                        <div className="text-center mb-24">
                            <div className="relative mb-12 inline-flex items-center justify-center">
                                <div className="relative w-20 h-20 bg-background border-2 border-primary/30 rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-lg rounded-br-lg flex items-center justify-center shadow-xl">
                                    <Compass className="text-primary h-10 w-10" />
                                </div>
                            </div>
                            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4 font-heading">Misi Kami</h2>
                            <h3 className="text-3xl md:text-4xl font-extrabold text-foreground font-heading">Langkah Strategis Menuju Transformasi</h3>
                        </div>

                        <div className="space-y-32">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                className="flex flex-col md:flex-row items-center gap-12 lg:gap-24"
                            >
                                <div className="w-full md:w-1/2 relative group">
                                    <div className="absolute -inset-4 bg-primary/5 rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl"></div>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                    >
                                        <Image
                                            alt="Layanan Profesional"
                                            className="relative rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl shadow-2xl w-full aspect-video md:h-[400px] object-cover border-2 border-primary/10"
                                            src="/tentanghome.jpeg"
                                            width={800}
                                            height={400}
                                        />
                                    </motion.div>
                                    <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/20 rounded-tr-3xl pointer-events-none"></div>
                                    <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/20 rounded-bl-3xl pointer-events-none"></div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <span className="text-primary font-black text-6xl opacity-20 block mb-4">01</span>
                                    <h4 className="text-2xl font-bold text-foreground mb-6 font-heading">Layanan Profesional & Andal</h4>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        Menyediakan layanan teknologi informasi yang andal, cepat, dan profesional untuk mendukung aktivitas akademik dan administrasi universitas.
                                    </p>
                                    <div className="mt-8 flex items-center gap-3 text-primary font-bold">
                                        <span className="w-8 h-px bg-primary"></span>
                                        <span className="text-sm uppercase tracking-widest">Service Excellence</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Misi 02 */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24"
                            >
                                <div className="w-full md:w-1/2 relative group">
                                    <div className="absolute -inset-4 bg-muted/50 rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl"></div>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                    >
                                        <Image
                                            alt="Kemandirian Institusi"
                                            className="relative rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl shadow-2xl w-full aspect-video md:h-[400px] object-cover border-2 border-primary/10"
                                            src="/misi2.jpeg"
                                            width={800}
                                            height={400}
                                        />
                                    </motion.div>
                                    <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/20 rounded-tl-3xl pointer-events-none"></div>
                                    <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/20 rounded-br-3xl pointer-events-none"></div>
                                </div>
                                <div className="w-full md:w-1/2 text-right md:text-left">
                                    <span className="text-primary font-black text-6xl opacity-20 block mb-4">02</span>
                                    <h4 className="text-2xl font-bold text-foreground mb-6 font-heading">Mendukung Kemandirian Institusi</h4>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        Melalui pemanfaatan teknologi informasi yang optimal untuk mendukung kemandirian institusi.
                                    </p>
                                    <div className="mt-8 flex items-center justify-end md:justify-start gap-3 text-primary font-bold">
                                        <span className="w-8 h-px bg-primary"></span>
                                        <span className="text-sm uppercase tracking-widest">Digital Independence</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Misi 03 */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                className="flex flex-col md:flex-row items-center gap-12 lg:gap-24"
                            >
                                <div className="w-full md:w-1/2 relative group">
                                    <div className="absolute -inset-4 bg-primary/5 rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl"></div>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                    >
                                        <Image
                                            alt="Nilai Keislaman"
                                            className="relative rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl shadow-2xl w-full aspect-video md:h-[400px] object-cover border-2 border-primary/10"
                                            src="/misi3.png"
                                            width={800}
                                            height={400}
                                        />
                                    </motion.div>
                                    <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/20 rounded-tr-3xl pointer-events-none"></div>
                                    <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/20 rounded-bl-3xl pointer-events-none"></div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <span className="text-primary font-black text-6xl opacity-20 block mb-4">03</span>
                                    <h4 className="text-2xl font-bold text-foreground mb-6 font-heading">Integritas & Nilai Islam</h4>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        Menanamkan nilai-nilai Islam dalam pengelolaan teknologi informasi, dengan menjunjung tinggi integritas, amanah, dan tanggung jawab sosial.
                                    </p>
                                    <div className="mt-8 flex items-center gap-3 text-primary font-bold">
                                        <span className="w-8 h-px bg-primary"></span>
                                        <span className="text-sm uppercase tracking-widest">Islamic Values</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Struktur Organisasi Section */}
                <section id="struktur-organisasi" className="py-20 px-6 relative overflow-visible">
                    {/* Technical Divider */}
                    <div className="absolute top-0 left-0 w-full h-12 pointer-events-none -translate-y-[calc(100%-1px)] z-20 -scale-x-100">
                        <svg className="w-full h-full scale-y-[-1]" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1440V24L1400 0H1200L1176 24H264L240 0H40L0 24V48Z" fill="currentColor" className="text-background" />
                            <path d="M240 0L264 24H1176L1200 0" stroke="currentColor" strokeWidth="1" className="text-primary/10" />
                        </svg>
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <div className="relative mb-12 inline-flex items-center justify-center">
                                <div className="relative w-20 h-20 bg-background border-2 border-primary/30 rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-lg rounded-bl-lg flex items-center justify-center shadow-xl">
                                    <Users2 className="text-primary h-10 w-10" />
                                </div>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight uppercase font-heading mb-4">
                                Struktur Organisasi
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Tim profesional yang berdedikasi dalam memberikan layanan teknologi informasi terbaik
                            </p>
                        </motion.div>

                        {/* Organizational Chart */}
                        <div className="flex flex-col items-center gap-0">
                            {/* Level 1: Kepala UPTTIK */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="mb-0 w-full max-w-[240px] md:max-w-[400px] mx-auto"
                            >
                                <OrgCard
                                    name="Dedy Abdullah, M. Eng"
                                    role="Ka. UPT TIK"
                                />
                            </motion.div>

                            {/* Connector */}
                            <svg className="w-full max-w-5xl h-20 md:h-32" viewBox="0 0 800 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                <line x1="400" y1="0" x2="400" y2="50" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" className="text-primary/30" />
                                <path d="M 400 50 L 200 50 L 200 100" stroke="currentColor" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" className="text-primary/30" />
                                <path d="M 400 50 L 600 50 L 600 100" stroke="currentColor" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" className="text-primary/30" />
                            </svg>

                            {/* Level 2: Kepala Bidang */}
                            <div className="relative w-full max-w-6xl px-0 md:px-4">
                                <div className="grid grid-cols-2 gap-4 md:gap-32">
                                    {/* Bidang Software */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="flex flex-col items-center w-full max-w-[350px] md:max-w-[550px] ml-auto"
                                    >
                                        <OrgCard
                                            name="M. Imanullah, S.Kom., M.T."
                                            role="Kabid. Software"
                                        />

                                        {/* Connector Software */}
                                        <svg className="w-full max-w-xl h-16 md:h-24" viewBox="0 0 400 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                            <line x1="200" y1="0" x2="200" y2="35" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" className="text-primary/30" />
                                            <path d="M 200 35 L 100 35 L 100 80" stroke="currentColor" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" className="text-primary/30" />
                                            <path d="M 200 35 L 300 35 L 300 80" stroke="currentColor" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" className="text-primary/30" />
                                        </svg>

                                        <div className="relative w-full max-w-xl">
                                            <div className="grid grid-cols-2 gap-4 md:gap-10">
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
                                        className="flex flex-col items-center w-full max-w-[350px] md:max-w-[550px] mr-auto"
                                    >
                                        <OrgCard
                                            name="N. Ario Seno, S. Kom"
                                            role="Kabid. Jaringan"
                                        />

                                        {/* Connector Jaringan */}
                                        <svg className="w-full h-12 md:h-12" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                            <line x1="50" y1="0" x2="50" y2="40" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" className="text-primary/30" />
                                        </svg>

                                        <div className="w-full pt-0">
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
        "bg-card border border-primary/10 rounded-xl shadow-lg md:shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-primary/30 w-full md:min-w-[240px] relative overflow-hidden",
        isStaff ? "px-1 py-1.5 md:px-6 md:py-4" : "px-2 py-2 md:px-8 md:py-6"
    )}>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(var(--primary)_1px,transparent_1px)] bg-[size:10px_10px]"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-primary/20"></div>
        <div className="flex items-center gap-4">
            <div className="text-center flex-1 min-w-0">
                <h4 className={cn(
                    "font-black text-gray-900 dark:text-white leading-tight mb-0 md:mb-1",
                    isStaff ? "text-[8px] md:text-sm" : "text-[10px] md:text-lg"
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