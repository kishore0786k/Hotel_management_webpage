import { useState } from 'react'
import rooms from '../data/rooms'

function BookingForm() {
  const [name, setName] = useState('')
  const [roomType, setRoomType] = useState('')
  const [days, setDays] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (!name || !roomType || !days) {
      alert('Please fill all fields')
      return
    }

    const existingBookings =
      JSON.parse(localStorage.getItem('bookings')) || []

    const alreadyBooked = existingBookings.some(
      booking => booking.roomType === roomType
    )

    if (alreadyBooked) {
      alert('This room type is already booked')
      return
    }

    const newBooking = {
      id: Date.now(),
      name,
      roomType,
      days
    }

    localStorage.setItem(
      'bookings',
      JSON.stringify([...existingBookings, newBooking])
    )

    alert('Booking confirmed')

    setName('')
    setRoomType('')
    setDays('')
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        Reservation Details
      </h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Room Type
          </label>
          <select
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={roomType}
            onChange={e => setRoomType(e.target.value)}
          >
            <option value="">Select a room</option>
            {rooms.map(room => (
              <option key={room.id} value={room.type}>
                {room.type} Room
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Number of Nights
          </label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={days}
            onChange={e => setDays(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  )
}

export default BookingForm
