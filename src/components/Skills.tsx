import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Brain } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: 'Frontend Mastery',
      icon: Code,
      color: 'from-neon-blue to-neon-purple',
      skills: [
        { name: 'React.js', level: 98, description: 'Advanced hooks, component-based architecture, performance optimization' },
        { name: 'React Native', level: 95, description: 'Cross-platform mobile apps, navigation, UI/UX best practices' },
        { name: 'JavaScript (ES6+)', level: 97, description: 'Modern JS features, async/await, closures, promises' },
        { name: 'HTML5 & CSS3', level: 96, description: 'Semantic HTML, responsive layouts, modern CSS techniques' },
        { name: 'Tailwind CSS & Bootstrap', level: 95, description: 'Utility-first styling, responsive design, component libraries' },
        { name: 'WordPress', level: 90, description: 'Custom themes, plugin integration, content management' },
        { name: 'Dark/Light Mode', level: 92, description: 'Theming, CSS variables, user preference handling' },
        { name: 'UI/UX Design', level: 94, description: 'User-centric interfaces, accessibility, mobile-first approach' },
      ],
    },
    {
      title: 'AI & Innovation',
      icon: Brain,
      color: 'from-neon-green to-neon-yellow',
      skills: [
        { name: 'AI-driven tools', level: 90, description: 'Leveraging AI for frontend optimization and automation' },
        { name: 'ChatGPT & OpenAI APIs', level: 88, description: 'AI integration, prompt engineering for apps' },
        { name: 'Performance Optimization', level: 95, description: 'Lazy loading, code splitting, responsive performance' },
      ],
    },
  ];

  const techStack = [
    'React.js', 'React Native', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 
    'Tailwind CSS', 'Bootstrap', 'WordPress', 'Dark/Light Mode', 'UI/UX Design', 
    'AI Tools', 'OpenAI APIs', 'Performance Optimization'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % skillCategories.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [skillCategories.length]);

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-dark-50/30 to-black"></div>
      
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
                Skills & Expertise
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              AI-Powered Frontend Developer with 1.6 years of experience designing and building responsive, user-centric applications.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple font-semibold">
                Skilled in React.js, React Native, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap, WordPress, dark/light mode, and UI/UX.
              </span>
            </p>
          </motion.div>

          {/* Interactive Skills Categories */}
          <div className="mb-20">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {skillCategories.map((category, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === index
                      ? `bg-gradient-to-r ${category.color} text-white shadow-neon`
                      : 'bg-black/40 text-gray-400 hover:text-white border border-white/10 hover:border-white/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-cursor="pointer"
                >
                  <category.icon className="h-5 w-5" />
                  <span>{category.title}</span>
                </motion.button>
              ))}
            </div>

            {/* Active Category Skills */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {skillCategories[activeCategory].skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1, duration: 0.5 }}
                    className="space-y-4"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="text-xl font-bold text-white">{skill.name}</h4>
                      <span className={`text-lg font-bold bg-gradient-to-r ${skillCategories[activeCategory].color} bg-clip-text text-transparent`}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="relative w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className={`h-3 bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full relative`}
                        initial={{ width: 0 }}
                        animate={{ width: isVisible ? `${skill.level}%` : '0%' }}
                        transition={{
                          delay: skillIndex * 0.2,
                          duration: 1,
                          ease: 'easeOut',
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </motion.div>
                    </div>
                    
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Tech Stack Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-12">
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Technology Stack
              </span>
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 text-neon-blue px-6 py-3 rounded-full text-sm font-medium backdrop-blur-sm hover:shadow-neon transition-all duration-300 cursor-pointer"
                  data-cursor="pointer"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
