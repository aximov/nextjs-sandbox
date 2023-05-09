'use client'
// In App Router, only Client Components can use event handlers
export default function FloatingGitHubLink() {
  return (
    <button
      onClick={() => {
        window.open('https://github.com/aximov/nextjs-sandbox', '_blank')
      }}
      className="fixed bottom-4 right-4 bg-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none shadow-lg transition-all ease-in-out duration-150 hover:bg-gray-800 hover:shadow-xl"
    >
      View on GitHub
    </button>
  )
}
