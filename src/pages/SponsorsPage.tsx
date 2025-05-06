
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Sponsors from '@/components/Sponsors';

const SponsorsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-20">
        <Sponsors />
      </div>
      <Footer />
    </div>
  );
};

export default SponsorsPage;
