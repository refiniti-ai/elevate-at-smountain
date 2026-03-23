import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background image - placeholder for renovated kitchen / luxury interior */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80"
          alt="Renovated apartment kitchen with white cabinetry and granite countertops"
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 md:mb-6">
          Elevate Your Lifestyle Today!
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 md:mb-10">
          Newly renovated studio, 1, and 2-bedroom apartments in South Phoenix.
        </p>
        <Link
          href="#apply"
          id="apply"
          className="inline-flex items-center px-8 py-4 rounded-lg bg-gold text-navy font-bold text-lg hover:bg-gold-light transition-all shadow-lg hover:shadow-gold/30 hover:scale-105"
        >
          Apply Now ($499 Move-In Special!)
        </Link>
      </div>
    </section>
  );
}
