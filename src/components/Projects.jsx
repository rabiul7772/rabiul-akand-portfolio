const Projects = () => {
  const projects = [
    {
      title: 'Banking Application',
      image: '/bankist.png',
      tech: ['JavaScript', 'CSS Animation', 'HTML'],
      github:
        'https://github.com/rabiul7772/Bankist_complete_project/tree/main',
      demo: 'https://bankist-complete.netlify.app/'
    },
    {
      title: 'Food Ordering App',
      image: '/omnifood.png',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/rabiul7772/Omnifood/tree/main',
      demo: 'https://omnifood-rabiul.netlify.app/'
    },
    {
      title: 'A Recipe Application',
      image: '/forkify.png',
      tech: ['JavaScript', 'REST API', 'HTML', 'CSS'],
      github: 'https://github.com/rabiul7772/Forkify_Project',
      demo: 'https://forkify-rabiul.netlify.app/'
    },

    {
      title: 'Workout Tracking App',
      image: '/mapty.png',
      tech: ['JavaScript', 'OOP', 'Geolocation API'],
      github: 'https://github.com/rabiul7772/mapty_project',
      demo: 'https://mapty-rabiul.netlify.app/'
    }
  ];

  return (
    <section id="projects" className="py-15 bg-[#15202B]">
      <div className="container mx-auto px-16 md:px-12 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1d20] to-transparent opacity-60"></div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#0ea5e9] transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#1a1d20] rounded-full text-sm text-[#0ea5e9]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:text-[#0ea5e9] transition-colors"
                    aria-label="View Demo"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:text-[#0ea5e9] transition-colors"
                    aria-label="View Code"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
