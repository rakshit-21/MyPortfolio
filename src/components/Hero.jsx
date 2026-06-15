"use client"

const letters = "Rakshit\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Suneja".split("")

const particles = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  x: `${(index * 29) % 100}%`,
  y: `${(index * 47) % 100}%`,
  duration: `${8 + (index % 8)}s`,
}))

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-4 pt-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_32rem),radial-gradient(circle_at_85%_20%,rgba(168,85,247,0.2),transparent_34rem),linear-gradient(135deg,#02040d,#071126_52%,#030712)]" />
      <div className="particle-field absolute inset-0">
        {particles.map((particle) => (
          <span
            key={particle.id}
            style={{ "--x": particle.x, "--y": particle.y, "--duration": particle.duration }}
          />
        ))}
      </div>

      <div className="absolute left-8 top-28 h-28 w-28 rotate-12 border border-cyan-300/20 bg-cyan-300/5 blur-[0.2px] float-slow" />
      <div className="absolute bottom-24 right-12 h-36 w-36 rounded-full border border-purple-400/20 bg-purple-500/10 float-medium" />

      
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 py-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-8 section-reveal">
          
          {/* <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_#22d3ee]" />
            Systems online
          </div>
 */}
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.34em] text-slate-400">Electronics and Communication Engineering</p>
            <h1 className="neon-text text-6xl font-black leading-none text-white sm:text-7xl lg:text-8xl">
              {letters.map((letter, index) => (
                <span key={`${letter}-${index}`} className="typing-letter" style={{ "--i": index }}>
                  {letter}
                </span>
              ))}
            </h1>
            <div className="max-w-3xl overflow-hidden rounded-full border border-white/10 bg-white/5 p-1">
              <div className="h-2 w-full origin-left animate-[pulse_1.2s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-500" />
            </div>
            <p className="max-w-3xl text-xl font-medium text-slate-200 sm:text-2xl">
              Full Stack Developer | IoT Developer | AI/ML Enthusiast | Software Engineer 
            </p>
            <p className="max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              I build intelligent connected systems where hardware, computer vision, and polished web interfaces work together.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => scrollToSection("projects")}
              className="group rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_0_35px_rgba(34,211,238,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_55px_rgba(168,85,247,0.42)]"
            >
              View Projects
            </button>
            <a
              href="Rakshit_Resume_SDE.pdf"
              download
              className="rounded-lg border border-cyan-300/35 bg-white/5 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-cyan-100 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:bg-cyan-300/10"
            >
              Download Resume
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="rounded-lg border border-purple-300/35 bg-purple-500/10 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-purple-100 transition duration-300 hover:-translate-y-1 hover:border-purple-200 hover:bg-purple-400/15"
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="relative mx-auto h-[520px] w-full max-w-[620px] section-reveal" data-cursor="hover">
          <div className="absolute inset-x-10 top-10 h-64 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/5 blur-3xl" />
          <div className="glass-panel monitor-glow absolute left-8 top-12 h-44 w-56 rotate-[-7deg] rounded-lg p-4 sm:left-0">
            <div className="scanline" />
            <div className="mb-3 flex gap-2">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              <span className="h-2 w-2 rounded-full bg-yellow-300" />
              <span className="h-2 w-2 rounded-full bg-green-300" />
            </div>
            <div className="space-y-2 text-xs text-cyan-200">
              <p>{">"} boot rakshit.dev</p>
              <p className="text-purple-200">sensor_bus: active</p>
              <p>vision_model: loaded</p>
              <p className="text-slate-300">deploying portfolio UI...</p>
            </div>
          </div>

          <div className="glass-panel monitor-glow absolute right-0 top-2 h-52 w-64 rotate-[6deg] rounded-lg p-4">
            <div className="scanline" />
            <div className="grid h-full grid-cols-3 gap-2">
              {Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  className="rounded border border-white/10 bg-gradient-to-br from-cyan-300/20 to-purple-500/10"
                />
              ))}
            </div>
          </div>

          <div className="glass-panel monitor-glow absolute bottom-16 left-1/2 h-72 w-[78%] -translate-x-1/2 rounded-xl p-5">
            <div className="scanline" />
            <div className="mb-5 h-3 w-28 rounded-full bg-cyan-200/50" />
            <div className="grid h-44 grid-cols-[1.2fr_0.8fr] gap-4">
              <div className="rounded-lg border border-cyan-300/20 bg-gradient-to-br from-cyan-300/15 to-blue-700/10 p-4">
                <div className="h-full rounded-md border border-cyan-200/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.22),transparent_45%),linear-gradient(90deg,transparent_48%,rgba(255,255,255,0.12)_49%,transparent_50%)]" />
              </div>
              <div className="space-y-3">
                <div className="h-8 rounded bg-purple-400/20" />
                <div className="h-8 rounded bg-cyan-400/20" />
                <div className="h-8 rounded bg-blue-400/20" />
                <div className="h-8 rounded bg-white/10" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 h-44 w-36 -translate-x-1/2">
            <div className="mx-auto h-16 w-16 rounded-full bg-slate-950 shadow-[0_0_42px_rgba(34,211,238,0.5)]" />
            <div className="mx-auto mt-[-6px] h-28 w-32 rounded-t-[4rem] bg-gradient-to-b from-slate-900 to-black shadow-[0_0_36px_rgba(0,0,0,0.75)]" />
          </div>

          <div className="absolute bottom-8 left-1/2 h-20 w-80 -translate-x-1/2 rounded-[100%] bg-cyan-300/10 blur-2xl" />
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 text-slate-400 transition hover:text-cyan-200"
        aria-label="Scroll to about section"
      >
        <span className="block h-12 w-7 rounded-full border border-cyan-200/30 p-1">
          <span className="mx-auto block h-2 w-2 animate-bounce rounded-full bg-cyan-200" />
        </span>
      </button>
    </section>
  )
}

export default Hero
