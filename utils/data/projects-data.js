import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Algorithm Insights",
    description:
      "Algorithm Insights is an innovative tool designed to visually demonstrate the inner workings of sorting and searching algorithms. By providing dynamic, real-time visualizations, Algorithm Insights helps users understand the step-by-step processes that these algorithms use to organize and locate data. Whether you are a student, educator, or developer, this tool offers an intuitive interface that simplifies complex algorithmic concepts, making them more accessible and easier to grasp. With support for a variety of popular algorithms, Algorithm Insights serves as an invaluable educational resource, enhancing learning and facilitating a deeper comprehension of fundamental computer science principles.",
    tools: ["HTML", "Tailwindcss", "CSS", "ReactJS"],
    role: "Front-End Developer and Logic Building",
    code: "https://github.com/ahzamkidwai/AlgorithmInsights",
    demo: "https://algorithm-insights.vercel.app/",
    image: crefin,
  },
  {
    id: 2,
    name: "Modern Real-Estate Management System",
    description:
      "I have designed and developed a full-stack web app for selling and buying a property using this web-app. Implemented user authentication and authorization using JWT (JSON Web Tokens) to secure user data from outside world and unauthorized access. Ensured the application is fully responsive and works seamlessly across different devices and screen sizes. Implemented advanced search and filtering options to help users find properties based on various criteria. Enabled users to list their properties with detailed descriptions, images, and pricing information. Developed user profiles allowing users to manage their listings and update personal information.",
    tools: [
      "React JS",
      "Tailwind CSS",
      "Node JS",
      "Express JS",
      "Javascript",
      "MongoDB",
      "Google Firebase",
      "OAuth2 Authentication",
      "React-Redux",
    ],
    role: "Full Stack Developer",
    code: "https://github.com/ahzamkidwai/Modern-Real-Estate-Marketplace/tree/main",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "AI Image Generation App",
    description:
      "I developed an AI Image Generation application using the MERN Stack. This project features a responsive front-end interface designed with React.js, providing seamless user interaction. The back-end API, built with Node.js and Express.js, efficiently handles image generation requests and manages data flow. MongoDB was utilized for the efficient storage and retrieval of user data and generated images. Additionally, real-time updates and feedback mechanisms were integrated to significantly enhance the user experience, making the application both dynamic and interactive.",
    tools: [
      "React",
      "CSS",
      "Tailwind CSS",
      "Express",
      "Javascript",
      "MongoDB",
      "OpenAI API",
      "NodeJS",
    ],
    code: "https://github.com/ahzamkidwai/AI-Image-Generation-App",
    role: "Full Stack Developer",
    demo: "",
    image: realEstate,
  },
  /* {
    id: 4,
    name: "Newsroom Management",
    description:
      "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    tools: ["NextJS", "Material UI", "Redux", "Sun Editor", "Calendar"],
    code: "",
    demo: "",
    image: ayla,
    role: "Full Stack Developer",
  }, */
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
