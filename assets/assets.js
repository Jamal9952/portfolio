import user_image from './user-image.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import profile_img from './user-image.jpg';
import hand_icon from './hand-icon.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import clara_image from './clara.png';
import envoy_image from './envoy.png';
import kinderdorf_image from './kinderdorf.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    profile_img,
    hand_icon,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    clara_image,
    envoy_image,
    kinderdorf_image
};

export const workData = [
    {
        title: 'Envoy',
        description: 'A comprehensive healthcare system designed specifically for US pharmacies, featuring advanced patient assessment capabilities and multi-language support. Built with a robust architecture using CoffeeScript, Node.js, and Python to handle complex pharmaceutical workflows and integrate seamlessly with existing pharmacy management systems.',
        bgImage: assets.envoy_image,
        link: '#',
        technologies: ['CoffeeScript', 'Node.js', 'Python', 'React', 'Express.js', 'MongoDB', 'Healthcare APIs']
    },
    {
        title: 'ClaraRx',
        description: 'A cutting-edge billing and dispensing platform revolutionizing US pharmacy operations. Recently launched with tremendous market potential, ClaraRx integrates with critical government software including NCPDP (National Council for Prescription Drug Programs) and provides a unified platform for all pharmacy operations, from prescription processing to insurance claims management.',
        bgImage: assets.clara_image,
        link: '#',
        technologies: ['React', 'Node.js', 'MongoDB', 'NCPDP Integration', 'Healthcare APIs', 'Payment Processing', 'Express.js']
    },
    {
        title: 'Kinder Dorf - Kids Clothing Store',
        description: 'An e-commerce platform for children\'s clothing featuring modern design, secure payment processing, and comprehensive inventory management. The platform includes user authentication, shopping cart functionality, and responsive design for optimal mobile experience.',
        bgImage: assets.kinderdorf_image,
        link: '#',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Stripe', 'Tailwind CSS', 'Redux']
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
        icon: assets.graphics_icon, 
        title: 'Frontend Optimization', 
        description: 'Optimizing performance, accessibility, and SEO for better user engagement and search rankings.', 
        link: '#services' 
    },
    { 
        icon: assets.ui_icon, 
        title: 'UI/UX Design', 
        description: 'Designing intuitive user interfaces and seamless user experiences with modern design principles.', 
        link: '#services' 
    },
    { 
        icon: assets.mobile_icon, 
        title: 'Mobile Development', 
        description: 'Creating cross-platform mobile applications with React Native and progressive web apps.', 
        link: '#services' 
    }
];

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Technologies', description: 'React.js, Node.js, JavaScript, TypeScript, CoffeeScript, React Native, MongoDB, PostgreSQL, Express.js, Firebase, MySQL, Redux, Next.js, Tailwind CSS' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Masters in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Experience', description: '2+ years in React.js development' }
];

export const skills = [
    { name: 'React.js', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'JavaScript', level: 88 },
    { name: 'TypeScript', level: 80 },
    { name: 'CoffeeScript', level: 75 },
    { name: 'React Native', level: 70 },
    { name: 'MongoDB', level: 85 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'Express.js', level: 85 },
    { name: 'Firebase', level: 80 },
    { name: 'MySQL', level: 70 },
    { name: 'Redux', level: 80 },
    { name: 'Next.js', level: 85 },
    { name: 'Tailwind CSS', level: 90 }
];