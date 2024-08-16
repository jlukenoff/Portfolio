import { ImageLoader } from "next/image";

const loader: ImageLoader = ({ src }) =>
  `https://jlukenoff-portfolio-static-assets.s3.amazonaws.com/public/static/${src}`;

export default loader;
