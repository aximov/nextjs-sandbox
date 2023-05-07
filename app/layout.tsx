import './globals.css'
import { Noto_Sans_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Link from 'next/link'

// Preloading enabled by default so an error occurs without subsetting
const notoSansJp = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js Sandbox',
  description: 'Playground for me',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={notoSansJp.className}>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <header className="bg-blue-600 dark:bg-blue-800 text-white py-6">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold">
                <Link href="/">Next.js sandbox</Link>
              </h1>
            </div>
          </header>
          {children}
          <footer className="bg-blue-600 dark:bg-blue-800 text-white py-6">
            <div className="container mx-auto px-4">
              <p className="text-center">&copy; 2023- Aximov</p>
            </div>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
