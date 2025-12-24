function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to Grand Horizon Hotel
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Experience luxury, comfort, and world-class hospitality.
            Book your perfect stay with us today.
          </p>

          <a
            href="/rooms"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-semibold transition"
          >
            View Rooms
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Why Choose Our Hotel?
        </h2>
        <p className="text-gray-600 max-w-3xl">
          Located in the heart of the city, Grand Horizon Hotel offers
          premium rooms, exceptional service, and modern amenities.
          Whether you are traveling for business or leisure, we ensure
          a memorable stay.
        </p>
      </section>
    </div>
  )
}

export default Home
