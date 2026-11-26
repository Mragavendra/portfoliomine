import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Play, Star, GitBranch, Eye } from 'lucide-react';
import DEVENTIALS from '../assets/deventilals.png';

type Project = {
  id: number;
  title: string;
  category: string;
  company?: string;
  description: string;
  fullDescription: string;
  image?: string;
  initials?: string;
  technologies: string[];
  github?: string;
  live?: string;
  stats: { stars: number; forks: number; views: string };
  featured: boolean;
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Deventials – Developer Essentials UI',
      category: 'Frontend/UI',
      description: 'Fully responsive UI for a multifunctional developer toolkit app with dark/light mode toggle.',
      fullDescription:
        'Designed and developed a fully responsive UI for Deventials, a multifunctional developer toolkit app with 25+ tools like JSON editors, image compressors, and more. Implemented dark/light theme switching and scalable component architecture using React and Tailwind CSS.',
      image: DEVENTIALS,
      technologies: ['JavaScript', 'Tailwind CSS', 'HTML', 'Dark/Light Mode'],
      github: 'https://github.com/mraghavendra-mrk',
      live: 'https://innogenx.co.in/deventials/',
      stats: { stars: 0, forks: 0, views: 'N/A' },
      featured: true,
    },
    {
      id: 2,
      title: 'Fekki – AR-Enhanced Manuals',
      category: 'AR/Frontend',
      description: 'Immersive AR manuals transforming traditional instructional content into interactive experiences.',
      fullDescription:
        'Redefining the way users engage with manuals by leveraging Augmented Reality (AR) technology. Transformed traditional instructional content into immersive AR experiences to improve assembly, troubleshooting, and operational efficiency.',
      initials: 'FEKKI',
      technologies: ['WordPress', 'Responsive Design', 'Mobile-Friendly', 'Pixel-Perfect UI'],
      github: 'https://github.com/mraghavendra-mrk',
      live: 'https://fekki.io/',
      stats: { stars: 0, forks: 0, views: 'N/A' },
      featured: true,
    },
    {
      id: 3,
      title: 'GlowSkin – Advanced Hair, Skin & Wellness Care Platform',
      category: 'WordPress/Frontend',
      description: 'Digital platform for advanced skincare and wellness services with a focus on user experience.',
      fullDescription:
        'Built a digital platform for advanced skincare and wellness services, featuring solutions like laser hair removal, hair restoration, acne and scar treatments, anti-aging therapies, and Panchakarma-based Ayurveda. Designed to enhance user trust, accessibility, and overall experience.',
      initials: 'GLOWSKIN',
      technologies: ['WordPress', 'Responsive Design', 'Mobile-Friendly', 'Pixel-Perfect UI'],
      github: 'https://github.com/mraghavendra-mrk',
      live: 'https://glowskin.cc/',
      stats: { stars: 0, forks: 0, views: 'N/A' },
      featured: true,
    },
    {
      id: 4,
      title: 'Keramurth – Organic Virgin Coconut Oil Platform',
      category: 'Web Application',
      description: 'Comprehensive digital platform for organic coconut oil production, quality control, and sales operations.',
      fullDescription:
        "We developed a comprehensive digital platform for Keramurth, a leading name in the organic coconut oil industry with over 15 years of experience. The web application features position-based dashboards, enabling seamless management and insights across production, quality control, supply chain, and sales operations. Designed with a focus on purity, sustainability, and transparency, the platform reflects Keramurth's commitment to delivering premium, eco-friendly coconut oil products.",
      initials: 'KERAMRUTH',
      technologies: ['React', 'Node.js', 'Tailwind CSS', 'MySQL'],
      github: 'https://github.com/mraghavendra-mrk',
      live: 'https://dev.keramruth.com/signin',
      stats: { stars: 180, forks: 46, views: '9.1k' },
      featured: true,
    },
    {
      id: 5,
      title: 'BOT Consulting UAE – Financial & Business Platform',
      category: 'Finance',
      description: 'Digital platform showcasing tax, ERP, AML compliance, and business transformation services.',
      fullDescription:
        'Developed a digital platform for BOT Consulting UAE, showcasing expertise in corporate tax, ERP implementation, AML compliance, and business transformation. Designed to provide client-centric solutions, streamline access to financial and business advisory services, and support organizations in navigating complex regulatory and operational challenges.',
      initials: 'BOT UAE',
      technologies: ['WordPress', 'Responsive Design', 'Mobile-Friendly', 'Pixel-Perfect UI'],
      github: 'https://github.com/mraghavendra-mrk',
      live: 'https://botconsulting.ae/',
      stats: { stars: 142, forks: 37, views: '7.8k' },
      featured: true,
    },
    {
      id: 6,
      title: 'Guru Gautam Pvt. Ltd. – Laptop Sales & Rental Web App',
      category: 'E-Commerce',
      description: 'Web application for laptop sales, rentals, and order management.',
      fullDescription:
        'Developed a full-featured web application for laptop sales and rentals, enabling users to browse, purchase, or rent laptops seamlessly. Implemented features including prepaid and postpaid transactions, invoice generation, delivery challans, and order management.',
      initials: 'GURU GAUTAM',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js'],
      github: 'https://github.com/mraghavendra-mrk',
      live: 'https://gurugoutham.innogenxsolutions.com/',
      stats: { stars: 119, forks: 29, views: '6.4k' },
      featured: false,
    },
    {
      id: 7,
      title: 'Vivid Edu Services – Study Abroad Consultancy',
      category: 'Education',
      company: 'Social Braynz',
      description: 'Education consultancy website for overseas study guidance, MBBS admissions, and language-test preparation.',
      fullDescription: 'A website for Vivid Edu Services presenting study-abroad guidance, MBBS admissions support, international degree programs, and language-test preparation.',
      initials: 'VIVID',
      technologies: ['Education', 'Admissions', 'Study Abroad'],
      github: '',
      live: 'https://vivideduservices.com/',
      stats: { stars: 0, forks: 0, views: 'N/A' },
      featured: false,
    },
    {
      id: 8,
      title: 'Jaihind Group of Institutions',
      category: 'Education',
      company: 'Social Braynz',
      description: 'Institution website for Jaihind Academy, PU College, Degree College, and academic coaching.',
      fullDescription: 'A website presenting Jaihind Group of Institutions, its academy, PU and degree colleges, academic departments, and admissions information.',
      initials: 'JAIHIND',
      technologies: ['Education', 'College', 'Admissions'],
      github: '',
      live: 'https://jaihindgroupofinstitutions.in/',
      stats: { stars: 0, forks: 0, views: 'N/A' },
      featured: false,
    },
    {
      id: 9,
      title: 'Dayananda Sagar Public School',
      category: 'Education',
      company: 'Social Braynz',
      description: 'CBSE school website presenting academics, admissions, and student-life information.',
      fullDescription: 'A website for Dayananda Sagar Public School highlighting its CBSE education, academic approach, admissions, campus, and student life.',
      initials: 'DSPS',
      technologies: ['CBSE', 'School', 'Admissions'],
      github: '',
      live: 'https://dsps.edu.in/',
      stats: { stars: 0, forks: 0, views: 'N/A' },
      featured: false,
    },
    {
      id: 10,
      title: 'Tranship Mobility',
      category: 'Mobility',
      company: 'Social Braynz',
      description: 'Website for an EV fleet and driver network serving last-mile transport.',
      fullDescription: 'A company website for Tranship Mobility Services, focused on EV fleet services and a driver network for last-mile transport.',
      initials: 'TRANSHIP',
      technologies: ['EV Mobility', 'Fleet Services', 'Transport'],
      github: '',
      live: 'https://transhipmobility.com/',
      stats: { stars: 0, forks: 0, views: 'N/A' },
      featured: false,
    },
    {
      id: 11,
      title: 'OneMove Chess',
      category: 'Chess',
      company: 'Social Braynz',
      description: 'Chess-related website project; the supplied domain currently shows a domain-for-sale page.',
      fullDescription: 'OneMove Chess was provided as a project link. The supplied domain currently resolves to a domain-for-sale page, so the project details and live link need confirmation.',
      initials: '1MOVE',
      technologies: ['Chess', 'Website'],
      github: '',
      live: '',
      stats: { stars: 0, forks: 0, views: 'N/A' },
      featured: false,
    },
    {
      id: 12,
      title: 'YSR Talks',
      category: 'Talks & Media',
      company: 'Social Braynz',
      description: 'Talks and media website; the public page currently remains on its loading screen.',
      fullDescription: 'YSR Talks was provided as a project link. The public page currently remains on a loading screen, so details about its features could not be verified.',
      initials: 'YSR',
      technologies: ['Talks', 'Media', 'Website'],
      github: '',
      live: 'https://ysrtalks.com/',
      stats: { stars: 0, forks: 0, views: 'N/A' },
      featured: false,
    },
  ];

  const categories = [
    'All',
    ...new Set(projects.map((project) => project.category)),
    'Social Braynz',
  ];

  const filteredProjects =
    filter === 'All'
      ? projects
      : filter === 'Social Braynz'
        ? projects.filter((project) => project.company === filter)
        : projects.filter((project) => project.category === filter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-dark-50/20 to-black"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8">
              <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Showcasing innovative solutions that push the boundaries of technology.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple font-semibold">
                From AI-powered platforms to scalable cloud architectures.
              </span>
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    filter === category
                      ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-neon'
                      : 'bg-black/40 text-gray-400 hover:text-white border border-white/10 hover:border-white/20 backdrop-blur-sm'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Spotlight Section */}
          {filter === 'All' && (
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                🌟 Spotlight Projects
              </span>
            </h3>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.slice(0, 2).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="group relative bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-neon-blue/50 transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                  whileHover={{ scale: 1.02, y: -10 }}
                >
                  <div className="relative overflow-hidden h-64">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neon-blue/30 via-black to-neon-purple/40">
                        <span className="text-4xl font-black tracking-widest text-white/80">{project.initials}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <span className="bg-neon-blue/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                      {project.company && (
                        <span className="bg-neon-purple/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {project.company}
                        </span>
                      )}
                      <span className="bg-neon-yellow/90 text-black px-3 py-1 rounded-full text-sm font-bold">
                        FEATURED
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="text-2xl font-bold text-white mb-4">{project.title}</h4>
                    <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 text-neon-blue px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="h-5 w-5" />
                          <span>Code</span>
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="h-5 w-5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            </motion.div>
          )}

          {/* All Projects Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-neon-blue/50 transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedProject(project)}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="relative overflow-hidden h-48">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neon-blue/30 via-black to-neon-purple/40">
                      <span className="text-3xl font-black tracking-widest text-white/80">{project.initials}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-neon-blue/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  {project.company && (
                    <span className="absolute bottom-4 left-4 bg-neon-purple/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.company}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Project Detail Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
            role="presentation"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 60 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 60 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className="bg-black/95 border border-white/10 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-dialog-title"
            >
              {/* Modal Header Image */}
              <div className="relative h-56 overflow-hidden rounded-t-3xl flex-shrink-0">
                {selectedProject.image ? (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neon-blue/30 via-black to-neon-purple/40">
                    <span className="text-4xl font-black tracking-widest text-white/80">{selectedProject.initials}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                {/* Close */}
                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                  className="absolute top-4 right-4 p-2 bg-black/60 backdrop-blur-sm rounded-full text-gray-300 hover:text-white hover:bg-black/80 transition-all duration-200 border border-white/10"
                >
                  <X className="h-5 w-5" />
                </button>
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-neon-blue/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedProject.category}
                  </span>
                  {selectedProject.company && (
                    <span className="bg-neon-purple/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {selectedProject.company}
                    </span>
                  )}
                  {selectedProject.featured && (
                    <span className="bg-neon-yellow/90 text-black px-3 py-1 rounded-full text-sm font-bold">
                      FEATURED
                    </span>
                  )}
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-8">
                <h3 id="project-dialog-title" className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{selectedProject.fullDescription}</p>

                {/* Stats */}
                {(selectedProject.stats.stars > 0 || selectedProject.stats.views !== 'N/A') && (
                  <div className="flex gap-6 mb-6 text-sm text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <Star className="h-4 w-4 text-neon-yellow" />
                      {selectedProject.stats.stars} Stars
                    </span>
                    <span className="flex items-center gap-1.5">
                      <GitBranch className="h-4 w-4 text-neon-blue" />
                      {selectedProject.stats.forks} Forks
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Eye className="h-4 w-4 text-neon-purple" />
                      {selectedProject.stats.views} Views
                    </span>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 text-neon-blue px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-black/60 border border-white/10 text-gray-300 hover:text-white hover:border-white/30 transition-all duration-300 font-medium"
                    >
                      <Github className="h-5 w-5" />
                      View Code
                    </a>
                  )}
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold hover:shadow-neon transition-all duration-300"
                    >
                      <Play className="h-5 w-5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
