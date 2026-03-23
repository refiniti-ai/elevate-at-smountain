'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/elevate-logo.png"
              alt="Elevate Logo"
              width={160}
              height={48}
              className="h-10 w-auto md:h-12"
              priority
            />
          </Link>
          <div className="flex items-center gap-4 md:gap-8">
            <a
              href="#floor-plans"
              className="text-sm font-medium text-white/90 hover:text-gold transition-colors hidden sm:block"
            >
              Floor Plans
            </a>
            <a
              href="#amenities"
              className="text-sm font-medium text-white/90 hover:text-gold transition-colors hidden sm:block"
            >
              Amenities
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-white/90 hover:text-gold transition-colors hidden sm:block"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-white/90 hover:text-gold transition-colors hidden sm:block"
            >
              Contact
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-gold text-navy font-semibold text-sm hover:bg-gold-light transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
