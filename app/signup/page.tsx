"use client";

import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-3xl shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Créer un compte</h1>
          <p className="text-gray-600">Cette page sera bientôt disponible</p>
        </div>
        <div className="text-center mt-4">
          <Link
            href="/login"
            className="font-medium text-[#E17B47] hover:text-[#c56835]"
          >
            Retourner à la page de connexion
          </Link>
        </div>
      </div>
    </div>
  );
}
