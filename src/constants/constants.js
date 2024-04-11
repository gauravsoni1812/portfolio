import {
    backend,
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
    CodingNinjas,
    threejs,
    managewise,
    crypto,
    ecommerce
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
    {
      id:"resume",
      title:"resume"
    }
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    }
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
      name: "TypeScript",
      icon: typescript,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Teaching Assistant",
      company_name: "Coding Ninjas",
      icon:  CodingNinjas,
      iconBg: "#383E56",
      date: "Feb 2022 - may 2022",
      points: [
        "Interned at Coding Ninjas, resolving 825 student coding doubts with precision and clarity.",
        "Demonstrated strong problem-solving skills while providing technical assistance during the internship.",
        "Enhanced communication and teaching abilities by addressing diverse coding queries.",
        "Contributed to a positive learning experience, ensuring high student satisfaction."
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Crypto App",
      description:
        "This is a crypto web application that provides access to all the exchanges available in the market. It offers detailed information about various coins, including their prices, dates. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "chakara ui",
          color: "green-text-gradient",
        },
        {
          name: "framer motion",
          color: "pink-text-gradient",
        },
      ],
      link:"https://cryptoapp-flax.vercel.app/",
      image: crypto,
      source_code_link: "https://github.com/gauravsoni1812/cryptoApp",
    },
    {
      name: "Ecommerce application",
      description:
        "Built a dynamic full-stack eCommerce web app using the MERN stack, featuring a user-friendly interface with React, backend processing with Node.js, Express.js mongodb",
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
          name: "Mongodb",
          color: "pink-text-gradient",
        },
      ],
      link:"https://shopatecommerce.vercel.app/",
      image: ecommerce,
      source_code_link: "https://github.com/gauravsoni1812/mern-ecommerce",
    },
    {
      name: "Managewise Clone",
      description:
        "Successfully implemented Tailwind CSS in our React project. The combination of utility-first design and React's component structure has boosted development efficiency",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "framer motion",
          color: "pink-text-gradient",
        },
      ],
      link:"https://managewiseclone.vercel.app/", 
      image: managewise,
      source_code_link: "https://github.com/gauravsoni1812/managewiseclone",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };