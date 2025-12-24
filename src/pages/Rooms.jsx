import rooms from '../data/rooms'
import RoomCard from '../components/RoomCard'

function Rooms() {
  const bookings =
    JSON.parse(localStorage.getItem('bookings')) || []

  function isBooked(type) {
    return bookings.some(b => b.roomType === type)
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
        Our Rooms
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map(room => (
          <RoomCard
            key={room.id}
            room={{
              ...room,
              available: !isBooked(room.type)
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Rooms
