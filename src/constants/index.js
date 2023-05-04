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
  lumio,
  ADT,
  KW,
  GA,
  filmfrenzy,
  BrickByBrick,
  Jonah,
  Emily,
  David,
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
    title: "JavaScript Developer",
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
    title: "Realtor | Developer",
    company_name: "Keller Williams",
    icon: KW,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      `Compared recently sold area properties using custom data analysis tools built with Python and JavaScript, determining competitive market
       prices and guiding clients to make informed decisions`,
      `Assisted buyers with finding ideal homes by assessing needs, requirements, and budgets, utilizing custom-built web applications to
      streamline property comparisons and visualize market data.`,
      "Conducted competitive market price analysis using custom Python and JavaScript tools, guiding clients effectively..",
      "Compared recently sold area properties, determining competitive prices and helping clients make informed decisions.",
    ],
  },
  {
    title: "Solar Sales Developer",
    company_name: "Lumio Solar",
    icon: lumio,
    iconBg: "#383E56",
    date: "May 2021 - May 2022",
    points: [
      `Generated sales and achieved monthly goals using web development expertise to create marketing materials.`,
      `Coached sales associates in product specifications, sales incentives, and selling techniques.`,
      "Developed interactive training materials using HTML, CSS, and JavaScript, improving customer ratings.",
      "Promoted brand values through visually appealing and effective marketing materials",
    ],
  },
  {
    title: "Solar Sales Developer",
    company_name: "ADT Solar",
    icon: ADT,
    iconBg: "#383E56",
    date: "June 2022 - Jan 2023",
    points: [
      `Developed and maintained sales and marketing tools using JavaScript, HTML, and CSS, streamlining processes and growing clientele.`,
      `Led product education training, effectively communicating complex concepts to associates.`,
      "Implemented data-driven strategies, helping sales associates surpass monthly goals by 15%.",
      "Utilized custom-built analytics tools to generate quality sales leads.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "General Assembly",
    icon: GA,
    iconBg: "#383E56",
    date: "Febuary 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with teams including scrum masters, instructors, instructional aids, to produce a highly efficient website ",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Very hard working, always striving to improve and learn",
    name: "Jonah A.",
    designation: "Backend Developer",
    company: "Software Engineer",
    image: Jonah,
  },
  {
    testimonial:
      "I've never met a developer who is as passionate about this like Gary.",
    name: "Emily M.",
    designation: "Full-Stack Developer",
    company: "Software Enginner",
    image: Emily,
  },
  {
    testimonial:
      "It was a pleasure working with Gary on past projects, great communicator as well",
    name: "David D.",
    designation: "Microbiologist",
    company: "University of LA",
    image: David,
  },
];

const projects = [
  {
    name: "Film Frenzy",
    description:
      "React based, MERN stack app, tailored for helping movie enthusiast quickly find a new movie to watch.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
    ],
    image: filmfrenzy,
    source_code_link: "https://github.com/garyzhuo/FilmFrenzy",
  },
  {
    name: "Brick By Brick",
    description:
      "For LEGO enthusiasts, this site can identify your current lego set and show you what legos you currently have and what legos you need to complete a new set of your choice.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "postman",
        color: "orange-text-gradient",
      },
    ],
    image: BrickByBrick,
    source_code_link: "https://github.com/jimcreel/BrickByBrick",
  },
  {
    name: "Aesthetic Domain",
    description:
      "Artwork API React website made for art lovers, who can view other comment, share, like and explore arts from all around the world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mernstack",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "orange-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };