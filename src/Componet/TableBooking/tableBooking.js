import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../common.css";

const TableBooking = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedDate = searchParams.get("date");
  const [showPopup, setShowPopup] = useState(false);
  const [showAlreadyBookedPopup, setShowAlreadyBookedPopup] = useState(false);
  const [isBooking, setIsBooking] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  React.useEffect(() => {
    if (selectedDate) {
      setValue("date", selectedDate);
    }
  }, [selectedDate, setValue]);

  const onSubmit = async (data) => {
    if (!selectedDate) {
      setShowPopup(true);
      return;
    }

    const reservations = JSON.parse(localStorage.getItem("reservations")) || [];
    const isTableAlreadyBooked = reservations.some(
      (reservation) =>
        reservation.date === data.date && reservation.table === data.table
    );

    if (isTableAlreadyBooked) {
      setShowAlreadyBookedPopup(true);
      return;
    }

    setIsBooking(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    reservations.push(data);
    localStorage.setItem("reservations", JSON.stringify(reservations));
    setIsBooking(false);
    setBookingSuccess(true);
    
    setTimeout(() => {
      setBookingSuccess(false);
      navigate("/reservations");
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Luxury Card */}
        <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white border-opacity-10">
          {/* Gold Header */}
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 py-8 px-10 text-center">
            <h2 className="text-4xl font-serif font-bold text-white tracking-wider">
              RESERVE YOUR TABLE
            </h2>
            <p className="text-yellow-100 mt-2 font-light">
              Experience culinary excellence
            </p>
          </div>
          
          {/* Form */}
          <div className="p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Full Name */}
              <div className="relative">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-3">
                  FULL NAME
                </label>
                <input
                  type="text"
                  className={`w-full bg-gray-800 bg-opacity-50 text-white p-5 border ${
                    errors.fullName ? "border-red-500" : "border-gray-700"
                  } rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 placeholder-gray-400`}
                  id="fullName"
                  placeholder="Enter your name"
                  {...register("fullName", { required: "Name is required" })}
                />
                {errors.fullName && (
                  <p className="mt-2 text-sm text-red-400">{errors.fullName.message}</p>
                )}
              </div>

              {/* Date */}
              <div className="relative">
                <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-3">
                  RESERVATION DATE
                </label>
                <input
                  type="date"
                  className={`w-full bg-gray-800 bg-opacity-50 text-white p-5 border ${
                    errors.date ? "border-red-500" : "border-gray-700"
                  } rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500`}
                  id="date"
                  {...register("date", { required: "Date is required" })}
                />
                {errors.date && (
                  <p className="mt-2 text-sm text-red-400">{errors.date.message}</p>
                )}
              </div>

              {/* Guests */}
              <div className="relative">
                <label htmlFor="guests" className="block text-sm font-medium text-gray-300 mb-3">
                  NUMBER OF GUESTS
                </label>
                <div className="relative">
                  <input
                    type="number"
                    className={`w-full bg-gray-800 bg-opacity-50 text-white p-5 border ${
                      errors.guests ? "border-red-500" : "border-gray-700"
                    } rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500`}
                    id="guests"
                    min="1"
                    defaultValue="2"
                    {...register("guests", {
                      required: "Number of Guests is required",
                      min: { value: 1, message: "At least 1 guest" },
                    })}
                  />
                  <div className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                {errors.guests && (
                  <p className="mt-2 text-sm text-red-400">{errors.guests.message}</p>
                )}
              </div>

              {/* Table Selection */}
              <div className="relative">
                <label htmlFor="table" className="block text-sm font-medium text-gray-300 mb-3">
                  SELECT TABLE
                </label>
                <div className="relative">
                  <select
                    className={`w-full bg-gray-800 bg-opacity-50 text-white p-5 border ${
                      errors.table ? "border-red-500" : "border-gray-700"
                    } rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 appearance-none`}
                    id="table"
                    {...register("table", { required: "Table selection is required" })}
                  >
                    <option value="">Select your table</option>
                    <option value="Champagne Lounge">Champagne Lounge (Premium)</option>
                    <option value="Chef's Counter">Chef's Counter</option>
                    <option value="Garden Terrace">Garden Terrace</option>
                    <option value="Private Dining">Private Dining Room</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-400">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {errors.table && (
                  <p className="mt-2 text-sm text-red-400">{errors.table.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isBooking}
                className={`w-full py-5 px-6 mt-10 bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white font-bold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center ${
                  isBooking ? 'opacity-80 cursor-not-allowed' : ''
                }`}
              >
                {isBooking ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    RESERVING...
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    CONFIRM RESERVATION
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Notification */}
      {bookingSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-green-600 text-white px-8 py-6 rounded-xl shadow-2xl flex items-center animate-fade-in-up">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h3 className="font-bold text-xl">RESERVATION CONFIRMED!</h3>
              <p className="text-green-100">Your table has been successfully booked</p>
            </div>
          </div>
        </div>
      )}

      {/* Popup for Direct Booking */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-2xl max-w-md w-full overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 py-6 px-8">
              <h2 className="text-2xl font-bold text-white">Check Available Dates</h2>
            </div>
            <div className="p-8">
              <p className="text-gray-300 mb-8">
                Please visit our availability calendar to select your preferred date before booking.
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                  onClick={() => setShowPopup(false)}
                >
                  Close
                </button>
                <button
                  className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors"
                  onClick={() => navigate("/availability")}
                >
                  View Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Already Booked Popup */}
      {showAlreadyBookedPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-2xl max-w-md w-full overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-red-700 py-6 px-8">
              <h2 className="text-2xl font-bold text-white">Table Unavailable</h2>
            </div>
            <div className="p-8">
              <p className="text-gray-300 mb-8">
                The selected table is already booked for this date. Please choose another table or date.
              </p>
              <div className="flex justify-end">
                <button
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                  onClick={() => setShowAlreadyBookedPopup(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableBooking;