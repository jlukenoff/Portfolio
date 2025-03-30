import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import {
  languages,
  frontEnd,
  backEnd,
  tools,
  TechCardItem,
} from "../config/tech";

interface TechSectionProps {
  title: string;
  items: TechCardItem[];
}

const TechSection: React.FC<TechSectionProps> = ({ title, items }) => {
  return (
    <div className="py-8 mx-auto">
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map(({ name, description, logo }) => (
          <div key={name} className="flex">
            <div className="border border-gray-200 rounded-lg shadow-sm p-4 w-full">
              <div className="flex items-center mb-4">
                <div className="relative h-12 w-12 mr-4 flex items-center">
                  <Image
                    width={50}
                    height={50}
                    src={logo}
                    alt={`${name} logo`}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
              </div>
              <p className="text-gray-700">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Tech: NextPage = () => {
  return (
    <>
      <Head>
        <title>John Lukenoff | Tech</title>
        <meta name="description" content="John Lukenoff Tech Experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4">
        <TechSection title="Languages" items={languages} />
        <TechSection title="Front End" items={frontEnd} />
        <TechSection title="Back End" items={backEnd} />
        <TechSection title="Tooling + Ops" items={tools} />
      </main>
    </>
  );
};

export default Tech;
