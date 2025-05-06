
import Hero from '@/components/Hero';
import About from '@/components/About';
import Timeline from '@/components/Timeline';
import Tracks from '@/components/Tracks';
import Sponsors from '@/components/Sponsors';
import FAQ from '@/components/FAQ';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Tracks />
      <Timeline />
      <Sponsors />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
