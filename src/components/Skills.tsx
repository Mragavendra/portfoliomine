import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Brain, Shield, Zap, Cpu, Globe } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: 'Frontend Mastery',
      icon: Code,
      color: 'from-neon-blue to-neon-purple',
      skills: [
        { name: 'React/Next.js', level: 98, description: 'Advanced hooks, SSR, performance optimization' },
        { name: 'TypeScript', level: 95, description: 'Type-safe development, advanced patterns' },
        { name: 'Tailwind CSS', level: 96, description: 'Custom design systems, responsive layouts' },
        { name: 'Three.js/WebGL', level: 85, description: '3D graphics, interactive experiences' },
      ],
    },
    {
      title: 'Backend Excellence',
      icon: Database,
      color: 'from-neon-purple to-neon-pink',
      skills: [
        { name: 'Node.js/Express', level: 94, description: 'Scalable APIs, microservices architecture' },
        { name: 'Python/FastAPI', level: 90, description: 'ML integration, high-performance APIs' },
        { name: 'PostgreSQL/MongoDB', level: 88, description: 'Database optimization, complex queries' },
        { name: 'GraphQL', level: 85, description: 'Efficient data fetching, schema design' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-neon-pink to-neon-green',
      skills: [
        { name: 'AWS/Azure/GCP', level: 92, description: 'Serverless, containers, infrastructure as code' },
        { name: 'Docker/Kubernetes', level: 88, description: 'Container orchestration, scaling' },
        { name: 'CI/CD Pipelines', level: 90, description: 'Automated deployment, testing' },
        { name: 'Terraform', level: 82, description: 'Infrastructure automation, multi-cloud' },
      ],
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-neon-green to-neon-yellow',
      skills: [
        { name: 'TensorFlow/PyTorch', level: 85, description: 'Deep learning, neural networks' },
        { name: 'OpenAI APIs', level: 90, description: 'GPT integration, prompt engineering' },
        { name: 'Computer Vision', level: 80, description: 'Image processing, object detection' },
        { name: 'NLP/LangChain', level: 88, description: 'Text analysis, chatbots, RAG systems' },
      ],
    },
  ];

  const techStack = [
    'React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 
    'PostgreSQL', 'MongoDB', 'GraphQL', 'TensorFlow', 'Next.js', 
    'Tailwind CSS', 'Kubernetes', 'Redis', 'Elasticsearch', 'WebRTC'
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
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Constantly evolving with cutting-edge technologies to deliver exceptional solutions.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple font-semibold">
                From AI-powered applications to scalable cloud architectures.
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

          {/* Skills Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 grid md:grid-cols-4 gap-8"
          >
            {[
              { icon: Code, label: 'Frontend', count: '50+', color: 'text-neon-blue' },
              { icon: Database, label: 'Backend', count: '40+', color: 'text-neon-purple' },
              { icon: Cloud, label: 'Cloud', count: '30+', color: 'text-neon-pink' },
              { icon: Brain, label: 'AI/ML', count: '20+', color: 'text-neon-green' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 p-8 hover:border-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <stat.icon className={`h-12 w-12 ${stat.color} mx-auto mb-4`} />
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.count}</div>
                <div className="text-gray-400 font-medium">{stat.label} Technologies</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;