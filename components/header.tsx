"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Search, Heart, ShoppingCart, User, Menu as IconMenu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";

const navigationItems = [
  { name: "ACCUEIL", href: "/" },
  { name: "SEXTOYS", href: "/sextoys" },
  { name: "BLOG", href: "/blog" },
  { name: "À PROPOS", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  // Vérification d'authentification
  const checkAuth = useCallback(async () => {
    try {
      const res = await fetch("/api/auth/check", {
        credentials: "include",
      });
      setIsAuthenticated(res.ok);
    } catch {
      setIsAuthenticated(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // Ferme le menu quand on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowAccountMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    setIsAuthenticated(false);
    setShowAccountMenu(false);
    router.replace("/login");
  };

  const handleAccountClick = () => {
    setShowAccountMenu((prev) => !prev);
  };

  const accountMenu = (
      <div
          ref={menuRef}
          className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-20"
      >
        {isAuthenticated ? (
            <>
              <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Se déconnecter
              </button>
              <button
                  onClick={() => {
                    setShowAccountMenu(false);
                    router.push("/login");
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Changer de compte
              </button>
            </>
        ) : (
            <>
              <button
                  onClick={() => {
                    setShowAccountMenu(false);
                    router.push("/login");
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Se connecter
              </button>
              <button
                  onClick={() => {
                    setShowAccountMenu(false);
                    router.push("/signup");
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Créer un compte
              </button>
            </>
        )}
      </div>
  );

  const AccountButton = () => (
      <div className="relative">
        <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-white/80 hover:bg-white/10"
            onClick={handleAccountClick}
            aria-label="Account menu"
        >
          <User className="h-5 w-5" />
        </Button>
        {showAccountMenu && accountMenu}
      </div>
  );

  return (
      <header className="w-full bg-[#E17B47] border-b border-orange-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                    src="/images/Logo.png"
                    alt="Vibra - Le Plaisir Optimal"
                    width={120}
                    height={40}
                    className="h-8 sm:h-10 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavigationMenu>
                <NavigationMenuList className="flex space-x-6">
                  {navigationItems.map((item) => (
                      <NavigationMenuItem key={item.name}>
                        <Link href={item.href} legacyBehavior passHref>
                          <NavigationMenuLink
                              className={cn(
                                  "text-white hover:text-white/80 font-medium text-sm tracking-wide transition-colors duration-200",
                                  "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 hover:bg-white/10 focus:bg-white/10 focus:outline-none"
                              )}
                          >
                            {item.name}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Desktop Icons */}
              <div className="hidden sm:flex items-center space-x-2">
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:text-white/80 hover:bg-white/10"
                >
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:text-white/80 hover:bg-white/10"
                >
                  <Heart className="h-5 w-5" />
                  <span className="sr-only">Wishlist</span>
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:text-white/80 hover:bg-white/10"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span className="sr-only">Cart</span>
                </Button>

                <AccountButton />
              </div>

              {/* Mobile Menu Button */}
              <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-white hover:text-white/80 hover:bg-white/10"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle main menu"
              >
                {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                ) : (
                    <IconMenu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
              <div className="md:hidden border-t border-orange-300 bg-[#E17B47]">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigationItems.map((item) => (
                      <Link
                          key={item.name}
                          href={item.href}
                          className="text-white hover:text-white/80 hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium"
                          onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                  ))}
                </div>
                <div className="px-4 py-3 border-t border-orange-300 flex justify-center">
                  <AccountButton />
                </div>
              </div>
          )}
        </div>
      </header>
  );
}
