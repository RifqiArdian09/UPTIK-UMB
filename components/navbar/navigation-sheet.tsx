import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Home, Menu, User, Briefcase, Users, Phone } from "lucide-react";
import { Logo } from "./logo";
import Link from "next/link";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader className="text-left text-inherit">
          <SheetTitle className="flex items-center gap-3 pt-4">
            <Logo />
            <span className="font-bold text-xl uppercase tracking-tighter">UPTTIK UMB</span>
          </SheetTitle>
          <SheetDescription className="sr-only">
            Menu Navigasi Mobile UPTTIK Universitas Muhammadiyah Bengkulu
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-10 mt-10">
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors"> <Home className="h-5 w-5" />Beranda</Link>
            <Link href="#tentang" className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors"><User className="h-5 w-5" />Tentang Kami</Link>
            <Link href="#layanan" className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors"><Briefcase className="h-5 w-5" />Layanan</Link>
            <Link href="#testimonials" className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors"><Users className="h-5 w-5" />Testimoni</Link>
            <Link href="#footer" className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors"><Phone className="h-5 w-5" />Kontak</Link>
          </div>

        </div>
      </SheetContent>
    </Sheet>
  );
};
