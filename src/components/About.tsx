'use client'

import { motion } from 'framer-motion'
import { Heart, Music, Utensils } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from './LanguageProvider'

export default function About() {
  const { lang } = useLanguage()
  const texts = {
    fr: `Maîtrisant l’art du développement web et mobile, je suis un développeur Full-stack passionné par l’innovation et la qualité. Que ce soit en freelance, en entreprise ou à l’université, j’ai accompagné des clients et des équipes dans la réalisation de solutions digitales performantes, sur-mesure et sécurisées.<br />
Créatif, rigoureux et à l’écoute, j’aime transformer les idées en applications concrètes, intuitives et évolutives. Mon expertise couvre l’ensemble du cycle de développement : de la conception à la mise en production, en passant par l’optimisation de l’expérience utilisateur et la sécurité.<br />
Si vous recherchez un professionnel capable de donner vie à vos projets web ou mobiles, d’apporter une réelle valeur ajoutée et de relever de nouveaux défis, je suis prêt à collaborer pour concrétiser votre vision digitale.`,
    en: `Mastering the art of web and mobile development, I am a passionate Full-stack developer driven by innovation and quality. Whether as a freelancer, in a company or at university, I have supported clients and teams in delivering high-performance, tailor-made and secure digital solutions.<br />
Creative, rigorous and attentive, I love turning ideas into concrete, intuitive and scalable applications. My expertise covers the entire development cycle: from design to production, including user experience optimization and security.<br />
If you are looking for a professional able to bring your web or mobile projects to life, add real value and take on new challenges, I am ready to collaborate and make your digital vision a reality.`
  }
  return (
    <section id="about" className="relative py-20 bg-cv-muted overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-40 -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-black/10 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-80 h-80 mx-auto bg-white rounded-full flex items-center justify-center shadow-2xl border-8 border-black/15 overflow-hidden"
              >
                <Image
                  src="/1194HF.png"
                  alt="Photo de Kevin Annop Soraya"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent"></div>
              </motion.div>
            </div>
              <div className="grid grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl transition-all border-2 border-black/15">
                  <Music size={28} className="text-black group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-xl font-bold text-black group-hover:underline transition-colors">Musique</div>
                <div className="text-sm text-black/55">Guitare, flûte</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl transition-all border-2 border-black/15">
                  <Heart size={28} className="text-black group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-xl font-bold text-black group-hover:underline transition-colors">Basketball</div>
                <div className="text-sm text-black/55">Sport</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl transition-all border-2 border-black/15">
                  <Utensils size={28} className="text-black group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-xl font-bold text-black group-hover:underline transition-colors">Cuisine</div>
                <div className="text-sm text-black/55">Passion</div>
              </motion.div>
            </div>
          </motion.div>
          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-5xl font-extrabold text-black mb-6 relative"
              >
                <span className="relative">
                  À propos de moi
                  <motion.span
                    className="absolute -bottom-3 left-0 w-24 h-1 bg-black rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                </span>
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-black/10"
            >
              <p className="text-lg text-black/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: texts[lang] }} />
            </motion.div>
         
           
          
          </motion.div>
        </div>
      </div>
    </section>
  )
} 