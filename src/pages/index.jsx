import { createClient } from "contentful";
import Link from "next/link";

/**
 * @name getStaticProps
 * @returns {object} data response (articles)
 */
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const response = await client.getEntries({ content_type: "article" });

  return {
    props: {
      articles: response.items,
    },
  };
}

export default function Home({ articles }) {
  console.log(articles);
  return (
    <main className="min-h-[calc(100vh_-_7rem)] bg-slate-100">
      <section className="mx-auto p-3 max-w-screen-xl">
        <h1 className="text-4xl font-bold">Home page</h1>
        {articles.map((article) => (
          <div key={article.sys.id}>
            <Link href={`/articles/${article.fields.slug}`}>
              <a>{article.fields.title}</a>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
