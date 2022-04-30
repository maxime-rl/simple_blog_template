import { createClient } from "contentful";
import Head from "next/head";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

/**
 * @name getStaticProps
 * @returns {object} data response (about)
 */
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const response = await client.getEntries({ content_type: "about" });

  return {
    props: { about: response.items },
    revalidate: 1,
  };
}

export default function about({ about }) {
  const { title, picture, description } = about[0].fields;

  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <main className="pt-14 min-h-[calc(100vh_-_3.5rem)] bg-slate-100">
        <section className="mx-auto p-3 lg:py-20 max-w-screen-xl">
          <h1 className="pt-3 lg:pt-0 pb-6 lg:pb-12 text-4xl font-bold">
            {title}
          </h1>
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-9">
            <div className="relative lg:flex-1 w-full h-80 lg:h-96">
              <Image
                src={`https:${picture.fields.file.url}`}
                layout="fill"
                objectFit="cover"
                className="rounded shadow-md"
                alt={title}
              />
            </div>
            <div className="lg:flex-1 w-full mx-auto prose">
              {documentToReactComponents(description)}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
