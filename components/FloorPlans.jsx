import Image from 'next/image';

const floorPlans = [
  {
    id: 'A1',
    type: 'Studio',
    sqft: '300 sq. ft.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80',
    alt: 'Studio apartment with modern finishes',
  },
  {
    id: 'B1',
    type: '1 Bedroom',
    sqft: '450 sq. ft.',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80',
    alt: '1 bedroom apartment with wood-style flooring',
  },
  {
    id: 'B2',
    type: '1 Bedroom',
    sqft: '600 sq. ft.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
    alt: 'Spacious 1 bedroom apartment',
  },
  {
    id: 'C1',
    type: '2 Bedroom',
    sqft: '650 sq. ft.',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80',
    alt: '2 bedroom apartment with renovated interior',
  },
  {
    id: 'C2',
    type: '2 Bedroom',
    sqft: '725 sq. ft.',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&q=80',
    alt: '2 bedroom apartment living space',
  },
  {
    id: 'C3',
    type: '2 Bedroom',
    sqft: '800 sq. ft.',
    image: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=600&q=80',
    alt: 'Large 2 bedroom apartment',
  },
];

export default function FloorPlans() {
  return (
    <section id="floor-plans" className="py-16 md:py-24 bg-navy scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Floor Plans
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Find your perfect space. Studio, 1-bedroom, and 2-bedroom options available.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {floorPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-gold/50 transition-colors group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={plan.image}
                  alt={plan.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-gold text-navy font-bold text-sm rounded">
                  {plan.id}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-white">
                  {plan.type}
                </h3>
                <p className="text-gold font-medium mt-1">{plan.sqft}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
