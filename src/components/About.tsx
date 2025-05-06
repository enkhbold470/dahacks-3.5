
import hackathonData from '@/data/data';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-cyber font-bold mb-4 neon-text-blue animate-glow">
            ABOUT DEANZA HACKS
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <p className="text-lg text-gray-300 mb-6 font-mono leading-relaxed">
              {hackathonData.description}
            </p>
            <p className="text-lg text-gray-300 mb-6 font-mono leading-relaxed">
              Join us for an unforgettable day of innovation, collaboration, and skill-building. Whether you're a seasoned developer or just starting out, De Anza Hacks offers a supportive environment to challenge yourself, meet like-minded individuals, and create something amazing.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center">
                <div className="mr-2 w-4 h-4 bg-neon-green rounded-full"></div>
                <span className="text-white font-mono">24-Hour Event</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 w-4 h-4 bg-neon-pink rounded-full"></div>
                <span className="text-white font-mono">Exciting Prizes</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 w-4 h-4 bg-neon-blue rounded-full"></div>
                <span className="text-white font-mono">Expert Mentors</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 w-4 h-4 bg-neon-yellow rounded-full"></div>
                <span className="text-white font-mono">Free Food</span>
              </div>
            </div>
            <a 
              href={hackathonData.applyLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="neon-button font-cyber inline-block mt-2"
            >
              JOIN THE ADVENTURE
            </a>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="aspect-video bg-cyber-darker rounded-lg overflow-hidden border neon-border relative z-10">
              {/* Replace this with an actual image if available */}
              <div className="absolute inset-0 flex items-center justify-center">

                <iframe width="560" height="315" src="https://www.youtube.com/embed/4TsUuQgJFy0?si=zbaz3u0FObw3Eqqs " title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>                
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 w-3/4 h-3/4 bg-neon-blue/20 rounded-lg filter blur-lg z-0"></div>
            <div className="absolute -top-5 -left-5 w-1/2 h-1/2 bg-neon-green/20 rounded-lg filter blur-lg z-0"></div>
          </div>
        </div>
        
        {/* Key Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 max-w-6xl mx-auto">
          <div className="bg-cyber-darker p-6 rounded-lg border border-neon-green/30 hover:border-neon-green transition-all duration-300">
            <div className="text-4xl mb-4 text-center">📅</div>
            <h3 className="text-xl font-cyber text-center mb-2 text-neon-green">Date</h3>
            <p className="text-gray-300 text-center font-mono">{hackathonData.date}</p>
          </div>
          
          <div className="bg-cyber-darker p-6 rounded-lg border border-neon-pink/30 hover:border-neon-pink transition-all duration-300">
            <div className="text-4xl mb-4 text-center">⏰</div>
            <h3 className="text-xl font-cyber text-center mb-2 text-neon-pink">Time</h3>
            <p className="text-gray-300 text-center font-mono">{hackathonData.time}</p>
          </div>
          
          <div className="bg-cyber-darker p-6 rounded-lg border border-neon-blue/30 hover:border-neon-blue transition-all duration-300">
            <div className="text-4xl mb-4 text-center">📍</div>
            <h3 className="text-xl font-cyber text-center mb-2 text-neon-blue">Venue</h3>
            <p className="text-gray-300 text-center font-mono">{hackathonData.venue}</p>
          </div>
          
          <div className="bg-cyber-darker p-6 rounded-lg border border-neon-yellow/30 hover:border-neon-yellow transition-all duration-300">
            <div className="text-4xl mb-4 text-center">👨‍💻</div>
            <h3 className="text-xl font-cyber text-center mb-2 text-neon-yellow">Participants</h3>
            <p className="text-gray-300 text-center font-mono">Target: {hackathonData.registration.target} hackers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
