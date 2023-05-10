import { db } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET() {
  const client = await db.connect()

  try {
    await client.sql`CREATE TABLE IF NOT EXISTS articles (id serial PRIMARY KEY, title varchar(255), content text, created_at timestamptz not null default current_timestamp, updated_at timestamptz not null default current_timestamp);`

    const existingArticles = await client.sql`SELECT * FROM articles;`
    if (existingArticles.rowCount === 0) {
      const sampleArticles = [
        {
          title: 'Sample Article 1',
          content: 'This is a sample article for demonstration purposes.',
        },
        {
          title: 'Sample Article 2',
          content: 'This is another sample article for demonstration purposes.',
        },
        {
          title: 'Sample Article 3',
          content:
            'This is yet another sample article for demonstration purposes.',
        },
      ]

      const now = new Date().toISOString()
      for (const article of sampleArticles) {
        await client.sql`INSERT INTO articles (title, content, created_at, updated_at) VALUES (${article.title}, ${article.content}, ${now}, ${now});`
      }
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }

  const articles = await client.sql`SELECT * FROM articles;`
  return NextResponse.json({ articles })
}
