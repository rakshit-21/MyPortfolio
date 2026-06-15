const skillCategories = [
  {
    title: "Firmware Logic",
    caption: "Low-level thinking, fast iteration, and board-level experiments.",
    skills: ["C", "C++", "Arduino", "Arduino IDE", "ESP32", "Raspberry Pi", "Linux"],
  },
  {
    title: "Intelligent Apps",
    caption: "Interfaces and APIs that turn data into usable product experiences.",
    skills: ["Python", "JavaScript", "React", "FastAPI", "RESTful APIs", "Tailwind CSS", "Shadcn UI"],
  },
  {
    title: "AI + Systems",
    caption: "Computer vision, generative AI, and connected decision systems.",
    skills: ["Machine Learning", "Generative AI", "Langchain", "YOLOv8", "MySQL", "Postman", "Git", "Figma"],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#030712] py-24">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(34,211,238,0.07),transparent_30%,rgba(168,85,247,0.08)_70%,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-reveal mb-16 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">Capabilities</p>
          <h2 className="text-4xl font-black text-white sm:text-5xl">A stack built for connected intelligence.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            From sensors and microcontrollers to React dashboards and AI workflows, these are the tools I use to build
            practical, future-facing systems.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillCategories.map(({ title, caption, skills }, categoryIndex) => (
            <div
              key={title}
              className="section-reveal gradient-border glass-panel group rounded-2xl p-7 transition duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
              data-cursor="hover"
            >
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-black text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{caption}</p>
                </div>
                <div className="h-12 w-12 rounded-xl border border-cyan-300/20 bg-cyan-300/10 shadow-[0_0_24px_rgba(34,211,238,0.14)] transition group-hover:rotate-6" />
              </div>

              <div className="flex flex-wrap gap-3">
                {skills.map((tech, index) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-sm font-medium text-slate-300 transition duration-200 hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:text-cyan-100"
                    style={{ animationDelay: `${index * 45}ms` }}
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
  )
}

export default Skills
