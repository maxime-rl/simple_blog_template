import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative shadow-md">
      <div className="flex justify-between mx-auto p-3 h-14 max-w-screen-xl">
        <span className="text-2xl font-bold">B.</span>
        <ul className="flex items-center gap-3">
          <li>
            <Link href="/">
              <a>Articles</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
