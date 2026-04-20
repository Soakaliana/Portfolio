'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Code, Globe, Expand, LayoutGrid, AlignLeft } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useState, useEffect } from 'react'
import type { FC } from 'react'
import Image from 'next/image'
import { useLanguage } from './LanguageProvider'

type Project = {
  title: string
  description: string
  technologies: string[]
  category: string
  icon: LucideIcon
  github: string
  live: string
  featured: boolean
  period?: string
  images?: string[]
}

type ViewMode = 'grid' | 'list'

export default function Projects() {
  const { lang } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [view, setView] = useState<ViewMode>('grid')

  const texts = {
    fr: {
      title: 'Mes Projets',
      desc: 'Découvrez une sélection de mes projets récents, démontrant mes compétences en développement web et mobile.',
      all: 'Tous les Projets',
      seeAll: 'Voir tous les projets',
      demo: 'Démo',
      detail: 'Voir le projet en détail',
      github: 'GitHub',
      period: 'Période',
      tech: 'Technologies',
      close: 'Fermer',
      noPeriod: 'Période non précisée',
      viewGrid: 'Grille',
      viewList: 'Liste',
      highlight: 'À la une',
    },
    en: {
      title: 'My Projects',
      desc: 'Discover a selection of my recent projects, showcasing my skills in web and mobile development.',
      all: 'All Projects',
      seeAll: 'See all projects',
      demo: 'Demo',
      detail: 'View project details',
      github: 'GitHub',
      period: 'Period',
      tech: 'Technologies',
      close: 'Close',
      noPeriod: 'No period specified',
      viewGrid: 'Grid',
      viewList: 'List',
      highlight: 'Featured',
    },
  }

  const projects: Project[] = [
    {
      title: 'Gestion de planning d’Entreprise',
      description:
        'Application web pour la gestion du personnel et la planification hebdomadaire des tâches, avec tableau de bord interactif et génération automatique de rapports PDF.',
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS'],
      category: 'Full Stack',
      icon: Globe,
      github: '#',
      live: '#',
      featured: true,
      period: 'Avril - Juin 2025',
      images: ['/affichage plannings.png', '/plannings.png'],
    },
    {
      title: 'Gestion de la scolarité Universitaire',
      description:
        'Application pour la gestion de la scolarité universitaire, suivi des notes, gestion financière, planification des emplois du temps, gestion des rôles et génération de documents PDF.',
      technologies: ['Laravel', 'Blade', 'MySQL', 'Bootstrap'],
      category: 'Full Stack',
      icon: Globe,
      github: '#',
      live: '#',
      featured: true,
      period: 'Décembre - Avril 2025',
      images: [
        '/login masca.png',
        '/filiere.png',
        '/matieres.png',
        '/edt.png',
        '/fiche de renseignement.png',
        '/bulletin archivé.png',
      ],
    },
    {
      title: ' MINICO',
      description: 'Application pour faciliter les problèmes de transports en utilisant la methode MINICO.',
      technologies: ['Python', 'Flask', 'Bootstrap'],
      category: 'Full Stack',
      icon: Globe,
      github: '#',
      live: 'https://transport-minico-flask.onrender.com/',
      featured: false,
      images: ['/minico.png'],
    },
    {
      title: 'Gestion des Congés',
      description:
        'Application pour la gestion des congés des employés, demandes, validation, calcul automatique des droits, historique, interface de consultation pour employé et responsable.',
      technologies: ['CodeIgniter', 'MySQL', 'Bootstrap'],
      category: 'Backend',
      icon: Code,
      github: '#',
      live: '#',
      featured: false,
      period: 'Août - Novembre 2023',
      images: [
        '/login.png',
        '/ajout perso.png',
        '/modif.png',
        '/liste perso.png',
        '/demande.png',
        '/liste demande.png',
        '/attente.png',
        '/coordonnée.png',
      ],
    },
  ]

  const t = texts[lang]
  const orderedProjects: Project[] = [
    ...projects.filter((p) => p.featured),
    ...projects.filter((p) => !p.featured),
  ]

  return (
    <section id="projects" className="relative py-20 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-cv-muted rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cv-muted rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-0" />

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
            className="inline-flex rounded-full border-2 border-black/15 bg-cv-muted p-1 shadow-sm"
            role="group"
            aria-label={lang === 'fr' ? 'Affichage des projets' : 'Project layout'}
          >
            <button
              type="button"
              onClick={() => setView('grid')}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                view === 'grid' ? 'bg-black text-white' : 'text-black/70 hover:text-black'
              }`}
            >
              <LayoutGrid size={18} aria-hidden />
              {t.viewGrid}
            </button>
            <button
              type="button"
              onClick={() => setView('list')}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                view === 'list' ? 'bg-black text-white' : 'text-black/70 hover:text-black'
              }`}
            >
              <AlignLeft size={18} aria-hidden />
              {t.viewList}
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {view === 'grid' ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="mb-16">
                <div className="grid lg:grid-cols-2 gap-8">
                  {projects
                    .filter((p) => p.featured)
                    .map((project, index) => (
                      <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1, type: 'spring' }}
                        viewport={{ once: true }}
                        whileHover={{ y: -12 }}
                        className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border-2 border-black/10 hover:border-black/25 card-hover"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-cv-muted/50 group-hover:to-cv-muted/30 transition-all duration-300 -z-0" />

                        <div className="relative h-64 bg-gradient-to-br from-cv-muted to-white flex items-center justify-center overflow-hidden">
                          {project.images ? (
                            <ProjectSlider images={project.images} heightClass="h-64" />
                          ) : (
                            <project.icon size={80} className="text-black opacity-80" />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/10 transition-all" />
                          <div className="absolute top-4 right-4">
                            <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-bold text-black shadow-lg">
                              {project.category}
                            </span>
                          </div>
                        </div>

                        <div className="p-8 relative z-10">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-2xl font-bold text-black group-hover:underline transition-colors">
                              {project.title}
                            </h3>
                            <div className="flex space-x-2">
                              <motion.a
                                href={project.github}
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-3 rounded-xl bg-cv-muted text-black hover:bg-black/10 transition-all shadow-md hover:shadow-lg"
                              >
                                <Github size={18} />
                              </motion.a>
                              {project.live && project.live !== '#' && (
                                <motion.a
                                  href={project.live}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ scale: 1.15, rotate: -5 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="p-3 rounded-xl bg-cv-muted text-black hover:bg-black/15 transition-all shadow-md hover:shadow-lg"
                                >
                                  <ExternalLink size={18} />
                                </motion.a>
                              )}
                            </div>
                          </div>

                          <p className="text-black/60 mb-6 line-clamp-3 leading-relaxed">{project.description}</p>

                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <motion.span
                                key={tech}
                                whileHover={{ scale: 1.1 }}
                                className="px-4 py-2 bg-gradient-to-r from-cv-muted to-white text-black text-sm font-semibold rounded-full border border-black/15 shadow-sm"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>

              <div id="all-projects">
                <h3 className="text-2xl font-semibold text-black mb-8">{t.all}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project, index) => (
                    <motion.div
                      key={`grid-${project.title}`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1, type: 'spring' }}
                      viewport={{ once: true }}
                      whileHover={{ y: -8 }}
                      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 border-black/10 hover:border-black/25 card-hover relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-cv-muted/50 group-hover:to-cv-muted/30 transition-all duration-300 -z-0" />
                      <div className="relative h-48 bg-gradient-to-br from-cv-muted to-white flex items-center justify-center overflow-hidden">
                        {project.images ? (
                          <ProjectSlider images={project.images} heightClass="h-48" />
                        ) : (
                          <project.icon size={60} className="text-black opacity-80" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/10 transition-all" />
                        <div className="absolute top-3 right-3">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-black shadow-md">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-lg font-bold text-black group-hover:underline transition-colors flex-1">
                            {project.title}
                          </h3>
                          <div className="flex space-x-2">
                            <motion.a
                              href={project.github}
                              whileHover={{ scale: 1.2, rotate: 5 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 rounded-lg bg-cv-muted text-black hover:bg-black/10 transition-all shadow-sm"
                            >
                              <Github size={16} />
                            </motion.a>
                            <motion.a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault()
                                setSelectedProject(project)
                              }}
                              whileHover={{ scale: 1.2, rotate: -5 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 rounded-lg bg-cv-muted text-black hover:bg-black/10 transition-all shadow-sm"
                              aria-label={t.detail}
                            >
                              <Expand size={16} />
                            </motion.a>
                            {project.live && project.live !== '#' && (
                              <motion.a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.9 }}
                                className="px-3 py-2 rounded-lg bg-black text-white hover:bg-black/90 transition-all font-bold text-xs shadow-md"
                                aria-label="Voir la démo du projet"
                              >
                                Demo
                              </motion.a>
                            )}
                          </div>
                        </div>

                        <p className="text-black/60 mb-4 line-clamp-3 text-sm leading-relaxed">{project.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <motion.span
                              key={tech}
                              whileHover={{ scale: 1.1 }}
                              className="px-3 py-1 bg-gradient-to-r from-cv-muted to-white text-black text-xs font-semibold rounded-full border border-black/15"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="list"
              id="all-projects"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="max-w-5xl mx-auto border border-black/10 rounded-2xl bg-white shadow-lg overflow-hidden"
            >
              {orderedProjects.map((project, index) => (
                <motion.article
                  key={`list-${project.title}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.25) }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row gap-6 lg:gap-10 p-6 sm:p-8 lg:p-10 ${
                    index !== orderedProjects.length - 1 ? 'border-b border-black/10' : ''
                  }`}
                >
                  <div className="relative w-full lg:w-[44%] shrink-0 min-h-[12rem] lg:min-h-[14rem] rounded-xl overflow-hidden border border-black/10 bg-cv-muted">
                    {project.images ? (
                      <ProjectSlider images={project.images} heightClass="h-52 sm:h-56" />
                    ) : (
                      <div className="flex h-full min-h-[12rem] items-center justify-center">
                        <project.icon size={64} className="text-black/40" />
                      </div>
                    )}
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col justify-center">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      {project.featured && (
                        <span className="rounded-full border border-black bg-black px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                          {t.highlight}
                        </span>
                      )}
                      <span className="rounded-full border border-black/15 bg-cv-muted px-3 py-0.5 text-xs font-semibold text-black">
                        {project.category}
                      </span>
                      <span className="text-xs font-medium text-black/50">{project.period ?? t.noPeriod}</span>
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-black">{project.title}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-black/65 sm:text-base">{project.description}</p>
                    <div className="mb-5 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex flex-wrap gap-2">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-cv-muted"
                      >
                        <Github size={16} />
                        {t.github}
                      </motion.a>
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 rounded-lg border-2 border-black/20 bg-cv-muted px-4 py-2 text-sm font-semibold text-black hover:border-black/40"
                      >
                        <Expand size={16} />
                        {t.detail}
                      </motion.button>
                      {project.live && project.live !== '#' && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90"
                        >
                          <ExternalLink size={16} />
                          {t.demo}
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {view === 'grid' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-black text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all overflow-hidden"
              onClick={() => {
                const el = document.getElementById('all-projects')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span className="relative z-10">{t.seeAll}</span>
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-15 transition-opacity"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </motion.div>
        )}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex flex-col items-center justify-center overflow-y-auto p-8"
          style={{ maxHeight: '100vh' }}
        >
          <button
            onClick={() => setSelectedProject(null)}
            className="self-end mb-4 text-white text-3xl font-bold"
            aria-label={t.close}
          >
            &times;
          </button>
          <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8 flex flex-col gap-8 items-center border border-black/10">
            <div className="w-full">
              {selectedProject.images ? (
                <ProjectSlider images={selectedProject.images} heightClass="h-64" />
              ) : (
                <selectedProject.icon size={80} className="text-black mb-4" />
              )}
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-2xl font-bold text-black">{selectedProject.title}</h3>
              <div className="text-sm text-black/60 mb-2">{selectedProject.period || t.noPeriod}</div>
              <p className="text-base text-black/80 mb-2">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {selectedProject.technologies &&
                  selectedProject.technologies.map((tech: string) => (
                    <span key={tech} className="px-3 py-1 bg-cv-muted text-black text-sm rounded-full border border-black/10">
                      {tech}
                    </span>
                  ))}
              </div>
              <div className="flex gap-3 mt-2">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black underline"
                  >
                    {t.github}
                  </a>
                )}
                {selectedProject.live && selectedProject.live !== '#' && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black underline"
                  >
                    {t.demo}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

const ProjectSlider: FC<{ images: string[]; heightClass?: string; initialIndex?: number }> = ({
  images,
  heightClass = 'h-64',
  initialIndex = 0,
}) => {
  const [current, setCurrent] = useState(initialIndex)
  const [isOpen, setIsOpen] = useState(false)
  const [zoomIndex, setZoomIndex] = useState(initialIndex)
  useEffect(() => {
    const timer = setInterval(() => {
      if (isOpen) {
        setZoomIndex((prev) => (prev + 1) % images.length)
      } else {
        setCurrent((prev) => (prev + 1) % images.length)
      }
    }, 3000)
    return () => clearInterval(timer)
  }, [images.length, isOpen])
  const handleImageClick = () => {
    setZoomIndex(current)
    setIsOpen(true)
  }
  const next = () => setZoomIndex((zoomIndex + 1) % images.length)
  const prev = () => setZoomIndex((zoomIndex - 1 + images.length) % images.length)
  const maxH = heightClass === 'h-64' ? '16rem' : heightClass === 'h-48' ? '12rem' : heightClass === 'h-52' ? '13rem' : heightClass === 'h-56' ? '14rem' : '16rem'
  return (
    <>
      <div className={`relative w-full h-full flex items-center justify-center ${heightClass}`}>
        <button
          type="button"
          onClick={handleImageClick}
          aria-label="Agrandir l'image"
          className="w-full h-full p-0 m-0 border-0 bg-transparent cursor-pointer rounded-lg"
          style={{ lineHeight: 0 }}
        >
          <Image
            src={images[current]}
            alt="Projet"
            width={800}
            height={400}
            className={`object-contain w-full rounded-lg ${heightClass}`}
            style={{ maxHeight: maxH, width: '100%', height: 'auto' }}
            priority={current === 0}
          />
        </button>
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => setCurrent((current - 1 + images.length) % images.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-1"
            >
              &#8592;
            </button>
            <button
              type="button"
              onClick={() => setCurrent((current + 1) % images.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-1"
            >
              &#8594;
            </button>
          </>
        )}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((_: string, i: number) => (
            <span key={i} className={`w-2 h-2 rounded-full ${i === current ? 'bg-white' : 'bg-white/40'}`} />
          ))}
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center" onClick={() => setIsOpen(false)}>
          <div className="relative max-w-6xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setIsOpen(false)} className="absolute top-2 right-2 text-white text-3xl font-bold">
              &times;
            </button>
            <Image
              src={images[zoomIndex]}
              alt="Zoom projet"
              width={1600}
              height={900}
              className="object-contain w-auto max-w-full max-h-[90vh] rounded-lg bg-white mx-auto"
              priority
            />
            {images.length > 1 && (
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button type="button" onClick={prev} className="text-white text-4xl px-4">
                  &#8592;
                </button>
              </div>
            )}
            {images.length > 1 && (
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button type="button" onClick={next} className="text-white text-4xl px-4">
                  &#8594;
                </button>
              </div>
            )}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_: string, i: number) => (
                <span key={i} className={`w-2 h-2 rounded-full ${i === zoomIndex ? 'bg-white' : 'bg-white/40'}`} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
