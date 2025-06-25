"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title:
        "LUXE ET BIEN-ÊTRE : POURQUOI NOS ACCESSOIRES SUBLIMENT VOTRE PLAISIR",
      date: "14 Oct 2022",
      author: "Admin",
      image: "/images/5.jpg",
      excerpt:
        "Le plaisir est un art, et chez VicYa, nous croyons que chaque détail compte. Nos accessoires sont conçus pour enrichir votre expérience sensorielle et apporter une touche d'élégance à vos instants intimes.",
    },
    {
      id: 2,
      title:
        "L'ART DU PLAISIR : COMMENT CHOISIR LES ACCESSOIRES PARFAITS POUR UNE EXPÉRIENCE INOUBLIABLE",
      date: "14 Oct 2022",
      author: "Admin",
      image: "/images/6.png",
      excerpt:
        "Le choix des accessoires intimes est essentiel pour optimiser votre bien-être et maximiser votre plaisir. Chez VicYa, nous vous aidons à sélectionner celui qui correspondra le mieux à vos envies et à vos besoins.",
    },
    {
      id: 3,
      title:
        "ACCESSOIRES INTIMES : L'ÉLÉGANCE AU SERVICE DU DÉSIR ET DE LA SENSUALITÉ",
      date: "14 Oct 2022",
      author: "Admin",
      image: "/images/7.jpg",
      excerpt:
        "Le plaisir passe avant par l'esthétique et le raffinement. Les accessoires intimes ne sont plus de simples objets fonctionnels. Ils sont devenus de véritables pièces de design qui subliment chaque moment de plaisir.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-12">
        {blogPosts.map((post) => (
          <div key={post.id} className="flex flex-col items-center">
            <div className="relative w-full max-w-3xl aspect-[16/9] mb-4">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
            <div className="flex items-center space-x-2 text-gray-500 text-sm mb-2">
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                {post.author}
              </span>
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {post.date}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-center mb-4">
              {post.title}
            </h2>
            <p className="text-gray-600 text-center mb-4 max-w-2xl">
              {post.excerpt}
            </p>
            <Link
              href="#"
              className="inline-block px-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              Voir Plus
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
