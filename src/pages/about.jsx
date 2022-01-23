import Head from "next/head";

export default function about() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <main className="min-h-[calc(100vh_-_7rem)] bg-slate-100">
        <section className="mx-auto p-3 max-w-screen-xl">
          <h1 className="text-4xl font-bold">About page</h1>
        </section>
      </main>
    </>
  );
}
