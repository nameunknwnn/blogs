import Link from "next/link";


export default function Home() {
  return (
    <>
      <Link href="/blog">
        <button className="text-2xl p-10">
          Blogs
        </button>
      </Link>
    </>
  );
}
