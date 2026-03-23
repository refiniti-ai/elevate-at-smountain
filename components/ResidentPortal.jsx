export default function ResidentPortal() {
  return (
    <section className="py-16 md:py-24 bg-white/5 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Resident Portal
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Pay rent online and earn rewards when you refer friends
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-navy/50 rounded-2xl p-8 border border-white/10">
            <h3 className="font-heading text-xl font-semibold text-gold mb-4">
              Electronic Rent Payments (WIPS)
            </h3>
            <p className="text-white/80 mb-6">
              Pay your rent securely online through our resident portal. Set up automatic payments for peace of mind.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gold text-navy font-semibold hover:bg-gold-light transition-colors"
            >
              Pay Rent Online
            </a>
          </div>

          <div className="bg-navy/50 rounded-2xl p-8 border border-white/10">
            <h3 className="font-heading text-xl font-semibold text-gold mb-4">
              Text-To-Pay
            </h3>
            <p className="text-white/80 mb-6">
              Pay your rent quickly via text message. Simple, fast, and secure.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gold text-navy font-semibold hover:bg-gold-light transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gold/10 border-2 border-gold">
            <span className="font-heading text-2xl font-bold text-gold">
              $400 Rent Credit
            </span>
            <span className="text-white/90">for every friend you refer!</span>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-gold text-navy font-semibold hover:bg-gold-light transition-colors"
            >
              Resident Referral Reward
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
