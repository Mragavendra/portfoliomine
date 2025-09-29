import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const LoadingScreen = () => {
  const codeLines = [
    "const developer = 'M Raghavendra';",
    "const skills = ['React-js','react-native','JavaScript', 'Tailwind CSS','CSS','HTML','HTML-5'];",
    "const passion = 'Innovation';",
    "console.log('Initializing...');",
    "Loading portfolio...",
    "Ready to create magic ✨"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Code2 className="h-16 w-16 text-neon-blue mx-auto mb-4 animate-glow" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
          M Raghavendra
          </h1>
        </motion.div>

        <div className="space-y-2 font-mono text-sm text-gray-400 max-w-md">
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
              className="text-left"
            >
              <span className="text-neon-green">{'>'}</span> {line}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
          className="h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full mt-8 max-w-md mx-auto"
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;