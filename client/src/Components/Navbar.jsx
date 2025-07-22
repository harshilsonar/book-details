import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Navbar = () => {
    return (
     <div className="container-fluid custom-navbar">
  <nav className="navbar container navbar-expand-lg px-3">
    <div className="container-fluid">
      <Link className="navbar-brand brand-text" to="/">📘 BookVerse</Link>

      {/* Toggler for small screens */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
          <Link className="nav-link nav-item-link" to="/">Home</Link>
          <Link className="nav-link nav-item-link" to="/add">Add Book</Link>
        </div>
      </div>
    </div>
  </nav>
</div>


    );
};

export default Navbar;
