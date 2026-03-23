import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/elevate-logo.png"
                alt="Elevate Logo"
                width={120}
                height={36}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-white/70 text-sm">
              CALCAP-managed community in South Phoenix. Elevate your lifestyle today.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#floor-plans" className="text-white/70 hover:text-gold text-sm transition-colors">
                  Floor Plans
                </a>
              </li>
              <li>
                <a href="#amenities" className="text-white/70 hover:text-gold text-sm transition-colors">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-gold text-sm transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#apply" className="text-white/70 hover:text-gold text-sm transition-colors">
                  Apply Now
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Review Us</h4>
            <a
              href="https://www.google.com/search?q=Elevate+South+Mountain+Phoenix"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Review us on Google
            </a>
            <p className="text-white/50 text-xs mt-3">Scan QR code at office for quick access</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="text-white/60 text-sm">Equal Housing Opportunity</span>
            <span className="text-white/60 text-sm">CALCAP Properties</span>
          </div>
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Elevate @ South Mountain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
