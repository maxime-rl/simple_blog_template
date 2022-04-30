import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed z-10 w-full bg-white shadow-md">
      <div className="flex justify-between mx-auto p-3 h-14 max-w-screen-xl">
        <span className="text-2xl font-bold">Blog</span>
        <ul className="flex items-center gap-8">
          <li>
            <Link href="/">
              <a className="font-bold hover:underline">Articles</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="font-bold hover:underline">About</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
