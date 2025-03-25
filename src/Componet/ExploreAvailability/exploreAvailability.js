import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../common.css";

const ExploreAvailability = () => {
  const [availability, setAvailability] = useState([]);
  const [availableDates, setAvailableDates] = useState([]);
  const { register, handleSubmit, watch } = useForm();

  const selectedYear = watch("selectedYear");
  const selectedMonth = watch("selectedMonth");

  React.useEffect(() => {
    if (selectedYear && selectedMonth) {
      const dates = generateAvailableDates(selectedYear, selectedMonth);
      setAvailableDates(dates);
    }
  }, [selectedYear, selectedMonth]);

  const generateAvailableDates = (year, month) => {
    const availableDates = [];
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);

    for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 2)) {
      availableDates.push(date.toISOString().split("T")[0]);
    }

    return availableDates;
  };

  const allTables = availableDates.flatMap((date) => [
    { id: `${date}-1`, table: "Ocean View Table", time: "6:00 PM - 8:00 PM", date, capacity: "2-4", premium: true },
    { id: `${date}-2`, table: "Family Booth", time: "7:00 PM - 9:00 PM", date, capacity: "4-6" },
    { id: `${date}-3`, table: "Cozy Corner", time: "8:00 PM - 10:00 PM", date, capacity: "2-3" },
  ]);

  const isDateAvailable = (date) => {
    return availableDates.includes(date);
  };

  const onSubmit = (data) => {
    if (!isDateAvailable(data.selectedDate)) {
      alert("The selected date is not available. Please choose an available date.");
      return;
    }

    const filteredTables = allTables.filter(
      (table) => table.date === data.selectedDate
    );
    setAvailability(filteredTables);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-800 mb-2">Explore Availability</h2>
          <p className="text-lg text-indigo-600">Find the perfect table for your special occasion</p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label htmlFor="selectedYear" className="block text-sm font-medium text-gray-700 mb-2">
                  Select Year
                </label>
                <input
                  type="number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  id="selectedYear"
                  min="2023"
                  max="2030"
                  {...register("selectedYear", { required: true })}
                  placeholder="2023"
                />
              </div>
              <div>
                <label htmlFor="selectedMonth" className="block text-sm font-medium text-gray-700 mb-2">
                  Select Month
                </label>
                <input
                  type="number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  id="selectedMonth"
                  min="1"
                  max="12"
                  {...register("selectedMonth", { required: true })}
                  placeholder="1-12"
                />
              </div>
              <div>
                <label htmlFor="selectedDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Select Date
                </label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  id="selectedDate"
                  {...register("selectedDate", { required: true })}
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
            >
              Check Availability
            </button>
          </form>
        </div>

        {/* Available Dates Notification */}
        {availableDates.length > 0 && (
          <div className="bg-indigo-100 border-l-4 border-indigo-500 text-indigo-700 p-4 mb-8 rounded-lg">
            <p className="font-medium">
              Available dates this month:{" "}
              <span className="font-bold">{availableDates.join(", ")}</span>
            </p>
          </div>
        )}

        {/* Results Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            {availability.length > 0 
              ? "Available Tables" 
              : "Select a date to see available tables"}
          </h3>

          {availability.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availability.map((table) => (
                <div 
                  key={table.id} 
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`p-5 ${table.premium ? 'bg-indigo-50' : ''}`}>
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-bold text-gray-800">
                        {table.table}
                        {table.premium && (
                          <span className="ml-2 bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                            Premium
                          </span>
                        )}
                      </h4>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {table.capacity} people
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        {table.date}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        {table.time}
                      </div>
                    </div>
                    
                    <Link to={`/book?date=${table.date}`}>
                      <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                        </svg>
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h4 className="text-lg font-medium text-gray-700 mb-2">No tables available</h4>
              <p className="text-gray-500">Please select a different date to see available tables</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExploreAvailability;