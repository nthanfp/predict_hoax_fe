import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInfoCircle, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
      <div className="container">
        <Navbar.Brand as={Link} to="/">
          Prediksi Hoaks
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              <FontAwesomeIcon icon={faHome} className="mr-1" /> Beranda
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              <FontAwesomeIcon icon={faInfoCircle} className="mr-1" /> Tentang Kami
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              <FontAwesomeIcon icon={faEnvelope} className="mr-1" /> Kontak
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default MyNavbar;
