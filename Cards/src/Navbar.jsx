import React from "react";
import { FaPhoneAlt, FaSignInAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const TopNavbar = () => {
  return (
    <>
    <div className="top-navbar">
      <div className="left-info">
        <FaPhoneAlt className="phone-icon" />
        <span className="phone-text">Call Us: (+91) 990-782-2420</span>
      </div>
      <div className="right-login">
        <button className="login-btn">
          <FaSignInAlt style={{ marginRight: "5px" }} />
          LOGIN/REGISTER
        </button>
      </div>
    </div>
    <div className="header">
      {/* Logo */}
      <div className="logo">
        <img src="/logo.png" alt="Gaowale" />
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <select className="category-select">
          <option>Categories</option>
          <option>Fruits</option>
          <option>Herbs</option>
          <option>Dairy</option>
        </select>
        <input
          type="text"
          className="search-input"
          placeholder="Search here..."
        />
        <button className="search-button">
          <FaSearch />
        </button>
      </div>

      {/* Navigation */}
      <div className="nav-links">
        <a href="#" className="nav-link active">HOME</a>
        <a href="#" className="nav-link">ABOUT</a>
        <a href="#" className="nav-link">CONTACT</a>
      </div>
    </div>
    </>
  );
};

export default TopNavbar;
