export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="dark:text-white text-2xl font-bold mb-4">Section 1</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Here is the description for Section 1.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="dark:text-white text-2xl font-bold mb-4">Section 2</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Here is the description for Section 2.
          </p>
        </div>
      </section>
    </main>
  )
}
