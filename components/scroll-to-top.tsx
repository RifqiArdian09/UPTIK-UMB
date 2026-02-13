"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="fixed bottom-10 right-10 z-50">
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative"
                    >
                        {/* Hover Tooltip */}
                        <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <div className="bg-primary text-primary-foreground border border-primary px-3 py-1 rounded text-[10px] font-bold tracking-tighter flex items-center gap-2 whitespace-nowrap shadow-lg">
                                <span className="w-1.5 h-1.5 bg-primary-foreground rounded-full animate-pulse"></span>
                                Kembali ke Atas
                            </div>
                        </div>

                        {/* The Button Body */}
                        <button
                            onClick={scrollToTop}
                            className="relative block w-16 h-16 bg-card/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/60 transition-all duration-500 flex items-center justify-center shadow-lg hover:shadow-primary/20 rounded-full"
                            aria-label="Scroll to top"
                        >
                            {/* SVG Circuitry Background (Static) */}
                            <div className="absolute inset-0 opacity-20 pointer-events-none">
                                <svg className="w-full h-full" viewBox="0 0 100 100">
                                    <circle className="text-primary" cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeWidth="0.5"></circle>
                                    <line className="text-primary" stroke="currentColor" strokeWidth="0.5" x1="50" x2="50" y1="10" y2="20"></line>
                                    <line className="text-primary" stroke="currentColor" strokeWidth="0.5" x1="50" x2="50" y1="80" y2="90"></line>
                                    <line className="text-primary" stroke="currentColor" strokeWidth="0.5" x1="10" x2="20" y1="50" y2="50"></line>
                                    <line className="text-primary" stroke="currentColor" strokeWidth="0.5" x1="80" x2="90" y1="50" y2="50"></line>
                                </svg>
                            </div>

                            {/* The Circuit Arrow */}
                            <svg className="w-8 h-8 relative z-10 overflow-visible" viewBox="0 0 40 40">
                                {/* Soldering Points */}
                                <circle className="fill-primary group-hover:fill-primary/80 transition-colors duration-300" cx="20" cy="8" r="1.5"></circle>
                                <circle className="fill-primary group-hover:fill-primary/80 transition-colors duration-300" cx="8" cy="24" r="1.5"></circle>
                                <circle className="fill-primary group-hover:fill-primary/80 transition-colors duration-300" cx="32" cy="24" r="1.5"></circle>
                                <circle className="fill-primary group-hover:fill-primary/80 transition-colors duration-300" cx="20" cy="32" r="1.5"></circle>

                                {/* Circuit Traces (Base) */}
                                <path
                                    className="stroke-primary opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                                    d="M20 32 V12 L10 22 M20 12 L30 22"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                ></path>

                                {/* Glowing Data Pulse Traces (Animated) */}
                                <motion.path
                                    className="stroke-primary"
                                    d="M20 32 V12 L10 22 M20 12 L30 22"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2.5"
                                    style={{
                                        filter: "drop-shadow(0 0 3px currentColor)"
                                    }}
                                    animate={{
                                        strokeDashoffset: -20
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    strokeDasharray="4 16"
                                ></motion.path>
                            </svg>

                            {/* Corner Accents (Circuit logic gates) */}
                            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-primary/40 rounded-tr-sm group-hover:border-primary transition-all"></div>
                            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-primary/40 rounded-bl-sm group-hover:border-primary transition-all"></div>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
