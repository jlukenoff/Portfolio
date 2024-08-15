import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import loader from "../utils/images";
import Images from "../config/images";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>John Lukenoff | About</title>
        <meta name="description" content="John Lukenoff - About Me" />
      </Head>

      <main>
        <Card>
          <CardMedia
            src={(loader as any)({ src: Images.Profile })}
            component="img"
            alt="John Lukenoff profile picture"
            sx={{ width: "calc(100% + 2px)" }}
          />
          <CardHeader
            title="About Me"
            titleTypographyProps={{ variant: "h3", component: "h1" }}
          />
          <CardContent>
            <Typography paragraph>
              As an experienced software engineer, I am driven by my passion for
              problem-solving and technology. I specialize in full-stack
              TypeScript, with expertise in Node.js and React, as well as robust
              experience in Python, Golang, Java, and Scala. My ability to
              design, develop, deploy, and maintain robust and performant
              software has been honed through years of experience building
              cutting-edge applications.
              <br />
              <br />
              After moving to the Bay Area in 2014 from a small town in Indiana,
              I fulfilled my dream of starting a business at the age of 21 with
              Lukenoff Associates. I built the business by gathering a full
              force of clients and traveling around the Bay Area to provide home
              remodeling and repair services.
              <br />
              <br />
              Eventually, I decided to switch careers and enter the world of
              tech in Silicon Valley. I spent six months learning the basics of
              programming and was accepted to one of the top software
              engineering bootcamps in the Bay Area, Hack Reactor. Upon
              completion of Hack Reactor, I landed my first job as an engineer
              at Narvar, where I collaborated with enterprise and commercial
              e-commerce brands to implement solutions that simplify the lives
              of everyday consumers.
              <br />
              <br />
              Currently, I am working at Asana, where I am focused on enabling
              and scaling the Enterprise Data platform. This role has allowed me
              to gain more experience in backend and infrastructure development
              and continue my journey as a software engineer. With my years of
              experience in the industry and my passion for delivering top-notch
              solutions, I am always excited to take on new challenges and help
              businesses achieve their goals.
            </Typography>
          </CardContent>
        </Card>
      </main>
    </>
  );
};

export default Home;
