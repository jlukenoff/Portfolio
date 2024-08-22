// Logos
export const RelativeImagePath = {
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
  Background: "background.png",
  Profile: "profile.png",
  Linkedin: "logos/linkedin.png",
  Email: "logos/email.png",
} as const;

export type RelativeImagePath =
  (typeof RelativeImagePath)[keyof typeof RelativeImagePath];

export default RelativeImagePath;
