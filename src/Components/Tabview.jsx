import React from "react";
import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Tabview = () => {
  return (
    <Container
      fluid
      style={{ border: "1px solid #ced4da" }}
      className="px-0 mt-5"
    >
      <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="home" title="Advertised Offers" className="tabview px-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          quasi animi totam impedit cum eius maiores, obcaecati soluta
          praesentium quia eligendi libero sunt, adipisci officiis magnam illum
          molestias tempora cupiditate iste architecto neque, magni repellat
          laudantium? Recusandae reprehenderit non aut aliquid eius ratione
          quaerat eum perferendis est neque! Quos, id.
        </Tab>
        <Tab eventKey="profile" title="Today Offers" className="tabview px-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          quos esse, voluptates magni soluta eius repudiandae magnam, incidunt
          cum, non sequi quas. Commodi inventore praesentium facere accusamus,
          aperiam labore autem aliquam doloremque impedit esse quo, fugit non
          neque veritatis similique dicta id laudantium magnam illo! Non
          asperiores magnam temporibus fugit.
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Tabview;