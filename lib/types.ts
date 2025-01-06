
  // Common interfaces used across multiple queries
interface MediaSize {
  sourceUrl: string;
  width: number;
  height: number;
}
interface MediaDetails {
  file: string;
  sizes: MediaSize[];
}

interface FeaturedImage {
  node: {
    mediaDetails: MediaDetails;
  };
}

interface Category {
  name: string;
  slug: string;
}

interface PageInfo {
  hasNextPage: boolean;
  endCursor: string;
  hasPreviousPage: boolean;
  startCursor: string;
}

// Types for getAllPosts query
export interface Post {
  date: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: FeaturedImage;
  categories: {
    nodes: Category[];
  };
}


interface GetAllPostsResponse {
  nodes: Post[];
  pageInfo: PageInfo;
}

// Types for getSinglePost query
interface SinglePost {
  content: string;
  date: string;
  excerpt: string;
  modified: string;
  slug: string; 
  title: string;
  featuredImage: FeaturedImage;
  categories: {
    nodes: Category[];
  };
}

interface GetSinglePostResponse {
  post: SinglePost;
}

// Types for getPostSlugs query
interface PostSlug {
  slug: string;
}

interface GetPostSlugsResponse {
  posts: {
    nodes: PostSlug[];
  };
}

// Function return types
export type GetAllPostsReturn = Promise<GetAllPostsResponse>;
export type GetSinglePostReturn = Promise<GetSinglePostResponse>;
export type GetPostSlugsReturn = Promise<GetPostSlugsResponse>;
  