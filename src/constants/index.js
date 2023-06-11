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
  carrent,
  jobit,
  tripguide,
  threejs,
  apeejay,
  snu,
  irdeto,
  redcarpet,
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
    id:"skills",
    title:"Skills"
  },
  {
    id:"projects",
    title:"Projects"
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "Software Developer Intern",
    company_name: "Irdeto",
    icon: irdeto,
    iconBg: "#ffffff",
    date: "May 2023 - Present",
    points: [
     "Currently working on the migration process of RDK's EPG service by creating an efficient AWS pipeline and ensuring seamless data service migration.",
      "Actively collaborating with the Android CI/CD team, contributing to the development and optimization of the continuous integration and delivery process for Android applications."
    ],
  },
  {
    title: "Flutter Developer Intern",
    company_name: "Red Carpet",
    icon: redcarpet,
    iconBg: "#ffffff",
    date: "Jun 2022 - July 2022",
    points: [
      "Contributed to the development of the frontend of the Red Carpet App using Flutter, ensuring an intuitive user experience.",
"Collaborated with the team to update dependencies, refactor code, and enhance performance for the iOS version of the app.",
"Implemented multilingual support to cater to a diverse user base, allowing seamless interaction with the Red Carpet App in different languages.",
"Diligently addressed and fixed critical UI bugs that impacted a significant user base of over 1,000,000, ensuring a smooth and flawless experience for all."
    ],
  },
];

const education = [
  {
    title: "Shiv Nadar University",
    company_name: "Greater Noida, Uttar Pradesh",
    icon: snu,
    iconBg: "#ffffff",
    date: "Aug 2020 - Present",
    points: [
      "Currently pursuing Bachelor of Technology in Computer Science and Engineering.",
      "CGPA: 8.5/10.0 SGPA: 9.29/10.0",
      "Relevant Coursework: Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Cloud Computing, Information Retrieval, Economics",

    ],
  },
  {
    title: "Apeejay School",
    company_name: "Noida, Uttar Pradesh",
    icon: apeejay,
    iconBg: "#ffffff",
    date: "Apr 2008 - March 2020",
    points: [
      //12th CBSE BOARDS-95.2%, 10th CBSE BOARDS-96% 
      "Completed 12th grade with 95.2% in the CBSE Board Examinations.",
      "Completed 10th grade with 96% in the CBSE Board Examinations.",
      "Relevant Coursework: Physics, Chemistry, Mathematics.",
    ],
  },
];


const projects = [
  {
    name: "DeliBuddy",
    description:
      "Created delivery service app/website for college students. Grew to 350+ users, handled 140+ deliveries, and gained insights into user behavior and preferences.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Tushar-Mishra999/DeliBuddy",
  },
  {
    name: "StockPulse",
    description:
      "Developed a web app that predicts future share performance by crawling and scraping news articles based on user-entered favorite company.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "BeautifulSoup",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/dgdevanshi/StockPulse",
  },
  {
    name: "Open Source",
    description:
      "Published neumorphic design package on pub.dev with a reusable button for Flutter apps, scored 130/140 pub points, and gained 82% popularity.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
     
    ],
    image: tripguide,
    source_code_link: "https://pub.dev/packages/neumorphic_button",
  },
  { name: "MediBuddy",
  description:
    "Developed a mobile app for checking local medicine availability. Features include search, chat with sellers, and geolocation for shop navigation using Google Maps API.",
  tags: [
    {
      name: "Flutter",
      color: "blue-text-gradient",
    },
    {
      name: "Node.js",
      color: "green-text-gradient",
    },
    {
      name: "MongoDB",
      color: "pink-text-gradient",
    },
  ],
  image: carrent,
  source_code_link: "https://github.com/Tushar-Mishra999/MediBuddy",
},
{
  name: "VisageR",
  description:
    "Developed an app enabling students to mark attendance through a 3-step process. They click and upload selfies, which are processed using a Face Recognition system.",
  tags: [
    {
      name: "AWS Rekognition, AuroraDB, Lambda",
      color: "blue-text-gradient",
    },
    {
      name: "Flutter",
      color: "green-text-gradient",
    },
    // {
    //   name: "Flutter",
    //   color: "pink-text-gradient",
    // },
  ],
  image: jobit,
  source_code_link: "https://github.com/Tushar-Mishra999/VisageR",
},
{
  name: "Pick Your Lead",
  description:
    "Developed an app for simulating student council elections. Students can participate as candidates and voters, contesting for positions and casting votes for candidates.",
  tags: [
    {
      name: "Java",
      color: "blue-text-gradient",
    },
    {
      name: "Firebase",
      color: "green-text-gradient",
    },
    {
      name: "XML",
      color: "pink-text-gradient",
    },
  ],
  image: tripguide,
  source_code_link: "https://github.com/Tushar-Mishra999/PickYourLead",
},
];

export { services, technologies, experiences,education, projects };
