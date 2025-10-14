import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Github, Linkedin, Twitter, Mail, Heart, Zap, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-neon-blue' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-neon-purple' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-neon-pink' },
    { icon: Mail, href: 'mailto:alex.morgan@email.com', label: 'Email', color: 'hover:text-neon-green' },
  ];

  const quickLinks = [
    { name: 'About', onClick: () => scrollToSection('about') },
    { name: 'Skills', onClick: () => scrollToSection('skills') },
    { name: 'Projects', onClick: () => scrollToSection('projects') },
    { name: 'Contact', onClick: () => scrollToSection('contact') },
  ];

  // const services = [
  //   'Full Stack Development',
  //   'AI & Machine Learning',
  //   'Cloud Architecture',
  //   'Mobile Development',
  //   'DevOps & CI/CD',
  //   'Technical Consulting'
  // ];

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-dark-50/20 to-black"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Code2 className="h-10 w-10 text-neon-blue" />
                  <Zap className="h-5 w-5 text-neon-yellow absolute -top-1 -right-1 animate-pulse" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
                  M Raghavendra
                </span>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-8 text-lg max-w-md">
                M Raghavendra crafting next-generation digital experiences with cutting-edge technologies.
                Transforming ideas into extraordinary realities.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className={`p-3 bg-black/60 backdrop-blur-sm rounded-xl text-gray-400 ${social.color} transition-all duration-300 border border-white/10 hover:border-current hover:shadow-neon`}
                    whileHover={{ scale: 1.1, y: -3 }}
                    data-cursor="pointer"
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-6">
                <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                  Quick Links
                </span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={link.onClick}
                      className="text-gray-400 hover:text-neon-blue transition-colors duration-300 hover:translate-x-2 transform transition-transform"
                      data-cursor="pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-6">
                <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
                  Services
                </span>
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-gray-400 text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/30 rounded-2xl p-8 mb-12 backdrop-blur-sm"
          >
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                  Stay Updated
                </span>
              </h3>
              <p className="text-gray-300 mb-6">
                Get the latest insights on cutting-edge technologies, development trends, and project updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-black/60 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-neon-blue transition-all duration-300"
                />
                <button
                  className="px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-xl font-medium hover:scale-105 transition-transform duration-300"
                  data-cursor="pointer"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="pt-8 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Alex Morgan. All rights reserved. Built with passion and cutting-edge tech.
              </p>
              
              <div className="flex items-center space-x-6">
                <p className="text-gray-400 text-sm flex items-center">
                  Made with <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" /> using React, TypeScript & Tailwind CSS
                </p>
                
                <motion.button
                  onClick={scrollToTop}
                  className="p-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white hover:scale-110 transition-transform duration-300"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  data-cursor="pointer"
                >
                  <ArrowUp className="h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;