'use client';

export function HeroSectionV2() {
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen w-full overflow-hidden flex flex-col justify-end">
      {/* 1. Background Video */}
      <div className="absolute inset-0 z-0 bg-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/ooguplih/video/upload/v1787717887/hero-v1.mp4.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 2. Light Gray and White Gradient Overlay fading into the next section's background (#F5F5F7) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#F5F5F7] via-[#F5F5F7]/60 to-white/30 z-10 pointer-events-none" />
      
    </section>
  );
}
