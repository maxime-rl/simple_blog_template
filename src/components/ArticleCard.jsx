import Link from "next/link";
import Image from "next/image";

/**
 * @name ArticleCard
 * @param {object} article
 * @returns {JSX}
 */
export default function ArticleCard({ article }) {
  const { thumbnail, title, excerpt, tags, slug } = article.fields;

  return (
    <article className="p-3 bg-white rounded shadow-md">
      <Link href={`/articles/${slug}`}>
        <a className="group">
          <header>
            <div className="relative w-full h-40">
              <Image
                src={`https:${thumbnail.fields.file.url}`}
                layout="fill"
                objectFit="cover"
                className="rounded-t brightness-100 transition-all group-hover:brightness-50 duration-500"
                alt={title}
              />
              <span className="absolute flex justify-center items-center w-full h-40 text-white font-bold opacity-0 transition group-hover:opacity-100 duration-500">
                Read more
              </span>
            </div>
            <h1 className="py-1 text-2xl font-bold">{title}</h1>
          </header>
          <div className="[display:_-webkit-box] [-webkit-line-clamp:_3] [-webkit-box-orient:_vertical] overflow-hidden h-[3.75rem] text-sm">
            {excerpt}
          </div>
          <footer className="flex items-center pt-4">
            {tags.map((tag) => (
              <span
                className="px-1 pb-0.5 mr-2 text-xs font-semibold rounded bg-slate-300"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </footer>
        </a>
      </Link>
    </article>
  );
}
