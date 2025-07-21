import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'E-Commerce Platform',
        description: 'React.js, Next.js, Tailwind CSS',
        bgImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=500&fit=crop',
        link: 'https://github.com',
        technologies: ['React', 'Next.js', 'Tailwind CSS', 'Stripe']
    },
    {
        title: 'Task Management App',
        description: 'React.js, Firebase, Material-UI',
        bgImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=500&fit=crop',
        link: 'https://github.com',
        technologies: ['React', 'Firebase', 'Material-UI', 'Redux']
    },
    {
        title: 'Weather Dashboard',
        description: 'React.js, OpenWeather API',
        bgImage: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=500&fit=crop',
        link: 'https://github.com',
        technologies: ['React', 'API Integration', 'Chart.js', 'CSS3']
    },
    {
        title: 'Portfolio Website',
        description: 'React.js, Framer Motion',
        bgImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=500&fit=crop',
        link: 'https://github.com',
        technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Glass Morphism']
    },
    {
        title: 'Social Media Dashboard',
        description: 'React.js, Node.js, MongoDB',
        bgImage: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=500&fit=crop',
        link: 'https://github.com',
        technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io']
    },
    {
        title: 'Real-time Chat App',
        description: 'React.js, Socket.io, Express',
        bgImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=500&fit=crop',
        link: 'https://github.com',
        technologies: ['React', 'Socket.io', 'Express', 'JWT']
    }
];

export const serviceData = [
    { 
        icon: assets.web_icon, 
        title: 'Web Development', 
        description: 'Building modern, responsive web applications using React.js, Next.js, and cutting-edge technologies.', 
        link: '#services' 
    },
    { 
        icon: assets.mobile_icon, 
        title: 'Mobile Development', 
        description: 'Creating cross-platform mobile applications with React Native and progressive web apps.', 
        link: '#services' 
    },
    { 
        icon: assets.ui_icon, 
        title: 'UI/UX Design', 
        description: 'Designing intuitive user interfaces and seamless user experiences with modern design principles.', 
        link: '#services' 
    },
    { 
        icon: assets.graphics_icon, 
        title: 'Frontend Optimization', 
        description: 'Optimizing performance, accessibility, and SEO for better user engagement and search rankings.', 
        link: '#services' 
    },
];

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Technologies', description: 'React.js, Next.js, TypeScript, Tailwind CSS, Node.js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science & Engineering' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Experience', description: '2+ years in React.js development' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];

export const skills = [
    { name: 'React.js', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'JavaScript', level: 88 },
    { name: 'TypeScript', level: 75 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Node.js', level: 70 },
    { name: 'Git', level: 80 },
    { name: 'Firebase', level: 75 }
];