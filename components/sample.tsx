"use client";

import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

// Mock data using the images from public/images/
const products: Product[] = [
  {
    id: 1,
    name: "Harmonix",
    price: "79,00€",
    image: "/images/1.png",
  },
  {
    id: 2,
    name: "Slowburn",
    price: "14,99€",
    image: "/images/2.png",
  },
  {
    id: 3,
    name: "ChocoTempo",
    price: "12,99€",
    image: "/images/3.png",
  },
  {
    id: 4,
    name: "Smoothflow",
    price: "9,99€",
    image: "/images/4.png",
  },
];

export function Sample() {
  return (
    <section className="bg-gradient-to-br from-orange-400 via-red-500 to-red-600 pt-12 sm:pt-16 lg:pt-20 pb-0 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16 tracking-widest">
          BEST SELLERS
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-3 sm:p-4 shadow-xl"
            >
              {/* Product Image */}
              <div className="aspect-square mb-3 sm:mb-4 rounded-xl overflow-hidden bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={250}
                  height={250}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Product Info */}
              <div className="mb-3 sm:mb-4">
                <div className="flex justify-between items-center mb-2 sm:mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-base sm:text-lg font-bold text-gray-800">
                    {product.price}
                  </p>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full bg-gradient-to-r from-pink-300 to-pink-400 hover:from-pink-400 hover:to-pink-500 text-gray-800 font-medium py-2.5 sm:py-3 px-4 rounded-full transition-all duration-200 text-sm sm:text-base">
                Ajouter au panier
              </button>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-pink-300 to-pink-400 hover:from-pink-400 hover:to-pink-500 text-gray-800 font-medium py-3 sm:py-4 px-8 sm:px-16 rounded-full text-base sm:text-lg transition-all duration-200">
            Voir plus
          </button>
        </div>

        <div className="h-8 sm:h-12 lg:h-16"></div>
      </div>
    </section>
  );
}

export function QuiSommesNous() {
  return (
    <section className="bg-gradient-to-br from-orange-400 via-red-500 to-red-600 pt-0 pb-16 sm:pb-20 lg:pb-24">
      <div className="bg-[#f5f1eb] rounded-r-3xl overflow-hidden shadow-2xl w-full">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-6 sm:mb-8 leading-tight">
              Qui sommes-nous ?
            </h2>

            <div className="space-y-1 mb-8 sm:mb-10 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                Vib&apos;in, c&apos;est bien plus qu&apos;un simple objet de
                plaisir.
              </p>
              <p>C&apos;est une marque engagée qui place</p>
              <p>
                l&apos;épanouissement personnel, le respect de l&apos;intimité
              </p>
              <p>et la liberté sensorielle au cœur de son univers.</p>
            </div>

            <button className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-medium py-3 px-6 sm:px-8 rounded-full transition-all duration-200 text-sm sm:text-base">
              En savoir plus
            </button>
          </div>

          {/* Right Image */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] mb-6 p-4 order-1 lg:order-2">
            <Image
              src="/images/rythm.jpg"
              alt="Vib'in - à votre rythme"
              fill
              className="object-cover rounded-2xl lg:rounded-r-3xl lg:rounded-l-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
