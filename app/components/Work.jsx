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
          Explore a collection of my recent projects, showcasing modern web development 
          techniques and innovative solutions for real-world applications.
        </motion.p>

        <div className='space-y-20'>
          {workData.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
            >
              {/* Project Image */}
              <motion.div 
                className='relative w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden glass shadow-glass group'
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src={project.bgImage} 
                  alt={project.title}
                  fill
                  className='object-cover transition-transform duration-500 group-hover:scale-105'
                />
                
                {/* Overlay with tech stack */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                
                {/* Technologies on hover */}
                <div className='absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className='px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium'
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
                      href='https://github.com/Jamal9952'
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
              </motion.div>
              
              {/* Project Description */}
              <div className='w-full lg:w-1/2 space-y-6'>
                <motion.h3 
                  className='text-3xl font-bold text-gray-800 dark:text-white'
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed'
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                >
                  {project.description}
                </motion.p>
                
                {/* Technologies list */}
                <motion.div 
                  className='flex flex-wrap gap-2'
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className='px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary dark:text-secondary rounded-full text-sm font-medium border border-primary/20 dark:border-secondary/20'
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Friendly Note */}
        <motion.div 
          className='text-center mt-20'
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.5,delay:1.1}}
        >
          <div className='glass rounded-2xl p-8 max-w-2xl mx-auto'>
            <h3 className='text-2xl font-bold mb-4 gradient-text'>Ready for More Projects!</h3>
            <p className='text-gray-600 dark:text-gray-300 mb-6'>
              I'm always excited to take on new challenges and bring innovative ideas to life. 
              Whether it's healthcare systems, e-commerce platforms, or cutting-edge web applications, 
              I'm ready to collaborate on your next project.
            </p>
            <motion.a 
              href='#contact'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full hover:shadow-glow transition-all duration-300 text-white font-semibold'
            >
              <span>Let's Work Together</span>
              <FiExternalLink className='w-5 h-5' />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Work