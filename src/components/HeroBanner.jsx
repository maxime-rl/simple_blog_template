import Image from "next/image";

/**
 * @name HeroBanner
 * @param {object} hero
 * @returns {JSX}
 */
export default function HeroBanner({ hero }) {
  const { image, title, subtitle } = hero[0].fields;

  return (
    <header className="relative w-full pt-14">
      <div className="relative w-full h-80 lg:h-96 brightness-75">
        <Image
          src={`https:${image.fields.file.url}`}
          layout="fill"
          objectFit="cover"
          alt={title}
        />
      </div>
      <div className="absolute top-0 left-0 right-0 pt-14 flex flex-col justify-center mx-auto w-full max-w-screen-xl h-full px-3 text-slate-100">
        <h1 className="text-4xl lg:text-5xl font-bold pb-3">{title}</h1>
        <span className="max-w-screen-sm lg:text-xl">{subtitle}</span>
      </div>
    </header>
  );
}
