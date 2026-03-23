const communityAmenities = [
  { name: 'Resort-Style Pool', icon: 'pool' },
  { name: 'BBQ & Picnic Areas', icon: 'bbq' },
  { name: 'Covered Breezeways', icon: 'breezeway' },
  { name: 'Laundry Center', icon: 'laundry' },
  { name: 'Pet-Friendly (max 40lb/breed restrictions)', icon: 'pets' },
];

const interiorAmenities = [
  { name: 'Wood-Style Floors', icon: 'floor' },
  { name: 'Dual-Pane Windows', icon: 'window' },
  { name: 'Energy-Efficient Appliances', icon: 'appliance' },
  { name: 'Renovated Interiors', icon: 'interior' },
];

const Icon = ({ type, className }) => {
  const icons = {
    pool: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
      />
    ),
    bbq: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
      />
    ),
    breezeway: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    ),
    laundry: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    ),
    pets: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    ),
    floor: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
      />
    ),
    window: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"
      />
    ),
    appliance: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
      />
    ),
    interior: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    ),
  };
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {icons[type] || icons.pool}
    </svg>
  );
};

export default function Amenities() {
  return (
    <section id="amenities" className="py-16 md:py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Amenities
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Resort-style living with modern interiors
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h3 className="font-heading text-2xl font-semibold text-gold mb-6">
              Community
            </h3>
            <div className="space-y-4">
              {communityAmenities.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Icon type={item.icon} className="w-6 h-6 text-gold" />
                  </div>
                  <span className="text-white/90 font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-2xl font-semibold text-gold mb-6">
              Interior
            </h3>
            <div className="space-y-4">
              {interiorAmenities.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Icon type={item.icon} className="w-6 h-6 text-gold" />
                  </div>
                  <span className="text-white/90 font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pool hero image */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-white/10">
          <div className="relative aspect-[21/9]">
            <img
              src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200&q=80"
              alt="Sparkling resort-style pool"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/40 flex items-center justify-center">
              <p className="font-heading text-2xl md:text-3xl font-bold text-white">
                Resort-Style Pool
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
