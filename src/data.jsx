import { FaPaintBrush } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaCodeCompare } from "react-icons/fa6";
import { GiIdea } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  profile3,
  profile4,
  profile5,
  profile6,
  figma,
  html,
  javascript,
  tailwind,
  react,
  reactnative,
  emailicon,
  whatsappicon,
  mongodb,
  nodejs,
  expressjs,
  linkedin,
  flutter,
  git,
  github,
  cpp,
  python,
} from "./assets";

export const menu = [
  { name: "About" },
  { name: "Education" },
  { name: "Experience" },
  { name: "Services" },
  { name: "Skill" },
  { name: "Projects" },
  { name: "Testimonial" },
  { name: "Contact" },
];

export const services = [
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush />,
    description: `Crafting visually stunning and user-centric designs that ensure seamless user experiences. 
                  From wireframes to high-fidelity prototypes, I focus on creating intuitive interfaces that 
                  blend creativity and functionality, enhancing engagement and usability.`,
  },
  {
    title: "Web Development",
    icon: <FaCodeCompare />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `Building responsive, dynamic, and high-performance websites tailored to your needs. 
    Using modern technologies like React, Node.js, and more, I ensure your site is optimized 
    for speed, scalability, and accessibility, delivering a robust online presence.`,
  },
  {
    title: "App Development",
    icon: <GiIdea />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `Transform your ideas into flexible, scalable, and user-friendly apps.
                Leverage modern frameworks like React Native and Flutter to deliver
                high-performance solutions that blend functionality with a seamless
                user experience across multiple platforms.`,
  },
];

export const projects = [
  {
    title: "R D Memorial Hospital",
    image: project1,
    category: "Web-App",
    description: `A modern and responsive hospital website built using React. Delivered a responsive solution with 100% client satisfaction.`,
    demoLink: "https://rdmhospital.in/",
    stacks: [
      {
        name: "ReactJs",
        logo: react,
      },
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "Tailwind",
        logo: tailwind,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
    ],
  },
  {
    title: "Technovators Club",
    image: project2,
    category: "Web",
    description: `Technovators Society is our college's community dedicated to organizing technical events like hackathons, talks, and workshops.`,
    demoLink: "https://technovator.in/",
    stacks: [
      {
        name: "ReactJs",
        logo: react,
      },
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "Tailwind",
        logo: tailwind,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
    ],
  },
  {
    title: "Shopify",
    image: project3,
    category: "Web",
    description: `A Full-stack eCommerce platform using MERN with secure authentication and PayPal integration for seamless transactions.`,
    demoLink: "https://ecommapp-1.onrender.com/",
    stacks: [
      {
        name: "MongoDB",
        logo: mongodb,
      },
      {
        name: "ExpressJs",
        logo: expressjs,
      },
      {
        name: "ReactJs",
        logo: react,
      },
      {
        name: "NodeJs",
        logo: nodejs,
      },
      {
        name: "Tailwind",
        logo: tailwind,
      },
    ],
  },
  {
    title: "SmallStart.AI",
    image: project4,
    category: "Apps",
    description: `Designed and developed the official website for a tech and social media company offering app development, web solutions, and digital marketing services.`,
    demoLink: "https://smallstartai.com/",
    stacks: [
      {
        name: "ReactJs",
        logo: react,
      },
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "Tailwind",
        logo: tailwind,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
    ],
  },
  {
    title: "Mobile bank - App Design",
    image: project5,
    category: "UI/UX",
    description: `Experience banking at your fingertips with our sleek Mobile Bank app design. Seamlessly manage your finances on-the-go with intuitive navigation, secure transactions.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "Figma",
        logo: figma,
      },
    ],
  },
  {
    title: "Quiz App Development",
    image: project6,
    category: "Apps",
    description: `Elevate engagement and knowledge retention with our Quiz App 
                    Development project. Seamlessly crafted for interactive learning, offers customizable quizzes.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "React Native",
        logo: reactnative,
      },
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "Flutter",
        logo: flutter,
      },
      {
        name: "C++",
        logo: cpp,
      },
    ],
  },
];

export const skills = [
  {
    title: "Tools",
    data: [
      {
        skill: "Git",
        level: "Intermediate",
        logo: git,
      },
      {
        skill: "GitHub",
        level: "Intermediate",
        logo: github,
      },
      {
        skill: "Figma",
        level: "Experienced",
        logo: figma,
      },
    ],
  },
  {
    title: "Technologies",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
        logo: html,
      },
      // {
      //   skill: "CSS",
      //   level: "Experienced",
      //   logo: css,
      // },
      {
        skill: "JavaScript",
        level: "Experienced",
        logo: javascript,
      },
      {
        skill: "React",
        level: "Experienced",
        logo: react,
      },
      {
        skill: "Tailwind",
        level: "Experienced",
        logo: tailwind,
      },
      {
        skill: "C++",
        level: "Experienced",
        logo: cpp,
      },
      {
        skill: "NodeJs",
        level: "Intermediate",
        logo: nodejs,
      },
      {
        skill: "Python",
        level: "Intermediate",
        logo: python,
      },
      // {
      //   skill: "Flutter",
      //   level: "Experienced",
      //   logo: flutter,
      // },
    ],
  },
];
export const contactInfo = [
  {
    name: "Email",
    value: "alpharsh1@gmail.com",
    link: "mailto:alpharsh1@gmail.com",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "rgb(234, 67, 53)",
  },
  {
    name: "LinkedIn",
    value: "Harsh Tripathi",
    link: "https://www.linkedin.com/in/alpharsh/",
    icon: linkedin,
    btnIcon: <RiMessengerLine />,
    color: "rgb(0, 119, 181)",
  },
  {
    name: "WhatsApp",
    value: "+911111111111",
    link: "https://api.whatsapp.com/send?phone=+911111111111",
    icon: whatsappicon,
    btnIcon: <BsWhatsapp />,
    color: "rgb(38,234,112)",
  },
];
export const socialHandles = [
  {
    name: "Dev",
    icon: <FaGoogle />,
    link: "https://g.dev/alpharsh",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/alpharsh",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/alpharsh",
  },
  {
    name: "X",
    icon: <FaXTwitter />,
    link: "https://x.com/alpharsh",
  },
];

export const testimonials = [
  {
    avatar: profile3,
    name: "Ananya Singh",
    role: "Software Engineer",
    review: `Harsh Tripathi is an exceptional developer with deep expertise in React and backend technologies. His problem-solving skills and structured approach make him a valuable asset to any team.`,
  },
  {
    avatar: profile4,
    name: "Finn Smith",
    role: "Frontend Developer",
    review: `Collaborating with Harsh on open-source projects was a great experience. His clean code, mentorship, and willingness to help others make him stand out in the tech community.`,
  },
  {
    avatar: profile5,
    name: "Rachel Johnson",
    role: "Full-stack Developer",
    review: `Harsh is a skilled full-stack developer who excels in teamwork and leadership. His ability to communicate complex ideas clearly and efficiently is impressive.`,
  },
  {
    avatar: profile6,
    name: "Ketan Mishra",
    role: "UI/UX Designer",
    review: `Harsh's innovative approach and passion for technology make him a standout developer. He consistently delivers high-quality solutions with fresh ideas and creativity.`,
  },
];
