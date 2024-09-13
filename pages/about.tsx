import * as TextContent from "../config/text_content";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Images from "../config/images";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>John Lukenoff | About</title>
        <meta name="description" content="John Lukenoff - About" />
      </Head>

      <main className="max-w-6xl mx-auto h-auto flex flex-col items-center bg-neutral-100 bg-opacity-90 rounded-md shadow-lg overflow-hidden p-8">
        <div className="flex flex-col items-center text-gray-950">
          <Image
            src={Images.Profile}
            width={400}
            height={400}
            alt="John Lukenoff profile picture"
            className="rounded-full object-cover w-64 h-64 mb-6"
          />
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-lg leading-relaxed text-center">
            {TextContent.aboutMe}
          </p>
        </div>
      </main>
    </>
  );
};

export default About;
