import { StaticImageData } from "next/legacy/image";

import RelativeImagePath from "./images";

export interface TechCardItem {
  name: string;
  description: string;
  projectList: Projects[];
  logo: keyof typeof RelativeImagePath;
}

export enum Projects {
  Narvar = "Narvar Internal Tooling",
  Vacationly = "Vacation.ly",
  Portfolio = "My Portfolio (this website!)",
  Shopr = "Shopr",
  HomeServer = "Home automation server",
  Asana = "Asana Enterprise Data Platform",
}

export const languages: TechCardItem[] = [
  {
    name: "Typescript",
    description:
      "My language of choice for large scale projects. I love the efficiency and clarity Typescript brings to collaborating with others as well as the ability to write the full stack in one language.",
    projectList: [
      Projects.Narvar,
      Projects.Vacationly,
      Projects.Portfolio,
      Projects.Shopr,
      Projects.HomeServer,
    ],
    logo: "Typescript",
  },
  {
    name: "Python",
    description:
      "I love Python for quick scripting, glue for infrastructure, data processing, and smaller general purpose applications.",
    projectList: [
      Projects.Narvar,
      Projects.Vacationly,
      Projects.Portfolio,
      Projects.Shopr,
      Projects.HomeServer,
    ],
    logo: "Python",
  },
];

export const frontEnd: TechCardItem[] = [
  {
    name: "React / React Native",
    description:
      "React is my front-end framework of choice. I write very clean and modular components and exercise best practices in state management. I am fluent in modern features of React 18+",
    projectList: [
      Projects.Narvar,
      Projects.Vacationly,
      Projects.Portfolio,
      Projects.Shopr,
      Projects.HomeServer,
    ],
    logo: "React",
  },
  {
    name: "Styled Components",
    description:
      "I have leveraged Styled Components primarily through EmotionJS and CSS Modules.",
    projectList: [
      Projects.Narvar,
      Projects.Vacationly,
      Projects.Portfolio,
      Projects.Shopr,
      Projects.HomeServer,
    ],
    logo: "Emotion",
  },
  {
    name: "HTML5",
    description:
      "I am comfortable developing in simple HTML/CSS/VanillaJS when appropriate. I am a strong believer in doing more with less by only leveraging third-party libraries and modules when necessary.",
    projectList: [
      Projects.Narvar,
      Projects.Vacationly,
      Projects.Portfolio,
      Projects.Shopr,
      Projects.HomeServer,
    ],
    logo: "Html5",
  },
];

export const backEnd: TechCardItem[] = [
  {
    name: "NodeJS",
    description:
      "I am most fluent in NodeJS as a backend language and also use NodeJS on the regular for quick scripts and making painstaking manual tasks into CLI's to automate workflows.",
    projectList: [Projects.Vacationly, Projects.Shopr, Projects.HomeServer],
    logo: "Nodejs",
  },
  {
    name: "ExpressJS",
    description:
      "I have used ExpressJS in most of my applications that require a well-structured, scalable backend. I have a refined discipline for writing Express servers using MVC architecture. Leveraging best practices in separating of business logic, data models, and controllers",
    projectList: [Projects.Vacationly, Projects.Shopr, Projects.HomeServer],
    logo: "Express",
  },
  {
    name: "PostgreSQL",
    description:
      "I have used Postgres to add persistence to applications that require relational data models or read-heavy use-cases.",
    projectList: [Projects.Vacationly, Projects.Shopr, Projects.HomeServer],
    logo: "Postgresql",
  },
  {
    name: "MongoDB",
    description:
      "I've used mongoDB as a quick solution for adding a persistence layer on top of my application where relational data structures are not required.",
    projectList: [Projects.Vacationly, Projects.Shopr, Projects.HomeServer],
    logo: "Mongodb",
  },
];

export const tools: TechCardItem[] = [
  {
    name: "Kubernetes",
    description:
      "I've achieved massive workflow and scalability improvements with Kubernetes. I've contributed to existing k8s setups and implemented ground up builds at Asana",
    projectList: [Projects.Narvar, Projects.HomeServer, Projects.Asana],
    logo: "Kubernetes",
  },
  {
    name: "AWS",
    description:
      "AWS has dominated the cloud-native market for enterprises. At Asana I re-platformed the enterprise data pipeline stack onto dedicated AWS accounts from the ground up.",
    projectList: [Projects.Narvar, Projects.Vacationly, Projects.Asana],
    logo: "Aws",
  },
  {
    name: "Docker",
    description:
      "I've used Docker in the deployment and development of almost every application I have developed. I choose Docker for the modularity and scalability it allows for. ",
    projectList: [
      Projects.Narvar,
      Projects.Vacationly,
      Projects.Portfolio,
      Projects.Shopr,
      Projects.HomeServer,
    ],
    logo: "Docker",
  },
  {
    name: "Git + Github",
    description:
      "I always use git flows in my applications to manage changes and collaborate with others. I rely on git best practices to organize the codebase and manage updates efficiently",
    projectList: [
      Projects.Narvar,
      Projects.Vacationly,
      Projects.Portfolio,
      Projects.Shopr,
      Projects.HomeServer,
    ],
    logo: "Github",
  },

  {
    name: "Linux",
    description:
      "I also have experience deploying on bare metal instances and Alpine Linux environments",
    projectList: [
      Projects.Narvar,
      Projects.Vacationly,
      Projects.Portfolio,
      Projects.HomeServer,
    ],
    logo: "Linux",
  },
  {
    name: "Jest",
    description:
      "Jest is my go-to framework for testing. I always ensure that the modules I build are well tested with an aim for 90%+ coverage.",
    projectList: [
      Projects.Narvar,
      Projects.Vacationly,
      Projects.Portfolio,
      Projects.Shopr,
      Projects.HomeServer,
    ],
    logo: "Jest",
  },
];
