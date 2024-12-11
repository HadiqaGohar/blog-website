
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  title: string;
  slug: {
    current: string;
  };
  author: {
    name: string;
    image?: string; // Optional
  };
  content: any[]; // Assuming rich text content or custom blocks
  publishedAt: string; // ISO 8601 date string
  mainImage: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string; // Optional
  };
  excerpt: string;
}

export default async function Home() {

  const data: BlogPost[] = await client.fetch(`
    *[_type == "blogPost"] {
      title,
      slug,
      author-> {
        name,
        image
      },
      content,
      publishedAt,
      mainImage,
      excerpt
    }
  `);

  const auth = await client.fetch(`
    *[_type=="author"] {
      
      author,
     
    }
  `);
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-8 bg-gray-200">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Blog Posts</h1>



      <div className="scroll-animate-right  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((post) => (
          <div key={post.slug.current} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            {post.mainImage?.asset?._ref && (
              <Image
                src={urlFor(post.mainImage.asset._ref).url()}
                alt={post.mainImage.alt || "Blog Post Image"}
                width={500}
                height={300}
                className="rounded-lg mb-4"
              />
            )}
            <h2 className="scroll-animate-left scroll-delay-1s text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="scroll-animate-left scroll-delay-2s text-gray-500 text-sm mb-2">
              By {post.author?.name || "Unknown"} - {new Date(post.publishedAt).toLocaleDateString()}
            </p>
            <p className="scroll-animate-left scroll-delay-3s text-gray-700 mb-4">{post.excerpt}</p>
            <Link href={`/blog/${post.slug.current}`} className="text-gray-800 hover:underline">
              <button className="styled-button scroll-animate-up scroll-delay-4s">Read more</button>
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
}
