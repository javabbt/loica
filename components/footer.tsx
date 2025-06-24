import React from "react";
import { ArrowRight, Linkedin, Facebook, Twitter } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-orange-400 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          {/* Menu Section */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 tracking-wide">
              MENU
            </h3>
            <nav className="space-y-3 sm:space-y-4">
              <a
                href="#"
                className="block text-orange-100 hover:text-white transition-colors duration-200 text-sm sm:text-base"
              >
                Accueil
              </a>
              <a
                href="#"
                className="block text-orange-100 hover:text-white transition-colors duration-200 text-sm sm:text-base"
              >
                Sextoy
              </a>
              <a
                href="#"
                className="block text-orange-100 hover:text-white transition-colors duration-200 text-sm sm:text-base"
              >
                Blog
              </a>
              <a
                href="#"
                className="block text-orange-100 hover:text-white transition-colors duration-200 text-sm sm:text-base"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Customer Service Section */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 tracking-wide">
              S.A.V
            </h3>
            <nav className="space-y-3 sm:space-y-4">
              <a
                href="#"
                className="block text-orange-100 hover:text-white transition-colors duration-200 text-sm sm:text-base"
              >
                CGV
              </a>
              <a
                href="#"
                className="block text-orange-100 hover:text-white transition-colors duration-200 text-sm sm:text-base"
              >
                Retour
              </a>
            </nav>
          </div>

          {/* Newsletter Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 tracking-wide">
              NEWSLETTER
            </h3>

            {/* Email Signup */}
            <div className="mb-4 sm:mb-6">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                <input
                  type="email"
                  placeholder="Adresse email"
                  className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-l-lg sm:rounded-r-none border-0 bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 text-sm sm:text-base"
                />
                <button className="bg-red-900 hover:bg-red-800 px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-r-lg sm:rounded-l-none transition-colors duration-200 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Newsletter Description */}
            <div className="space-y-2 sm:space-y-3 text-orange-100 leading-relaxed text-sm sm:text-base">
              <p>
                Les conseils, des actus et des vibrations en avant-première.
              </p>
              <p>Rejoins la communauté qui célèbre le plaisir sans tabou.</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 sm:pt-8 border-t border-orange-300 gap-6 sm:gap-0">
          {/* Logo */}
          <div>
            <Image
              src="/images/Logo.png"
              alt="Vib'n Logo"
              width={120}
              height={60}
              className="h-10 sm:h-12 w-auto"
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 sm:space-x-6">
            <a
              href="#"
              className="text-orange-100 hover:text-white transition-colors duration-200 p-2 hover:bg-orange-500 rounded-full"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="#"
              className="text-orange-100 hover:text-white transition-colors duration-200 p-2 hover:bg-orange-500 rounded-full"
            >
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="#"
              className="text-orange-100 hover:text-white transition-colors duration-200 p-2 hover:bg-orange-500 rounded-full"
            >
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
