export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center gap-2 h-14 sm:flex-row sm:justify-between mx-auto p-3 max-w-screen-xl text-xs font-bold">
      <p>Blog using NextJS and Contentful</p>
      <span>&#169; {new Date().getFullYear()} - Maxime RL</span>
    </footer>
  );
}
