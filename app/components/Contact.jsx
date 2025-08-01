import Image from 'next/image';
import { assets } from '@/assets/assets';
import React, { useState } from 'react'
import { motion } from 'motion/react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const Contact = () => {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending....");
        
        try {
            const formDataToSend = new FormData(event.target);
            formDataToSend.append("access_key", "fa34d045-6ed3-4fda-b4d9-560720b6d5ef");

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message sent successfully! I'll get back to you soon.");
                setFormData({ name: '', email: '', message: '' });
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            setResult("Network error. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: FiMail,
            title: 'Email',
            value: 'jamalahmed9952@gmail.com',
            link: 'mailto:jamalahmed9952@gmail.com'
        },
        {
            icon: FiPhone,
            title: 'Phone',
            value: '+92323 4455150',
            link: 'tel:+923234455150'
        },
        {
            icon: FiMapPin,
            title: 'Location',
            value: 'Pakistan',
            link: 'https://maps.google.com/?q=Lahore,Pakistan'
        }
    ];

    return (
        <motion.div id="contact" className='relative w-full px-[8%] py-20 scroll-mt-20 overflow-hidden'>
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
                    Connect with me
                </motion.h4>
                <motion.h2
                    className='text-center text-5xl font-Ovo font-bold motion-element'
                    initial={{opacity:0, y:-20}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{duration:0.5, delay:0.2, ease: "easeOut"}}
                >
                    <span className='gradient-text'>Get in Touch</span>
                </motion.h2>
                <motion.p
                    className='text-center max-w-3xl mx-auto mt-5 mb-16 font-Ovo text-gray-600 dark:text-gray-300 motion-element'
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{duration:0.5, delay:0.3, ease: "easeOut"}}
                >
                    I'd love to hear from you! Whether you have a project in mind, want to collaborate, 
                    or just want to say hello, feel free to reach out.
                </motion.p>

                <motion.div
                    className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto motion-element'
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{duration:0.5, delay:0.4, ease: "easeOut"}}
                >
                    {/* Contact Info */}
                    <motion.div
                        initial={{opacity:0, x:-50}}
                        whileInView={{opacity:1, x:0}}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{duration:0.6, delay:0.8, ease: "easeOut"}}
                        className="motion-element"
                    >
                        <h3 className='text-2xl font-bold mb-8 gradient-text'>Let's Connect</h3>
                        <div className='space-y-6'>
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={info.title}
                                    href={info.link}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, delay: 1 + index * 0.1, ease: "easeOut" }}
                                    whileHover={{ x: 10 }}
                                    className='flex items-center gap-4 glass rounded-xl p-6 hover:shadow-glow contact-card motion-element'
                                >
                                    <div className='w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center'>
                                        <info.icon className='w-6 h-6 text-white' />
                                    </div>
                                    <div>
                                        <h4 className='font-semibold text-gray-800 dark:text-white'>{info.title}</h4>
                                        <p className='text-gray-600 dark:text-gray-300'>{info.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Additional Info */}
                        <motion.div 
                            className='mt-12 glass rounded-2xl p-8'
                            initial={{opacity:0}}
                            whileInView={{opacity:1}}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{duration:0.6, delay:1.4}}
                        >
                            <h4 className='text-xl font-bold mb-4 text-gray-800 dark:text-white'>Available for:</h4>
                            <ul className='space-y-2 text-gray-600 dark:text-gray-300'>
                                <li>• Full-time opportunities</li>
                                <li>• Freelance projects</li>
                                <li>• Technical consulting</li>
                                <li>• Code reviews</li>
                            </ul>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{opacity:0, x:50}}
                        whileInView={{opacity:1, x:0}}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{duration:0.6, delay:0.8}}
                    >
                        <motion.form 
                            onSubmit={onSubmit} 
                            className='glass rounded-2xl p-8'
                            initial={{opacity:0}}
                            whileInView={{opacity:1}}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{duration:0.4, delay:0.4}}
                        >
                            <h3 className='text-2xl font-bold mb-8 gradient-text'>Send Message</h3>
                            
                            <div className='space-y-6'>
                                <div>
                                    <label className='block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                                        Name *
                                    </label>
                                    <input 
                                        type='text' 
                                        placeholder='Your name' 
                                        required 
                                        name='name'
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className='w-full p-4 outline-none glass rounded-xl border border-primary/20 dark:border-white/20 focus:border-primary/50 dark:focus:border-primary/50 transition-colors'
                                    />
                                </div>
                                
                                <div>
                                    <label className='block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                                        Email *
                                    </label>
                                    <input 
                                        type='email' 
                                        placeholder='Enter your email address' 
                                        required 
                                        name='email'
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className='w-full p-4 outline-none glass rounded-xl border border-primary/20 dark:border-white/20 focus:border-primary/50 dark:focus:border-primary/50 transition-colors'
                                    />
                                </div>
                                
                                <div>
                                    <label className='block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                                        Message *
                                    </label>
                                    <textarea 
                                        rows='6' 
                                        placeholder='Tell me about your project...' 
                                        required 
                                        name='message'
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className='w-full p-4 outline-none glass rounded-xl border border-primary/20 dark:border-white/20 focus:border-primary/50 dark:focus:border-primary/50 transition-colors resize-none'
                                    />
                                </div>
                            </div>

                            <motion.button 
                                type='submit' 
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className='w-full mt-8 py-4 px-8 bg-gradient-to-r from-primary to-secondary text-white rounded-xl flex items-center justify-center gap-2 hover:shadow-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <FiSend className='w-5 h-5' />
                                        Send Message
                                    </>
                                )}
                            </motion.button>

                            {/* Result Message */}
                            {result && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`mt-4 p-4 rounded-xl flex items-center gap-2 ${
                                        result.includes('successfully') 
                                            ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300' 
                                            : 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                                    }`}
                                >
                                    {result.includes('successfully') ? (
                                        <FiCheckCircle className='w-5 h-5' />
                                    ) : (
                                        <FiAlertCircle className='w-5 h-5' />
                                    )}
                                    {result}
                                </motion.div>
                            )}
                        </motion.form>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Contact;
