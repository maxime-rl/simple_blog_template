import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Error 404</h1>
      <h2>Cette page n&apos;existe pas</h2>
      <p>
        Retorner sur la{" "}
        <Link href="/">
          <a className="underline">Home page</a>
        </Link>
      </p>
    </div>
  );
}
