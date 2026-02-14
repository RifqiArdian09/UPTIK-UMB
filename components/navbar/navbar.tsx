"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import ThemeToggle from "../theme-toggle";
import LanguageToggle from "../language-toggle";

const Navbar = () => {
  const pathname = usePathname();

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById("beranda");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed z-50 top-0 inset-x-0 h-16 bg-background/80 backdrop-blur-md border-b">
      <div className="h-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Link
            href="/#beranda"
            onClick={handleScrollToTop}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Logo />
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight block bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/80 leading-tight font-heading">
                UPTTIK
              </span>
              <span className="text-[10px] sm:text-xs tracking-widest block text-primary uppercase leading-tight font-heading">
                Universitas Muhammadiyah Bengkulu
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-2 sm:gap-4">
          <LanguageToggle />
          <ThemeToggle />
          {/* Mobile Menu */}
          <div className="md:hidden ">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
