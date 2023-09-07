import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../Assets/images/111.jpg";
import img2 from "../Assets/images/p2.jpg";
import img3 from "../Assets/images/p3.jpg";
import img4 from "../Assets/images/p4.jpg";


const Advertisement = () => {
  return (
    <Container>
      <Row className="">
        <Col className="g-1" lg={6}>
          <Row>
            <Col md={12} className="mt-1 img-wrapper g-4">
              <img
                src={img2}
                alt="/"
                className="img-fluid img"
                style={{ width: "100%", height: "" }}
              />
            </Col>
            <Col sm={6} md={6} lg={6} className="mt-4 pt-2 img-wrapper ">
              <img
                src={img3}
                alt="/"
                className="img-fluid img"
                style={{ width: "100%", height: "" }}
              />
            </Col>
            <Col sm={6} md={6} lg={6} className="mt-4 pt-2 img-wrapper">
              <img
                src={img4}
                alt="/"
                className="img-fluid img"
                style={{ width: "100%", height: "" }}
              />
            </Col>
          </Row>
        </Col>
        <Col md={12} lg={6} className="g-2  img-wrapper">
          <img
            src={img1}
            alt="/"
            className="img-fluid img"
            style={{ width: "100%", height: "" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Advertisement;
