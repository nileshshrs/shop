import React, { useContext, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Datamapping from "../Components/Datamapping";
import { Col, Container, Row } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import StoreContext from "../Context/StoreContext";
import Pagination from "../Components/Pagination";

const Products = () => {
  const { products, loading } = useContext(StoreContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(9);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
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
          <select
            className="form-select ms-auto"
            id="floatingSelect"
            aria-label="Floating label select example"
            style={{ width: "300px", borderRadius: "0" }}
            onChange={(e) => {
              const selectedProducts = e.target.value;
              setProductPerPage(selectedProducts);
            }}
          >
            <option value="9" defaultValue={9}>
              items on page: 9
            </option>
            <option value="32">items on page: 32</option>
            <option value="64">items on page: 64</option>
            <option value="118">Display all items</option>
          </select>
          <Datamapping products={currentProduct} loading={loading} />
        </Col>
      </Row>
      <Pagination
        productPerPage={productPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </>
  );
};

export default Products;
