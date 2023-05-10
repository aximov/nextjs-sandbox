import Link from 'next/link'
import { sql } from '@vercel/postgres'

export default async function Home() {
  const { rows: articles } = await sql`SELECT * FROM articles;`
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="dark:text-white text-2xl font-bold mb-4">Articles</h2>
          <ul className="space-y-2">
            {articles.map((article, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">
                <Link href={`/article/${article.id}`}>{article.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/dashboard">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="dark:text-white text-2xl font-bold mb-4">
              Dashboard
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Dashboard for admin.
            </p>
          </div>
        </Link>
      </section>
    </main>
  )
}
