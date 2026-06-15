"use client"

import sahyatriImg from "../assets/sahyatri.png"
import gptImg from "../assets/gpt.png"
import ttImg from "../assets/tt.png"

const projects = [
  {
    id: 1,
    title: "SahYatri Bus Occupancy Tracker",
    description:
      "An IoT-enabled transportation informatics system for real-time passenger density analytics and smarter public transit operations.",
    image: sahyatriImg,
    technologies: ["IoT", "Next.js", "PostgreSQL", "YOLOv8", "Raspberry Pi", "REST APIs"],
    github: "https://github.com/rakshit-21/SahYatri",
    signal: "Computer Vision + Transit Intelligence",
  },
  {
    id: 2,
  title: "TripMind AI",
  description:
    "An LLM-powered travel planning platform that transforms natural language prompts into structured, multi-day travel itineraries using Groq-hosted LLaMA models and FastAPI.",
  image: tripmindImg, // update with your image variable
  technologies: [
    "React",
    "Vite",
    "FastAPI",
    "Python",
    "LLaMA",
    "Groq",
    "REST APIs"
  ],
  github: "https://github.com/rakshit-21/TripMind-AI", // update if different
  signal: "LLM-Powered Travel Planning",
  },
  {
      id: 3,
  title: "SpendWise",
  description:
    "A full-stack expense management application featuring secure JWT authentication, real-time expense tracking, category-wise analytics, and interactive financial dashboards.",
  image: spendwiseImg, // update with your image variable
  technologies: [
    "React",
    "Express",
    "Node.js",
    "Tailwind CSS",
    "Framer Motion",
    "Chart.js",
    "JWT"
  ],
  github: "https://github.com/rakshit-21/SpendWise", // update if different
  signal: "Finance Management Platform",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.12),transparent_30rem),radial-gradient(circle_at_80%_85%,rgba(168,85,247,0.13),transparent_34rem)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-reveal mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">Selected Work</p>
            <h2 className="text-4xl font-black text-white sm:text-5xl justify-center text-center">Take a look at my Projects.</h2>
          </div>
          <a
            href="https://github.com/rakshit-21"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-cyan-100 transition hover:-translate-y-1 hover:bg-cyan-300/15"
          >
            GitHub Archive
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="section-reveal gradient-border glass-panel group overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 120}ms` }}
              data-cursor="hover"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-110 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-cyan-300/25 bg-slate-950/60 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-cyan-100 backdrop-blur">
                  {project.signal}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-black text-white">{project.title}</h3>
                <p className="mt-3 min-h-24 text-sm leading-7 text-slate-400">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-white/[0.06] px-3 py-1 text-xs font-semibold text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-cyan-200 transition hover:text-white"
                >
                  View Code
                  <span className="transition group-hover:translate-x-1">-&gt;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
