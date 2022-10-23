import { Card, CardContent, Grid, Icon, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { styled } from "@mui/material/styles";

import { frontEnd, backEnd, tools, TechCardItem } from "./config/tech";
import Image from "next/image";

const SectionWrapper = styled("div")({
  padding: "2rem",
  maxWidth: "80%",
  margin: "auto",
});

interface TechSectionProps {
  title: string;
  items: TechCardItem[];
}

const TechSection: React.FC<TechSectionProps> = ({ title, items }) => {
  return (
    <SectionWrapper>
      <Typography variant="h3" component="h1" color="text.primary">
        {title}
      </Typography>
      <Grid container sx={{ marginTop: "2rem" }} spacing={2}>
        {items.map(({ name, description, logo }) => (
          <Grid item key={name} xs>
            <Card
              variant="outlined"
              sx={{
                maxWidth: "300px",
              }}
            >
              <CardContent>
                <Image src={logo} alt={`${name} logo`} />
                <Typography gutterBottom sx={{ fontWeight: "bold" }}>
                  {name}
                </Typography>
                <Typography gutterBottom>{description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
};
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>John Lukenoff | Tech</title>
        <meta name="description" content="John Lukenoff Tech Experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TechSection title="Front End" items={frontEnd} />
        <TechSection title="Back End" items={backEnd} />
        <TechSection title="Tooling + Ops" items={tools} />
      </main>
    </>
  );
};

export default Home;
