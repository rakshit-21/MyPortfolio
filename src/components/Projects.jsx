"use client"

const Projects = () => {
  // List of projects. Feel free to add, edit, or remove entries as needed.
  const projects = [
    {
      id: 1,
      title: "SahYatri-Bus Occupancy Tracker",
      description:
        "SahYatri is an IoT-enabled transportation informatics system designed to optimize mass transit operations through real-time passenger density analytics.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Nextjs", "PostgreSQL", "YoloV8","Raspberry Pi"],
      github: "https://github.com/rakshit-21/SahYatri",
    },
    {
      id: 2,
      title: "AskGPT Chatbot",
      description:
        "Developed AskGPT – a chatbot powered by Google's Gemini API for real-time, natural language query resolution.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Tailwind CSS", "Gemini API"],
      github: "https://github.com/rakshit-21/AskGPT",
    },
    {
      id: 3,
      title: "Password Generator",
      description:
        "A password generator built using React that allows users to customize password length, and choose whether to include numbers and special characters.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "CSS"],
      github: "https://github.com/rakshit-21/PasswordGenerator",
    },
    // {
    //   id: 4,
    //   title: "REST API Service",
    //   description:
    //     "A scalable REST API service built with Node.js and Express, featuring JWT authentication, rate limiting, and comprehensive documentation.",
    //   image: "/placeholder.svg?height=300&width=400",
    //   technologies: ["Node.js", "Express", "JWT", "Swagger"],
    //   github: "https://github.com",
    //   live: "https://example.com",
    // },
    // {
    //   id: 5,
    //   title: "Social Media Dashboard",
    //   description:
    //     "A comprehensive social media analytics dashboard with data visualization, user engagement metrics, and automated reporting.",
    //   image: "/placeholder.svg?height=300&width=400",
    //   technologies: ["React", "D3.js", "Python", "FastAPI"],
    //   github: "https://github.com",
    //   live: "https://example.com",
    // },
    // {
    //   id: 6,
    //   title: "Portfolio Website",
    //   description:
    //     "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and optimized performance.",
    //   image: "/placeholder.svg?height=300&width=400",
    //   technologies: ["React", "Tailwind CSS", "Framer Motion"],
    //   github: "https://github.com",
    //   live: "https://example.com",
    // },
  ];

  // Single project card component
  const ProjectCard = ({ project }) => (
    <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 group">
      {/* Project image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Overlay with action buttons */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <div className="flex space-x-3">
            {/* GitHub button */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>Code</span>
            </a>
            {/* Live demo button */}
            {/* <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
            > */}
              {/* <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                ></path>
              </svg>
              <span>Live</span> */}
            {/* </a> */}
          </div>
        </div>
      </div>

      {/* Card content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>

        {/* Technology badges */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/rakshit-21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors duration-200 space-x-2"
          >
            <span>View More on GitHub</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
