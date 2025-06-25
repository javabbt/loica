import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-20">
          {/* First Article */}
          <article className="space-y-8">
            {/* Logo Section */}
            <div className="w-full max-w-2xl mx-auto mb-12">
              <Image
                src="/images/rythm.jpg"
                alt="Vib'in"
                width={800}
                height={400}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-[#E17B47] mb-6">
              L&apos;HISTOIRE DE VIB&apos;IN : RÉVOLUTIONNER LE PLAISIR FÉMININ
            </h1>

            {/* Content */}
            <div className="space-y-6 text-gray-600">
              <p>
                Vib&apos;in est née d&apos;une volonté simple mais puissante :
                briser les tabous autour du plaisir féminin et offrir une
                expérience sensorielle unique, raffinée et libératrice.
              </p>

              <p>
                L&apos;industrie du bien-être intime a longtemps été marquée par
                un manque d&apos;innovation, des designs peu inspirants et un
                discours parfois culpabilisant. Nous avons voulu changer cela en
                proposant des objets de plaisir élégants, premium et
                technologiques, conçus pour une exploration sans limites du
                plaisir et de l&apos;épanouissement personnel.
              </p>

              <p>
                Vib&apos;in, c&apos;est bien plus que des sextoys. C&apos;est
                une philosophie. Une invitation à se reconnecter à son corps, à
                explorer ses désirs et à s&apos;offrir des instants de plaisir
                sans complexe.
              </p>
            </div>

            {/* Read More Link */}
            <div className="mt-8">
              <span className="text-[#E17B47] font-semibold uppercase text-sm">
                LIRE PLUS
              </span>
            </div>
          </article>

          {/* Second Article */}
          <article className="space-y-8">
            {/* Logo Section */}
            <div className="w-full max-w-2xl mx-auto mb-12">
              <Image
                src="/images/rythm.jpg"
                alt="Vib'in"
                width={800}
                height={400}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-[#E17B47] mb-6">
              L&apos;HISTOIRE DE VIB&apos;IN : RÉVOLUTIONNER LE PLAISIR FÉMININ
            </h1>

            {/* Content with bullet points */}
            <div className="space-y-6 text-gray-600">
              <div className="flex items-start space-x-3">
                <span className="text-[#E17B47] text-xl mt-1">•</span>
                <p className="flex-1">
                  <span className="font-semibold">
                    Une marque innovante et premium
                  </span>
                  <br />
                  Nos produits allient design sophistiqué, matériaux haut de
                  gamme et technologies avancées pour offrir une expérience
                  sensorielle inégalée. Chaque détail est pensé pour allier
                  esthétique et efficacité.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-[#E17B47] text-xl mt-1">•</span>
                <p className="flex-1">
                  <span className="font-semibold">
                    Briser les tabous, célébrer le plaisir
                  </span>
                  <br />
                  Nous croyons que le plaisir féminin ne devrait jamais être un
                  sujet tabou. À travers notre communication, nos produits et
                  notre engagement, nous éduquons et sensibilisons sur
                  l&apos;importance de l&apos;épanouissement personnel.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-[#E17B47] text-xl mt-1">•</span>
                <p className="flex-1">
                  <span className="font-semibold">
                    Une expérience immersive et sensorielle
                  </span>
                  <br />
                  Chaque produit Vib&apos;in est conçu pour stimuler les sens,
                  du toucher à l&apos;audition, en passant par les vibrations et
                  la chaleur. Nos sextoys ne sont pas de simples objets, ce sont
                  de véritables expériences à part entière.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-[#E17B47] text-xl mt-1">•</span>
                <p className="flex-1">
                  <span className="font-semibold">
                    Une communauté engagée et bienveillante
                  </span>
                  <br />
                  Nous construisons une communauté de femmes et d&apos;hommes
                  qui partagent une vision commune : normaliser le plaisir,
                  s&apos;informer et échanger sans jugement.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-[#E17B47] text-xl mt-1">•</span>
                <p className="flex-1">
                  <span className="font-semibold">
                    Un luxe accessible et discret
                  </span>
                  <br />
                  Vib&apos;in démocratise l&apos;accès aux sextoys premium avec
                  des designs élégants et une approche sans vulgaire ni clichés,
                  pour que chacun(e) puisse s&apos;approprier son plaisir avec
                  sérénité.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-[#E17B47] text-xl mt-1">•</span>
                <p className="flex-1">
                  Vib&apos;in, c&apos;est une révolution du plaisir féminin.
                  C&apos;est l&apos;affirmation que se faire du bien est un
                  droit, une nécessité, une célébration de soi.
                </p>
              </div>
            </div>

            {/* Read More Link */}
            <div className="mt-8">
              <span className="text-[#E17B47] font-semibold uppercase text-sm">
                LIRE PLUS
              </span>
            </div>
          </article>
        </div>
      </main>

      {/* Service Highlights - Full Width */}
      <section className="w-full bg-[#FDF6F2] py-12 mt-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* High Quality */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Haute Qualité</h3>
              <p className="text-gray-500 text-sm">
                Fabriqué à partir de matériaux de qualité
              </p>
            </div>

            {/* Warranty */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Garantie</h3>
              <p className="text-gray-500 text-sm">Pendant 2 ans</p>
            </div>

            {/* Free Shipping */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Livraison offerte</h3>
              <p className="text-gray-500 text-sm">À partir de 150€</p>
            </div>

            {/* Support */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-500 text-sm">S.A.V</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
