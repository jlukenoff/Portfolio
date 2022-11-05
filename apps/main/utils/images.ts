import { ImageLoader } from "next/image";

const loader: ImageLoader = ({ src }) =>
  `https://storage.googleapis.com/john-lukenoff-portfolio.appspot.com/${src}`;

export default loader;
