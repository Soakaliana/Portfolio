'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Mail } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

export default function Footer() {
  const { lang } = useLanguage()
  const currentYear = new Date().getFullYear()

  const texts = {
    fr: {
      brand: 'Portfolio',
      desc: `Développeur Full Stack passionné par la création d'applications web modernes et performantes.`,
      sections: [
        {
          title: 'Navigation',
          links: [
            { name: 'Accueil', href: '#home' },
            { name: 'À propos', href: '#about' },
            { name: 'Compétences', href: '#skills' },
            { name: 'Projets', href: '#projects' },
            { name: 'Contact', href: '#contact' },
          ]
        },
        {
          title: 'Services',
          links: [
            { name: 'Développement Web', href: '#' },
            { name: 'Applications Mobile', href: '#' },
            { name: 'Consulting', href: '#' },
            { name: 'Formation', href: '#' },
          ]
        },
        {
          title: 'Technologies',
          links: [
            { name: 'React & Next.js', href: '#' },
            { name: 'TypeScript', href: '#' },
            { name: 'Node.js', href: '#' },
           
          ]
        }
      ],
     
      copyright: `© ${currentYear} Portfolio. Tous droits réservés.`,
      madeWith: 'Développé avec',
      and: 'et Next.js',
      privacy: 'Politique de confidentialité',
      terms: "Conditions d'utilisation",
      legal: 'Mentions légales',
      backToTop: 'Retour en haut',
    },
    en: {
      brand: 'Portfolio',
      desc: `Full Stack developer passionate about creating modern and high-performance web applications.`,
      sections: [
        {
          title: 'Navigation',
          links: [
            { name: 'Home', href: '#home' },
            { name: 'About', href: '#about' },
            { name: 'Skills', href: '#skills' },
            { name: 'Projects', href: '#projects' },
            { name: 'Experience', href: '#experience' },
            { name: 'Contact', href: '#contact' },
          ]
        },
        {
          title: 'Services',
          links: [
            { name: 'Web Development', href: '#' },
            { name: 'Mobile Apps', href: '#' },
            { name: 'Consulting', href: '#' },
            { name: 'Training', href: '#' },
          ]
        },
        {
          title: 'Technologies',
          links: [
            { name: 'React & Next.js', href: '#' },
            { name: 'TypeScript', href: '#' },
            { name: 'Node.js', href: '#' },
            { name: 'MongoDB', href: '#' },
          ]
        }
      ],
      newsletter: 'Stay informed',
      newsletterDesc: 'Get the latest news about my projects and technologies',
      emailPlaceholder: 'Your email',
      subscribe: 'Subscribe',
      copyright: `© ${currentYear} Portfolio. All rights reserved.`,
      madeWith: 'Made with',
      and: 'and Next.js',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      legal: 'Legal Notice',
      backToTop: 'Back to top',
    }
  }
  const t = texts[lang]

  const footerLinks = {
    sections: [
      {
        title: 'Navigation',
        links: [
          { name: 'Accueil', href: '#home' },
          { name: 'À propos', href: '#about' },
          { name: 'Compétences', href: '#skills' },
          { name: 'Projets', href: '#projects' },
          { name: 'Expérience', href: '#experience' },
          { name: 'Contact', href: '#contact' },
        ]
      },
      {
        title: 'Services',
        links: [
          { name: 'Développement Web', href: '#' },
          { name: 'Applications Mobile', href: '#' },
          { name: 'Consulting', href: '#' },
          { name: 'Formation', href: '#' },
        ]
      },
      {
        title: 'Technologies',
        links: [
          { name: 'React & Next.js', href: '#' },
          { name: 'TypeScript', href: '#' },
          { name: 'Node.js', href: '#' },
          { name: 'MongoDB', href: '#' },
        ]
      }
    ],
    social: [
      { icon: Github, href: 'https://github.com/omis246', label: 'GitHub' },
      { icon: Mail, href: 'mailto:kevinannopsoraya@gmail.com', label: 'Email' },
    ]
  }
  
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold mb-4">{t.brand}</h3>
            <p className="text-gray-300 mb-6">
              {t.desc}
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {t.sections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 mb-8"
        >
           
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>{t.copyright}</span>
              <span>•</span>
              <span>{t.madeWith}</span>
              <Heart size={16} className="text-red-500" />
              <span>{t.and}</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <a href="#" className="hover:text-white transition-colors">
                {t.privacy}
              </a>
              <a href="#" className="hover:text-white transition-colors">
                {t.terms}
              </a>
              <a href="#" className="hover:text-white transition-colors">
                {t.legal}
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-green-500 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center text-white z-50"
        aria-label={t.backToTop}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </footer>
  )
} 