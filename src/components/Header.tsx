'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MenuIcon, XIcon } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { lang, setLang } = useLanguage()

  const texts = {
    fr: {
      logo: 'Portfolio',
      nav: [
        { name: 'Accueil', href: '#home' },
        { name: 'À propos', href: '#about' },
        { name: 'Compétences', href: '#skills' },
        { name: 'Projets', href: '#projects' },
        { name: 'Contact', href: '#contact' },
      ]
    },
    en: {
      logo: 'Portfolio',
      nav: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
      ]
    }
  }
  const navItems = texts[lang].nav

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-black/10 shadow-lg" role="header"
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-extrabold text-black"
            >
              {texts[lang].logo}
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className="relative text-black/60 hover:text-black transition-colors font-semibold group"
                >
                  {item.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                  />
                </motion.a>
              ))}
            </nav>

            {/* Lang Switcher & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {/* Lang Switcher */}
              <motion.button
                onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-xl bg-cv-muted text-black hover:bg-black hover:text-white transition-all font-bold shadow-md hover:shadow-lg"
              >
                {lang === 'fr' ? 'FR' : 'EN'}
              </motion.button>
              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="md:hidden p-2 rounded-xl bg-cv-muted text-black hover:bg-black hover:text-white transition-all shadow-md hover:shadow-lg"
              >
                {isMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden py-4 border-t border-black/10"
            >
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-black/60 hover:text-black transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </div>
    </motion.div>
  )
} 