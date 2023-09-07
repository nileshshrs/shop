import React, { useState } from "react";
import { Row, Col, Button, Container, Navbar } from "react-bootstrap";
import { FaPhoneAlt, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav>
      <div className="oJmKs">
        <Container className="d-flex justify-content-between align-items-center py-3 w-100 pXwYq">
          <p className="m-0 w-100">
            SALE UP TO 70% OFF. USE CODE "SALE70%".{" "}
            <span>
              <Link to="">SHOP NOW</Link>
            </span>
          </p>
          <div className="d-flex justify-content-around align-items-center w-50 tIzVe">
            <div>
              <Link to="">Help</Link>
            </div>
            <div>
              <Link to="">Create Account</Link>
            </div>
            <div>
              <Link to="">Login</Link>
            </div>
          </div>
        </Container>
      </div>
      <Container className="d-flex justify-content-evenly align-items-center py-5 bGhLo">
        <div className="w-100 py-2 aUvRn">
          <p>
            <FaPhoneAlt /> Order online or call us : (+0123) 234 567
          </p>
        </div>
        <div className="w-100 py-2 hGdLb">
          <h1 className="m-0">SUPERMARKET</h1>
        </div>
        <div className="w-100 py-2 mDnZa">
          <form className="d-flex justify-content-center align-items-center w-100">
            <input type="text" placeholder="Search Product..." />
            <Button>
              <FaSearch />
            </Button>
          </form>
        </div>
      </Container>
      <Container
        fluid
        className="py-0 px-5 d-flex justify-content-center w-100 align-items-center rQtWu"
      >
        <ul className="d-flex w-100 justify-content-evenly align-items-center m-0 py-2 px-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">All Products</Link>
          </li>
          <li>
            <Link to="/fresh-vegetabless">Groceries</Link>
          </li>
          <li>
            <Link to="/dry-food">Packaged Food</Link>
          </li>
          <li>
            <Link to="/raw-honey">Honey</Link>
          </li>
          <li>
            <Link to="/frozen-products">Frozen Products</Link>
          </li>
          <li>
            <Link to="/dairy-products">Dairy Products</Link>
          </li>
          <li>
            <Link to="/non-veg-items">Meat</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <button className="hamburger-btn" onClick={handleClick}>
              <div className={`hamburger-inner ${!open ? "" : "cross"}`}></div>
            </button>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navigation;
