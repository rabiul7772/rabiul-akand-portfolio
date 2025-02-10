import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 md:pt-5"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="  mb-8 relative">
            <img
              src="./public/portfolio-image.png"
              alt="Profile"
              className=" z-10 relative w-48 h-48 rounded-full mx-auto border-4 border-[#0ea5e9] shadow-lg shadow-[#0ea5e9]/20"
            />
            <div className=" z-0 absolute inset-0 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8] opacity-5 animate-pulse"></div>
          </div>
          <h1 className="text-3xl text-white font-bold mb-6">Rabiul Akand</h1>

          <div className="text-xl md:text-2xl text-[#0ea5e9] mb-8">
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                1000,
                'Backend Developer',
                1000,
                'Full Stack Developer',
                1000
              ]}
              wrapper="span"
              speed={20}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
              cursor={true}
              deletionSpeed={20}
            />
          </div>
          <p className="text-lg  text-gray-300 mb-8 max-w-2xl mx-auto">
            Hello! I&apos;m Rabiul Akand, a passionate Full-Stack web developer
            with hands-on experience in building modern and responsive web
            applications using React.js, Next.js, HTML, CSS, JavaScript,
            TailwindCSS, and more. I specialize in transforming ideas into
            digital solutions. Let&apos;s work together to take your business to
            the next level and achieve your goals!
          </p>

          <div className="flex  flex-col sm:flex-row items-center sm:items-start sm:justify-between w-full gap-8">
            {/* Social Icons */}
            <div className="flex items-center gap-6 sm:self-start">
              <a
                href="https://www.linkedin.com/in/rabiul-akand"
                target="_blank"
                className="social-icon"
              >
                <img src="/linkedin.png" alt="LinkedIn" className="w-10 h-10" />
              </a>
              <a
                href="https://github.com/rabiul7772"
                target="_blank"
                className="social-icon"
              >
                <img src="/github.png" alt="GitHub" className="w-10 h-10" />
              </a>
              <a
                href="https://wa.me/8801682087772"
                target="_blank"
                className="social-icon"
              >
                <img src="/whatsapp.png" alt="Whatsapp" className="w-8 h-8" />
              </a>
              <a
                href="mailto:rabiulakand777@gmail.com"
                target="_blank"
                className="social-icon"
              >
                <img src="/email.png" alt="Mail" className="w-10 h-10" />
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://drive.google.com/file/d/1Syg6338p3StM5d0k6dDjBflvwJi4sxG8/view?usp=drive_link"
                target="_blank"
              >
                <button className="px-6 py-3 bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8] rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-[#0ea5e9]/20">
                  ⬇️ Resume
                </button>
              </a>
              <a href="#contact">
                <button className="px-6 py-3 border-2 border-[#0ea5e9] text-[#0ea5e9] rounded-full hover:bg-[#0ea5e9] hover:text-white transition-all duration-300">
                  Contact Rabiul
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
