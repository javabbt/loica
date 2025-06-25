import { MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <h1 className="text-3xl font-bold text-center mb-6">
        PRENEZ CONTACT AVEC NOUS
      </h1>

      <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
        Pour plus d&apos;informations sur nos produits et services.
        N&apos;hésitez pas à nous envoyer un e-mail. Notre personnel sera
        toujours là pour vous aider. N&apos;hésitez pas !
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold mb-4">ADRESSE</h2>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1" />
              <p>79 Rue du Dauphiné</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">TÉLÉPHONE</h2>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-1" />
              <p>Mobile: 06 00 00 00 00</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nom et Prénom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E17B47] focus:border-transparent"
              placeholder="Abc"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Adresse Mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E17B47] focus:border-transparent"
              placeholder="Abc@def.com"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              OBJET
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E17B47] focus:border-transparent"
              placeholder="Optionnel"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E17B47] focus:border-transparent"
              placeholder="Bonjour ! J'aimerais poser une question sur..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#E17B47] text-white py-3 px-6 rounded-md hover:bg-[#d16b37] transition-colors duration-200"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
