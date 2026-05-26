'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, MapPin, Sparkles } from 'lucide-react'
import { FaGithub, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { useLanguage } from './LanguageProvider'

const TECH_STACK = ['React', 'Next.js', 'TypeScript', 'Laravel', 'Vue.js', 'Flutter']

export default function Hero() {
  const name = 'KEVIN Annop Soraya'
  const [displayedName, setDisplayedName] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const { lang } = useLanguage()

  const texts = {
    fr: {
      badge: 'Disponible pour vos projets',
      greeting: 'Bonjour, je suis',
      subtitle: 'Développeur Full-stack',
      subtitleAccent: 'Web & Mobile',
      description:
        'Créateur de solutions digitales innovantes, j’accompagne entreprises et institutions dans le développement d’applications web et mobiles performantes, sécurisées et adaptées à leurs besoins métiers.',
      location: 'Madagascar · Master Informatique ENI Fianarantsoa',
      downloadCv: 'Télécharger CV',
      contact: 'Me contacter',
      scroll: 'Découvrir',
    },
    en: {
      badge: 'Open to new opportunities',
      greeting: 'Hi, I am',
      subtitle: 'Full-stack Developer',
      subtitleAccent: 'Web & Mobile',
      description:
        'Creator of innovative digital solutions, I support businesses and institutions in developing high-performance, secure, and tailor-made web and mobile applications adapted to their business needs.',
      location: 'Madagascar · Master\'s in CS at ENI Fianarantsoa',
      downloadCv: 'Download CV',
      contact: 'Contact me',
      scroll: 'Explore',
    },
  }

  const t = texts[lang]

  useEffect(() => {
    setDisplayedName('')
    setIsTyping(true)
    let i = 0
    let timeoutId: ReturnType<typeof setTimeout>

    function type() {
      if (i <= name.length) {
        setDisplayedName(name.slice(0, i))
        i++
        timeoutId = setTimeout(type, 90)
      } else {
        setIsTyping(false)
      }
    }

    type()
    return () => clearTimeout(timeoutId)
  }, [name])

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Soakaliana', label: 'GitHub', hoverClass: 'hover:border-[#181717] hover:bg-[#181717] hover:text-white' },
    { icon: MdEmail, href: 'mailto:kevinannopsoraya@gmail.com', label: 'Email', hoverClass: 'hover:border-[#EA4335] hover:bg-[#EA4335] hover:text-white' },
    { icon: FaWhatsapp, href: 'https://wa.me/261345140952', label: 'WhatsApp', hoverClass: 'hover:border-[#25D366] hover:bg-[#25D366] hover:text-white', isExternal: true },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden hero-grid">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-light via-white to-white" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-32 left-8 w-64 h-64 bg-accent/15 rounded-full blur-3xl animate-blob opacity-50" />
        <div className="absolute top-48 right-12 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-blob animation-delay-2000 opacity-40" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-black/70 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <Sparkles size={14} className="text-accent" />
              {t.badge}
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg sm:text-xl text-accent font-semibold mb-3 tracking-wide"
          >
            {t.greeting}
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-black mb-5 leading-tight"
          >
            <span className="relative inline-block">
              {displayedName}
              {isTyping && (
                <motion.span
                  className="inline-block text-accent ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  |
                </motion.span>
              )}
            </span>
          </motion.h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mb-6"
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-black/85">
              {t.subtitle}
              <span className="text-accent"> · </span>
              <span className="text-accent">{t.subtitleAccent}</span>
            </p>
            <motion.div
              className="mx-auto mt-4 h-1 w-20 bg-accent rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-base sm:text-lg text-black/55 mb-4 max-w-2xl mx-auto leading-relaxed"
          >
            {t.description}
          </motion.p>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="inline-flex items-center gap-2 text-sm text-black/45 mb-10"
          >
            <MapPin size={15} className="text-accent shrink-0" />
            {t.location}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
          >
            <motion.a
              href="/CV%20%20KEVIN%20Annop%20Soraya.pdf"
              download
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group relative bg-accent text-white px-8 py-3.5 rounded-xl font-bold text-base flex items-center gap-2.5 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all hover:bg-accent/90 min-w-[200px] justify-center"
            >
              <Download size={18} />
              {t.downloadCv}
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 rounded-xl font-bold text-base border-2 border-accent/30 text-accent bg-white/80 backdrop-blur-sm hover:border-accent hover:bg-accent-light transition-all min-w-[200px] text-center"
            >
              {t.contact}
            </motion.a>
          </motion.div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-2 mb-10 max-w-xl mx-auto"
          >
            {TECH_STACK.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.65 + index * 0.05 }}
                className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-white/70 border border-black/8 text-black/60 backdrop-blur-sm shadow-sm"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((social, index) => {
              const extraProps = social.isExternal
                ? { target: '_blank' as const, rel: 'noopener noreferrer' }
                : {}
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  {...extraProps}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 + index * 0.08 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3.5 rounded-xl bg-white border border-black/10 text-black/70 shadow-sm transition-all ${social.hoverClass}`}
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-black/35 hover:text-accent transition-colors"
        aria-label={t.scroll}
      >
        <span className="text-xs font-medium tracking-widest uppercase">{t.scroll}</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  )
}
