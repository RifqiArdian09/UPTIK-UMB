import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { Home, User, Users, Briefcase, Phone } from "lucide-react";

export const NavMenu = (props: NavigationMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-8 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="/#beranda" className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest hover:text-primary transition-colors">
            <Home className="h-3.5 w-3.5" />
            Beranda
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="/#tentang" className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest hover:text-primary transition-colors">
            <User className="h-3.5 w-3.5" />
            Tentang
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="/#layanan" className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest hover:text-primary transition-colors">
            <Briefcase className="h-3.5 w-3.5" />
            Layanan
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="/#testimonials" className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest hover:text-primary transition-colors">
            <Users className="h-3.5 w-3.5" />
            Testimoni
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#footer" className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest hover:text-primary transition-colors">
            <Phone className="h-3.5 w-3.5" />
            Kontak
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
