import React from "react";
import ReactCSSTransitionsGroup from "react-addons-css-transition-group";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

// import PropTypes from 'prop-types';
const projects = [
  {
    name: "Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id, minus animi veritatis dolorum velit, voluptate exercitationem earum modi enim quae accusamus cupiditate. Facere laborum, alias error soluta culpa et.",
    repo: "https://github.com/jlukenoff/Portfolio",
    // image: "https://via.placeholder.com/300",
    video:
      "https://storage.cloud.google.com/john-lukenoff-portoflio/static/portfolio_demo.mp4",
  },
  {
    name: "Portfolio_1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id, minus animi veritatis dolorum velit, voluptate exercitationem earum modi enim quae accusamus cupiditate. Facere laborum, alias error soluta culpa et.",
    repo: "https://github.com/jlukenoff/Portfolio",
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Portfolio_2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id, minus animi veritatis dolorum velit, voluptate exercitationem earum modi enim quae accusamus cupiditate. Facere laborum, alias error soluta culpa et.",
    repo: "https://github.com/jlukenoff/Portfolio",
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Portfolio_3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id, minus animi veritatis dolorum velit, voluptate exercitationem earum modi enim quae accusamus cupiditate. Facere laborum, alias error soluta culpa et.",
    repo: "https://github.com/jlukenoff/Portfolio",
    image: "https://via.placeholder.com/300",
  },
];

const useStyles = makeStyles({
  card: {
    position: "relative",
    display: "flex",
    overflow: "visible",
    minHeight: "200px",
    margin: "10px 10px 50px",
  },
  moduleContainer: {
    // display: "flex",
    // flexFlow: "column",
    // justifyContent: "center",
    // alignItems: "flex-start",
  },
  cardMedia: {
    position: "relative",
    maxWidth: "50%",
    maxHeight: "400px",
    width: "auto",
    minWidth: "40%",
  },
  cardContent: {
    width: "calc(80% - 300px)",
  },
});

const Projects = (props) => {
  const classes = useStyles();
  return (
    <ReactCSSTransitionsGroup
      transitionName="module"
      transitionAppear
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <Container key="projects" classes={{ root: classes.moduleContainer }}>
        {projects.map(({ name, description, image = "", video, repo }, i) => (
          <Card
            classes={{ root: classes.card }}
            key={name}
            style={{ flexDirection: `row${i % 2 === 0 ? "" : "-reverse"}` }}
          >
            {image ? (
              <CardMedia
                src={image}
                component="img"
                classes={{ root: classes.cardMedia }}
              />
            ) : (
              <CardMedia
                classes={{ root: classes.cardMedia }}
                component="video"
                src={video}
                controls
                type="video/mp4"
              />
            )}
            <CardContent
              classes={{ root: classes.cardContent }}
              style={{
                justifySelf: i % 2 === 0 ? "flex-end" : "flex-start",
                [i % 2 === 0 ? "marginLeft" : "marginRight"]: "auto",
              }}
            >
              <Typography variant="h4">{name}</Typography>
              <Typography variant="body1">{description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Container>
    </ReactCSSTransitionsGroup>
  );
};

// Projects.propTypes = {
// };

export default Projects;
//
