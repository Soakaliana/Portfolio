'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MenuIcon, XIcon } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { lang, setLang } = useLanguage()

  const texts = {
    fr: {
      logo: 'Portfolio',
      menu: 'Menu',
      nav: [
        { name: 'Accueil', href: '#home' },
        { name: 'À propos', href: '#about' },
        { name: 'Compétences', href: '#skills' },
        { name: 'Projets', href: '#projects' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    en: {
      logo: 'Portfolio',
      menu: 'Menu',
      nav: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
      ],
    },
  }
  const navItems = texts[lang].nav

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    if (isMenuOpen) {
      window.addEventListener('keydown', onKeyDown)
    }
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isMenuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 glass border-b border-black/10 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-extrabold text-accent"
            >
              {texts[lang].logo}
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className="relative text-black/60 hover:text-accent transition-colors font-semibold group"
                >
                  {item.name}
                  <motion.span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <motion.button
                onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-xl bg-cv-muted text-black hover:bg-accent hover:text-white transition-all font-bold shadow-md hover:shadow-lg"
                aria-label={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
              >
                {lang === 'fr' ? 'FR' : 'EN'}
              </motion.button>

              <motion.button
                onClick={() => setIsMenuOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="md:hidden p-2 rounded-xl bg-cv-muted text-black hover:bg-accent hover:text-white transition-all shadow-md hover:shadow-lg"
                aria-label={texts[lang].menu}
                aria-expanded={isMenuOpen}
              >
                <MenuIcon size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm md:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Sidebar panel */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="fixed top-0 right-0 z-[70] h-full w-[min(85vw,320px)] bg-white shadow-2xl flex flex-col md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label={texts[lang].menu}
            >
              {/* Sidebar header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-black/10 shrink-0">
                <span className="text-xl font-extrabold text-accent">{texts[lang].logo}</span>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-xl bg-cv-muted text-black hover:bg-accent hover:text-white transition-all"
                  aria-label="Fermer le menu"
                >
                  <XIcon size={20} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-4 py-6">
                <ul className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + index * 0.05 }}
                    >
                      <a
                        href={item.href}
                        onClick={closeMenu}
                        className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-semibold text-black/70 hover:text-accent hover:bg-accent-light transition-colors"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Sidebar footer */}
              <div className="px-6 py-5 border-t border-black/10 shrink-0">
                <button
                  onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
                  className="w-full py-3 rounded-xl bg-accent text-white font-bold text-sm hover:bg-accent/90 transition-colors"
                >
                  {lang === 'fr' ? 'Passer en anglais (EN)' : 'Switch to French (FR)'}
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
