import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { FaPhoneAlt, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useLogout } from "../Context/useLogout";
import { useAuthContext } from "../Context/useAuthContext";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();

  const { logout } = useLogout();

  const { user } = useAuthContext();

  const [searchKey, setSearchKey] = useState("");

  const handleClicks = () => {
    navigate("/login");
    logout();
  };

  const searchProduct = (e) => {
    e.preventDefault();
    window.location = "/search/" + searchKey;
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
            {user ? (
              <div className="text-white" style={{ fontWeight: "500" }}>
                <Link
                  to="/profile"
                  style={{
                    paddingLeft: "1rem",
                    textDecoration: "none",
                    fontWeight: "600 ",
                    color: "white",
                  }}
                >
                  My Account
                </Link>
              </div>
            ) : (
              <div>
                <Link
                  style={{
                    paddingLeft: "1rem",
                    textDecoration: "none",
                    fontWeight: "600 ",
                    color: "white",
                  }}
                  to="/register"
                >
                  Create Account
                </Link>
              </div>
            )}
            <div>
              {user ? (
                <div className="mt-0">
                  <button
                    style={{
                      backgroundColor: "#fe9126",
                      border: "1px solid #fe9126",
                      borderRadius: "0",
                      color: "white",
                      fontWeight: "500",
                      padding: "5px 10px ",
                    }}
                    onClick={handleClicks}
                    className="logout-btn mt-0"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div>
                  <Link
                    style={{
                      paddingLeft: "1rem",
                      textDecoration: "none",
                      fontWeight: "600 ",
                      color: "white",
                    }}
                    to="/login"
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/cart"
              className="d-flex align-items-center justify-content-evenly"
              style={{
                fontSize: "20px",
                fontWeight: "500",
                color: "#fe9126",
                textDecoration: "none",
              }}
            >
              {user ? (
                <Button
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    position: "relative",
                    borderColor: "#fe9126",
                  }}
                  variant="outline"
                  className="rounded-circle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    fill="#fe9126"
                    className="cart"
                  >
                    <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                  </svg>
                </Button>
              ) : null}
            </Link>
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
          <form
            className="d-flex justify-content-center align-items-center w-100"
            onSubmit={searchProduct}
          >
            <input
              type="text"
              placeholder="Search Product..."
              onChange={(e) => setSearchKey(e.target.value)}
            />
            <Button type="submit" className="m-0 ms-2">
              <FaSearch />
            </Button>
          </form>
        </div>
      </Container>
      <Container fluid className="rQtWu">
        <ul className="d-flex w-100 justify-content-evenly align-items-center m-0 py-2 px-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">All Products</Link>
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
        </ul>
        <button className="hamburger-btn ms-auto" onClick={handleClick}>
          <div className={`hamburger-inner ${!open ? "" : "cross"}`}></div>
        </button>
      </Container>
    </nav>
  );
};

export default Navigation;
