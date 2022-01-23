import Head from "next/head";
import { Navbar, Footer } from "./";

/**
 * change Head content for project and add SEO friendly tags...
 * @name Layout
 * @param {object} children pages
 * @returns {JSX}
 */
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" sizes="32x32" href="/favicon.ico" />
        <meta
          name="description"
          content="Static blog template with Next.js and Contentful"
        />
        <meta
          name="keywords"
          content="blog, jamstack, next.js, contentful, template"
        />
        <title>Blog template</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
