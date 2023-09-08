import carousel from "../Assets/images/11.jpg";
import carousel2 from "../Assets/images/22.jpg";
import carousel3 from "../Assets/images/44.jpg";
import React from "react";
import { Carousel } from "react-bootstrap";

const Carousel1 = () => {
  return (
    <Carousel
      fade
      indicators={false}
      controls={false}
      className="mb-5 w-100 carousel-1"
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel2}
          alt="First slide"
          style={{ height: "500px", objectFit: "cover" }}
        />
        <Carousel.Caption style={{ marginBottom: "30px" }}>
          <h3
            style={{
              fontWeight: "500",
              letterSpacing: "1.5px",
              lineHeight: "1.5",
              fontWeight: "bold",
              fontSize: "clamp(18px, 5vw, var(22px))",
              Width: "100%",
            }}
          >
            WHOLE SPICES PRODUCTS ARE <br />
            NOW ON LINE WITH US
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel}
          alt="Second slide"
          style={{ height: "500px", objectFit: "cover" }}
        />

        <Carousel.Caption style={{ marginBottom: "30px" }}>
          <h3
            style={{
              fontWeight: "500",
              letterSpacing: "1.5px",
              lineHeight: "1.5",
              fontWeight: "bold",
              fontSize: "clamp(18px, 5vw, var(22px))",
              Width: "100%",
            }}
          >
            BUY RICE PRODUCTS ARE NOW <br /> ON LINE WITH US
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel3}
          alt="Third slide"
          style={{ height: "500px", objectFit: "cover" }}
        />

        <Carousel.Caption style={{ marginBottom: "20px" }}>
          <h3
            style={{
              fontWeight: "500",
              letterSpacing: "1.5px",
              lineHeight: "1.5",
              fontWeight: "bold",
              fontSize: "clamp(18px, 5vw, var(32px))",
              Width: "100%",
            }}
          >
            WHOLE SPICES PRODUCTS ARE <br />
            NOW ON LINE WITH US
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousel1;
