import hackathonData, { navbarData } from "@/data/data";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cyber-darker/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/#" className="flex items-center">
              <span className="text-xl font-cyber font-bold neon-text animate-glow tracking-wider">
                {hackathonData.shortName}
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navbarData.links.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="font-cyber text-white hover:text-neon-blue transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={hackathonData.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button-orange font-cyber"
              >
                APPLY
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neon-green hover:text-white hover:bg-cyber-light focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cyber-darker/90 backdrop-blur-md border-t border-neon-green/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navbarData.links.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="block mx-auto w-max font-cyber text-white hover:text-neon-green transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <a
                href={hackathonData.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-auto w-max neon-button-orange font-cyber"
              >
                APPLY
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
