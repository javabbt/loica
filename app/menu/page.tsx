"use client";

import {
  FileText,
  Shield,
  CreditCard,
  FileIcon,
  Megaphone,
  Eye,
} from "lucide-react";
import Link from "next/link";

export default function MenuPage() {
  const menuItems = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "INFORMATION PERSONNELLE",
      description: "Vos informations personnelles",
      href: "/profile",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "CONNEXION & SÉCURITÉ",
      description: "Changez de mot de passe et sécurisé votre compte",
      href: "/security",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "PAIEMENTS",
      description: "Gérer vos paiements",
      href: "/payments",
    },
    {
      icon: <FileIcon className="w-6 h-6" />,
      title: "COMMANDES",
      description: "Gérer vos commandes",
      href: "/orders",
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "ADRESSE",
      description: "Modifier votre adresses",
      href: "/address",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "RETOUR",
      description: "Accéder aux règles de retour",
      href: "/returns",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDF8F7] px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            COMPTE
          </h1>
          <div className="mt-2 text-lg text-gray-700 flex items-center gap-2">
            <span className="font-medium">Alex Petrequin,</span>
            <span className="text-gray-600">petrequin.alex@gmail.com</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] group"
            >
              <div className="mb-4">{item.icon}</div>
              <h2 className="text-sm font-bold tracking-wider mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
