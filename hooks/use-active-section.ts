"use client";

import { useState, useEffect } from "react";

export const useActiveSection = (sectionIds: string[]) => {
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 100 && window.location.pathname === "/") {
                setActiveSection("beranda");
            }
        };

        window.addEventListener("scroll", handleScroll);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0,
                rootMargin: "-25% 0px -65% 0px"
            }
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, [sectionIds]);

    return activeSection;
};
