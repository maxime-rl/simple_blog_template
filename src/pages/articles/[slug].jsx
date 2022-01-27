import Head from "next/head";
import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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
  const { featuredImage, title, author, readingTime, tags, body } =
    article.fields;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header className="mx-auto xl:p-3 max-w-screen-xl">
        <Image
          src={`https:${featuredImage.fields.file.url}`}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
          alt={title}
        />
        <div className="mx-auto p-3 prose">
          <h1 className="mb-3">{title}</h1>
          <div className="text-xs font-light">
            <span>By {author} - </span>
            <span>{article.sys.createdAt.slice(0, 10)} - </span>
            <span>{readingTime} mins read</span>
          </div>
          <div>
            {tags.map((tag) => (
              <span
                className="px-1 mr-2 text-xs rounded bg-slate-300"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>
      <main className="mx-auto p-3 prose">
        {documentToReactComponents(body)}
      </main>
    </>
  );
}
