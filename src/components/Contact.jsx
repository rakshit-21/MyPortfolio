"use client"

import emailjs from "@emailjs/browser"
import { useState } from "react"

const contactInfo = [
  {
    title: "Email",
    value: "contact@rakshitsuneja.in",
    link: "mailto:contact@rakshitsuneja.in",
  },
  {
    title: "Phone",
    value: "8595324975",
    link: "tel:8595324975",
  },
  {
    title: "Location",
    value: "Noida, Uttar Pradesh, India",
    link: null,
  },
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_MAIN_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setSubmitStatus("success")
          setFormData({ name: "", email: "", subject: "", message: "" })
          setIsSubmitting(false)
        },
        (error) => {
          console.error(error)
          setSubmitStatus("error")
          setIsSubmitting(false)
        },
      )
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-[#030712] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_70%,rgba(34,211,238,0.12),transparent_30rem),radial-gradient(circle_at_88%_25%,rgba(168,85,247,0.12),transparent_28rem)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-reveal mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">Contact</p>
          <h2 className="text-4xl font-black text-white sm:text-5xl">Let&apos;s build the next signal.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Have a project, collaboration, internship opportunity, or embedded systems idea? Send a message and I will
            get back to you.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="section-reveal glass-panel rounded-2xl p-8">
            <h3 className="text-2xl font-black text-white">Open channels</h3>
            <p className="mt-4 text-slate-400">
              I am interested in IoT systems, firmware-focused roles, AI products, and software that connects real-world
              signals to useful interfaces.
            </p>

            <div className="mt-8 space-y-4">
              {contactInfo.map((info) => (
                <div key={info.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">{info.title}</p>
                  {info.link ? (
                    <a href={info.link} className="mt-2 block text-lg font-semibold text-white transition hover:text-cyan-200">
                      {info.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-lg font-semibold text-white">{info.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com/rakshit-21"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-bold text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-100"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rakshit-suneja-03894b329/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-bold text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-100"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="section-reveal glass-panel rounded-2xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-300">Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60 focus:ring-4 focus:ring-cyan-300/10"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-300">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60 focus:ring-4 focus:ring-cyan-300/10"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-300">Subject</span>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60 focus:ring-4 focus:ring-cyan-300/10"
                  placeholder="What should we build?"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-300">Message</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full resize-none rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60 focus:ring-4 focus:ring-cyan-300/10"
                  placeholder="Tell me about your project or opportunity."
                />
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:shadow-[0_0_38px_rgba(34,211,238,0.28)] disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Transmit Message"}
              </button>

              {submitStatus === "success" && (
                <p className="text-center font-semibold text-cyan-200">Message sent successfully. I&apos;ll reply soon.</p>
              )}
              {submitStatus === "error" && (
                <p className="text-center font-semibold text-red-300">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
