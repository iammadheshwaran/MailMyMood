import React from 'react'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <div className="min-h-screen mx-2 flex flex-col justify-between bg-gray-50">
        <main className="flex-grow">
          <Home />
        </main>

        <footer className="text-center text-sm text-gray-500 mt-10 pb-4">
          Made with ❤️ by <a href="https://github.com/iammadheshwaran" target="_blank" className="underline hover:text-gray-700">Marsh</a>
        </footer>

      </div>

    </>
  )
}

export default App