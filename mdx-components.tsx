import type { MDXComponents } from "mdx/types";
import "highlight.js/styles/github-dark.css";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
