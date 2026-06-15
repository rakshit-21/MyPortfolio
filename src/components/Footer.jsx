"use client"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const quickLinks = ["home", "about", "skills", "projects", "contact"]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="border-t border-white/10 bg-slate-950/95">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">RAKSHIT.IN</p>
            <p className="mt-3 max-w-xl text-slate-400">
              Software Engineering, IoT, AI, and polished web interfaces for practical connected products.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {quickLinks.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-semibold capitalize text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-100"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Rakshit Suneja. All rights reserved.</p>
          <p>Built with React, Tailwind CSS, glassmorphism, and a lot of signal.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
