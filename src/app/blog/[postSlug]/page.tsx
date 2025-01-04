import { useParams } from "next/navigation";
import { getSinglePosts } from "../../../../lib/posts";

export default async function Post() {
    const  {postSlug}  = useParams();
    const pageData = await getSinglePosts(postSlug as string);
    
    return (
      <section className="content-area py-8">
        <article>
          <h1 className="text-6xl text-center text-slate-700 relative py-8">
            {pageData.title}
          </h1>
          <div 
            dangerouslySetInnerHTML={{ __html: pageData.content }} 
            className="post-content container mx-auto lg:max-w-4xl" 
          />
        </article>
      </section>
    );
  }