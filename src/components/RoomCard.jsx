function RoomCard({ room }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      {/* Image placeholder */}
      <img
  src={room.image}
  alt={room.type}
  className="h-48 w-full object-cover"
/>


      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {room.type} Room
        </h3>

        <p className="text-gray-600 mb-3">
          ₹{room.price} / night
        </p>

        <span
          className={`inline-block px-3 py-1 text-sm rounded-full mb-4 ${
            room.available
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {room.available ? 'Available' : 'Booked'}
        </span>

        <div>
          <a
            href="/bookings"
            className={`block text-center px-4 py-2 rounded-md font-medium transition ${
              room.available
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default RoomCard
