import React, { useState } from 'react';
import Image from 'next/image';
import { assets, workData } from '@/assets/assets';
import { motion } from 'motion/react';
import { FiExternalLink, FiGithub, FiEye } from 'react-icons/fi';

const Work = ({isDarkMode}) => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <motion.div id="work" className='relative w-full px-[8%] py-20 scroll-mt-20 overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5'></div>
      
      <div className='relative z-10'>
        <motion.h4 
          className='text-center mb-2 text-lg font-Ovo text-primary'
          initial={{opacity:0, y:-20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.5, delay:0.3}}
        >
          My Portfolio
        </motion.h4>
        <motion.h2 
          className='text-center text-5xl font-Ovo font-bold'
          initial={{opacity:0, y:-20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.5, delay:0.5}}
        >
          <span className='gradient-text'>Latest Projects</span>
        </motion.h2>
        <motion.p 
          className='text-center max-w-3xl mx-auto mt-5 mb-16 font-Ovo text-gray-600 dark:text-gray-300'
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.5,delay:0.7}}
        >
          Explore a collection of my recent React.js projects, showcasing modern web development 
          techniques and innovative solutions for real-world applications.
        </motion.p>

        <motion.div 
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10'
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.6,delay:0.9}}
        >
          {workData.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className='group relative'
            >
              <div className='relative aspect-[4/3] rounded-2xl overflow-hidden glass shadow-glass'>
                {/* Project Image */}
                <Image 
                  src={project.bgImage} 
                  alt={project.title}
                  fill
                  className='object-cover transition-transform duration-500 group-hover:scale-110'
                />
                
                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                
                {/* Project Info */}
                <div className='absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
                  <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                  <p className='text-sm text-gray-300 mb-4'>{project.description}</p>
                  
                  {/* Technologies */}
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className='px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className='flex gap-3'>
                    <motion.a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className='flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm hover:bg-white/30 transition-colors'
                    >
                      <FiEye className='w-4 h-4' />
                      View
                    </motion.a>
                    <motion.a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className='flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-full text-sm hover:shadow-glow transition-all'
                    >
                      <FiGithub className='w-4 h-4' />
                      Code
                    </motion.a>
                  </div>
                </div>
              </div>
              
              {/* Project Title (visible when not hovering) */}
              <div className='mt-4 text-center group-hover:opacity-0 transition-opacity duration-300'>
                <h3 className='text-lg font-semibold text-gray-800 dark:text-white'>{project.title}</h3>
                <p className='text-sm text-gray-600 dark:text-gray-400'>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More Button */}
        <motion.div 
          className='text-center mt-16'
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.5,delay:1.1}}
        >
          <motion.a 
            href='https://github.com'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='inline-flex items-center gap-3 px-8 py-4 glass rounded-full hover:shadow-glow transition-all duration-300'
          >
            <span className='font-semibold'>View More Projects</span>
            <FiExternalLink className='w-5 h-5' />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Work