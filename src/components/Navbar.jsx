import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [showDesktopNav, setShowDesktopNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills'); // Get the Skills section
      if (skillsSection) {
        const skillsTop = skillsSection.getBoundingClientRect().top;
        setShowDesktopNav(skillsTop <= window.innerHeight / 2); // Show if halfway visible
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-transparent backdrop-blur-md border-b border-gray-800  ">
      <div className="container mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className="font-bold italic font-script text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#2196f3] to-[#64b5f6] hover:opacity-90 transition-all duration-300 drop-shadow-[0_0_10px_rgba(33,150,243,0.5)]"
            style={{
              textShadow: '0 0 20px rgba(33, 150, 243, 0.3)',
              WebkitTextStroke: '1px #2196f3'
            }}
          >
            Md. Rabiul Akand
          </a>

          {/* Menu Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#1D9BF0] hover:text-[#1D9BF0]/80 transition-colors"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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

          {/* Desktop Navigation */}
          <div
            className={`hide-on-mobile  lg:flex items-center space-x-14 ${
              showDesktopNav ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <nav className="flex items-center space-x-10">
              {['About', 'Skills', 'Projects', 'Contact'].map(item => (
                <a
                  key={item}
                  href={`#${
                    item.toLowerCase() === 'about' ? '' : item.toLowerCase()
                  }`}
                  className="font-bold px-10 text-xl text-[#1D9BF0] hover:opacity-80 transition-colors relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1D9BF0] transform scale-x-0 transition-transform group-hover:scale-x-100 shadow-[0_0_10px_#1D9BF0] group-hover:shadow-[0_0_15px_#1D9BF0]"></span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 flex flex-col items-center space-y-4">
            {['About', 'Skills', 'Projects', 'Contact'].map(item => (
              <a
                key={item}
                href={`#${
                  item.toLowerCase() === 'about' ? '' : item.toLowerCase()
                }`}
                className="font-bold text-sm text-white px-4 py-2 rounded-3xl border-2 border-[#1D9BF0] bg-transparent transition-all duration-300 hover:bg-[#1D9BF0] hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="flex items-center space-x-4 mt-4">
              <a
                href="https://github.com/rabiul7772"
                target="_blank"
                className="text-[#1D9BF0] hover:text-[#1D9BF0]/80 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/rabiul-akand"
                target="_blank"
                className="text-[#1D9BF0] hover:text-[#1D9BF0]/80 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://drive.google.com/file/d/1nTLhM1QvNsUCfEh18CzLN6FXFBDCHABa/view?usp=sharing"
                target="_blank"
              >
                <button className="px-4 text-sm py-2 bg-[#1D9BF0] text-white rounded-3xl hover:bg-[#1D9BF0]/80 transition-colors">
                  Resume
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
