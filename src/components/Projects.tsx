import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Play, Star, GitBranch, Eye } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Deventials – Developer Essentials UI',
      category: 'Frontend/UI',
      description: 'Fully responsive UI for a multifunctional developer toolkit app with dark/light mode toggle.',
      fullDescription:
        'Designed and developed a fully responsive UI for Deventials, a multifunctional developer toolkit app with 25+ tools like JSON editors, image compressors, and more. Implemented dark/light theme switching and scalable component architecture using React and Tailwind CSS.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['JavaScript', 'Tailwind CSS', 'HTML', 'Dark/Light Mode'],
      github: '#',
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
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['WordPress', 'Responsive Design', 'mobile-friendly', 'pixel-perfect UI'],
      github: '#',
      live: 'https://fekki.io/',
      stats: { stars: 0, forks: 0, views: 'N/A' },
      featured: true,
    },
    {
      id: 3,
      title: 'GlowSkin – Advanced Hair, Skin & Wellness Care Platform',
      category: 'WordPress/Frontend',
      description:
        'Digital platform for advanced skincare and wellness services with a focus on user experience.',
      fullDescription:
        'Built a digital platform for advanced skincare and wellness services, featuring solutions like laser hair removal, hair restoration, acne and scar treatments, anti-aging therapies, and Panchakarma-based Ayurveda. Designed to enhance user trust, accessibility, and overall experience.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['WordPress', 'Responsive Design', 'mobile-friendly', 'pixel-perfect UI'],
      github: '#',
      live: 'https://glowskin.cc/',
      stats: { stars: 0, forks: 0, views: 'N/A' },
      featured: true,
    },
    {
      id: 4,
      title: 'Keramurth – Organic Virgin Coconut Oil Platform',
      category: 'Web Application',
      description:
        'Comprehensive digital platform for organic coconut oil production, quality control, and sales operations.',
      fullDescription:
        'We developed a comprehensive digital platform for Keramurth, a leading name in the organic coconut oil industry with over 15 years of experience. The web application features position-based dashboards, enabling seamless management and insights across production, quality control, supply chain, and sales operations. Designed with a focus on purity, sustainability, and transparency, the platform reflects Keramurth’s commitment to delivering premium, eco-friendly coconut oil products. It enhances workflow efficiency, supports data-driven decisions, and strengthens collaboration between management and local farming communities — all while maintaining a user-friendly and elegant interface that embodies the brand’s natural ethos.',
      image: 'https://images.pexels.com/photos/4110307/pexels-photo-4110307.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Tailwind CSS', 'MySQL'],
      github: '#',
      live: 'https://dev.keramruth.com/signin',
      stats: { stars: 180, forks: 46, views: '9.1k' },
      featured: true,
    },
    {
      id: 5,
      title: 'BOT Consulting UAE – Financial & Business Platform',
      category: 'Finance',
      description:
        'Digital platform showcasing tax, ERP, AML compliance, and business transformation services.',
      fullDescription:
        'Developed a digital platform for BOT Consulting UAE, showcasing expertise in corporate tax, ERP implementation, AML compliance, and business transformation. Designed to provide client-centric solutions, streamline access to financial and business advisory services, and support organizations in navigating complex regulatory and operational challenges. Focused on enhancing user experience, engagement, and accessibility while highlighting strategic insights and sustainable growth opportunities.',
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['WordPress', 'Responsive Design', 'mobile-friendly', 'pixel-perfect UI'],
      github: '#',
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
        'Developed a full-featured web application for laptop sales and rentals, enabling users to browse, purchase, or rent laptops seamlessly. Implemented features including prepaid and postpaid transactions, invoice generation, delivery challans, and order management. Focused on creating a user-friendly, responsive interface with efficient workflow management for both clients and administrators.',
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js'],
      github: '#',
      live: 'https://gurugoutham.innogenxsolutions.com/',
      stats: { stars: 119, forks: 29, views: '6.4k' },
      featured: false,
    },
  ];

  const categories = ['All', 'Frontend/UI', 'WordPress/Frontend', 'Web Application', 'Finance', 'E-Commerce'];

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((project) => project.category === filter);

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

            {/* Filter */}
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
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <span className="bg-neon-blue/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
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
                      <a
                        href={project.github}
                        className="flex items-center space-x-2 text-gray-400 hover:text-white"
                      >
                        <Github className="h-5 w-5" />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center space-x-2 text-gray-400 hover:text-neon-blue"
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

          {/* All Projects */}
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
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-neon-blue/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
