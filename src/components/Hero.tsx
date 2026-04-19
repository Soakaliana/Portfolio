'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { FaGithub, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { useLanguage } from './LanguageProvider'

export default function Hero() {
  const name = 'KEVIN Annop Soraya'
  const [displayedName, setDisplayedName] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const { lang } = useLanguage()

  const texts = {
    fr: {
      subtitle: 'Développeur Full-stack | Web & Mobile',
      description: `Passionné par l’innovation digitale, j’accompagne entreprises et institutions dans la création de solutions web et mobiles performantes, sur-mesure et sécurisées. Actuellement en Master Informatique à l’ENI Fianarantsoa, je mets mon expertise au service de vos projets, en freelance, en stage ou en collaboration.`
    },
    en: {
      subtitle: 'Full-stack Developer | Web & Mobile',
      description: `Passionate about digital innovation, I help companies and institutions create high-performance, tailor-made and secure web and mobile solutions. Currently pursuing a Master’s in Computer Science at ENI Fianarantsoa, I put my expertise at the service of your projects, as a freelancer, intern or collaborator.`
    }
  }

  useEffect(() => {
    setDisplayedName('')
    setIsTyping(true)
    let i = 0
    function type() {
      if (i <= name.length) {
        setDisplayedName(name.slice(0, i))
        i++
        setTimeout(type, 90)
      } else {
        setIsTyping(false)
      }
    }
    type()
    return () => setIsTyping(false)
  }, [name])

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/omis246',
      label: 'GitHub',
      color: '#181717',
      bg: 'bg-white',
      hover: 'hover:bg-[#181717] hover:text-white',
      border: 'border-[#181717]/20',
    },
    {
      icon: MdEmail,
      href: 'mailto:kevinannopsoraya@gmail.com',
      label: 'Email',
      color: '#EA4335',
      bg: 'bg-white',
      hover: 'hover:bg-[#EA4335] hover:text-white',
      border: 'border-[#EA4335]/20',
    },
    {
      icon: FaWhatsapp,
      href: 'https://wa.me/261345140952', // Ancien numéro
      label: 'WhatsApp',
      color: '#25D366',
      bg: 'bg-white',
      hover: 'hover:bg-[#25D366] hover:text-white',
      border: 'border-[#25D366]/20',
      isExternal: true,
    },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cv-muted rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cv-muted rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-cv-muted rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8"
          >
            <div className="inline-block p-3 rounded-full bg-cv-muted mb-6 shadow-lg border border-black/10">
              <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center shadow-xl">
                <span className="text-3xl">👨‍💻</span>
              </div>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-black mb-6 drop-shadow-sm"
          >
            <span className="relative inline-block">
              <span className="text-black">
                {displayedName}
              </span>
              {isTyping ? (
                <motion.span 
                  className="inline-block text-black ml-2"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  |
                </motion.span>
              ) : null}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-black/70 font-semibold mb-4 relative tracking-[0.18em] uppercase"
          >
            <span className="relative inline-block">
              {texts[lang].subtitle}
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-black rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl text-black/60 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {texts[lang].description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <motion.a
              href="/CV%20%20KEVIN%20Annop%20Soraya.pdf"
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-black text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all overflow-hidden hover:bg-black/90"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
              <Download size={20} className="relative z-10" />
              <span className="relative z-10">Télécharger CV</span>
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative border-2 border-black text-black px-10 py-4 rounded-xl font-bold text-lg hover:bg-cv-muted transition-all overflow-hidden backdrop-blur-sm bg-white"
            >
              <span className="relative z-10">Me contacter</span>
              <motion.div
                className="absolute inset-0 bg-cv-muted opacity-0 group-hover:opacity-100 -z-0"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social, index) => {
              const extraProps = social.isExternal
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {}
              const iconStyle = { color: '#000000' }
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  {...extraProps}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative p-4 rounded-full bg-white backdrop-blur-sm border-2 border-black/15 shadow-lg hover:shadow-xl transition-all hover:border-black"
                  aria-label={social.label}
                >
                  <social.icon size={28} style={iconStyle} className="relative z-10" />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-cv-muted opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 