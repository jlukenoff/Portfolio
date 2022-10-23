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
import { StaticImageData } from "next/image";

export interface TechCardItem {
  name: string;
  description: string;
  projectList: string[];
  logo: StaticImageData;
}

export const frontEnd: TechCardItem[] = [
  {
    name: "React / React Native",
    description:
      "React is my front-end framework of choice. I write very clean and modular components and exercise best practices in state management. I am fluent in modern features of React such as Hooks and Effects.",
    projectList: [
      "Narvar Internal Tooling",
      "Vacation.ly",
      "My Portfolio (this website!)",
      "Shopr",
      "Home automation server",
    ],
    logo: react,
  },
  {
    name: "Styled Components",
    description:
      "I have leveraged Styled Components primarily through EmotionJS but also have experience with other JSS alternatives. I love Styled Components for the performance, consolidated structure it brings to React, and the portability provided when server-side rendering ",
    projectList: [
      "Narvar Internal Tooling",
      "Vacation.ly",
      "My Portfolio (this website!)",
      "Shopr",
      "Home Automation Server",
    ],
    logo: emotion,
  },
  {
    name: "HTML5",
    description:
      "I am comfortable developing in simple HTML/CSS/VanillaJS when appropriate. I am a strong believer in doing more with less by only leveraging third-party libraries and modules when necessary.",
    projectList: [
      "Narvar Internal Tooling",
      "Vacation.ly",
      "My Portfolio (this website!)",
      "Shopr",
      "Home Automation Server",
    ],
    logo: html5,
  },
];

export const backEnd: TechCardItem[] = [
  {
    name: "Typescript",
    description:
      "I prefer to write my backend code and scripts using the Typescript superset to ease development and guard the robustness of my applications. I enjoy building with Typescript because of the readability and stability throughout development it provides.",
    projectList: ["Narvar Internal Tooling", "Home Automation Server"],
    logo: typescript,
  },
  {
    name: "NodeJS",
    description:
      "I am most fluent in NodeJS as a backend language and also use NodeJS on the regular for quick scripts and making painstaking manual tasks into CLI's to automate workflows.",
    projectList: ["Vacation.ly", "Shopr", "Home Automation Server"],
    logo: nodejs,
  },
  {
    name: "ExpressJS",
    description:
      "I have used ExpressJS in most of my applications that require a well-structured, scalable backend. I have a refined discipline for writing Express servers using MVC architecture. Leveraging best practices in separating of business logic, data models, and controllers",
    projectList: ["Vacation.ly", "Shopr", "Home Automation Server"],
    logo: express,
  },
  {
    name: "PostgreSQL",
    description:
      "I have used Postgres to add persistence to applications that require relational data models or read-heavy use-cases.",
    projectList: ["Vacation.ly", "Shopr", "Home Automation Server"],
    logo: postgresql,
  },
  {
    name: "MongoDB",
    description:
      "I've used mongoDB as a quick solution for adding a persistence layer on top of my application where relational data structures are not required.",
    projectList: ["Vacation.ly", "Shopr", "Home Automation Server"],
    logo: mongodb,
  },
];

export const tools: TechCardItem[] = [
  {
    name: "Jest",
    description:
      "Jest is my go-to framework for testing. I always ensure that the modules I build are well tested with an aim for 90%+ coverage.",
    projectList: [
      "Narvar Internal Tooling",
      "Vacation.ly",
      "My Portfolio (this website!)",
      "Shopr",
      "Home Automation Server",
    ],
    logo: jest,
  },
  {
    name: "Docker",
    description:
      "I've used Docker in the deployment and development of almost every application I have developed. I choose Docker for the modularity and scalability it allows for. ",
    projectList: [
      "Narvar Internal Tooling",
      "Vacation.ly",
      "My Portfolio (this website!)",
      "Shopr",
      "Home Automation Server",
    ],
    logo: docker,
  },
  {
    name: "Git",
    description:
      "I always use git flows in my applications to manage changes and collaborate with others. I rely on best practices to organize the codebase and manage updates efficiently",
    projectList: [
      "Narvar Internal Tooling",
      "Vacation.ly",
      "My Portfolio (this website!)",
      "Shopr",
      "Home Automation Server",
    ],
    logo: github,
  },
  {
    name: "Linux",
    description:
      "I also have experience deploying on bare metal instances and Alpine Linux environments",
    projectList: [
      "Narvar Internal Tooling",
      "Vacation.ly",
      "My Portfolio (this website!)",
      "Home Automation Server",
    ],
    logo: linux,
  },
  {
    name: "Kubernetes",
    description:
      "I've achieved massive workflow and scalability improvements with Kubernetes. I've contributed to existing k8s setups and implemented ground up builds at Asana",
    projectList: [
      "Narvar Internal Tooling",
      "Home Automation Server",
      "Asana Enterprise Data Platform",
    ],
    logo: kubernetes,
  },
  {
    name: "AWS",
    description:
      "AWS has dominated the cloud-native market for enterprises. At Asana I re-platformed the enterprise data pipeline stack onto dedicated AWS accounts from the ground up.",
    projectList: [
      "Narvar Internal Tooling",
      "Vacation.ly",
      "Asana Enterprise Data Platform",
    ],
    logo: aws,
  },
];
