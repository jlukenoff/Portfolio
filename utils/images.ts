import { ImageLoader } from "next/legacy/image";
import RelativeImagePaths from "../config/images";

const legacyImageLoader: ImageLoader = ({ src }) =>
  `https://jlukenoff-portfolio-static-assets.s3.amazonaws.com/public/static/${src}`;

export class ImageUtil {
  private static imagePaths = RelativeImagePaths;

  static get(image: keyof typeof RelativeImagePaths): string {
    const img = this.imagePaths[image];
    return `https://jlukenoff-portfolio-static-assets.s3.amazonaws.com/public/static/${img}`;
  }
}

export default legacyImageLoader;
