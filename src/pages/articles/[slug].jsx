import Head from "next/head";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const response = await client.getEntries({
    content_type: "article",
  });

  const paths = response.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "article",
    "fields.slug": params.slug,
  });

  return {
    props: { article: items[0] },
  };
}

/**
 * @name ArticleDetails
 * @param {object} article
 * @returns {JSX}
 */
export default function ArticleDetails({ article }) {
  console.log(article);
  return (
    <>
      <Head>
        <title>{article.fields.title}</title>
      </Head>
      <header>
        <h1>{article.fields.title}</h1>
      </header>
    </>
  );
}
