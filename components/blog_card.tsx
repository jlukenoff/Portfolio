import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "../config/blog_posts";

export type BlogCardProps = BlogPost & {};

const BlogCard: React.FC<BlogCardProps> = ({
  name,
  description,
  image,
  link,
}) => {
  return (
    <Link href={link} className="block">
      <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
        <div className="flex flex-col gap-4">
          <div className="relative aspect-square">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-gray-600">{description}</p>
            <span className="text-blue-500">Read More</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
