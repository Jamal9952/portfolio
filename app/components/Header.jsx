'use client'
import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiExternalLink } from 'react-icons/fi'

const Header = ({ isDarkMode }) => {
  const handleResumeDownload = () => {
    // Create a link to download the PDF resume
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Jamal_Ahmed_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='relative w-full min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20'></div>
      
      {/* Floating elements */}
      <div className='absolute top-20 left-20 w-20 h-20 bg-primary/30 rounded-full blur-xl animate-float'></div>
      <div className='absolute bottom-20 right-20 w-32 h-32 bg-secondary/30 rounded-full blur-xl animate-float' style={{animationDelay: '2s'}}></div>
      <div className='absolute top-1/2 left-1/4 w-16 h-16 bg-accent/30 rounded-full blur-xl animate-float' style={{animationDelay: '4s'}}></div>
      
      <div className='relative z-10 w-11/12 max-w-4xl text-center mx-auto flex flex-col items-center justify-center gap-8'>
        {/* Profile Image with Glass Effect */}
        <motion.div
          initial={{scale: 0, opacity: 0}}
          animate={{scale: 1, opacity: 1}}
          transition={{duration: 0.6, type: 'spring', stiffness: 100, ease: "easeOut"}}
          className='relative motion-element'
        >
          <div className='relative w-40 h-40 rounded-full overflow-hidden glass shadow-glass'>
            <Image 
              src={assets.profile_img} 
              alt='Jamal Ahmed' 
              className='w-full h-full object-cover'
              width={160}
              height={160}
            />
          </div>
          <div className='absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-glow'>
            <Image src={assets.hand_icon} alt='' className='w-6 h-6' />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.h3
          className='flex items-center gap-3 text-xl md:text-2xl font-Ovo motion-element'
          initial={{y: -20, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.2, ease: "easeOut"}}
        >
          <span className='gradient-text font-semibold'>Hi, I'm Jamal Ahmed</span>
        </motion.h3>

        {/* Main Title */}
        <motion.h1
          className='text-4xl sm:text-6xl lg:text-7xl font-Ovo font-bold motion-element'
          initial={{y: -30, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.6, delay: 0.3, ease: "easeOut"}}
        >
          <span className='gradient-text'>React.js</span>
          <br />
          <span className='text-gray-800 dark:text-white'>Developer</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className='max-w-2xl mx-auto text-lg font-Ovo text-gray-600 dark:text-gray-300 motion-element'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.5, delay: 0.4, ease: "easeOut"}}
        >
          Passionate React.js developer with 2+ years of experience creating modern, 
          responsive web applications. Specialized in building scalable frontend solutions 
          with cutting-edge technologies.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          className='flex flex-col sm:flex-row items-center gap-4 mt-8'
          initial={{y: 30, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.4, delay: 0.4}}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className='px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center gap-2 shadow-glow hover:shadow-lg transition-all duration-300'
          >
            <FiMail className='w-5 h-5' />
            Contact Me
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleResumeDownload}
            className='px-8 py-4 glass rounded-full flex items-center gap-2 hover:bg-white/20 transition-all duration-300'
          >
            <FiDownload className='w-5 h-5' />
            Download Resume
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className='flex items-center gap-4 mt-8'
          initial={{y: 30, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.4, delay: 0.5}}
        >
          <motion.a
            href='https://github.com/Jamal9952'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.1, y: -2 }}
            className='w-12 h-12 glass rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300'
          >
            <FiGithub className='w-6 h-6' />
          </motion.a>
          
          <motion.a
            href='https://www.linkedin.com/in/jamal-ahmed-b25616189/'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.1, y: -2 }}
            className='w-12 h-12 glass rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300'
          >
            <FiLinkedin className='w-6 h-6' />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.4, delay: 0.6}}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center'
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className='w-1 h-3 bg-gray-400 rounded-full mt-2'
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Header