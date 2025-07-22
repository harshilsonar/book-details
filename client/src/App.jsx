import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Bookdetail from './Pages/Bookdetail';
import Addbook from './Pages/Addbook';
import Editbook from './Pages/Editbook';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <>
      <Navbar />
      <div className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Bookdetail />} />
          <Route path="/add" element={<Addbook />} />
          <Route path="/edit/:id" element={<Editbook />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
