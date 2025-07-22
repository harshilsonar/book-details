import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../App.css'

const Home = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/book/books");
      setBooks(res.data.book);
    } catch (err) {
      console.error("Error fetching books:", err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // const deleteBook = async (id) => {
  //   await axios.delete(`http://localhost:8080/api/book/delete/${id}`);
  //   fetchBooks();
  // };

  return (
   <div className="container fade-in-books">
  <div className="d-flex justify-content-between align-items-center mb-4">
    <h2 className="text-dark">All Books</h2>
    <Link to="/add" className="btn btn-success rounded-pill px-3">+ Add Book</Link>
  </div>

  <div className="row">
    {books.map((book) => (
      <div key={book._id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
        <div className="card book-card-dark shadow-sm border-0 rounded-4 h-100">
          <div className="position-relative">
            <img
              src={book.img}
              className="card-img-top rounded-top-4"
              alt={book.title}
              style={{ height: "240px", objectFit: "cover" }}
            />
            <button className="btn btn-light position-absolute top-0 end-0 m-2 rounded-circle shadow-sm">
              <i className="bi bi-heart-fill text-danger"></i>
            </button>
          </div>
          <div className="card-body d-flex flex-column">
            <h6 className="fw-bold text-light">{book.title}</h6>
            <p className="text-muted mb-1" style={{ fontSize: "0.85rem" }}>{book.author}</p>
            <p className="mb-2 text-secondary" style={{ fontSize: "0.85rem" }}>{book.description.slice(0, 40)}...</p>
            <div className="d-flex justify-content-between align-items-center">
              <span className="text-success fw-semibold">₹{book.price}</span>
              <span className="badge bg-warning text-dark">★ 4.7</span>
            </div>
            <div className="mt-3 d-grid">
              <Link to={`/detail/${book._id}`} className="btn btn-outline-info btn-sm rounded-pill">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Home;
