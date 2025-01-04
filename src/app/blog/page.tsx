
// import Head from "next/head";
// import Link from "next/link";
// import { getAllPosts } from "../../../lib/posts";
// import FeatureImage from "../components/FeatureImage";




// export default async function BlogHome(){
//   const allPosts=await getAllPosts();
//    return(
//     <>
//     <Head>
//       <title>
//       Blog
//       </title>
//     </Head>
//    <div className=" h-[50vh] min-h-[20rem] bg-white">
//     <h1 className="text-6xl text-center text-slate-100 relative z-10 py-8">
//       BLOG
//     </h1>
//     <p className="relative">Read out Latest Article</p>
//     </div>
//     <main>
//         <section className="post-list mt-4">
//             <ul>
//                 {
//                     allPosts.nodes.map((post:any)=>(
//                         <li key={post.slug} className="grid grid-cols-5 gap-4 mb-4">
//                             <div className="col-span-2">
//                               <FeatureImage post={post}/>
//                             </div>
//                             <div className="col-span-3">
//                             <h2>
//                                 <Link href={`/blog/${post.slug}`}>{post.tit}</Link>
//                             </h2>
//                             <div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
//                             <div>
//                               Posted Under {
//                                 post.categories.nodes.map((category:any)=>(
//                                   <Link href={`/category/${category.slug}`} key={category.slug}>{category.name}</Link>
//                                 ))
//                               }
//                             </div>

//                             </div>
//                         </li>
//                     ))
//                 }
//             </ul>
//         </section>
//     </main>
//     </>
//   );
// }

