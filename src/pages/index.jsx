import { createClient } from "contentful";
import { ArticleCard } from "../components";

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
      <section className="flex flex-col mx-auto p-3 gap-3 max-w-screen-xl sm:grid sm:grid-cols-2 lg:grid-cols-3">
        <h1 className="sr-only">Articles</h1>
        {articles.map((article) => (
          <ArticleCard key={article.sys.id} article={article} />
        ))}
      </section>
    </main>
  );
}
