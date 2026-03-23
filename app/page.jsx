import Header from '@/components/Header';
import Hero from '@/components/Hero';
import OneCheck from '@/components/OneCheck';
import FloorPlans from '@/components/FloorPlans';
import Amenities from '@/components/Amenities';
import Neighborhood from '@/components/Neighborhood';
import ResidentPortal from '@/components/ResidentPortal';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <OneCheck />
      <FloorPlans />
      <Amenities />
      <Neighborhood />
      <ResidentPortal />
      <Contact />
      <Footer />
    </main>
  );
}
