export const BASE_RESOURCE_PATH =
  "https://jlukenoff-portfolio-static-assets.s3.amazonaws.com/public/static";

export const BACKGROUND_IMAGE = "background.png";
export const PROFILE_IMAGE = "profile.png";

export const Logos = {
  MainLogo: "john_lukenoff_main_logo.png",
  MainLogoHorizontalGrey: "john_lukenoff_main_logo_horizontal_grey.png",
  React: "logos/react.png",
  Html5: "logos/html5.png",
  Emotion: "logos/emotion.png",
  Typescript: "logos/typescript.png",
  Nodejs: "logos/nodejs.png",
  Express: "logos/express.png",
  Postgresql: "logos/postgresql.png",
  Mongodb: "logos/mongodb.png",
  Jest: "logos/jest.png",
  Docker: "logos/docker.png",
  Linux: "logos/linux.png",
  Github: "logos/github.png",
  Kubernetes: "logos/kubernetes.png",
  Aws: "logos/aws.png",
  Python: "logos/python.png",
  Linkedin: "logos/linkedin.png",
  Email: "logos/email.png",
  Golang: "logos/golang.png",
} as const;

const AllImagePaths = {
  ...Logos,
  Background: BACKGROUND_IMAGE,
  Profile: PROFILE_IMAGE,
} as const;

export type ImagePathValue = (typeof AllImagePaths)[keyof typeof AllImagePaths];

const Images = Object.fromEntries(
  Object.entries(AllImagePaths).map(([key, value]) => [
    key,
    `${BASE_RESOURCE_PATH}/${value}`,
  ])
) as Record<keyof typeof AllImagePaths, string>;

export default Images;
