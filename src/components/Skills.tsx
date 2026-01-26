'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Database as DatabaseIcon, Server } from 'lucide-react'
import {
  SiPhp, SiPython, SiTypescript, SiDart,
  SiHtml5, SiCss3, SiJavascript, SiReact, SiVuedotjs, SiNextdotjs, SiTailwindcss,
  SiLaravel, SiCodeigniter, SiFlask, SiWordpress,
  SiMysql, SiPostgresql, SiMongodb, SiSqlite
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { useLanguage } from './LanguageProvider'
import { ReactNode } from 'react'

type Skill = {
  name: string;
  description: string;
  icon: ReactNode;
}
type SkillCategory = {
  title: string;
  skills: Skill[];
  icon: React.ElementType;
  color: string;
}

export default function Skills() {
  const { lang } = useLanguage()
  const texts = {
    fr: {
      title: 'Mes Compétences',
      desc: 'Un aperçu des technologies et outils que je maîtrise pour créer des applications web modernes et performantes.',
      categories: [
        {
          title: 'Langages de Programmation',
          skills: [
            { name: 'PHP', description: 'Développement web backend' },
            { name: 'Python', description: 'Scripting et développement' },
            { name: 'TypeScript', description: 'JavaScript typé' },
            { name: 'JAVA', description: 'Développement orienté objet' },
            { name: 'Dart', description: 'Développement mobile' },
          ]
        },
        {
          title: 'Frontend & Design',
          skills: [
            { name: 'HTML5', description: 'Structure web' },
            { name: 'CSS3', description: 'Style web' },
            { name: 'JavaScript', description: 'Interactivité web' },
            { name: 'React', description: 'Interface utilisateur' },
            { name: 'Vue.js', description: 'Framework progressif' },
            { name: 'Next.js', description: 'React full-stack' },
            { name: 'Tailwind CSS', description: 'CSS utility-first' },
          ]
        },
        {
          title: 'Backend & Frameworks',
          skills: [
            { name: 'Laravel', description: 'Framework PHP moderne' },
            { name: 'CodeIgniter', description: 'Framework PHP léger' },
            { name: 'Flask', description: 'Micro-framework Python' },
            { name: 'WordPress', description: 'CMS populaire' },
          ]
        },
        {
          title: 'Base de Données',
          skills: [
            { name: 'MySQL', description: 'SGBD relationnel' },
            { name: 'PostgreSQL', description: 'SGBD avancé' },
            { name: 'MongoDB', description: 'Base NoSQL' },
            { name: 'SQLite', description: 'Base légère' },
          ]
        }
      ]
    },
    en: {
      title: 'My Skills',
      desc: 'An overview of the technologies and tools I master to build modern and high-performance web applications.',
      categories: [
        {
          title: 'Programming Languages',
          skills: [
            { name: 'PHP', description: 'Backend web development' },
            { name: 'Python', description: 'Scripting and development' },
            { name: 'TypeScript', description: 'Typed JavaScript' },
            { name: 'JAVA', description: 'Object-oriented development' },
            { name: 'Dart', description: 'Mobile development' },
          ]
        },
        {
          title: 'Frontend & Design',
          skills: [
            { name: 'HTML5', description: 'Web structure' },
            { name: 'CSS3', description: 'Web styling' },
            { name: 'JavaScript', description: 'Web interactivity' },
            { name: 'React', description: 'User interface' },
            { name: 'Vue.js', description: 'Progressive framework' },
            { name: 'Next.js', description: 'Full-stack React' },
            { name: 'Tailwind CSS', description: 'Utility-first CSS' },
          ]
        },
        {
          title: 'Backend & Frameworks',
          skills: [
            { name: 'Laravel', description: 'Modern PHP framework' },
            { name: 'CodeIgniter', description: 'Lightweight PHP framework' },
            { name: 'Flask', description: 'Python micro-framework' },
            { name: 'WordPress', description: 'Popular CMS' },
          ]
        },
        {
          title: 'Databases',
          skills: [
            { name: 'MySQL', description: 'Relational DBMS' },
            { name: 'PostgreSQL', description: 'Advanced DBMS' },
            { name: 'MongoDB', description: 'NoSQL database' },
            { name: 'SQLite', description: 'Lightweight database' },
          ]
        }
      ]
    }
  }
  // Ajout des icônes pour chaque catégorie et chaque skill
  const skillCategories: SkillCategory[] = [
    {
      ...texts[lang].categories[0],
      icon: Code,
      color: 'from-pink-500 to-yellow-500',
      skills: [
        { ...texts[lang].categories[0].skills[0], icon: <SiPhp className="text-[#777bb4]" size={24} /> },
        { ...texts[lang].categories[0].skills[1], icon: <SiPython className="text-[#3776ab]" size={24} /> },
        { ...texts[lang].categories[0].skills[2], icon: <SiTypescript className="text-[#3178c6]" size={24} /> },
        { ...texts[lang].categories[0].skills[3], icon: <FaJava className="text-[#007396]" size={24} /> },
        { ...texts[lang].categories[0].skills[4], icon: <SiDart className="text-[#0175c2]" size={24} /> },
      ]
    },
    {
      ...texts[lang].categories[1],
      icon: Palette,
      color: 'from-blue-500 to-purple-500',
      skills: [
        { ...texts[lang].categories[1].skills[0], icon: <SiHtml5 className="text-[#e34f26]" size={24} /> },
        { ...texts[lang].categories[1].skills[1], icon: <SiCss3 className="text-[#1572b6]" size={24} /> },
        { ...texts[lang].categories[1].skills[2], icon: <SiJavascript className="text-[#f7df1e]" size={24} /> },
        { ...texts[lang].categories[1].skills[3], icon: <SiReact className="text-[#61dafb]" size={24} /> },
        { ...texts[lang].categories[1].skills[4], icon: <SiVuedotjs className="text-[#42b883]" size={24} /> },
        { ...texts[lang].categories[1].skills[5], icon: <SiNextdotjs className="text-gray-800" size={24} /> },
        { ...texts[lang].categories[1].skills[6], icon: <SiTailwindcss className="text-[#38bdf8]" size={24} /> },
      ]
    },
    {
      ...texts[lang].categories[2],
      icon: Server,
      color: 'from-green-500 to-blue-500',
      skills: [
        { ...texts[lang].categories[2].skills[0], icon: <SiLaravel className="text-[#ff2d20]" size={24} /> },
        { ...texts[lang].categories[2].skills[1], icon: <SiCodeigniter className="text-[#ee4623]" size={24} /> },
        { ...texts[lang].categories[2].skills[2], icon: <SiFlask className="text-[#000000]" size={24} /> },
        { ...texts[lang].categories[2].skills[3], icon: <SiWordpress className="text-[#21759b]" size={24} /> },
      ]
    },
    {
      ...texts[lang].categories[3],
      icon: DatabaseIcon,
      color: 'from-yellow-500 to-green-500',
      skills: [
        { ...texts[lang].categories[3].skills[0], icon: <SiMysql className="text-[#4479a1]" size={24} /> },
        { ...texts[lang].categories[3].skills[1], icon: <SiPostgresql className="text-[#336791]" size={24} /> },
        { ...texts[lang].categories[3].skills[2], icon: <SiMongodb className="text-[#47a248]" size={24} /> },
        { ...texts[lang].categories[3].skills[3], icon: <SiSqlite className="text-[#003b57]" size={24} /> },
      ]
    },
  ]

  return (
    <section id="skills" className="relative py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-extrabold text-gray-800 mb-6 relative inline-block"
          >
            <span className="relative">
              {texts[lang].title}
              <motion.span
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {texts[lang].desc}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category: SkillCategory, categoryIndex: number) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100 hover:border-blue-300 transition-all card-hover relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-green-50/0 group-hover:from-blue-50/50 group-hover:to-green-50/50 transition-all duration-300 -z-0"></div>
              
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8 relative z-10">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-green-100 shadow-lg group-hover:scale-110 transition-transform">
                  <category.icon size={32} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {category.skills.map((skill: Skill, skillIndex: number) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="group/skill bg-gradient-to-br from-blue-50 to-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all border border-blue-100 hover:border-blue-300 cursor-pointer"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="flex-shrink-0 p-2 rounded-lg bg-white shadow-sm group-hover/skill:scale-110 transition-transform">
                        {skill.icon}
                      </div>
                      <span className="font-bold text-gray-800 group-hover/skill:text-blue-600 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 