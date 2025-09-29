import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Play, Star, GitBranch, Eye } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Analytics Dashboard',
      category: 'AI/ML',
      description: 'Next-generation analytics platform with machine learning insights and real-time data visualization.',
      fullDescription: 'Built a comprehensive AI-powered analytics dashboard using React, Python, and TensorFlow. Features include predictive analytics, anomaly detection, real-time data streaming, and interactive visualizations. Implemented custom ML models for user behavior prediction and automated insights generation.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Python', 'TensorFlow', 'D3.js', 'WebSocket', 'PostgreSQL'],
      github: '#',
      live: '#',
      stats: { stars: 234, forks: 45, views: '12.5k' },
      featured: true,
    },
    {
      id: 2,
      title: 'Cloud-Native Microservices Platform',
      category: 'Cloud',
      description: 'Scalable microservices architecture with Kubernetes orchestration and serverless functions.',
      fullDescription: 'Designed and implemented a cloud-native platform using Docker, Kubernetes, and AWS Lambda. Features include auto-scaling, service mesh, distributed tracing, and CI/CD pipelines. Achieved 99.9% uptime with automatic failover and load balancing.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'GraphQL', 'Redis'],
      github: '#',
      live: '#',
      stats: { stars: 189, forks: 67, views: '8.9k' },
      featured: true,
    },
    {
      id: 3,
      title: 'Real-time Collaboration Suite',
      category: 'Full Stack',
      description: 'Modern collaboration platform with real-time editing, video calls, and team management.',
      fullDescription: 'Developed a comprehensive collaboration suite with real-time document editing, video conferencing, screen sharing, and project management tools. Built with React, Node.js, WebRTC, and Socket.io for seamless real-time communication.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'WebRTC', 'Socket.io', 'MongoDB', 'Redis', 'AWS S3'],
      github: '#',
      live: '#',
      stats: { stars: 156, forks: 34, views: '6.7k' },
      featured: false,
    },
    {
      id: 4,
      title: 'Blockchain DeFi Platform',
      category: 'Web3',
      description: 'Decentralized finance platform with smart contracts and cryptocurrency trading.',
      fullDescription: 'Built a DeFi platform with smart contracts on Ethereum, featuring yield farming, liquidity pools, and automated market making. Implemented Web3 integration with MetaMask and comprehensive security audits.',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Solidity', 'Web3.js', 'Ethereum', 'Hardhat', 'IPFS', 'Node.js'],
      github: '#',
      live: '#',
      stats: { stars: 298, forks: 78, views: '15.2k' },
      featured: true,
    },
    {
      id: 5,
      title: 'Mobile-First E-Commerce App',
      category: 'Mobile',
      description: 'Progressive web app with offline capabilities and native mobile experience.',
      fullDescription: 'Created a mobile-first e-commerce PWA with offline functionality, push notifications, and native app-like experience. Features include AR product visualization, one-click payments, and personalized recommendations.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'PWA', 'Service Workers', 'WebAR', 'Stripe', 'Firebase', 'Tailwind'],
      github: '#',
      live: '#',
      stats: { stars: 167, forks: 42, views: '9.1k' },
      featured: false,
    },
    {
      id: 6,
      title: 'AI Content Generation Platform',
      category: 'AI/ML',
      description: 'Advanced content generation platform powered by GPT and custom AI models.',
      fullDescription: 'Developed an AI-powered content generation platform using OpenAI GPT, custom fine-tuned models, and advanced prompt engineering. Features include multi-modal content creation, brand voice training, and automated content optimization.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'OpenAI API', 'FastAPI', 'React', 'PostgreSQL', 'Celery', 'Docker'],
      github: '#',
      live: '#',
      stats: { stars: 312, forks: 89, views: '18.7k' },
      featured: true,
    },
  ];

  const categories = ['All', 'AI/ML', 'Cloud', 'Full Stack', 'Web3', 'Mobile'];

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
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    filter === category
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