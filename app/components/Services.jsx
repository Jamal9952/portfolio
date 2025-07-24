import React from 'react'
import Image from 'next/image'
import { assets, serviceData } from '@/assets/assets'
import { motion } from 'motion/react'
import { FiArrowRight, FiCode, FiSmartphone, FiImage, FiZap } from 'react-icons/fi'

const Services = () => {
  const serviceIcons = [FiCode, FiSmartphone, FiImage, FiZap];

  return (
    <motion.div id="services" className='relative w-full px-[8%] py-20 scroll-mt-20 overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5'></div>
      
      <div className='relative z-10'>
        <motion.h4 
          className='text-center mb-2 text-lg font-Ovo text-primary'
          initial={{opacity:0, y:-20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.5, delay:0.3}}
        >
          What I Offer
        </motion.h4>
        <motion.h2 
          className='text-center text-5xl font-Ovo font-bold'
          initial={{opacity:0, y:-20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.5, delay:0.5}}
        >
          <span className='gradient-text'>My Services</span>
        </motion.h2>
        <motion.p 
          className='text-center max-w-3xl mx-auto mt-5 mb-16 font-Ovo text-gray-600 dark:text-gray-300'
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.5, delay:0.7}}
        >
          Specialized in modern web development with a focus on React.js ecosystem. 
          Delivering high-quality, scalable solutions that drive business growth.
        </motion.p>

        <motion.div 
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-10'
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.6, delay:0.9}}
        >
          {serviceData.map((service, index) => {
            const IconComponent = serviceIcons[index];
            return (
              <motion.div 
                key={service.title} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className='group relative'
              >
                <div className='relative p-8 rounded-2xl glass shadow-glass hover:shadow-glow transition-all duration-300 h-full'>
                  {/* Icon */}
                  <div className='relative mb-6'>
                    <div className='w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300'>
                      <IconComponent className='w-8 h-8 text-white' />
                    </div>
                    <div className='absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center'>
                      <span className='text-xs font-bold text-white'>{index + 1}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className='text-xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-primary transition-colors'>
                    {service.title}
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300 leading-relaxed mb-6'>
                    {service.description}
                  </p>

                  {/* Read More Link */}
                  <motion.a 
                    href={service.link}
                    whileHover={{ x: 5 }}
                    className='inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors'
                  >
                    Learn More
                    <FiArrowRight className='w-4 h-4' />
                  </motion.a>

                  {/* Hover Effect */}
                  <div className='absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Services