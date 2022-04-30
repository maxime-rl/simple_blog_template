import { createClient } from "contentful";
import { ArticleCard } from "../components";
import { HeroBanner } from "../components";

/**
 * @name getStaticProps
 * @returns {object} data response (hero & articles)
 */
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const response = await client.getEntries({ content_type: "article" });
  const responseHero = await client.getEntries({ content_type: "hero" });

  return {
    props: { articles: response.items, hero: responseHero.items },
    revalidate: 1,
  };
}

export default function Home({ hero, articles }) {
  return (
    <main className="min-h-[calc(100vh_-_7rem)] bg-slate-100">
      <HeroBanner hero={hero} />
      <section className="flex flex-col mx-auto p-3 lg:py-12 gap-3 max-w-screen-xl sm:grid sm:grid-cols-2 lg:grid-cols-3">
        <h2 className="sr-only">Articles</h2>
        {articles.map((article) => (
          <ArticleCard key={article.sys.id} article={article} />
        ))}
      </section>
    </main>
  );
}
