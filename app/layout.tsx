import './globals.css'
import { Noto_Sans_JP } from 'next/font/google'

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
      <body className={notoSansJp.className}>{children}</body>
    </html>
  )
}
