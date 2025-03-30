import { BASE_RESOURCE_PATH } from "./images";

export interface BlogPost {
  name: string;
  description: string;
  image: string;
  link: string;
}

function getBlogImageFromRelativePath(path: string) {
  return `${BASE_RESOURCE_PATH}/${path}`;
}

const BlogImages = {
  DesigningAPortfolioWebsiteWithNextJSAndFirebase:
    "blog/designing_a_portfolio_website_with_nextjs_and_firebase.png",
} as const;

const blogPosts: BlogPost[] = [
  {
    name: "Designing my Portfolio Website with NextJS and Firebase",
    description:
      "How I designed this portfolio and blog with NextJS and Firebase",
    image: getBlogImageFromRelativePath(
      BlogImages.DesigningAPortfolioWebsiteWithNextJSAndFirebase
    ),
    link: "/blog/designing_a_portfolio_website_with_nextjs_and_firebase",
  },
];

export default blogPosts;
