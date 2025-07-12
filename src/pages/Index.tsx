
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FilterBar from '@/components/FilterBar';
import ClothingGrid from '@/components/ClothingGrid';
import ImpactSection from '@/components/ImpactSection';
import CommunitySection from '@/components/CommunitySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FilterBar />
      <ClothingGrid />
      <ImpactSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
