import hackathonData from "@/data/data";

const Team = () => {
  return (
    <section id="team" className="py-20 relative bg-cyber-light/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-cyber font-bold mb-4 neon-text-cyan animate-glow">
            Meet the team
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-mono">
            The dedicated individuals who made this hackathon possible
            <br />
            <span className="text-neon-purple uppercase"> for students, by students</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {hackathonData.team.map((member, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg border border-neon-purple/30 bg-cyber-darker/50 p-6 hover:border-neon-purple transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="text-center relative z-10">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-neon-purple/50">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-cyber-light flex items-center justify-center">
                      <span className="text-4xl">{member.name.charAt(0)}</span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-cyber font-bold mb-1 text-neon-purple">
                  {member.name}
                </h3>
                <p className="text-gray-300 font-mono text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
