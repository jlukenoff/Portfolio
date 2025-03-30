import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Images from "../config/images";
import blogPosts from "../config/blog_posts";
import BlogCard from "../components/blog_card";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>John Lukenoff | Home</title>
        <meta name="description" content="John Lukenoff - Home" />
        <meta name="og:title" content="John Lukenoff | Home" />
        <meta
          name="og:description"
          content="John Lukenoff - Portfolio and Blog"
        />
        <meta name="og:image" content={Images.MainLogo} />
      </Head>

      <main className="max-w-7xl mx-auto p-8">
        {/* Hero Section */}
        <section className="text-center mb-12 p-8 rounded-md">
          <div className="flex items-center justify-center mb-4">
            <Image
              src={Images.MainLogo}
              width="500"
              height="500"
              alt="John Lukenoff logo. with slogan 'Building better, faster'"
            />
          </div>
          <p className="text-xl">
            I am a full stack software engineer with over 5 years of experience
            in building and maintaining scalable applications. I have led
            enterprise-level projects and mentored junior developers, enhancing
            team performance through technical leadership. My expertise includes
            modern web technologies, cloud platforms, and data infrastructure,
            enabling me to deliver complex solutions that drive real value.
            Let&apos;s build something amazing together!
          </p>
        </section>

        {/* Projects Section */}
        <section className="mb-12 hidden">
          <h2 className="text-4xl font-bold mb-6">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Project One</h3>
              <p className="text-gray-700">Description of project one.</p>
            </div>
            {/* Project 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Project Two</h3>
              <p className="text-gray-700">Description of project two.</p>
            </div>
            {/* Project 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Project Three</h3>
              <p className="text-gray-700">Description of project three.</p>
            </div>
            {/* Add more projects as needed */}
          </div>
        </section>

        {/* Blog Section */}
        <section>
          <h2 className="text-4xl font-bold mb-6">Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.name} {...post} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
