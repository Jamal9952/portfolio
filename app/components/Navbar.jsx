import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Sun, Moon, Menu, X, Mail } from 'lucide-react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {
    const [isScroll, setIsScroll] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const sideMenuRef = useRef();

    const openMenu = () => {
        setIsMobileMenuOpen(true)
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        setIsMobileMenuOpen(false)
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(()=>{
        const handleScroll = () => {
            if(window.scrollY > 50){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        }
        
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { href: "#top", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#services", label: "Services" },
        { href: "#work", label: "Work" },
        { href: "#contact", label: "Contact" }
    ];

    return (
        <>
            <motion.nav 
                className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
                    isScroll 
                        ? "glass shadow-glass" 
                        : "bg-transparent"
                }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Logo */}
                <motion.a 
                    href="#top"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Image 
                        src={isDarkMode ? assets.logo_dark : assets.logo} 
                        alt='Jamal Ahmed' 
                        className='w-28 cursor-pointer'
                    />
                </motion.a>

                {/* Desktop Navigation */}
                <motion.ul 
                    className='hidden md:flex items-center gap-6 lg:gap-8 glass rounded-full px-8 py-3 shadow-glass'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {navItems.map((item, index) => (
                        <motion.li key={item.href}>
                            <a 
                                className='font-Ovo text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300' 
                                href={item.href}
                            >
                                {item.label}
                            </a>
                        </motion.li>
                    ))}
                </motion.ul>

                {/* Right Side Actions */}
                <motion.div 
                    className='flex items-center gap-4'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {/* Theme Toggle */}
                    <motion.button 
                        onClick={() => setIsDarkMode(prev => !prev)}
                        whileHover={{ scale: 1.1, rotate: 180 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-10 h-10 glass rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300'
                    >
                        {isDarkMode ? (
                            <Sun className='w-5 h-5 text-yellow-500' />
                        ) : (
                            <Moon className='w-5 h-5 text-gray-700' />
                        )}
                    </motion.button>

                    {/* Contact Button */}
                    <motion.a 
                        href="#contact" 
                        className='font-Ovo hidden lg:flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:shadow-glow transition-all duration-300'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Mail className='w-4 h-4' />
                        Contact
                    </motion.a>

                    {/* Mobile Menu Button */}
                    <motion.button 
                        className='block md:hidden w-10 h-10 glass rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300'
                        onClick={openMenu}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Menu className='w-5 h-5 text-gray-700 dark:text-gray-300' />
                    </motion.button>
                </motion.div> 

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden'
                            onClick={closeMenu}
                        />
                    )}
                </AnimatePresence>
                
                <motion.ul 
                    ref={sideMenuRef} 
                    className='flex md:hidden flex-col gap-6 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen glass shadow-glass transition-transform duration-500'
                    initial={{ x: '100%' }}
                    animate={{ x: isMobileMenuOpen ? '-100%' : '100%' }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Close Button */}
                    <motion.button 
                        className='absolute right-6 top-6 w-10 h-10 glass rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300'
                        onClick={closeMenu}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <X className='w-5 h-5 text-gray-700 dark:text-gray-300' />
                    </motion.button>

                    {/* Mobile Menu Items */}
                    {navItems.map((item, index) => (
                        <motion.li 
                            key={item.href}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <a 
                                className='font-Ovo text-lg text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 block py-2' 
                                onClick={closeMenu} 
                                href={item.href}
                            >
                                {item.label}
                            </a>
                        </motion.li>
                    ))}

                    {/* Mobile Contact Button */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                        className='mt-8'
                    >
                        <motion.a 
                            href="#contact" 
                            className='font-Ovo flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:shadow-glow transition-all duration-300'
                            onClick={closeMenu}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Mail className='w-4 h-4' />
                            Get In Touch
                        </motion.a>
                    </motion.div>
                </motion.ul>
            </motion.nav>
        </>
    )
}

export default Navbar