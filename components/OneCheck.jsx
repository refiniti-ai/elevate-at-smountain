export default function OneCheck() {
  const included = [
    'Rent',
    'Utilities',
    'Cox High-Speed Internet',
    'Filtered Water',
  ];

  return (
    <section className="py-16 md:py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            One Check Pays for All
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Simplify your life with our all-inclusive billing. No surprises, no hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-white">
                Included in Your Rent
              </h3>
            </div>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-2 text-white/90">
                  <span className="text-gold">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="font-heading text-2xl font-bold text-gold mb-4">
              No Upfront Deposits
            </h3>
            <p className="text-white/80 leading-relaxed">
              We believe in making your move as smooth as possible. Move in with our $499 special and enjoy the convenience of one payment that covers everything—rent, utilities, internet, and filtered water.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
