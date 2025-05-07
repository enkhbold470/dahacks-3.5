import hackathonData from "@/data/data";
import { useEffect, useState } from "react";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Generate random positions for puzzle pieces
  const puzzlePieces = [
    {
      color: "bg-neon-pink",
      left: "10%",
      top: "20%",
      size: "w-12 h-12",
      delay: "1s",
      rotate: "rotate-12",
    },
    {
      color: "bg-neon-blue",
      right: "15%",
      top: "15%",
      size: "w-16 h-16",
      delay: "2s",
      rotate: "-rotate-12",
    },
    {
      color: "bg-neon-green",
      left: "20%",
      bottom: "15%",
      size: "w-14 h-14",
      delay: "3s",
      rotate: "rotate-45",
    },
    {
      color: "bg-neon-yellow",
      right: "20%",
      bottom: "20%",
      size: "w-10 h-10",
      delay: "1.5s",
      rotate: "-rotate-45",
    },
  ];

  return (
    <div
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 cyber-grid"
    >
      {puzzlePieces.map((piece, index) => (
        <div
          key={index}
          className={`puzzle-piece ${piece.color} ${piece.size} ${piece.rotate} opacity-40`}
          style={{
            left: piece.left || "auto",
            right: piece.right || "auto",
            top: piece.top || "auto",
            bottom: piece.bottom || "auto",
            animationDelay: piece.delay,
            transform: `translateY(${offsetY * 0.5}px)`,
          }}
        >
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M100,100V0H75C75,8.28,68.28,15,60,15S45,8.28,45,0H0V45C8.28,45,15,51.72,15,60S8.28,75,0,75V100H100Z" />
          </svg>
        </div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 mt-16">
        <div className="text-center">
          <div className="inline-block py-1 px-3 border border-[hsl(var(--neon-cyan))] rounded-full mb-6 animate-pulse-neon">
            {" "}
            <p className="text-sm md:text-base font-mono neon-text-cyan">
              {hackathonData.date}
            </p>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-cyber font-bold mb-4 tracking-wider cursor-default">
            <span className="block neon-text-orange animate-glow">DAHACKS</span>
            <span className="block neon-text-cyan  animate-glow">3.5</span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-300 font-mono">
            {hackathonData.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a
              href={hackathonData.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button-orange font-cyber text-lg"
            >
              APPLY NOW
            </a>
            <a
              href={hackathonData.guideLink}
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button-cyan  font-cyber text-lg"
            >
              HACKER GUIDE
            </a>
          </div>

          <div className="mt-12 animate-bounce">
            <svg
              className="w-8 h-8 mx-auto text-neon-green"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
