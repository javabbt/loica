"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  ChevronDown,
  Trophy,
  CheckCircle,
  Package,
  Headphones,
} from "lucide-react";

export default function SextoysPage() {
  return (
    <div className="min-h-screen">
      {/* Page controls - breadcrumb and view/sort options */}
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
            {/* Left side - Breadcrumb */}
            <div className="flex items-center text-gray-600">
              <span>Accueil</span>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="font-medium">Sextoys</span>
            </div>

            {/* Right side - View and Sort controls */}
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <span className="text-gray-700 font-medium text-sm sm:text-base">
                  VOIR
                </span>
                <span className="text-gray-700 font-bold text-sm sm:text-base">
                  16
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-gray-700 font-medium text-sm sm:text-base">
                  TRIER PAR
                </span>
                <div className="relative">
                  <select className="appearance-none bg-transparent text-gray-700 pr-6 text-sm sm:text-base focus:outline-none">
                    <option>Par défaut</option>
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-700 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="bg-gradient-to-br from-orange-400 via-red-400 to-pink-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-6 sm:pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200"
              >
                {/* Product Image */}
                <div className="bg-gradient-to-br from-pink-200 to-pink-300 p-4 sm:p-8 rounded-t-2xl">
                  <Image
                    src="/images/4.png"
                    alt="Harmonix"
                    width={200}
                    height={200}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg sm:text-xl font-medium text-gray-900">
                      Harmonix
                    </h3>
                    <span className="text-lg sm:text-xl font-bold text-gray-900">
                      79,00€
                    </span>
                  </div>

                  <Button className="w-full bg-pink-400 hover:bg-pink-500 text-gray-900 font-medium py-2.5 sm:py-3 rounded-full">
                    Ajouter au panier
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-8 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Haute Qualité */}
            <div className="flex items-center gap-4">
              <Trophy className="h-10 w-10 sm:h-12 sm:w-12 text-gray-800 flex-shrink-0" />
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  Haute Qualité
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Fabriqué à partir de matériaux de qualité
                </p>
              </div>
            </div>

            {/* Garantie */}
            <div className="flex items-center gap-4">
              <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-gray-800 flex-shrink-0" />
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  Garantie
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Pendant 2 ans
                </p>
              </div>
            </div>

            {/* Livraison offerte */}
            <div className="flex items-center gap-4">
              <Package className="h-10 w-10 sm:h-12 sm:w-12 text-gray-800 flex-shrink-0" />
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  Livraison offerte
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  À partir de 150€
                </p>
              </div>
            </div>

            {/* 24/7 Support */}
            <div className="flex items-center gap-4">
              <Headphones className="h-10 w-10 sm:h-12 sm:w-12 text-gray-800 flex-shrink-0" />
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  24 / 7 Support
                </h3>
                <p className="text-sm sm:text-base text-gray-600">S.A.V</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
