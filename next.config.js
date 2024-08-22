const path = require("path");
/** @type {'static' | 'standalone' | 'firebase' | undefined} */
const NEXT_APP_BUILD_MODE = process.env.NEXT_APP_BUILD_MODE;

function getNextConfig() {
  /** @type {import('next').NextConfig} */
  const config = {
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

module.exports = getNextConfig();
