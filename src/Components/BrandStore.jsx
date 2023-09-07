import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const BrandStore = () => {
  const numOfItems = 18;
  const loremItems = Array.from({ length: numOfItems }, (_, index) => (
    <div
      key={index}
      style={{ backgroundColor: "white" }}
      className="p-3 brand-link"
    >
      <Link
        style={{
          color: "#3399cc",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}
      >
        Lorem
      </Link>
    </div>
  ));

  return (
    <Container
      fluid
      className="px-0 py-5 mt-5"
      style={{ backgroundColor: "#EED3b6" }}
    >
      <h3
        className="text-center pt-2 pb-5 mb-5"
        style={{ fontWeight: "500", fontSize: "2.8rem" }}
      >
        BRAND STORE
      </h3>
      <Container className="brandStore text-center">{loremItems}</Container>
    </Container>
  );
};

export default BrandStore;
