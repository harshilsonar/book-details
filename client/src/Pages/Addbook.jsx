import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../App.css'

const Addbook = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    price: "",
    description: "",
    ISBM: "",
    img: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/book/addbook", form);
      toast.success(res.data.message || "Book added successfully!", {
        position: "top-right",
      });
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Something went wrong while adding the book.",
        { position: "top-right" }
      );
    }
  };

  return (
    <div className="container py-5 fade-in-form">
  <ToastContainer />
  <div className="form-card mx-auto p-4 shadow-sm">
    <h2 className="text-center fw-bold mb-4 form-title">📘 Add New Book</h2>
    <form onSubmit={handleSubmit} className="row g-3">
      {[
        { name: "title", label: "Title", type: "text", placeholder: "E.g., Atomic Habits" },
        { name: "author", label: "Author", type: "text", placeholder: "E.g., James Clear" },
        { name: "price", label: "Price (₹)", type: "number", placeholder: "E.g., 499" },
        { name: "ISBM", label: "ISBM", type: "number", placeholder: "13-digit code" },
      ].map((field) => (
        <div className="col-12" key={field.name}>
          <label className="form-label fw-semibold">{field.label}</label>
          <input
            type={field.type}
            className="form-control form-input"
            name={field.name}
            value={form[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder}
            required
          />
        </div>
      ))}

      <div className="col-12">
        <label className="form-label fw-semibold">Description</label>
        <textarea
          className="form-control form-input"
          rows="3"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Brief description about the book"
          required
        />
      </div>

      <div className="col-12">
        <label className="form-label fw-semibold">Image URL (optional)</label>
        <input
          type="text"
          className="form-control form-input"
          name="img"
          value={form.img}
          onChange={handleChange}
          placeholder="Paste book cover URL"
        />
      </div>

      <div className="col-12 text-end">
        <button type="submit" className="btn submit-btn rounded-pill px-4 py-2">
          + Add Book
        </button>
      </div>
    </form>
  </div>
</div>

  );
};

export default Addbook;
