"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
// import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  const [activeSection, setActiveSection] = useState("home")
  const [cursor, setCursor] = useState({ x: -100, y: -100, hovering: false })

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handlePointerMove = (event) => {
      const target = event.target
      const hovering = Boolean(target.closest("a, button, input, textarea, [data-cursor='hover']"))
      setCursor({ x: event.clientX, y: event.clientY, hovering })
    }

    window.addEventListener("pointermove", handlePointerMove)
    return () => window.removeEventListener("pointermove", handlePointerMove)
  }, [])

  return (
    <div className="site-shell bg-slate-950 text-white min-h-screen">
      <div
        className={`custom-cursor ${cursor.hovering ? "is-hovering" : ""}`}
        style={{ left: cursor.x, top: cursor.y }}
      />
      <div className="custom-cursor-dot" style={{ left: cursor.x, top: cursor.y }} />
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* <Experience /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
