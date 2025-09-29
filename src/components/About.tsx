import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Brain, Cloud, Shield, Zap } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      company: 'TechCorp Solutions',
      role: 'AI-Powered Website Development',
      description: 'Built advanced websites integrating AI-driven features and performance optimization. Focused on responsive design and scalable frontend architecture.',
      achievements: ['Developed intelligent dashboards', 'Enhanced SEO and accessibility', 'Delivered high-performance websites'],
    },
    {
      company: 'InnovateAI',
      role: 'Light & Dark Mode Implementation',
      description: 'Specialized in creating seamless light and dark mode experiences across web platforms with modern JavaScript frameworks.',
      achievements: ['Implemented smooth theme toggles', 'Optimized UI consistency across devices', 'Reduced design complexity with reusable components'],
    },
    {
      company: 'WebCraft Studios',
      role: 'Web Applications Development',
      description: 'Designed and developed user-friendly web applications with a strong focus on UI/UX and responsive layouts.',
      achievements: ['Improved application performance', 'Created reusable design systems', 'Delivered cross-browser compatibility'],
    },
  ];



  const services = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Building intelligent applications with TensorFlow, PyTorch, and modern ML frameworks for predictive analytics and automation.',
      gradient: 'from-neon-blue to-neon-purple',
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Designing scalable cloud solutions on AWS, Azure, and GCP with serverless computing and microservices architecture.',
      gradient: 'from-neon-purple to-neon-pink',
    },
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Creating end-to-end web applications with React, Node.js, TypeScript, and modern development practices.',
      gradient: 'from-neon-pink to-neon-blue',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Building robust data pipelines, real-time analytics, and high-performance database solutions.',
      gradient: 'from-neon-green to-neon-blue',
    },
    {
      icon: Shield,
      title: 'DevSecOps',
      description: 'Implementing security-first development practices with CI/CD pipelines and automated testing.',
      gradient: 'from-neon-yellow to-neon-purple',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed, scalability, and efficiency using advanced profiling and monitoring.',
      gradient: 'from-neon-blue to-neon-green',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-dark-50/50 to-black"></div>

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
                About Me
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              AI-Powered Frontend Developer with 2 years of experience designing and building responsive, user-centric applications. Skilled in React.js, React Native, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap, and WordPress, with a strong focus on UI/UX and scalable component-based development. Experienced in implementing modern features like dark/light mode, performance optimization, and mobile-first design. Passionate about leveraging AI-driven tools and frameworks to deliver innovative, efficient, and high-quality digital experiences.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple font-semibold">
                Combining creativity with cutting-edge technology to solve complex problems.
              </span>
            </p>

          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-black/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Icon */}
                <div className={`relative mb-6 p-4 rounded-xl bg-gradient-to-br ${service.gradient} w-fit`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:to-neon-purple transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Experience Journey
              </span>
            </h3>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative group"
                >
                  {/* Timeline Line */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-neon-blue to-transparent"></div>
                  )}

                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full shadow-neon"></div>

                  {/* Content Card */}
                  <div className="ml-16 bg-black/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-neon-blue/50 transition-all duration-500 group-hover:scale-[1.02]">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:to-neon-purple transition-all duration-300">
                          {exp.role}
                        </h4>
                        <p className="text-neon-blue font-semibold text-lg">{exp.company}</p>
                      </div>
                      <span className="text-neon-purple font-medium bg-neon-purple/10 px-4 py-2 rounded-full border border-neon-purple/30 mt-4 lg:mt-0 w-fit">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-6">{exp.description}</p>

                    <div className="flex flex-wrap gap-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <span
                          key={achIndex}
                          className="text-sm bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 text-neon-blue px-3 py-1 rounded-full backdrop-blur-sm"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;