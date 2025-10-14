import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Zap, Code, Cpu } from 'lucide-react';
// Import your image from src/assets
import PROFILE_IMAGE from '../assets/ROCKYBHAI (2).jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'M Raghavendra',
    'M Raghavendra',
    'M Raghavendra',
    'M Raghavendra'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingElements = [
    { icon: Code, position: { top: '20%', left: '10%' }, delay: 0 },
    { icon: Cpu, position: { top: '30%', right: '15%' }, delay: 1 },
    { icon: Zap, position: { bottom: '30%', left: '20%' }, delay: 2 },
    { icon: Sparkles, position: { bottom: '20%', right: '10%' }, delay: 3 },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'matrix 20s linear infinite'
          }}>
        </div>
      </div>

      {/* Floating Tech Icons */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-neon-blue/30 hidden lg:block"
          style={element.position}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 4,
            delay: element.delay,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        >
          <element.icon className="h-8 w-8" />
        </motion.div>
      ))}

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-6 flex justify-center"
          >
            <img
              src={PROFILE_IMAGE}
              alt="AI Powered Frontend Developer"
              className="rounded-full border-4 border-neon-blue w-36 h-36 object-cover shadow-neon"
              style={{
                boxShadow: '0 0 20px #00d4ff, 0 0 40px #a259ff'
              }}
            />
          </motion.div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-black mb-3 leading-tight text-white">
            AI Powered Frontend Developer
          </h1>
          <span className="text-lg text-gray-300 font-semibold">{text}<span className="animate-pulse">|</span></span>

          {/* Contact Details */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-base text-gray-300 font-medium mb-5 mt-3">
            <span>📞 6302720486</span>
            <a href="mailto:mraghavendramk@gmail.com" className="hover:text-neon-blue">mraghavendramk@gmail.com</a>
            <span>Bangalore</span>
            <a href="https://www.linkedin.com/in/mraghavendra-mrk-a38044278" target="_blank" rel="noopener noreferrer" className="hover:text-neon-purple">LinkedIn Profile</a>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex justify-center space-x-8 mb-10 mt-10"
          >
            <motion.a
              href="https://github.com/"
              aria-label="GitHub"
              className="p-4 rounded-full border border-gray-700 text-gray-400 hover:text-neon-blue transition-all duration-300 backdrop-blur-sm hover:border-current hover:shadow-neon"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              data-cursor="pointer"
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mraghavendra-mrk-a38044278"
              aria-label="LinkedIn"
              className="p-4 rounded-full border border-gray-700 text-gray-400 hover:text-neon-purple transition-all duration-300 backdrop-blur-sm hover:border-current hover:shadow-neon"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              data-cursor="pointer"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="mailto:mraghavendramrk@gmail.com"
              aria-label="Email"
              className="p-4 rounded-full border border-gray-700 text-gray-400 hover:text-neon-pink transition-all duration-300 backdrop-blur-sm hover:border-current hover:shadow-neon"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              data-cursor="pointer"
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={() => scrollToSection('about')}
            className="inline-flex flex-col items-center text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            whileHover={{ y: -5 }}
            data-cursor="pointer"
          >
            <span className="text-sm mb-3 font-medium">Discover More</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 rounded-full border border-current group-hover:shadow-neon"
            >
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
