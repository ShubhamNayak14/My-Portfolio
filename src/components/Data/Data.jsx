// ================= About ===============

// Services data
import webDev from '@assets/web-page.svg';
import problem from '@assets/problem.svg';
import figma1 from '@assets/figma1.svg';
import camera from '@assets/camera.svg';
import desiger from '@assets/designer.svg';

export const ServicesData = [
  {
    img: webDev,
    title: 'Web Development',
    desc: "Experienced in building responsive and efficient websites using HTML, CSS, JavaScript, and React.",
  },
  {
    img: problem,
    title: 'Problem solver',
    desc: "Proficient in C++, focusing on efficient algorithms and optimizing code to solve complex problems.",
  },
  {
    img: figma1,
    title: 'UI Designer',
    desc: "Expert in crafting intuitive, visually appealing interfaces with a focus on usability and functionality.",
  }, 
  {
    img: desiger,
    title: 'Designer',
    desc: "Experienced in creating functional and visually appealing designs that engage audiences.",
  },
];

// Projects data
import Photography_site from '@assets/camera-1.svg';
import weather from '@assets/cloud-sun-rain.svg';
import Uiwebsite_2 from '@assets/notepad-text.svg';
import chat from '@assets/Bot.svg';
import share from '@assets/target.svg';

export const projectData = [
   {
    avatar: share,
    name: 'WormHole File Sharing',
    text: 'My project is a secure wormhole-based file-sharing website that enables fast, peer-to-peer transfer of files and messages using one-time codes. It leverages the Magic Wormhole protocol for encrypted, direct communication without storing data on servers.\nBuilt using React for the frontend, Tailwind CSS for styling, and Python with Magic Wormhole for the backend, it ensures both performance and security.\nThe modern, responsive UI allows users to upload files, generate secure codes, and track progress in real time. With no login required and full end-to-end encryption, the platform offers a seamless and private file-sharing experience.',
    link: 'https://worm-hole-web.vercel.app/',
  },
  {
    avatar: chat,
    name: 'Ai ChatBot',
    text:'HeyAI is an intelligent chatbot designed to deliver fast, conversational, and context-aware responses in real-time. Built using React for the frontend, Tailwind CSS for a modern UI, and powered by OpenAI GPT model on the backend, HeyAI offers a smooth and interactive user experience.\nIt features voice input/output, emoji support, file attachments, and PDF chat export, making conversations more dynamic and accessible. With a clean, responsive design and smart natural language understanding, HeyAI is ideal for answering questions, casual chatting, and assisting with daily tasks—truly bringing conversations to life with the pulse of intelligence.',
    link: 'https://chatbot-frontend-theta-gules.vercel.app/https://chatbot-frontend-theta-gules.vercel.app/',
  },
 
  {
    avatar: weather,
    name: 'Weather Forecasting App',
    text:'"WeatherApp" is a responsive web app providing real-time weather updates with an intuitive interface. It fetches live data via external APIs, presenting accurate weather information in a clean format. The app prioritizes performance, ensuring smooth interactions and quick data retrieval for on-the-go weather checks.',
    link: 'https://shubhamnayak14.github.io/WeatherApp/',
  },
   {
    avatar: Photography_site,
    name: 'Photography Website',
    text: 'DigiLens is an innovative web project with a clean, user-friendly interface, offering cutting-edge digital solutions. It emphasizes accessibility, responsiveness, and smooth navigation, providing a seamless experience across devices while showcasing key features and services with a focus on aesthetics and performance.',
    link: 'https://shubhamnayak14.github.io/digilens/',
  },
  {
    avatar: Uiwebsite_2,
    name: 'Resigation Page UI Design',
    text: 'This project features a clean, user-friendly registration form focused on simplicity and ease of use. With clearly defined fields and an intuitive flow, the minimalistic design ensures a smooth registration experience. Thoughtful color choices, spacing, and clear labeling enhance both aesthetics and functionality, making data entry efficient and accessible.',
    link: 'https://www.figma.com/proto/fHiUNvnmJkqdOVjZq30YPN/Registration-Form?node-id=26-298&starting-point-node-id=26%3A298',
  },
];

// Programming language data
import cpp from '@assets/C++.svg';
import sql from '@assets/SQL.svg';
import github from '@assets/github.svg';
import vsCode from '@assets/VScode.svg';
import jupyter from '@assets/Jupyter_logo.svg';
import visio from '@assets/Visio.svg';
import windows from '@assets/Windows.svg';
import adobelightroom from '@assets/adobelightroom.svg';
import figma from '@assets/figma.svg';
import dbms from '@assets/dbms.svg'
import p from '@assets/p.svg';
import editor from '@assets/editor.svg';
import behance from '@assets/behance.svg';
import unsplash from '@assets/unsplash.svg';
import tail from '@assets/tail.svg';
import css from '@assets/css.svg';
import html from '@assets/html5.svg';
import reactjs from '@assets/react.svg';

export const languageData = [
  cpp,
  dbms,
  sql,
  figma,
  github,
  jupyter,
  vsCode,
  adobelightroom,
  visio,
  windows,
  p,
  editor,
  unsplash,
  behance,
  html,
  css,
  reactjs,
  tail,
];

// ==================== Resume ======================
// Education data
export const EducationData = [
  {
    title: 'Kendriya Vidyalaya, Jhagrakhand, CBSE',
    date: '2018 — 2019',
    description: 'Completed my secondary education with 78% marks.',
  },
  {
    title: 'Kendriya Vidyalaya, Jhagrakhand, CBSE',
    date: '2020 — 2021',
    description: 'Completed my higher secondary education with 86% marks.',
  },
  {
    title: 'Kalinga Institute of Industrial Technology, Bhubaneswar',
    date: '2021 — 2025',
    description:
      'B.Tech in Electronics & Computer Science and Engineering. CGPA: 8.02', 
   
  
  },
];

// Experience data
export const ExperienceData = [
  {
    title: 'NSS Project Lakshya SOEE (Coordinator)',
    date: 'Sep 2023 - Present',
    description:
      'Motivated others to engage in social service and uplift communities'},
  {
    title: 'KIIT Fest Event Organizer',
    date: 'Feb 2024',
    description:'Organized an event at Tech Royal, my college fest.\nCaptured moments as part of the College Broadcasting Team.'
  },
  {
    title: 'Aspiring Professional',
    date: 'Present',
    description:
      'I am a motivated student actively seeking opportunities to apply my knowledge and skills in a professional setting. Eager to gain hands-on experience and contribute to a dynamic team.',
  },
  {
    title: 'Continuous Learner',
    date: 'Present',
    description:
      'Although I do not have prior industry experience, I am dedicated to building a strong foundation through ongoing learning and practical projects. My academic journey and personal initiatives reflect my commitment to growth and excellence.',
  },
];

export const SkillsData = [
  {
    title: 'Web development',
    value: 70,
  },
  {
    title: 'SQL / DBMS',
    value: 50,
  },
  {
    title: 'Problem Solving',
    value: 60,
  },
  {
    title: 'C++',
    value: 60,
  },
   {
    title: 'UI/UX Designing',
    value: 50,
  },
];

// ==================== Project ======================
import image1 from '@assets/image1.jpg';
import image2 from '@assets/image2.jpg';
import image3 from '@assets/image3.jpg';
import image4 from '@assets/image4.jpg';
import image5 from '@assets/image5.jpg';
import image6 from '@assets/image6.jpg';
import image7 from '@assets/image7.jpg';
import image8 from '@assets/image8.jpg';
import image9 from '@assets/image9.jpg';
import image10 from '@assets/image10.jpg';

export const ProjectListData = [
   {
    title: 'WormHole File Sharing',
    category: 'React JS',
    img: image10,
    link: 'https://worm-hole-web.vercel.app/',
  },
   {
    title: 'Ai ChatBot',
    category: 'React JS',
    img: image9,
    link: 'https://chatbot-frontend-theta-gules.vercel.app/',
  },
  {
    title: 'Weather Forecasting Site',
    category: 'React JS',
    img: image5,
    link: 'https://shubhamnayak14.github.io/WeatherApp/',
  },
  {
    title: 'Photography Website',
    category: 'HTML & CSS',
    img:image2,
    link: 'https://shubhamnayak14.github.io/digilens/',
  },
  {
    title: 'TO-DO List',
    category: 'React JS',
    img: image6,
    link: 'https://shubhamnayak14.github.io/Todo-List/',
  },
  {
    title: 'Temperature Convertor',
    category: 'HTML & CSS',
    img: image3,
    link: 'https://shubhamnayak14.github.io/Temperature_converter/',
  },
  {
    title: 'Analog Clock',
    category: 'HTML & CSS',
    img: image1,
    link: 'https://shubhamnayak14.github.io/Analog-clock/',
  },
  {
    title: 'TO-Do List',
    category: 'HTML & CSS',
    img: image4,
    link: 'https://shubhamnayak14.github.io/Task-list/',
  },
  {
    title: 'Calculator',
    category: 'HTML & CSS',
    img: image7,
    link: 'https://shubhamnayak14.github.io/Calculator/',
  },
  {
    title: 'Tribute Page',
    category: 'HTML & CSS',
    img: image8,
    link: 'https://shubhamnayak14.github.io/Tribute-to-APJ-Abdul-Kalam/',
  },
];

// =============== Blog ==============
// import blog1 from '@assets/blog-1.jpg';

// export const blogPosts = [
//   {
//     link: '#',
//     img: image1,
//     // category: 'Tech',
//     // date: 'Coming Soon',
//     title: 'Ai Will Change The World',
//     // sortDescription:
//     //   'How AI is changing the world and how it will impact the future.',
//   },
// ];

// =============== Uidesign ==============
import photo1 from '@assets/photo1.jpeg';
import photo2 from '@assets/photo2.jpg';
import photo3 from '@assets/photo3.jpg';
import photo4 from '@assets/photo4.jpeg';
import photo5 from '@assets/photo5.jpg';
import photo6 from '@assets/photo6.jpg';
import photo7 from '@assets/photo7.jpg';
import photo8 from '@assets/photo8.jpg';
import photo9 from '@assets/photo9.jpg';
import photo10 from '@assets/photo10.jpeg';
import photo11 from '@assets/photo11.jpg';
import photo12 from '@assets/photo12.jpg';
import photo13 from '@assets/photo13.jpg';

export const Uidesign = [
  {
    title: 'Modern Technology',
    category: 'Web Design',
    img:photo1,
    link: 'https://www.figma.com/proto/hDNeJb2y4a2blqxEdDWxpn/Project-1?node-id=84-754&starting-point-node-id=84%3A754',
  },
  {
    title: 'Registration Page',
    category: 'Web Design',
    img: photo2,
    link: 'https://www.figma.com/proto/fHiUNvnmJkqdOVjZq30YPN/Registration-Form?node-id=26-298&starting-point-node-id=26%3A298',
  },
  {
    title: 'Spotlight Effect',
    category: 'Web Design',
    img: photo3,
    link: 'https://www.figma.com/proto/5POghKpVSRJJNtELFlAIJV/Spotlight-Effect-(Community)?node-id=5-38',
  },
  {
    title: 'Parallax Effect',
    category: 'Web Design',
    img: photo4,
    link: 'https://www.figma.com/proto/IRDx4YuS62vuJMNdQG1bMM/parallex-effect?node-id=15-6955&starting-point-node-id=3%3A6862&scaling=scale-down&content-scaling=fixed',
  },
  {
    title: 'Food Order App',
    category: 'Mobile Design',
    img: photo5,
    link: 'https://www.figma.com/proto/o2fyzdX2JP8Wy3xMcnXO46/FOOD-ORDER?node-id=1-21&starting-point-node-id=1%3A2',
  },
  {
    title: 'Car Moving Animation',
    category: 'Web Design',
    img: photo6,
    link: 'https://www.figma.com/proto/1TTdR6rrd4T7HlMH6uA8wI/car-animation?node-id=4-337',
  },
  {
    title: 'Modern Image Gallary Site',
    category: 'Web & Mobile',
    img: photo7,
    link: 'https://www.figma.com/proto/kOW2xbM2tmZ5onzndOFZRM/Website-Desgin?node-id=36-2&scaling=contain&content-scaling=responsive',
  },
  {
    title: 'Effect & Animation',
    category: 'Web Design',
    img: photo8,
    link: 'https://www.figma.com/proto/suJff09Re0rSUqohxf8DcI/ANIMATION?node-id=1-34&p=f&t=5641Ap3WJ7EeOkWJ-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4',
  },
  {
    title: 'Education Platform Web Design',
    category: 'Web Design',
    img: photo9,
    link: 'https://www.figma.com/proto/3FA8KQZaIqmekrussSopU0/landing-page?node-id=112-85&p=f&t=43I481kyV88ZfWMw-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=112%3A85',
  },
  {
    title: 'Image Slider',
    category: 'Web Design',
    img: photo10,
    link: 'https://www.figma.com/proto/FJ8u2enOVDSu7MIKuDYJUo/Slider?node-id=0-3&starting-point-node-id=0%3A3',
  },
  {
    title: 'Ecommerce Web-Design',
    category: 'Web Design',
    img: photo11,
    link: 'https://www.figma.com/proto/hRpjJU3xpNgyb039qfycEy/Untitled?node-id=1-2&p=f&t=BQFg1GlsAcVghBav-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2',
  },
  {
    title: 'Mode Toggle',
    category: 'Mobile Design',
    img: photo12,
    link: 'https://www.figma.com/proto/DNgXpWukMm11MzNW1oQ74g/Mode-switch?node-id=1-3',
  },
  {
    title: 'Wallpaper Slider',
    category: 'Mobile Design',
    img: photo13,
    link: 'https://www.figma.com/proto/cORY9mzU6p9TbvgcNQKulX/Untitled?node-id=9-76&t=IC38cSXyAZ1aaBLW-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
  },
  
];
