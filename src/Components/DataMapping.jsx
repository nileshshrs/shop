import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loader from "./Loader";

const Datamapping = ({ products, loading }) => {
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Row className="mx-auto px-5">
        {products.map((items) => {
          return (
            <Col lg={4} md={6} sm={12} className="g-5 px-4" key={items.id}>
              <Card
                style={{ height: "350px", gap: "2rem", borderRadius: "0" }}
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
                    >
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
        <ToastContainer />
      </Row>
    </>
  );
};

export default Datamapping;
