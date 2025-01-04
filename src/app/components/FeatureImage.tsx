import Image from "next/image";
import Link from "next/link";
import Rectangle from "../../../public"; // Adjust the path to match your project structure

interface Post {
  slug: string;
  title?: string;
  featuredImage?: {
    node?: {
      mediaDetails?: {
        sizes?: Array<{
          sourceUrl: string;
          width: number;
          height: number;
        }>;
      };
    };
  };
}

interface FeatureImageProps {
  post: Post;
}

export default function FeatureImage({ post }: FeatureImageProps) {
  let img: { src: string; width: number; height: number };

  const defaultWidth = 300;
  const defaultHeight = 200;

  if (post.featuredImage?.node?.mediaDetails?.sizes?.[0]) {
    const size = post.featuredImage.node.mediaDetails.sizes[0];
    img = {
      src: size.sourceUrl,
      width: size.width || defaultWidth,
      height: size.height || defaultHeight,
    };
  } else {
    img = {
      src: Rectangle.src,
      width: defaultWidth,
      height: defaultHeight,
    };
  }

  return (
    <Link href={`/blog/${post.slug}`}>
      <img
        src={img.src}
        width={img.width}
        height={img.height}
        alt={post.title || "Blog Post"}
      />
    </Link>
  );
}