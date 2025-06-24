"use client";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/bg1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken video for better text readability */}
      <div className="absolute inset-0 bg-red-900/20" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wide leading-tight">
            DÉCOUVREZ VIB&apos;IN
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light italic tracking-wide leading-relaxed">
            L&apos;harmonie parfaite
            <br />
            entre musique et plaisir.
          </p>
        </div>
      </div>
    </section>
  );
}
