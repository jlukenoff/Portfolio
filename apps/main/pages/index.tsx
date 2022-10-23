import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>John Lukenoff | About</title>
        <meta name="description" content="John Lukenoff - About Me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Card>
          <CardHeader
            title="About Me"
            titleTypographyProps={{ variant: "h3", component: "h1" }}
          />
          <CardContent>
            <Typography paragraph>
              My aptitude for problem-solving and technology has driven my
              ability to design, develop, deploy and maintain robust and
              performant software. I have implemented integrations with legacy
              systems as well as those on the bleeding edge by remaining
              versatile and approaching every problem as a puzzle to be solved.
              I am most skilled in full-stack Typescript (primarily NodeJS and
              React) but also have robust experience in Python, as well as some
              experience in Golang, Java, and Scala.
              <br />
              <br />I moved to the Bay Area in 2014 from a small town in
              Indiana. Fulfilled one of my dreams, by starting a business at the
              age of 21 - Lukenoff Associates. I built my business by gathering
              a full force of clients, traveling around the Bay Area providing
              home remodeling and repair services.
              <br />
              <br /> Eventually, I decided it was time to switch careers, and
              finally enter the world of Tech in the Silicon Valley. I spent 6
              months learning the basics of programming and was accepted to one
              of the top Software Engineering bootcamps in the Bay Area, Hack
              Reactor. Upon completion of Hack Reactor I landed my first job as
              an engineer at Narvar, where I have worked in collaboration with
              Enterprise and Commercial e-commerce brands to implement solutions
              that simplify the lives of every day consumers. <br />
              <br />
              These days I am working to enable and scale the Enterprise Data
              platform at Asana where I am gaining more backend + infrastructure
              experience to continue my journey as a Software Engineer.
            </Typography>
          </CardContent>
        </Card>
      </main>
    </>
  );
};

export default Home;
