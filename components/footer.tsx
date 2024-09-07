import React from "react";
import Images from "../config/images";
import Image from "next/legacy/image";

interface FooterItem {
  label: string;
  url: string;
  img: string;
}

const footerItems: FooterItem[] = [
  {
    label: "linkedin",
    url: "https://linkedin.com/in/jlukenoff",
    img: Images.Linkedin,
  },
  {
    label: "github",
    url: "https://github.com/jlukenoff",
    img: Images.Github,
  },
  {
    label: "email",
    url: "mailto:john@jlukenoff.com",
    img: Images.Email,
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center h-24 bg-primary-main">
      <h2 className="mb-2 text-lg text-primary-contrastText">Contact Me</h2>
      <div className="flex items-center justify-center">
        {footerItems.map(({ label, url, img }) => (
          <a
            href={url}
            key={label}
            aria-label={`${label} icon`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 transition-transform duration-300 ease-in-out transform hover:scale-125"
          >
            <Image
              src={img}
              width={24}
              height={24}
              alt={`${label} logo`}
              className="filter invert brightness-100"
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
