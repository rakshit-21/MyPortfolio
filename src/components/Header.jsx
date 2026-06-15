"use client"

import { useState } from "react"

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="glass-panel mx-auto max-w-7xl rounded-2xl px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <button
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-3 text-left"
            aria-label="Go to home"
          >
            {/* <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-sm font-black text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.18)]">
              R
            </span>
            <span className="hidden text-sm font-bold uppercase tracking-[0.22em] text-slate-200 sm:block">
              Rakshit
            </span> */}
          </button>

          <div className="hidden items-center rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-200 ${
                  activeSection === item.id
                    ? "bg-cyan-300/15 text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.18)]"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="Rakshit_Resume_SDE.pdf"
              download
              className="rounded-lg bg-gradient-to-r from-cyan-400 to-purple-600 px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(34,211,238,0.28)]"
            >
              Resume
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-100 md:hidden"
            aria-label="Toggle navigation menu"
          >
            <span className="relative h-5 w-6">
              <span
                className={`absolute left-0 h-0.5 w-6 bg-current transition ${isMenuOpen ? "top-2 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-6 bg-current transition ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 h-0.5 w-6 bg-current transition ${isMenuOpen ? "top-2 -rotate-45" : "top-4"}`}
              />
            </span>
          </button>
        </div>

        {isMenuOpen && (
          <div className="space-y-2 border-t border-white/10 pb-4 pt-3 md:hidden">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                  activeSection === item.id ? "bg-cyan-300/15 text-cyan-100" : "text-slate-300 hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="Rakshit_Resume_SDE.pdf"
              download
              className="block rounded-xl bg-gradient-to-r from-cyan-400 to-purple-600 px-4 py-3 text-center text-sm font-bold text-white"
            >
              Download Resume
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
