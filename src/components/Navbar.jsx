import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-800"
        >
          Grand Horizon
        </Link>

        {/* Navigation */}
        <nav className="space-x-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            Home
          </Link>
          <Link
            to="/rooms"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            Rooms
          </Link>
          <Link
            to="/bookings"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            Bookings
          </Link>
          <Link
            to="/admin"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            Admin
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
