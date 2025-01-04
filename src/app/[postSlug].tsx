import { getPostSlugs, getSinglePosts } from "../../lib/posts";


// Generate static params
export async function generateStaticParams() {
  const postSlugs = await getPostSlugs();
  
  return postSlugs.map((post:any) => ({
    pageSlug: post.slug,
  }));
}

// Generate metadata for the page
// export async function generateMetadata(params:SinglePost) {
//   const post = await getSinglePosts(params.pageSlug);
  
//   return {
//     title: post.title,
//   };
// }

// Main page component
// export default async function Post( params :SinglePost) {
//   const pageData = await getSinglePosts(params.pageSlug);
  
//   return (
//     <section className="content-area py-8">
//       <article>
//         <h1 className="text-6xl text-center text-slate-700 relative py-8">
//           {pageData.title}
//         </h1>
//         <div 
//           dangerouslySetInnerHTML={{ __html: pageData.content }} 
//           className="post-content container mx-auto lg:max-w-4xl" 
//         />
//       </article>
//     </section>
//   );
// }