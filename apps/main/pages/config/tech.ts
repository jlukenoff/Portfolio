import { StaticImageData } from "next/image";

// Logos
import react from "../../public/logos/react.png";
import html5 from "../../public/logos/html5.png";
import emotion from "../../public/logos/emotion.png";
import typescript from "../../public/logos/typescript.png";
import nodejs from "../../public/logos/nodejs.png";
import express from "../../public/logos/express.png";
import postgresql from "../../public/logos/postgresql.png";
import mongodb from "../../public/logos/mongodb.png";
import jest from "../../public/logos/jest.png";
import docker from "../../public/logos/docker.png";
import linux from "../../public/logos/linux.png";
import github from "../../public/logos/github.png";
import kubernetes from "../../public/logos/kubernetes.png";
import aws from "../../public/logos/aws.png";
import python from "../../public/logos/python.png";

export interface TechCardItem {
  name: string;
  description: string;
  projectList: Projects[];
  logo: StaticImageData;
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
    logo: typescript,
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
    logo: python,
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
    logo: react,
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
    logo: emotion,
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
    logo: html5,
  },
];

export const backEnd: TechCardItem[] = [
  {
    name: "NodeJS",
    description:
      "I am most fluent in NodeJS as a backend language and also use NodeJS on the regular for quick scripts and making painstaking manual tasks into CLI's to automate workflows.",
    projectList: [Projects.Vacationly, Projects.Shopr, Projects.HomeServer],
    logo: nodejs,
  },
  {
    name: "ExpressJS",
    description:
      "I have used ExpressJS in most of my applications that require a well-structured, scalable backend. I have a refined discipline for writing Express servers using MVC architecture. Leveraging best practices in separating of business logic, data models, and controllers",
    projectList: [Projects.Vacationly, Projects.Shopr, Projects.HomeServer],
    logo: express,
  },
  {
    name: "PostgreSQL",
    description:
      "I have used Postgres to add persistence to applications that require relational data models or read-heavy use-cases.",
    projectList: [Projects.Vacationly, Projects.Shopr, Projects.HomeServer],
    logo: postgresql,
  },
  {
    name: "MongoDB",
    description:
      "I've used mongoDB as a quick solution for adding a persistence layer on top of my application where relational data structures are not required.",
    projectList: [Projects.Vacationly, Projects.Shopr, Projects.HomeServer],
    logo: mongodb,
  },
];

export const tools: TechCardItem[] = [
  {
    name: "Kubernetes",
    description:
      "I've achieved massive workflow and scalability improvements with Kubernetes. I've contributed to existing k8s setups and implemented ground up builds at Asana",
    projectList: [Projects.Narvar, Projects.HomeServer, Projects.Asana],
    logo: kubernetes,
  },
  {
    name: "AWS",
    description:
      "AWS has dominated the cloud-native market for enterprises. At Asana I re-platformed the enterprise data pipeline stack onto dedicated AWS accounts from the ground up.",
    projectList: [Projects.Narvar, Projects.Vacationly, Projects.Asana],
    logo: aws,
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
    logo: docker,
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
    logo: github,
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
    logo: linux,
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
    logo: jest,
  },
];
