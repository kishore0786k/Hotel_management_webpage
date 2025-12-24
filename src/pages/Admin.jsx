import { useEffect, useState } from 'react'

function Admin() {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    const storedBookings =
      JSON.parse(localStorage.getItem('bookings')) || []
    setBookings(storedBookings)
  }, [])

  function deleteBooking(id) {
    const updatedBookings = bookings.filter(
      booking => booking.id !== id
    )
    setBookings(updatedBookings)
    localStorage.setItem('bookings', JSON.stringify(updatedBookings))
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Admin Dashboard
        </h2>

        {bookings.length === 0 && (
          <p className="text-center text-gray-600">
            No bookings available
          </p>
        )}

        <div className="space-y-6">
          {bookings.map(booking => (
            <div
              key={booking.id}
              className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div className="space-y-1">
                <p className="text-lg font-semibold text-gray-800">
                  {booking.name}
                </p>
                <p className="text-gray-600">
                  Room: {booking.roomType}
                </p>
                <p className="text-gray-600">
                  Nights: {booking.days}
                </p>
              </div>

              <button
                onClick={() => deleteBooking(booking.id)}
                className="mt-4 md:mt-0 bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600 transition"
              >
                Delete Booking
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Admin
