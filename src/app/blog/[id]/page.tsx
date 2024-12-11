import Comment from '@/app/components/Comment';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

interface Author {
  name: string;
  bio: string;
  image?: string;
  twitter?: string;
}

interface BlogPost {
  title: string;
  slug: {
    current: string;
  };
  author: Author;
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

export default async function PostPage({ params }: { params: { id: string } }) {
  const { id } = params;

  // Fetch the blog post data based on the id, including author information
  const post: BlogPost = await client.fetch(`
    *[_type=="blogPost" && slug.current == $id][0] {
      title,
      slug,
      author->{
        name,
        bio,
        image,
        twitter
      },
      content,
      publishedAt,
      mainImage,
      excerpt
    }
  `, { id });

  // If post is not found
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 bg-gray-200">
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      
      {/* Main Image */}
      <div className="mb-4 ">
        {post.mainImage?.asset?._ref && (
          <Image
            src={urlFor(post.mainImage.asset._ref).url()}
            alt={post.mainImage.alt || "Blog Post Image"}
            width={800}
            height={400}
            className="rounded-lg"
          />
        )}
      </div>
      
      {/* Author Info */}
      <div className="mb-4">
        <p className="text-gray-500 text-sm mb-2">
          By {post.author?.name || "Unknown"} - {new Date(post.publishedAt).toLocaleDateString()}
        </p>
        {post.author?.image && (
          <Image
          height={10}
          width={10}
            src={urlFor(post.author.image).url()}
            alt={post.author.name}
            className="animate-pulse w-10 h-10 rounded-full mr-2 inline-block"
          />
        )}
        <p className="text-gray-600 text-sm my-3">{post.author?.bio}</p>
        {post.author?.twitter && (
          <a
            href={`https://twitter.com/${post.author.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold hover:text-gray-800 text-[#d269cc]"
          >
            Twitter
          </a>
        )}
      </div>
      
      {/* Blog Content */}
      <div className="text-gray-700">
        <PortableText value={post.content} />
      </div>
      {/* Comment */}
      <Comment/>
    </div>
  );
}
