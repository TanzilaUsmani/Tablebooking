import React from "react";
import { Link } from "react-router-dom";
import "../common.css";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-indigo-800">
          Welcome to <span className="text-indigo-600">ReserveOcean</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - 3 Cards (col-3 equivalent) */}
          <div className="w-full lg:w-1/4 space-y-6">
            {/* Reservation List Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Reservation List
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  View all your current reservations and manage bookings.
                </p>
                <Link
                  to="/reservations"
                  className="block w-full bg-indigo-600 text-white py-2 px-4 rounded-lg text-center hover:bg-indigo-700 transition-colors reservation_list"
                >
                  View Reservations
                </Link>
              </div>
            </div>

            {/* Explore Availability Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Explore Availability
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Check available tables and timings for your preferred dates.
                </p>
                <Link
                  to="/availability"
                  className="block w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700 transition-colors explore_now_btn"
                >
                  Explore Now
                </Link>
              </div>
            </div>

            {/* Book Now Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Book Now</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Quickly book a table for your next visit.
                </p>
                <Link
                  to="/book"
                  className="block w-full bg-green-600 text-white py-2 px-4 rounded-lg text-center hover:bg-green-700 transition-colors book_now_btn"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>

          {/* Right Main Content - 3 Tables (col-9 equivalent) */}
          <div className="w-full lg:w-3/4">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 h-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Our Premium Tables
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Table 1 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      alt="Table 1"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-indigo-600 text-white px-3 py-1 text-sm font-semibold">
                      Premium
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">Ocean View Table</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Perfect for romantic dinners with stunning ocean views.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-indigo-600">
                        Capacity: 2-4
                      </span>
                      <Link
                        to="/book"
                        className="text-sm bg-indigo-100 text-indigo-600 px-3 py-1 rounded hover:bg-indigo-200"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Table 2 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      alt="Table 2"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-1 text-sm font-semibold">
                      Family
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">Family Booth</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Spacious area perfect for family gatherings.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-blue-600">
                        Capacity: 6-8
                      </span>
                      <Link
                        to="/book"
                        className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded hover:bg-blue-200"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Table 3 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      alt="Table 3"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-green-600 text-white px-3 py-1 text-sm font-semibold">
                      Standard
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">Cozy Corner</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Comfortable space for casual dining with friends.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-green-600">
                        Capacity: 4-6
                      </span>
                      <Link
                        to="/book"
                        className="text-sm bg-green-100 text-green-600 px-3 py-1 rounded hover:bg-green-200"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;