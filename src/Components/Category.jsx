import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import StoreContext from "../Context/StoreContext";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { FaHome } from "react-icons/fa";
import { addToCart } from "./AddToCart";
import { ToastContainer } from "react-toastify";
import Loader from "./Loader";

const Category = () => {
  const { products, loading } = useContext(StoreContext);

  const router = useParams();
  const category = router.ID;

  const filter = products.filter(
    (items) => items.categorySlug.toLowerCase() === category
  );
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Container
        fluid
        className="py-4 px-0"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <Container className="">
          <Link
            style={{
              fontSize: "1rem",
              textDecoration: "none",
              fontWeight: "bold",
              color: "#3399cc",
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>
              <FaHome />
            </span>{" "}
            <span className="px-1 pt-1">Home</span>
          </Link>
          {"/"}
          <span className="px-2" style={{ fontSize: "1rem" }}>
            Products
          </span>
        </Container>
      </Container>
      <Row fluid className="px-0 g-5 w-100 mx-auto ">
        <Col lg={4} md={12} sm={12} className="mx-0 mt-5">
          <Sidebar />
        </Col>
        <Col lg={8} md={12} sm={12} className="py-5">
          <div className="productContainer px-5">
            {filter.map((items) => {
              return (
                <Card
                  style={{
                    height: "350px",
                    gap: "2rem",
                    borderRadius: "0",
                    minWidth: "270px",
                  }}
                  className="d-flex flex-column justify-content-center align-items-center py-3 card"
                >
                  <Link to={`${items.id}`}>
                    <Card.Img
                      variant="top"
                      src={items.images[0].imageName}
                      height="150px"
                      width="150px"
                      style={{ objectFit: "cover", width: "150px" }}
                    />
                  </Link>

                  <Card.Body style={{ width: "100%" }}>
                    <Card.Title
                      className="text-center"
                      style={{ fontSize: ".9rem", fontWeight: "500" }}
                    >
                      {items.title}
                    </Card.Title>
                    <Card.Title
                      className="text-center mb-2"
                      style={{ fontSize: "1.1rem", fontWeight: "500" }}
                    >
                      <span>$</span>
                      <span>{items.unitPrice[0].sellingPrice}</span>
                    </Card.Title>
                    <div className="mt-auto">
                      <Button
                        className="w-100 add-cart-button"
                        style={{
                          backgroundColor: "#3399cc",
                          border: "none",
                          borderRadius: "0",
                        }}
                        onClick={(e) => {
                          addToCart(e, items.id, items.unitPrice[0].id);
                        }}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              );
            })}
            <ToastContainer />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Category;
