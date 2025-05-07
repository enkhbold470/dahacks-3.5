import { useState } from "react";

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="timeline" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-cyber font-bold mb-4 neon-text animate-glow">
            {/* 🛠️ HACKATHON TIMELINE */} 🕓 Coming soon...
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-mono">
            Here's what to expect during our action-packed hackathon day!
          </p>
        </div>

        {/* <div className="relative max-w-4xl mx-auto">
 
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-neon-green/30"></div>

 
          {hackathonData.timeline.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-8 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
 
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-neon-green z-10"></div>


              <div
                className={`w-5/12 ${
                  index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                }`}
              >
                <div
                  className={`p-4 rounded-lg transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-cyber-light/50 border border-neon-green/30"
                      : "bg-transparent"
                  }`}
                >
                  <span className="font-mono font-bold text-neon-green">
                    {item.time}
                  </span>
                  <h3 className="text-lg font-cyber font-semibold text-white mt-1">
                    {item.event}
                  </h3>
                </div>
              </div>

              <div className="w-5/12"></div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Timeline;
