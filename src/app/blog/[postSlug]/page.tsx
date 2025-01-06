import { Container } from "@/app/components/Container";
import { getSinglePosts } from "../../../../lib/posts";
import { formatDate } from "date-fns";
import { Prose } from "@/app/components/Prose";
import FeatureImage from "@/app/components/FeatureImage";

// Define the parameter types
interface PageProps {
  params: Promise<{ postSlug: string }>;
}

// Use generateMetadata for head content in App Router
export async function generateMetadata({ params }: PageProps) {
  const { postSlug } = await params;
  const pageData = await getSinglePosts(postSlug);
  
  return {
    title: `${pageData.title} - Spencer Sharp`,
    description: pageData.excerpt,
  };
}

// Update the component to handle Promise params
export default async function Post({ params }: PageProps) {
  const { postSlug } = await params;
  const pageData = await getSinglePosts(postSlug);

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight pb-10 text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                {pageData.title}
              </h1>
              <time
                dateTime={pageData.date}
                className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                <span className="ml-3">
                  {formatDate(pageData.date, "LLL d, yyyy")}
                </span>
              </time>
            </header>
            <FeatureImage post={pageData} />
            <Prose className="mt-8">{pageData.content}</Prose>
          </article>
        </div>
      </div>
    </Container>
  );
}