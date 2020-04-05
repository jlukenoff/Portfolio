import React from "react";
import ReactCSSTransitionsGroup from "react-addons-css-transition-group";
import { ModuleContainer } from "../Styles/Styles";
import ExpandMore from "@material-ui/icons/ExpandMore";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Container,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  panelSummary: {
    "& > .MuiExpansionPanelSummary-content": {
      alignItems: "center",
    },
    "& img": {
      marginRight: "10px",
    },
  },
  panelsContainer: {
    maxWidth: "600px",
  },
  panelDetails: {
    flexDirection: "column",
  },
});

const TechWidget = ({ name, description, projectList, logoSrc }) => {
  const classes = useStyles();
  return (
    <ExpansionPanel fullWidth>
      <ExpansionPanelSummary
        expandIcon={<ExpandMore />}
        className={classes.panelSummary}
      >
        <img
          style={{ width: "35px" }}
          ariaHidden="true"
          src={`https://storage.cloud.google.com/john-lukenoff-portoflio/static${logoSrc}`}
        />
        {name}
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.panelDetails}>
        <Typography variant="body1">{`\t${description}`}</Typography>
        <Typography variant="h6" className={{ paddingTop: "10px" }}>
          Projects:
        </Typography>
        <Typography variant="body1">{projectList.join(", ")}</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

const Tech = (props) => {
  const classes = useStyles();
  return (
    <ReactCSSTransitionsGroup
      transitionName="module"
      transitionAppear
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <ModuleContainer style={{ marginTop: "50px" }}>
        <Container className={classes.panelsContainer}>
          <Typography variant="h2" style={{ padding: "20px 0" }}>
            Front End
          </Typography>
          {[
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
              logoSrc: "/react.svg",
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
              logoSrc: "/styled-components.png",
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
              logoSrc: "/html5.svg",
            },
          ].map((obj) => (
            <TechWidget {...obj} key={obj.name} />
          ))}
        </Container>
      </ModuleContainer>
      <ModuleContainer>
        <Container className={classes.panelsContainer}>
          <Typography variant="h2" style={{ padding: "20px 0" }}>
            Back End
          </Typography>
          {[
            {
              name: "Typescript",
              description:
                "I prefer to write my backend code and scripts using the Typescript superset to ease development and guard the robustness of my applications. I enjoy building with Typescript because of the readability and stability throughout development it provides.",
              projectList: [
                "Narvar Internal Tooling",
                "Home Automation Server",
              ],
              logoSrc: "/typescript.svg",
            },
            {
              name: "NodeJS",
              description:
                "I am most fluent in NodeJS as a backend language and also use NodeJS on the regular for quick scripts and making painstaking manual tasks into CLI's to automate workflows.",
              projectList: ["Vacation.ly", "Shopr", "Home Automation Server"],
              logoSrc: "/nodejs.svg",
            },
            {
              name: "ExpressJS",
              description:
                "I have used ExpressJS in most of my applications that require a well-structured, scalable backend. I have a refined discipline for writing Express servers using MVC architecture. Leveraging best practices in separating of business logic, data models, and controllers",
              projectList: ["Vacation.ly", "Shopr", "Home Automation Server"],
              logoSrc: "/nodejs.svg",
            },
            {
              name: "PostgreSQL",
              description:
                "I have used Postgres to add persistence to applications that require relational data models or read-heavy use-cases.",
              projectList: ["Vacation.ly", "Shopr", "Home Automation Server"],
              logoSrc: "/postgres.png",
            },
            {
              name: "CassandraDB",
              description:
                "I have used Postgres to add persistence to applications that require relational data models or read-heavy use-cases.",
              projectList: [
                "Narvar Internal Tooling",
                "Shopr",
                "Home Automation Server",
              ],
              logoSrc: "/cassandra.png",
            },

            {
              name: "MongoDB",
              description:
                "I've used mongoDB as a quick solution for adding a persistence layer on top of my application where relational data structures are not required.",
              projectList: ["Vacation.ly", "Shopr", "Home Automation Server"],
              logoSrc: "/mongodb.svg",
            },
          ].map((obj) => (
            <TechWidget {...obj} key={obj.name} />
          ))}
        </Container>
      </ModuleContainer>
      <ModuleContainer>
        <Container className={classes.panelsContainer}>
          <Typography variant="h2" style={{ padding: "20px 0" }}>
            Testing, Tooling, Deployment
          </Typography>
          {[
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
              logoSrc: "/jest.svg",
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
              logoSrc: "/docker.svg",
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
              logoSrc: "/github.svg",
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
              logoSrc: "/linux.svg",
            },
          ].map((obj) => (
            <TechWidget {...obj} key={obj.name} />
          ))}
        </Container>
      </ModuleContainer>
    </ReactCSSTransitionsGroup>
  );
};

// Tech.propTypes = {
// };

export default Tech;
