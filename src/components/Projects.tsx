import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Play, Star, GitBranch, Eye } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: 'Deventials – Developer Essentials UI',
      category: 'Frontend/UI',
      description: 'Fully responsive UI for a multifunctional developer toolkit app with dark/light mode toggle.',
      fullDescription: 'Designed and developed a fully responsive UI for Deventials, a multifunctional developer toolkit app with 25+ tools like JSON editors, image compressors, and more. Implemented dark/light theme switching and scalable component architecture using React and Tailwind CSS.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800', // Replace with your actual screenshot if available
      technologies: ['JavaScript', 'Tailwind CSS', 'HTML', 'Dark/Light Mode'],
      github: '#', // Add GitHub link if available
      live: 'https://innogenx.co.in/deventials/',
      stats: { stars: 0, forks: 0, views: 'N/A' }, // Replace with actual stats if you track them
      featured: true,
    },
    {
      id: 2,
      title: 'Fekki – AR-Enhanced Manuals',
      category: 'AR/Frontend',
      description: 'Immersive AR manuals transforming traditional instructional content into interactive experiences.',
      fullDescription: 'Redefining the way users engage with manuals by leveraging Augmented Reality (AR) technology. Transformed traditional instructional content into immersive AR experiences to improve assembly, troubleshooting, and operational efficiency.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800', // Replace with actual screenshot if available
      technologies: ['wordPress','Responsive Design', 'mobile-friendly', 'pixel-perfect UI'],
      github: '#', // Add GitHub link if available
      live: 'https://fekki.io/',
      stats: { stars: 0, forks: 0, views: 'N/A' }, // Replace with actual stats if available
      featured: true,
    },
    {
      id: 3,
      title: 'GlowSkin – Advanced Hair, Skin & Wellness Care Platform',
      category: 'WordPress/Frontend',
      description: 'Digital platform for advanced skincare and wellness services with a focus on user experience.',
      fullDescription: 'Built a digital platform for advanced skincare and wellness services, featuring solutions like laser hair removal, hair restoration, acne and scar treatments, anti-aging therapies, and Panchakarma-based Ayurveda. Designed to enhance user trust, accessibility, and overall experience.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800', // Replace with actual screenshot if available
      technologies: ['WordPress', 'Responsive Design', 'mobile-friendly', 'pixel-perfect UI'],
      github: '#', // Add GitHub link if available
      live: 'https://glowskin.cc/',
      stats: { stars: 0, forks: 0, views: 'N/A' }, // Replace with actual stats if tracked
      featured: true,
    },
    {
  id: 7,
  title: 'BOT Consulting UAE – Financial & Business Platform',
  category: 'Finance',
  description: 'Digital platform showcasing tax, ERP, AML compliance, and business transformation services.',
  fullDescription: 'Developed a digital platform for BOT Consulting UAE, showcasing expertise in corporate tax, ERP implementation, AML compliance, and business transformation. Designed to provide client-centric solutions, streamline access to financial and business advisory services, and support organizations in navigating complex regulatory and operational challenges. Focused on enhancing user experience, engagement, and accessibility while highlighting strategic insights and sustainable growth opportunities.',
  image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800',
  technologies: ['wordPress','Responsive Design', 'mobile-friendly', 'pixel-perfect UI'],
  github: '#',
  live: 'https://botconsulting.ae/',
  stats: { stars: 142, forks: 37, views: '7.8k' },
  featured: true,
},
{
  id: 8,
  title: 'Guru Gautam Pvt. Ltd. – Laptop Sales & Rental Web App',
  category: 'E-Commerce',
  description: 'Web application for laptop sales, rentals, and order management.',
  fullDescription: 'Developed a full-featured web application for laptop sales and rentals, enabling users to browse, purchase, or rent laptops seamlessly. Implemented features including prepaid and postpaid transactions, invoice generation, delivery challans, and order management. Focused on creating a user-friendly, responsive interface with efficient workflow management for both clients and administrators.',
  image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
  technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js'],
  github: '#',
  live: 'https://gurugoutham.innogenxsolutions.com/',
  stats: { stars: 119, forks: 29, views: '6.4k' },
  featured: false,
},

  ];

  const categories = ['All', 'react js', 'word press', 'Web3', 'Mobile'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-dark-50/20 to-black"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
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

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${filter === category
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-neon'
                    : 'bg-black/40 text-gray-400 hover:text-white border border-white/10 hover:border-white/20 backdrop-blur-sm'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-cursor="pointer"
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Featured Projects Showcase */}
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
                  data-cursor="pointer"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <span className="bg-neon-blue/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                        {project.category}
                      </span>
                      <span className="bg-neon-yellow/90 text-black px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
                        FEATURED
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center space-x-4 text-white text-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4" />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitBranch className="h-4 w-4" />
                        <span>{project.stats.forks}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{project.stats.views}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:to-neon-purple transition-all duration-300">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 text-neon-blue px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-gray-400 text-xs">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                        data-cursor="pointer"
                      >
                        <Github className="h-5 w-5" />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                        data-cursor="pointer"
                      >
                        <ExternalLink className="h-5 w-5" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

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
                data-cursor="pointer"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-neon-blue/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-neon-yellow/90 text-black px-2 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
                        ⭐
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:to-neon-purple transition-all duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-gray-400 text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                        data-cursor="pointer"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      <a
                        href={project.live}
                        className="text-gray-400 hover:text-neon-blue transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                        data-cursor="pointer"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 text-xs">
                      <Star className="h-3 w-3" />
                      <span>{project.stats.stars}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-black/80 backdrop-blur-xl rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors duration-200 backdrop-blur-sm"
                  data-cursor="pointer"
                >
                  <X className="h-6 w-6" />
                </button>
                <div className="absolute bottom-6 left-6 flex items-center space-x-4 text-white">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5" />
                    <span>{selectedProject.stats.stars}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GitBranch className="h-5 w-5" />
                    <span>{selectedProject.stats.forks}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="h-5 w-5" />
                    <span>{selectedProject.stats.views}</span>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="flex items-center space-x-4 mb-6">
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                    {selectedProject.title}
                  </h3>
                  <span className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-4 py-2 rounded-full text-sm font-medium">
                    {selectedProject.category}
                  </span>
                </div>

                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                  {selectedProject.fullDescription}
                </p>

                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-white mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 text-neon-blue px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-6">
                  <a
                    href={selectedProject.github}
                    className="flex items-center space-x-3 bg-black/60 text-white px-8 py-4 rounded-full hover:bg-black/80 transition-colors duration-200 backdrop-blur-sm border border-white/20"
                    data-cursor="pointer"
                  >
                    <Github className="h-6 w-6" />
                    <span className="font-medium">View Source</span>
                  </a>
                  <a
                    href={selectedProject.live}
                    className="flex items-center space-x-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white px-8 py-4 rounded-full hover:scale-105 transition-transform duration-200"
                    data-cursor="pointer"
                  >
                    <Play className="h-6 w-6" />
                    <span className="font-medium">Live Demo</span>
                  </a>
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