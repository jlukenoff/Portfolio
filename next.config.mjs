import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import createMdx from "@next/mdx";

/** @type {'static' | 'standalone' | 'firebase' | undefined} */
const NEXT_APP_BUILD_MODE = process.env.NEXT_APP_BUILD_MODE;

function getNextConfig() {
  /** @type {import('next').NextConfig} */
  const config = {
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    reactStrictMode: true,
    swcMinify: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "jlukenoff-portfolio-static-assets.s3.amazonaws.com",
          port: "",
          pathname: "/public/static/**",
        },
      ],
    },
  };

  if (NEXT_APP_BUILD_MODE === "static") {
    config.output = "export";
    config.images = {
      unoptimized: true,
    };
  } else if (NEXT_APP_BUILD_MODE === "standalone") {
    config.output = "standalone";
  } else if (NEXT_APP_BUILD_MODE === "firebase") {
    config.distDir = "./functions/.next";
  }

  return config;
}

const baseNextConfig = getNextConfig();
const withMdx = createMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  },
});

export default withMdx(baseNextConfig);
