import React from "react";
import { FiTrash2, FiCalendar, FiUser, FiUsers, FiCoffee } from "react-icons/fi";

const ReservationList = () => {
  const reservations = JSON.parse(localStorage.getItem("reservations")) || [];

  const handleClearReservations = () => {
    if (window.confirm("Are you sure you want to clear all reservations?")) {
      localStorage.removeItem("reservations");
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-800 mb-3">
            Reservation Portfolio
          </h1>
          <p className="text-lg text-gray-600">
            Your curated dining experiences
          </p>
        </div>

        {/* Stats Cards */}
        {reservations.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center">
                <div className="p-3 bg-indigo-100 rounded-full mr-4">
                  <FiCalendar className="text-indigo-600 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Reservations</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {reservations.length}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <FiUsers className="text-green-600 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Guests</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {reservations.reduce((sum, r) => sum + parseInt(r.guests), 0)}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center">
                <div className="p-3 bg-yellow-100 rounded-full mr-4">
                  <FiCoffee className="text-yellow-600 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Unique Tables</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {[...new Set(reservations.map(r => r.table))].length}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center">
                <div className="p-3 bg-red-100 rounded-full mr-4">
                  <FiUser className="text-red-600 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Unique Guests</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {[...new Set(reservations.map(r => r.fullName))].length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-8 py-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">
                Your Reservations
              </h2>
              {reservations.length > 0 && (
                <button
                  onClick={handleClearReservations}
                  className="flex items-center bg-white bg-opacity-20 hover:bg-opacity-30 text-white py-2 px-4 rounded-lg transition-all"
                >
                  <FiTrash2 className="mr-2" />
                  Clear All
                </button>
              )}
            </div>
          </div>

          {/* Card Body */}
          <div className="p-8">
            {reservations.length === 0 ? (
              <div className="text-center py-12">
                <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <FiCalendar className="text-gray-400 text-3xl" />
                </div>
                <h3 className="text-xl font-medium text-gray-700 mb-2">
                  No Reservations Yet
                </h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  You haven't made any reservations. Book a table to see your
                  upcoming dining experiences here.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-6 text-gray-600 font-medium">
                        Guest
                      </th>
                      <th className="text-left py-4 px-6 text-gray-600 font-medium">
                        Date & Time
                      </th>
                      <th className="text-left py-4 px-6 text-gray-600 font-medium">
                        Party Size
                      </th>
                      <th className="text-left py-4 px-6 text-gray-600 font-medium">
                        Table
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {reservations.map((reservation, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-100 hover:bg-gray-50 ${
                          index % 2 === 0 ? "bg-gray-50" : ""
                        }`}
                      >
                        <td className="py-5 px-6">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                              <FiUser className="text-indigo-600" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-800">
                                {reservation.fullName}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-5 px-6">
                          <p className="text-gray-700">
                            {new Date(reservation.date).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </p>
                        </td>
                        <td className="py-5 px-6">
                          <div className="flex items-center">
                            <span className="inline-block w-8 h-8 bg-green-100 text-green-800 rounded-full flex items-center justify-center mr-3">
                              {reservation.guests}
                            </span>
                            <span className="text-gray-700">guests</span>
                          </div>
                        </td>
                        <td className="py-5 px-6">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                              reservation.table.includes("Premium") ||
                              reservation.table.includes("Private")
                                ? "bg-purple-100 text-purple-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {reservation.table}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Footer Note */}
        {reservations.length > 0 && (
          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>
              Showing {reservations.length} reservation
              {reservations.length !== 1 ? "s" : ""}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservationList;