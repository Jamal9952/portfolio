import React, { useState } from 'react';
import Image from 'next/image';
import { assets, workData } from '@/assets/assets';
import { motion } from 'motion/react';
import { FiExternalLink } from 'react-icons/fi';

const Work = ({isDarkMode}) => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <motion.div id="work" className='relative w-full px-[8%] py-20 scroll-mt-20 overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5'></div>
      
      <div className='relative z-10'>
        <motion.h4
          className='text-center mb-2 text-lg font-Ovo text-primary motion-element'
          initial={{opacity:0, y:-20}}
          whileInView={{opacity:1, y:0}}
          viewport={{ once: true, amount: 0.3 }}
          transition={{duration:0.5, delay:0.1, ease: "easeOut"}}
        >
          My Portfolio
        </motion.h4>
        <motion.h2
          className='text-center text-5xl font-Ovo font-bold motion-element'
          initial={{opacity:0, y:-20}}
          whileInView={{opacity:1, y:0}}
          viewport={{ once: true, amount: 0.3 }}
          transition={{duration:0.5, delay:0.2, ease: "easeOut"}}
        >
          <span className='gradient-text'>Latest Projects</span>
        </motion.h2>
        <motion.p
          className='text-center max-w-3xl mx-auto mt-5 mb-16 font-Ovo text-gray-600 dark:text-gray-300 motion-element'
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          viewport={{ once: true, amount: 0.3 }}
          transition={{duration:0.5, delay:0.3, ease: "easeOut"}}
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
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center motion-element`}
            >
              {/* Project Image */}
              <motion.div
                className='relative w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden glass shadow-glass group motion-element'
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
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
                </div>
              </motion.div>
              
              {/* Project Description */}
              <div className='w-full lg:w-1/2 space-y-6'>
                <motion.h3
                  className='text-3xl font-bold text-gray-800 dark:text-white motion-element'
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2, ease: "easeOut" }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed motion-element'
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3, ease: "easeOut" }}
                >
                  {project.description}
                </motion.p>

                {/* Technologies list */}
                <motion.div
                  className='flex flex-wrap gap-2 motion-element'
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.4, ease: "easeOut" }}
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
          className='text-center mt-20 motion-element'
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          viewport={{ once: true, amount: 0.3 }}
          transition={{duration:0.5, delay:0.3, ease: "easeOut"}}
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
