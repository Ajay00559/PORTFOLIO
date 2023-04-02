import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  coindozoscreenshot,
  renterscreenshot,
  Weatherscreenshot,
  tmdbscreenshot,
  portfolioscreenshot,
  instaPost12,
  // rocketscreenshot,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
   
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Harsh Sharma",
    designation: "CEO",
    company: "Sheryians Coding School",
    image: "#",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Dhanesh",
    designation: "Co Founder",
    company: "Sheryians Coding School",
    image: "#",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Adarsh",
    designation: "Co Founder",
    company: "Sheryians Coding School",
    image: "#",
  },
];

const projects = [
  {
    name: "CoinDozo",
    description:
      "Web-based platform that allows users to research about various cryptocurrencies, providing a convenient and efficient solution for crypto research needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: coindozoscreenshot,
    source_code_link: "https://github.com/",
    view:"https://63f01f706fb6dd2130fb45f9--cheerychimera-9811f3.netlify.app/"
  },
  {
    name: "The Movie Database",
    description:
      "Web application that enables users to search for movies, TV series, daily soaps etc,from various platforms and countries.efficient solution for cinema research needs",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "context_api",
        color: "pink-text-gradient",
      },
    ],
    image: tmdbscreenshot,
    source_code_link: "https://github.com/",
    view:"https://lovely-gelato-c44cb9.netlify.app/",
  },
  {
    name: "Weather_Forcast",
    description:
      "A comprehensive weather web app that allows users to check weather detail from anywhere anytime,so that users know the weather of popular destinations.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "ejs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Weatherscreenshot,
    source_code_link: "https://github.com/",
    view:"https://weather-data-nine.vercel.app/",
  },
  {
    name: "Renter",
    description:
      "Web-based platform that allows users to search, book, and manage home rentals from various providers,providing a convenient and efficient solution for residential needs.",
    tags: [
      {
        name: "HTML/CSS",
        color: "blue-text-gradient",
      },
      {
        name: "canvas",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: renterscreenshot,
    source_code_link: "https://github.com/",
    view:"https://ajay00559.github.io/RENTER/",
  },
  {
    name: "Rocket_Air",
    description:
      "An website to show the potential of web development with great animations and features,in this i have used GSAP & javaScript. it also has an amazing UI & color combinations",
    tags: [
      {
        name: "HTML/CSS",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: instaPost12,
    source_code_link: "https://github.com/",
    view:"https://ajay00559.github.io/Rocket_Air_web/",
  },
  {
    name: "Portfolio",
    description:
      "A good looking portfolio of a web developer with all the neccessary informations, and project links. with great animations and features portfolio show the potential of the developer.",
    tags: [
      {
        name: "HTML/CSS",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: portfolioscreenshot,
    source_code_link: "https://github.com/",
    view:"https://ajay00559.github.io/PortFolio-Ajay_Patel/",
  },
];

export { services, technologies, experiences, testimonials, projects };
