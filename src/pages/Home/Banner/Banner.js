import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Banner.css'

const Banner = () => {
  return (
    <Container>
      <Row className="shadow">
        <Col sm={12} md={6} className="d-flex align-items-center">
          <div className="text-start p-5">
            <h6 className="text-success">
              Welcome to our Stationary Warehouse
            </h6>
            <h1>Shop Online for Fresh Stationary Product</h1>
            <p className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              quod consequatur repellat, dignissimos blanditiis nesciunt!
            </p>
            <a href="#stock" className="btn btn-success me-2">
              <small>SHOP NOW</small>
            </a>
            <Link to="/blogs" className="btn btn-info">
              <small>READ MORE</small>
            </Link>
          </div>
        </Col>
        <Col sm={12} md={6} className="p-0">
          <img
            className="h-100 w-100"
            src="https://www.saf-spa.com/wp-content/uploads/2019/10/gallery_lavorazioni_magazzino_006.jpg"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
