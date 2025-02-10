const Skills = () => {
  const skills = [
    { name: 'HTML', icon: '/html.png' },
    { name: 'CSS', icon: '/css.png' },
    { name: 'Javascript', icon: '/js.png' },
    { name: 'React', icon: '/react.png' },
    { name: 'Tailwind', icon: '/tailwind.png' },
    { name: 'Next JS', icon: '/next.js.png' },
    { name: 'ShadCN', icon: '/shadcn.png' },
    { name: 'Node JS', icon: '/node.png' },
    { name: 'Firebase', icon: '/firebase.png' },
    { name: 'Supabase', icon: '/supabase.png' },
    { name: 'Figma', icon: '/figma.png' },
    { name: 'Git', icon: '/git.png' }
  ];

  // Triple the skills array to ensure continuous flow
  const tripleSkills = [...skills, ...skills, ...skills];

  return (
    <section id="skills" className="py-20 bg-[#15202B]">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">
          Skills
        </h2>
        <div className="skills-container ">
          <div className="skills-track">
            {tripleSkills.map((skill, index) => (
              <div key={`${skill.name}-${index}`} className="skill-card">
                <div className="relative group">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 h-16 mx-auto mb-4 transform transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#1D9BF0] opacity-0 group-hover:opacity-10 rounded-full transition-opacity"></div>
                </div>
                <h3 className="text-lg font-medium text-[white]">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
