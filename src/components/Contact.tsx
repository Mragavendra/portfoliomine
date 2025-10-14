import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, Calendar, Zap } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: '',
  });
  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '', budget: '', timeline: '' });

      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev: any) => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mraghavendramrk@gmail.com',
      href: 'mailto:mraghavendramrk@gmail.com',
      color: 'text-neon-blue',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6302720486',
      href: 'tel:+916302720486',
      color: 'text-neon-purple',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangalore, India',
      href: '#',
      color: 'text-neon-pink',
    },
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-neon-blue' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-neon-purple' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-neon-pink' },
    { icon: MessageCircle, href: '#', label: 'Discord', color: 'hover:text-neon-green' },
  ];

  const budgetOptions = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+',
    'Let\'s discuss'
  ];

  const timelineOptions = [
    'ASAP',
    '1-2 weeks',
    '1 month',
    '2-3 months',
    '3-6 months',
    '6+ months'
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-dark-50/10 to-black"></div>

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
            <h2 className="text-4xl md:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
                Let's Create Magic
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to bring your vision to life? Let's discuss your next groundbreaking project.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple font-semibold">
                From pixel-perfect UI design to flawless responsiveness, I never compromise on quality—ensuring your ideas shine through with stunning, user-focused experiences.
              </span>
            </p>

          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                    Get In Touch
                  </span>
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                  Whether you have a revolutionary idea, need technical consultation, or want to collaborate
                  on cutting-edge projects, I'm here to help turn your vision into reality.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center space-x-6 p-6 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
                    whileHover={{ scale: 1.02, x: 10 }}
                    data-cursor="pointer"
                  >
                    <div className={`p-4 rounded-xl bg-gradient-to-br from-current to-current/50 ${info.color}`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium">{info.label}</p>
                      <p className={`text-lg font-semibold ${info.color} group-hover:text-white transition-colors duration-300`}>
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6">Connect With Me</h4>
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
                      className={`p-4 bg-black/40 backdrop-blur-xl rounded-xl text-gray-400 ${social.color} transition-all duration-300 border border-white/10 hover:border-current hover:shadow-neon`}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      data-cursor="pointer"
                    >
                      <social.icon className="h-6 w-6" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/30 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-neon-blue">50+</div>
                    <div className="text-gray-400 text-sm">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-neon-purple">6+</div>
                    <div className="text-gray-400 text-sm">Years</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-neon-pink">24h</div>
                    <div className="text-gray-400 text-sm">Response</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-black/40 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10"
            >
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-neon-green to-neon-blue rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-300">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-4 bg-black/60 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue transition-all duration-300 ${errors.name ? 'border-red-500' : 'border-white/20 focus:border-neon-blue'
                          }`}
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="text-red-400 text-sm mt-2">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-4 bg-black/60 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue transition-all duration-300 ${errors.email ? 'border-red-500' : 'border-white/20 focus:border-neon-blue'
                          }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-3">
                      Project Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-4 bg-black/60 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue transition-all duration-300 ${errors.subject ? 'border-red-500' : 'border-white/20 focus:border-neon-blue'
                        }`}
                      placeholder="What's your project about?"
                    />
                    {errors.subject && <p className="text-red-400 text-sm mt-2">{errors.subject}</p>}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-gray-300 text-sm font-medium mb-3">
                        Project Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-black/60 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-neon-blue transition-all duration-300"
                      >
                        <option value="">Select budget range</option>
                        {budgetOptions.map((option) => (
                          <option key={option} value={option} className="bg-black">
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-gray-300 text-sm font-medium mb-3">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-black/60 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-neon-blue transition-all duration-300"
                      >
                        <option value="">Select timeline</option>
                        {timelineOptions.map((option) => (
                          <option key={option} value={option} className="bg-black">
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-3">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-4 bg-black/60 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue transition-all duration-300 resize-none ${errors.message ? 'border-red-500' : 'border-white/20 focus:border-neon-blue'
                        }`}
                      placeholder="Tell me about your project vision, requirements, and goals..."
                    />
                    {errors.message && <p className="text-red-400 text-sm mt-2">{errors.message}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-neon transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    data-cursor="pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-6 w-6" />
                        <span>Send Message</span>
                        <Zap className="h-5 w-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;