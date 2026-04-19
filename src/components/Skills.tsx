'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Palette, Database as DatabaseIcon, Server, LayoutList, Cloud } from 'lucide-react'
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
  name: string
  description: string
  icon: ReactNode
}

type SkillCategory = {
  title: string
  skills: Skill[]
  icon: React.ElementType
}

type ViewMode = 'list' | 'cloud'

export default function Skills() {
  const { lang } = useLanguage()
  const [view, setView] = useState<ViewMode>('list')

  const texts = {
    fr: {
      title: 'Mes Compétences',
      desc: 'Un aperçu des technologies et outils que je maîtrise pour créer des applications web modernes et performantes.',
      viewList: 'Liste',
      viewCloud: 'Nuage',
      categories: [
        {
          title: 'Langages de Programmation',
          skills: [
            { name: 'PHP', description: 'Développement web backend' },
            { name: 'Python', description: 'Scripting et développement' },
            { name: 'TypeScript', description: 'JavaScript typé' },
            { name: 'JAVA', description: 'Développement orienté objet' },
            { name: 'Dart', description: 'Développement mobile' },
          ],
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
          ],
        },
        {
          title: 'Backend & Frameworks',
          skills: [
            { name: 'Laravel', description: 'Framework PHP moderne' },
            { name: 'CodeIgniter', description: 'Framework PHP léger' },
            { name: 'Flask', description: 'Micro-framework Python' },
            { name: 'WordPress', description: 'CMS populaire' },
          ],
        },
        {
          title: 'Base de Données',
          skills: [
            { name: 'MySQL', description: 'SGBD relationnel' },
            { name: 'PostgreSQL', description: 'SGBD avancé' },
            { name: 'MongoDB', description: 'Base NoSQL' },
            { name: 'SQLite', description: 'Base légère' },
          ],
        },
      ],
    },
    en: {
      title: 'My Skills',
      desc: 'An overview of the technologies and tools I master to build modern and high-performance web applications.',
      viewList: 'List',
      viewCloud: 'Tags',
      categories: [
        {
          title: 'Programming Languages',
          skills: [
            { name: 'PHP', description: 'Backend web development' },
            { name: 'Python', description: 'Scripting and development' },
            { name: 'TypeScript', description: 'Typed JavaScript' },
            { name: 'JAVA', description: 'Object-oriented development' },
            { name: 'Dart', description: 'Mobile development' },
          ],
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
          ],
        },
        {
          title: 'Backend & Frameworks',
          skills: [
            { name: 'Laravel', description: 'Modern PHP framework' },
            { name: 'CodeIgniter', description: 'Lightweight PHP framework' },
            { name: 'Flask', description: 'Python micro-framework' },
            { name: 'WordPress', description: 'Popular CMS' },
          ],
        },
        {
          title: 'Databases',
          skills: [
            { name: 'MySQL', description: 'Relational DBMS' },
            { name: 'PostgreSQL', description: 'Advanced DBMS' },
            { name: 'MongoDB', description: 'NoSQL database' },
            { name: 'SQLite', description: 'Lightweight database' },
          ],
        },
      ],
    },
  }

  const skillCategories: SkillCategory[] = [
    {
      ...texts[lang].categories[0],
      icon: Code,
      skills: [
        { ...texts[lang].categories[0].skills[0], icon: <SiPhp className="text-[#777bb4]" size={22} /> },
        { ...texts[lang].categories[0].skills[1], icon: <SiPython className="text-[#3776ab]" size={22} /> },
        { ...texts[lang].categories[0].skills[2], icon: <SiTypescript className="text-[#3178c6]" size={22} /> },
        { ...texts[lang].categories[0].skills[3], icon: <FaJava className="text-[#007396]" size={22} /> },
        { ...texts[lang].categories[0].skills[4], icon: <SiDart className="text-[#0175c2]" size={22} /> },
      ],
    },
    {
      ...texts[lang].categories[1],
      icon: Palette,
      skills: [
        { ...texts[lang].categories[1].skills[0], icon: <SiHtml5 className="text-[#e34f26]" size={22} /> },
        { ...texts[lang].categories[1].skills[1], icon: <SiCss3 className="text-[#1572b6]" size={22} /> },
        { ...texts[lang].categories[1].skills[2], icon: <SiJavascript className="text-[#f7df1e]" size={22} /> },
        { ...texts[lang].categories[1].skills[3], icon: <SiReact className="text-[#61dafb]" size={22} /> },
        { ...texts[lang].categories[1].skills[4], icon: <SiVuedotjs className="text-[#42b883]" size={22} /> },
        { ...texts[lang].categories[1].skills[5], icon: <SiNextdotjs className="text-black" size={22} /> },
        { ...texts[lang].categories[1].skills[6], icon: <SiTailwindcss className="text-[#38bdf8]" size={22} /> },
      ],
    },
    {
      ...texts[lang].categories[2],
      icon: Server,
      skills: [
        { ...texts[lang].categories[2].skills[0], icon: <SiLaravel className="text-[#ff2d20]" size={22} /> },
        { ...texts[lang].categories[2].skills[1], icon: <SiCodeigniter className="text-[#ee4623]" size={22} /> },
        { ...texts[lang].categories[2].skills[2], icon: <SiFlask className="text-[#000000]" size={22} /> },
        { ...texts[lang].categories[2].skills[3], icon: <SiWordpress className="text-[#21759b]" size={22} /> },
      ],
    },
    {
      ...texts[lang].categories[3],
      icon: DatabaseIcon,
      skills: [
        { ...texts[lang].categories[3].skills[0], icon: <SiMysql className="text-[#4479a1]" size={22} /> },
        { ...texts[lang].categories[3].skills[1], icon: <SiPostgresql className="text-[#336791]" size={22} /> },
        { ...texts[lang].categories[3].skills[2], icon: <SiMongodb className="text-[#47a248]" size={22} /> },
        { ...texts[lang].categories[3].skills[3], icon: <SiSqlite className="text-[#003b57]" size={22} /> },
      ],
    },
  ]

  const t = texts[lang]

  return (
    <section id="skills" className="relative py-20 bg-gradient-to-b from-cv-muted to-white overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-extrabold text-black mb-6 relative inline-block"
          >
            <span className="relative">
              {t.title}
              <motion.span
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-black rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h2>
          <p className="text-xl text-black/60 max-w-2xl mx-auto leading-relaxed mb-8">{t.desc}</p>

          <div
            className="inline-flex rounded-full border-2 border-black/15 bg-white p-1 shadow-sm"
            role="group"
            aria-label={lang === 'fr' ? 'Style d’affichage' : 'Display style'}
          >
            <button
              type="button"
              onClick={() => setView('list')}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                view === 'list' ? 'bg-black text-white' : 'text-black/70 hover:text-black'
              }`}
            >
              <LayoutList size={18} aria-hidden />
              {t.viewList}
            </button>
            <button
              type="button"
              onClick={() => setView('cloud')}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                view === 'cloud' ? 'bg-black text-white' : 'text-black/70 hover:text-black'
              }`}
            >
              <Cloud size={18} aria-hidden />
              {t.viewCloud}
            </button>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {view === 'list' ? (
              <motion.div
                key="list"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="bg-white border border-black/10 rounded-2xl shadow-lg overflow-hidden"
              >
                {skillCategories.map((category, categoryIndex) => (
                  <motion.article
                    key={category.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: categoryIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="border-b border-black/10 last:border-b-0 px-6 sm:px-10 py-9 sm:py-10"
                  >
                    <header className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-black bg-black text-white">
                        <category.icon size={22} strokeWidth={2} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base font-bold uppercase tracking-[0.14em] text-black">
                          {category.title}
                        </h3>
                        <div className="mt-2 h-1 w-16 bg-black" />
                      </div>
                    </header>

                    <ul className="divide-y divide-black/10">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.li
                          key={skill.name}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: Math.min(skillIndex * 0.03, 0.2) }}
                          viewport={{ once: true }}
                          className="group flex flex-col gap-2 py-4 first:pt-0 sm:grid sm:grid-cols-[minmax(0,11rem)_1fr] sm:items-start sm:gap-x-8"
                        >
                          <div className="flex items-center gap-3">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-black/15 bg-cv-muted">
                              {skill.icon}
                            </span>
                            <span className="font-semibold text-black">{skill.name}</span>
                          </div>
                          <p className="text-sm leading-relaxed text-black/60 sm:pt-0.5 pl-[3.25rem] sm:pl-0 sm:border-l sm:border-black/10 sm:pl-6">
                            {skill.description}
                          </p>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="cloud"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-10 sm:space-y-12"
              >
                {skillCategories.map((category, categoryIndex) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: categoryIndex * 0.06 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-black/20 bg-white text-black">
                        <category.icon size={18} strokeWidth={2} />
                      </span>
                      <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-black">
                        {category.title}
                      </h3>
                      <span className="hidden sm:block h-px flex-1 bg-black/15 min-w-[2rem]" aria-hidden />
                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {category.skills.map((skill) => (
                        <span
                          key={skill.name}
                          title={skill.description}
                          className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-cv-muted px-3 py-2 text-sm font-medium text-black shadow-sm transition-colors hover:border-black/30 hover:bg-white cursor-default"
                        >
                          <span className="flex shrink-0 [&>svg]:block">{skill.icon}</span>
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
