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
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const navigationItems = [
  { name: "ACCUEIL", href: "/" },
  { name: "SEXTOYS", href: "/sextoys" },
  { name: "BLOG", href: "/blog" },
  { name: "À PROPOS", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuth = async () => {
    try {
      const res = await fetch("/api/auth/check", {
        credentials: "include",
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
        },
      });
      setIsAuthenticated(res.status === 200);
    } catch (error) {
      console.error("Auth check failed:", error);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, [pathname]);

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        setIsAuthenticated(false);
        router.push("/login");
        router.refresh();
      }
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderAccountButton = () => {
    if (isLoading) {
      return (
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:text-white/80 hover:bg-white/10"
          disabled
        >
          <User className="h-5 w-5 opacity-50" />
        </Button>
      );
    }

    if (isAuthenticated) {
      return (
        <div className="flex items-center space-x-2">
          <Link href="/menu">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-white/80 hover:bg-white/10 relative"
              aria-label="Menu utilisateur"
            >
              <User className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full" />
            </Button>
          </Link>
          <Button
            onClick={handleLogout}
            variant="ghost"
            className="text-white hover:text-white/80 hover:bg-white/10"
            size="sm"
          >
            Déconnexion
          </Button>
        </div>
      );
    }

    return (
      <Link href="/login">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:text-white/80 hover:bg-white/10"
          aria-label="Se connecter ou créer un compte"
        >
          <User className="h-5 w-5" />
        </Button>
      </Link>
    );
  };

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
                          "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 focus:bg-white/10 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
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

              {renderAccountButton()}
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
                <Menu className="h-6 w-6" />
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
              {isAuthenticated && (
                <button
                  onClick={handleLogout}
                  className="w-full text-left text-white hover:text-white/80 hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Déconnexion
                </button>
              )}
            </div>

            {/* Mobile Icons */}
            <div className="px-4 py-3 border-t border-orange-300">
              <div className="flex justify-center space-x-6">
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

                {renderAccountButton()}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
