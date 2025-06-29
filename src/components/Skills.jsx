const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        "Python",
        "C",
        "C++",
        "JavaScript",
        "PHP",
      ],
    },
    {
      title: "Tech Stack",
      skills: [
        "FastAPI",
        "Tailwind CSS",
        "React",
        "MySQL",
       
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        "Git",
        "Arduino",
        "Arduino IDE",
        "Figma",
        "ESP32",
        "Raspberry Pi"
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills&nbsp;&amp;&nbsp;Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* category cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map(({ title, skills }) => (
            <div
              key={title}
              className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-gray-600 transition-colors duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {title}
              </h3>

              {/* badge list */}
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full text-sm bg-gray-700/60 text-gray-300
                               border border-gray-600 hover:border-blue-400 hover:text-blue-400
                               transition-colors duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
