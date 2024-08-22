import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import loader, { ImageUtil } from "../utils/images";

import {
  languages,
  frontEnd,
  backEnd,
  tools,
  TechCardItem,
} from "../config/tech";

const SectionWrapper = styled("div")({
  padding: "2rem",
  margin: "auto",
});

interface TechSectionProps {
  title: string;
  items: TechCardItem[];
}

const TechSection: React.FC<TechSectionProps> = ({ title, items }) => {
  return (
    <SectionWrapper>
      <Typography variant="h3" component="h2" color="text.primary">
        {title}
      </Typography>
      <Grid container justifyContent="flex-start" mt={1} spacing={2}>
        {items.map(({ name, description, logo }) => (
          <Grid item key={name} xs={12} md={4} display="flex">
            <Card variant="outlined">
              <CardContent>
                <Box>
                  <Box
                    sx={{
                      position: "relative",
                      height: "3rem",
                      width: "3rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <Image
                      layout="fill"
                      src={ImageUtil.get(logo)}
                      alt={`${name} logo`}
                    />
                  </Box>
                  <Typography gutterBottom sx={{ fontWeight: "bold" }}>
                    {name}
                  </Typography>
                </Box>
                <Typography gutterBottom>{description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
};
const Tech: NextPage = () => {
  return (
    <>
      <Head>
        <title>John Lukenoff | Tech</title>
        <meta name="description" content="John Lukenoff Tech Experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TechSection title="Languages I speak" items={languages} />
        <TechSection title="Front End" items={frontEnd} />
        <TechSection title="Back End" items={backEnd} />
        <TechSection title="Tooling + Ops" items={tools} />
      </main>
    </>
  );
};

export default Tech;
