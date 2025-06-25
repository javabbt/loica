"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, Mail } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/check", {
          method: "GET",
          credentials: "include", // Important for cookies
        });

        if (response.ok) {
          router.push("/menu");
        }
      } catch (error) {
        console.error("Auth check failed:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        router.push("/menu");
      } else {
        setError(data.error || "Une erreur est survenue");
      }
    } catch {
      setError("Une erreur est survenue");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl transform transition-all duration-300 hover:shadow-2xl">
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
            Bienvenue
          </h1>
          <p className="text-gray-600 text-lg">
            Ravie de vous revoir parmi nous !
          </p>
        </div>

        <form className="mt-12 space-y-8" onSubmit={handleSubmit}>
          <div className="rounded-md space-y-6">
            <div>
              <div className="flex items-center border-2 rounded-xl p-4 bg-gray-50 transition-all duration-300 focus-within:border-black focus-within:bg-white hover:border-gray-400">
                <Mail className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full bg-transparent border-0 focus:ring-0 focus:outline-none text-gray-900 placeholder:text-gray-500"
                  placeholder="Adresse Mail"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center border-2 rounded-xl p-4 bg-gray-50 transition-all duration-300 focus-within:border-black focus-within:bg-white hover:border-gray-400">
                <Lock className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full bg-transparent border-0 focus:ring-0 focus:outline-none text-gray-900 placeholder:text-gray-500"
                  placeholder="Mot de passe"
                />
              </div>
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-black transition-all duration-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Se Connecter
            </button>
          </div>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Ou</span>
            </div>
          </div>

          <div>
            <button
              type="button"
              className="w-full flex items-center justify-center px-4 py-4 border-2 border-gray-200 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Mail className="w-5 h-5 mr-3 text-gray-600" />
              Se connecter avec Google
            </button>
          </div>

          <div className="text-center mt-6">
            <Link
              href="/signup"
              className="font-medium text-[#E17B47] hover:text-[#c56835] transition-colors duration-300"
            >
              Se Créer Un Compte
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
