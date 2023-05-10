import { sql } from '@vercel/postgres'

// This page is a Server Component,
// and there is no dynamic functions, which rely on the request,
// no dynamic data fetching opting out of caching,
// so we can generate -- namely render -- this page statically at build time.

// This function is called at build time,
// and dedupes fetch() requests automatically across components.
export async function generateStaticParams() {
  const { rows } = await sql`SELECT * FROM articles;`

  return rows.map((row) => {
    return {
      params: {
        id: row.id,
      },
    }
  })
}

// Dynamic route segments are defined like: app/article/[id]
export default async function Article({ params }: { params: { id: string } }) {
  const { rows } = await sql`SELECT * FROM articles WHERE id = ${params.id};`
  const article = rows[0]
  return (
    <div className="container mx-auto px-4 py-12">
      <article className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h1 className="dark:text-white text-3xl font-bold mb-4">
          {article.title}
        </h1>
        <p className="text-gray-700 dark:text-gray-300">{article.content}</p>
      </article>
    </div>
  )
}
