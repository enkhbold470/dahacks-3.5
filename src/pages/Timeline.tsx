import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Timeline from "@/components/Timeline";

const TimelinePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-20">
        <Timeline />
      </div>
      <Footer />
    </div>
  );
};

export default TimelinePage;
