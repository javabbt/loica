"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, Phone, User, MapPin, Home } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, city, address, phone, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Compte créé avec succès !");
        router.push("/login");
      } else {
        setError(data.error || "Une erreur est survenue");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError("Une erreur est survenue");
    }
  };

  return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl transform transition-all duration-300 hover:shadow-2xl">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
              Créer un compte
            </h1>
            <p className="text-gray-600 text-lg">Rejoignez-nous dès aujourd’hui</p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="flex items-center border-2 rounded-xl p-4 bg-gray-50 hover:border-gray-400 focus-within:border-black focus-within:bg-white transition-all">
              <User className="w-5 h-5 text-gray-500 mr-3" />
              <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Prénom"
                  className="w-full bg-transparent border-0 focus:ring-0 focus:outline-none text-gray-900 placeholder:text-gray-500"
              />
            </div>

            <div className="flex items-center border-2 rounded-xl p-4 bg-gray-50 hover:border-gray-400 focus-within:border-black focus-within:bg-white transition-all">
              <MapPin className="w-5 h-5 text-gray-500 mr-3" />
              <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Ville"
                  className="w-full bg-transparent border-0 focus:ring-0 focus:outline-none text-gray-900 placeholder:text-gray-500"
              />
            </div>

            <div className="flex items-center border-2 rounded-xl p-4 bg-gray-50 hover:border-gray-400 focus-within:border-black focus-within:bg-white transition-all">
              <Home className="w-5 h-5 text-gray-500 mr-3" />
              <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Adresse"
                  className="w-full bg-transparent border-0 focus:ring-0 focus:outline-none text-gray-900 placeholder:text-gray-500"
              />
            </div>

            <div className="flex items-center border-2 rounded-xl p-4 bg-gray-50 hover:border-gray-400 focus-within:border-black focus-within:bg-white transition-all">
              <Phone className="w-5 h-5 text-gray-500 mr-3" />
              <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Téléphone"
                  className="w-full bg-transparent border-0 focus:ring-0 focus:outline-none text-gray-900 placeholder:text-gray-500"
              />
            </div>

            <div className="flex items-center border-2 rounded-xl p-4 bg-gray-50 hover:border-gray-400 focus-within:border-black focus-within:bg-white transition-all">
              <Mail className="w-5 h-5 text-gray-500 mr-3" />
              <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Adresse mail"
                  className="w-full bg-transparent border-0 focus:ring-0 focus:outline-none text-gray-900 placeholder:text-gray-500"
              />
            </div>

            <div className="flex items-center border-2 rounded-xl p-4 bg-gray-50 hover:border-gray-400 focus-within:border-black focus-within:bg-white transition-all">
              <Lock className="w-5 h-5 text-gray-500 mr-3" />
              <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mot de passe"
                  className="w-full bg-transparent border-0 focus:ring-0 focus:outline-none text-gray-900 placeholder:text-gray-500"
              />
            </div>

            {error && (
                <div className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg">
                  {error}
                </div>
            )}
            {success && (
                <div className="text-green-600 text-sm text-center bg-green-50 p-3 rounded-lg">
                  {success}
                </div>
            )}

            <div>
              <button
                  type="submit"
                  className="w-full flex justify-center py-4 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-black hover:bg-gray-800 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Créer un compte
              </button>
            </div>

            <div className="text-center mt-6">
              <Link
                  href="/login"
                  className="font-medium text-[#E17B47] hover:text-[#c56835] transition-colors duration-300"
              >
                Retourner à la page de connexion
              </Link>
            </div>
          </form>
        </div>
      </div>
  );
}
