import Home from './pages/Home'

const App = () => {
  return (
    <>
      <div className="min-h-screen mx-2 flex flex-col justify-between bg-gray-50">
        <main className="flex-grow">
          <Home />
        </main>

        <footer className="text-center font-poppins text-sm text-gray-500 mt-10 pb-2">
        Made with ❤️ by{' '}
        <a
          href="https://github.com/iammadheshwaran"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium hover:text-blue-600"
        >
          Marsh
        </a>
      </footer>

      </div>

    </>
  )
}

export default App