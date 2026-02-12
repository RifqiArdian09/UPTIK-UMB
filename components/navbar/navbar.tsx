import Link from "next/link";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import ThemeToggle from "../theme-toggle";

const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 inset-x-0 h-16 bg-background/80 backdrop-blur-md border-b">
      <div className="h-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Link href="/#beranda" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Logo />
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight block bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/80 leading-tight">
                UPTTIK
              </span>
              <span className="text-[10px] sm:text-xs tracking-widest block text-primary uppercase leading-tight">
                Universitas Muhammadiyah Bengkulu
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-4">
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
