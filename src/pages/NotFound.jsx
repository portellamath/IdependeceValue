import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="section flex items-center justify-center min-h-[70vh]">
      <div className="container text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-8xl font-bold text-primary-500 mb-6">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound