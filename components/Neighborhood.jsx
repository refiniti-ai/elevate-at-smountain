const highlights = [
  'Downtown Phoenix restaurants',
  'Shopping & entertainment',
  'Arenas & venues',
  'Light Rail access',
  'Valley Metro bus lines',
];

export default function Neighborhood() {
  return (
    <section className="py-16 md:py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Neighborhood
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Centrally located in South Phoenix with easy access to everything
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-white mb-2">
                  Address
                </h3>
                <address className="text-white/90 not-italic">
                  8818 S Central Ave
                  <br />
                  Phoenix, AZ 85042
                </address>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-gold mb-3">
                Nearby
              </h3>
              <ul className="space-y-2">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white/90">
                    <span className="text-gold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video">
            <iframe
              src="https://maps.google.com/maps?q=8818+S+Central+Ave,+Phoenix,+AZ+85042&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Elevate @ South Mountain location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
