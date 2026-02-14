"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const LanguageToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { language, setLanguage } = useLanguage();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <Button variant="outline" size="icon" />;
    }

    const toggleLanguage = () => {
        setLanguage(language === "id" ? "en" : "id");
    };

    return (
        <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 font-medium transition-all"
        >
            <Languages className="h-4 w-4" />
            <span className="text-xs uppercase">{language}</span>
        </Button>
    );
};

export default LanguageToggle;
