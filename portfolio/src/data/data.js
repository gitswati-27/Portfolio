import photo          from '../assets/photo.jpeg'
import acm            from '../assets/ACM.jpg'
import android        from '../assets/android.png'
import css            from '../assets/css.png'
import html           from '../assets/html.png'
import js             from '../assets/js.png'
import meta           from '../assets/meta.jpg'
import nss            from '../assets/nss.jpg'
import py1            from '../assets/py1.png'
import py2            from '../assets/py2.png'
import web            from '../assets/web full.png'

export const personal = {
  name:    'Swati',
  initials:'SW',
  title:   ' Student & Full-Stack Developer',
  tagline: 'I am focused on creating meaningful technology that solves real problems through thoughtful code and continuous learning.',
  location:'Visakhapatnam, India',
  email:   'swatik2706@gmail.com',
  photo:   photo,   
};

export const socials = [
  { name: 'GitHub',   href: 'https://github.com/gitswati-27',   label: 'GitHub'   },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/swati-w0027',label: 'LinkedIn' },
  { name: 'LeetCode',  href: 'https://leetcode.com/u/swati-27/',     label: 'LeetCode'  },
  { name: 'Email',    href: 'mailto:swatik2706@gmail.com',         label: 'Email'    },
];

export const about = [
  "I am a motivated Computer Science student with a strong foundation in programming, data structures, and full-stack web development. I have hands-on experience building interactive and user-focused applications using Java, Python, and modern web technologies such as React, Node.js and JavaScript(ES6).",
  "I enjoy solving complex problems, writing clean and efficient code, and continuously expanding my technical expertise through practical projects. My goal is to develop scalable, impactful software solutions while growing as a professional software developer.",
];

export const skills = {
  Frontend: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'Chart.js', 'HTML', 'CSS', 'BootStrap'],
  Backend:  ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MongoDB', 'WebSockets', 'JSON Web Token', 'Multer'],
  Tools:    ['Git', 'GitHub', 'Cloudinary', 'Canva', 'Docker', 'Postman', 'Vercel', 'Render', 'WSL', 'Ubuntu', 'Vite', 'Sublime'],
};

export const education = [
  {
    year:        '2023 – 2027',
    degree:      'B.Tech Computer Science',
    institution: 'Vignan\'s Institute of Information Technology',
    description: 'Built a strong foundation in Operating Systems, Object Oriented Programming, Database Management Systems, Design and Analysis of Algorithms.',
    badge:       'CGPA 9.2 / 10',
  },
  {
    year:        '2021 – 2023',
    degree:      'Higher Secondary (Science)',
    institution: 'Aakash Institute',
    description: 'Focus on Mathematics, Physics, and Chemistry.',
    badge:       '97.1%',
  },
  {
    year:        '2011 – 2021',
    degree:      'Class I - Class X',
    institution: 'Delhi Public School',
    description: 'CBSE board, comprehensive foundation in sciences and mathematics.',
    badge:       '97.6%',
  },
];

export const projects = [
  {
    title: 'CampusConnect',
    desc:  'a full-stack campus management platform that centralizes academic workflows like assignments, attendance, results, notifications, and discussions under secure, role-based access. It streamlines communication between students, faculty, and admins through a scalable, modular architecture with real-time updates.',
    tags:  ['Multer', 'MongoDB', 'JWT Authentication','Cloudinary', 'WebSockets', 'Node.js', 'Docker', 'Express.js', 'Socket.io', 'HTML', 'CSS'],
    emoji: '🌐',
    // thumbnail: import('../assets/projects/codecollab.png')  ← swap emoji for real image
    github: 'https://github.com/gitswati-27/Campus_Connect',
    demo:   'https://campus-connect-qpma.onrender.com/',
  },
  {
    title: 'Simon Says',
    desc:  'Built an interactive memory-based Simon Says game using ES6 JavaScript, HTML, and CSS. Implemented core game logic including random sequence generation, user input validation, and progressive difficulty scaling. Utilized modern JavaScript features, DOM manipulation, and event-driven programming to create a responsive and engaging user experience. Designed a clean and interactive UI to ensure intuitive gameplay and visual feedback.',
    tags:  ['ES6+ JavaScript', 'DOM Manipulation', 'Event-driven Programming', 'Interactive UI', 'HTML', 'CSS'],
    emoji: '👾',
    github: 'https://github.com/gitswati-27/Simon-Says',
    demo:   'https://simon-says-plum.vercel.app/',
  },
  {
    title: 'Medical Record Tracker',
    desc:  'The Medical Record Tracker is a digital system designed to securely store and manage patient medical records. It provides quick access to patient history and reports, improving healthcare efficiency while reducing paperwork.',
    tags:  ['User-friendly Interface','Chart.js','Particle.js', 'JavaScript', 'HTML', 'CSS'],
    emoji: '📑',
    github: 'https://github.com/gitswati-27/Medical-record-tracker',
    demo:   'https://elegant-macaron-50ef01.netlify.app/',
  },
  {
    title: 'Spotify Clone',
    desc:  'Built a fully responsive Spotify Clone using HTML, CSS, and JavaScript, replicating essential music player functionalities. Implemented features including audio playback control, track switching, progress bar synchronization, and real-time UI updates using JavaScript and DOM manipulation. Focused on creating a clean, user-friendly interface while improving frontend development skills and understanding of media handling in web applications.',
    tags:  ['User-friendly Interface','Audio Video Embedding', 'Chart.js','Particle.js', 'JavaScript', 'HTML', 'CSS'],
    emoji: '🎶',
    github: 'https://github.com/gitswati-27/Spotify-Clone-',
    demo:   'https://spotify-clone-tau-eosin.vercel.app/',
  },
];

export const achievements = [
  { icon: '🏆', title: 'Inter-College Typing Test Winner',   desc: 'First place among 400+ participants. Achieved a highest typing speed of 54 WPM' },
  { icon: '⭐', title: 'Top 10 in SusHacks 2024',         desc: 'Led the team towards a position in Top 10. Developed an AR Navigation App for indoor spaces.' },
  { icon: '🥇', title: 'LeetCode Top 9%',                 desc: 'Solved 150+ problems, ranked globally in the top 9% of users.' },
];

export const certifications = [
  { issuer: 'Coursera',              name: 'Meta Front End Developer Certificate',      date: 'Sep 2024', color: '#FF9900', credlyUrl: '#', image: meta },
  { issuer: 'ACM',             name: 'Algorithmic Game Theory Certificate',     date: 'Dec 2025', color: '#0866FF', credlyUrl: '#' , image: acm},
  { issuer: 'Cisco',name: 'HTML Essentials Certificate',             date: 'Jun 2025', color: '#00ED64', credlyUrl: '#' , image: html},
  { issuer: 'Cisco',name: 'CSS Essentials Certificate',             date: 'Jun 2025', color: '#00ED64', credlyUrl: '#', image: css },
  { issuer: 'Cisco',name: 'JavaScript Essentials Certificate',             date: 'Jul 2025', color: '#00ED64', credlyUrl: '#', image: js },
  { issuer: 'Cisco',name: 'Python Essentials 1 Certificate',             date: 'Aug 2025', color: '#00ED64', credlyUrl: '#' , image: py1},
  { issuer: 'Cisco',name: 'Python Essentials 2 Certificate',             date: 'Aug 2025', color: '#00ED64', credlyUrl: '#', image: py2 },
  { issuer: 'EduSkills',         name: 'Android Developer Virtual Internship',          date: 'Jan - Mar 2025', color: '#0056D2', credlyUrl: '#' , image: android},
  { issuer: 'EduSkills', name: 'Web Full Stack Developer Internship',       date: 'Oct-Dec 2024', color: '#326CE5', credlyUrl: '#', image: web },
  { issuer: 'NSS',     name: 'World Literacy Day Volunteer Certificate',             date: 'Sep 2025', color: '#4285F4', credlyUrl: '#', image: nss },

];
