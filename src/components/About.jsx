import profileImg from "../assets/rakshit.jpeg"

const identityCards = [
  "B.Tech Student",
  "Embedded Systems Enthusiast",
  "IoT Developer",
  "AI & Computer Vision Explorer",
]

const timeline = [
  {
    period: "Now",
    title: "Computer Science and Electronics Engineering",
    detail: "Building a foundation across software, circuits, firmware thinking, and connected intelligence.",
  },
  {
    period: "Lab",
    title: "Embedded + IoT Experiments",
    detail: "Working with Arduino, ESP32, Raspberry Pi, sensors, and real-time data pipelines.",
  },
  {
    period: "AI",
    title: "Computer Vision and Generative Interfaces",
    detail: "Exploring YOLO, Gemini-powered tools, and AI-enhanced user experiences.",
  },
]

const orbitTech = ["ESP32", "React", "AI", "IoT", "C++", "Python"]

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(34,211,238,0.11),transparent_28rem),radial-gradient(circle_at_85%_70%,rgba(168,85,247,0.12),transparent_32rem)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-reveal mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">About Rakshit</p>
          <h2 className="text-4xl font-black text-white sm:text-5xl">Engineer in the making. Builder by instinct.</h2>
          <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-500" />
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="section-reveal relative mx-auto flex h-[440px] w-full max-w-[440px] items-center justify-center">
            <div className="absolute inset-7 rounded-full border border-cyan-300/20 orbit" />
            <div className="absolute inset-14 rounded-full border border-purple-300/20 orbit-reverse" />
            {orbitTech.map((tech, index) => {
              const angle = (index / orbitTech.length) * Math.PI * 2
              const x = Math.cos(angle) * 178
              const y = Math.sin(angle) * 178

              return (
                <span
                  key={tech}
                  className="absolute rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-100 shadow-[0_0_22px_rgba(34,211,238,0.18)] backdrop-blur"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                  {tech}
                </span>
              )
            })}
            <div className="glass-panel gradient-border relative h-72 w-72 overflow-hidden rounded-full p-2">
              <img src={profileImg} alt="Rakshit profile" className="h-full w-full rounded-full object-cover" />
            </div>
          </div>

          <div className="space-y-8">
            <div className="section-reveal glass-panel rounded-2xl p-8">
              <p className="text-lg leading-8 text-slate-300">
                I am Rakshit, a Computer Science and Electronics Engineering student passionate about Full Stack Development, IoT Systems, and Intelligent Applications. I enjoy building end-to-end solutions that seamlessly connect hardware and software, from responsive web applications and scalable backend services to smart IoT devices. My focus is on creating technology that is not only visually appealing but also practical, efficient, and capable of solving real-world problems.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {identityCards.map((item, index) => (
                <div
                  key={item}
                  className="section-reveal gradient-border glass-panel rounded-xl p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="mb-4 h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-300/25 to-purple-500/25 p-2 text-cyan-100">
                    <div className="h-full w-full rounded border border-cyan-200/40" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{item}</h3>
                </div>
              ))}
            </div>

            <div className="section-reveal glass-panel rounded-2xl p-7">
              <div className="space-y-6">
                {timeline.map((item) => (
                  <div key={item.title} className="relative pl-10">
                    <span className="absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-cyan-200 bg-slate-950 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />
                    <span className="absolute left-[7px] top-6 h-full w-px bg-gradient-to-b from-cyan-300/50 to-transparent last:hidden" />
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-purple-200">{item.period}</p>
                    <h3 className="mt-1 text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-slate-400">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
