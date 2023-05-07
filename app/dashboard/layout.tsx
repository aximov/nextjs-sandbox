import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Dashboard | Next.js Sandbox',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="bg-blue-500 dark:bg-blue-700 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
        </div>
      </div>
      <section>{children}</section>
    </div>
  )
}
