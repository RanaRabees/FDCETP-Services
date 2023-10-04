/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

export default function Home() {
  return (
    <>
      <body className="back">
        <div className="min-h-screen flex flex-col justify-center items-center">
          <img src="https://www.svgrepo.com/show/426192/cogs-settings.svg" alt="Logo" className="mb-8 h-40" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-400 mb-4">Site is under maintenance</h1>
          <p className="text-center text-white text-lg md:text-xl lg:text-2xl mb-8">We're working hard to improve the user experience. Stay tuned!</p>
          <div className="flex space-x-4">
            <a href="/" className="border-2 hover:bg-gray-700 transition-all border-gray-800 text-red-700 font-bold py-3 px-6 rounded">Reload</a>
            <a href="#" className="bg-gray-800 hover:bg-transparent transition-all hover:border-2 hover:border-gray-800 text-white font-bold py-3 px-6 rounded">Contact Us</a>
          </div>
        </div>
      </body>
    </>
  )
}
