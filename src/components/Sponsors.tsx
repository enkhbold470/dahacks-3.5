import hackathonData from "@/data/data";

const Sponsors = () => {
  // Group sponsors by tier
  const sponsorsByTier = hackathonData.sponsors.reduce((acc, sponsor) => {
    if (!acc[sponsor.tier]) {
      acc[sponsor.tier] = [];
    }
    acc[sponsor.tier].push(sponsor);
    return acc;
  }, {} as Record<string, typeof hackathonData.sponsors>);

  // Define sizes and colors for each tier
  const tierConfig = {
    Gold: { gridCols: 2, size: "h-24", color: "neon-text-yellow" },
    Silver: { gridCols: 3, size: "h-20", color: "neon-text" },
    Bronze: { gridCols: 4, size: "h-16", color: "neon-text-pink" },
    Independent: { gridCols: 5, size: "h-12", color: "neon-text-cyan" }
  };

  const PlaceholderLogo = ({ name }: { name: string }) => (
    <div className="flex items-center justify-center border-2 border-dashed border-gray-400 bg-cyber-light/20 rounded-md p-4 h-full">
      <span className="text-xl text-center font-cyber text-gray-300">
        {name}
      </span>
    </div>
  );

  return (
    <section id="sponsors" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-cyber font-bold mb-4 neon-text-blue animate-glow">
            OUR SPONSORS
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-mono">
            Deanza Hackathon is made possible by these amazing organizations
          </p>
        </div>

        {Object.entries(tierConfig).map(
          ([tier, config]) =>
            sponsorsByTier[tier] && (
              <div key={tier} className="mb-16">
                <h3
                  className={`text-2xl font-cyber font-bold mb-6 text-center ${config.color}`}
                >
                  {tier !== "Independent" ? `${tier} Sponsors` : "Independent"}
                </h3>
                <div
                  className={`grid grid-cols-1 md:grid-cols-${config.gridCols} gap-8`}
                >
                  {sponsorsByTier[tier]?.map((sponsor, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center"
                    >
                      {sponsor.logo ? (
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className={`${config.size} object-contain filter grayscale hover:grayscale-0 transition-all duration-300`}
                        />
                      ) : (
                        <PlaceholderLogo name={sponsor.name} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
        )}

        <div className="text-center mt-12">
          <h3 className="text-xl font-cyber font-bold mb-8 neon-text-purple">
            Interested in sponsoring?
          </h3>
          <a
            href={`mailto:${hackathonData.contact.email}?subject=Sponsorship Inquiry`}
            className="neon-button-purple font-cyber hover:underline"
          >
            BECOME A SPONSOR
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
