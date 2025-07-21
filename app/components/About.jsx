import React from 'react'
import Image from 'next/image'
import { assets, skills } from '@/assets/assets'
import { motion } from "motion/react"
import { FiCode, FiBookOpen, FiBriefcase, FiStar, FiDownload } from 'react-icons/fi'

const About = ({isDarkMode}) => {
  const infoItems = [
    { icon: FiCode, title: 'Technologies', description: 'React.js, Next.js, TypeScript, Tailwind CSS, Node.js' },
    { icon: FiBookOpen, title: 'Education', description: 'B.Tech in Computer Science & Engineering' },
    { icon: FiBriefcase, title: 'Experience', description: '2+ years in React.js development' }
  ];

  return (
    <motion.div id="about" className='relative w-full px-[8%] py-20 scroll-mt-20 overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-secondary/5 via-primary/5 to-accent/5'></div>
      
      <div className='relative z-10'>
        <motion.h4 
          className='text-center mb-2 text-lg font-Ovo text-primary'
          initial={{opacity:0, y:-20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.5, delay:0.3}}
        >
          Introduction
        </motion.h4>
        <motion.h2 
          className='text-center text-5xl font-Ovo font-bold'
          initial={{opacity:0, y:-20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.5, delay:0.5}}
        >
          <span className='gradient-text'>About Me</span>
        </motion.h2>

        <motion.div 
          className='flex w-full flex-col lg:flex-row items-center gap-16 my-20' 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.8}}
        >
          {/* Profile Image */}
          <motion.div 
            className='relative w-80 h-80'
            initial={{opacity:0, scale:0.9}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration:0.6}}
          >
            <div className='relative w-full h-full rounded-3xl overflow-hidden glass shadow-glass'>
              <Image 
                src={assets.user_image} 
                alt='Jamal Ahmed' 
                fill
                className='object-cover'
              />
            </div>
            {/* Floating elements around image */}
            <div className='absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float'></div>
            <div className='absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-float' style={{animationDelay: '2s'}}></div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className='flex-1'
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.8, delay:0.6}}
          >
            <div className='glass rounded-2xl p-8 mb-8'>
              <p className='text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-Ovo mb-6'> 
                I am a passionate React.js developer with over 2 years of professional experience 
                in creating modern, scalable web applications. Throughout my career, I have collaborated 
                with prestigious organizations, contributing to their digital transformation and growth.
              </p>
              <p className='text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-Ovo'>
                My expertise lies in building user-centric applications using cutting-edge technologies 
                like React.js, Next.js, and TypeScript. I believe in writing clean, maintainable code 
                and creating exceptional user experiences.
              </p>
            </div>

            {/* Info Cards */}
            <motion.div 
              className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12'
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{duration:0.8, delay:1}}
            >
              {infoItems.map((item, index) => (
                <motion.div 
                  key={item.title} 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className='glass rounded-xl p-6 hover:shadow-glow transition-all duration-300'
                >
                  <div className='w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mb-4'>
                    <item.icon className='w-6 h-6 text-white' />
                  </div>
                  <h3 className='text-lg font-semibold text-gray-800 dark:text-white mb-2'>{item.title}</h3>
                  <p className='text-gray-600 dark:text-gray-300 text-sm'>{item.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{duration:0.6, delay:1.3}}
            >
              <h3 className='text-2xl font-bold mb-6 gradient-text'>Technical Skills</h3>
              <div className='space-y-4'>
                {skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
                    className='glass rounded-xl p-4'
                  >
                    <div className='flex justify-between items-center mb-2'>
                      <span className='font-semibold text-gray-800 dark:text-white'>{skill.name}</span>
                      <span className='text-sm text-primary font-bold'>{skill.level}%</span>
                    </div>
                    <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
                      <motion.div 
                        className='bg-gradient-to-r from-primary to-secondary h-2 rounded-full'
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 1.8 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className='text-center mt-16'
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.6, delay:1.8}}
        >
          <div className='glass rounded-2xl p-8 max-w-2xl mx-auto'>
            <h3 className='text-2xl font-bold mb-4 gradient-text'>Ready to Work Together?</h3>
            <p className='text-gray-600 dark:text-gray-300 mb-6'>
              Let's discuss your project and bring your ideas to life with modern React.js solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className='px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center gap-2 mx-auto hover:shadow-glow transition-all duration-300'
            >
              <FiDownload className='w-5 h-5' />
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About