
import hackathonData from '@/data/data';

const Tracks = () => {
  return (
    <section id="tracks" className="py-20 relative bg-cyber-light/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-cyber font-bold mb-4 neon-text-pink animate-glow">
            HACKATHON TRACKS
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-mono">
            Choose your challenge and build something amazing in one of our two tracks! Prizes are for everyone, regardless of whether you choose a track.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {hackathonData.tracks.map((track, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-lg border border-neon-pink/30 bg-cyber-darker/50 p-6 hover:border-neon-pink transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="text-center relative z-10">
                <div className="text-4xl mb-4">{track.icon}</div>
                <h3 className="text-2xl font-cyber font-bold mb-2 text-neon-pink">{track.name}</h3>
                <p className="text-gray-300 font-mono">{track.description}</p>
              </div>
              
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-neon-pink/10 rounded-full blur-3xl group-hover:bg-neon-pink/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
