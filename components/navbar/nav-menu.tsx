"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { Home, Info, Cpu, MessageSquareQuote, Send } from "lucide-react";
import { useActiveSection } from "@/hooks/use-active-section";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "beranda", name: "Beranda", icon: Home, href: "/#beranda" },
  { id: "tentang", name: "Tentang Kami", icon: Info, href: "/#tentang" },
  { id: "layanan", name: "Layanan", icon: Cpu, href: "/#layanan" },
  { id: "testimonials", name: "Testimoni", icon: MessageSquareQuote, href: "/#testimonials" },
  { id: "footer", name: "Kontak", icon: Send, href: "/#footer" },
];

export const NavMenu = (props: NavigationMenuProps) => {
  const pathname = usePathname();
  const activeSection = useActiveSection(navItems.map((item) => item.id));

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-8 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
        {navItems.map((item) => {
          const Icon = item.icon;
          // By default, if on /profil, we keep "tentang" active. 
          // BUT, if the user scrolls down to the footer, we let "footer" (Kontak) take over.
          const isActive = activeSection === "footer" && item.id === "footer"
            ? true
            : (pathname === "/profil"
              ? item.id === "tentang" && activeSection !== "footer"
              : activeSection === item.id || (item.id === "tentang" && pathname === "/profil"));

          return (
            <NavigationMenuItem key={item.id}>
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
                  className={cn(
                    "relative flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest transition-all duration-300 font-heading pb-1",
                    isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                  )}
                >
                  <Icon className={cn("h-3.5 w-3.5 transition-transform", isActive && "scale-110")} />
                  {item.name}

                  {isActive && (
                    <motion.div
                      layoutId="active-nav-line"
                      className="absolute -bottom-1 left-0 right-0 h-[3px] bg-primary rounded-full shadow-lg shadow-primary/50"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
