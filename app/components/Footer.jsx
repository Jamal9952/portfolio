import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from 'motion/react'
import { FiMail, FiGithub, FiLinkedin, FiArrowUp } from 'react-icons/fi'

const Footer = ({isDarkMode}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer 
      className='relative mt-20 overflow-hidden'
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.6}}
    >
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5'></div>
      
      <div className='relative z-10'>
        {/* Main Footer Content */}
        <div className='glass rounded-2xl mx-[8%] p-12 mb-8'>
          <div className='text-center mb-8'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image 
                src={isDarkMode ? assets.logo_dark : assets.logo} 
                alt='Jamal Ahmed' 
                className='w-36 mx-auto mb-4'
              />
            </motion.div>
            <p className='text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
              Passionate React.js developer creating modern, scalable web applications. 
              Let's build something amazing together!
            </p>
          </div>

          {/* Contact Info */}
          <div className='flex flex-col sm:flex-row items-center justify-center gap-8 mb-8'>
            <motion.a
              href='mailto:jamalahmed9952@gmail.com'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors'
            >
              <FiMail className='w-5 h-5' />
              jamalahmed9952@gmail.com
            </motion.a>
          </div>

          {/* Social Links */}
          <div className='flex items-center justify-center gap-6 mb-8'>
            <motion.a
              href='https://github.com/Jamal9952'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='w-12 h-12 glass rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300'
            >
              <FiGithub className='w-6 h-6' />
            </motion.a>
            
            <motion.a
              href='https://www.linkedin.com/in/jamal-ahmed-b25616189/'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='w-12 h-12 glass rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300'
            >
              <FiLinkedin className='w-6 h-6' />
            </motion.a>
          </div>

          {/* Quick Links */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 text-center'>
            <motion.a 
              href='#about'
              whileHover={{ scale: 1.05 }}
              className='text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors'
            >
              About
            </motion.a>
            <motion.a 
              href='#services'
              whileHover={{ scale: 1.05 }}
              className='text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors'
            >
              Services
            </motion.a>
            <motion.a 
              href='#work'
              whileHover={{ scale: 1.05 }}
              className='text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors'
            >
              Work
            </motion.a>
            <motion.a 
              href='#contact'
              whileHover={{ scale: 1.05 }}
              className='text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors'
            >
              Contact
            </motion.a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='glass rounded-xl mx-[8%] p-6'>
          <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
            <p className='text-gray-600 dark:text-gray-300 text-sm'>
              © 2025 Jamal Ahmed. All rights reserved.
            </p>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='w-10 h-10 glass rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300'
            >
              <FiArrowUp className='w-5 h-5 text-gray-600 dark:text-gray-300' />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer