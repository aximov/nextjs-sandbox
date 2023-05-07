import {
  UserGroupIcon,
  CurrencyDollarIcon,
  ShoppingCartIcon,
  CubeTransparentIcon,
} from '@heroicons/react/24/outline'

export default function Dashboard() {
  const dummyData = [
    {
      title: 'Total Users',
      value: 150,
      icon: UserGroupIcon,
    },
    {
      title: 'Total Sales',
      value: '$12,500',
      icon: CurrencyDollarIcon,
    },
    {
      title: 'Total Orders',
      value: 350,
      icon: ShoppingCartIcon,
    },
    {
      title: 'Total Products',
      value: 120,
      icon: CubeTransparentIcon,
    },
  ]
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {dummyData.map((data, index) => {
          const IconComponent = data.icon
          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center justify-between"
            >
              <div>
                <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                  {data.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">{data.value}</p>
              </div>
              <IconComponent className="h-10 w-10 text-blue-600 dark:text-blue-400" />
            </div>
          )
        })}
      </section>
    </main>
  )
}
