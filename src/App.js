import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Componet/Header/header';
import Homepage from './Componet/Home/home';
import TableBooking from './Componet/TableBooking/tableBooking';
import ReservationList from './Componet/ReservationList/reservationList';
import ExploreAvailability from './Componet/ExploreAvailability/exploreAvailability';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-4 all_container_main_class">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/book" element={<TableBooking />} />
          <Route path="/reservations" element={<ReservationList />} />
          <Route path="/availability" element={<ExploreAvailability />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;