import "./Header.css";
import React from "react";
import Navbar from "../Navbar/Navbar";
import { NavDropdown, Nav, Container, Navbar as NavbarBs, Button } from 'react-bootstrap';

function Header() {
  return (
    <div className="header ">
      <NavbarBs bg="light" expand="lg">
        <Container>
          <NavbarBs.Brand href="/"><img width="60px" src="images\Logo 500x500 px (2).png" alt="" /></NavbarBs.Brand>
          <NavbarBs.Toggle aria-controls="basic-navbarBs-nav" />
          <NavbarBs.Collapse id="basic-navbarBs-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-danger" href="/">Home</Nav.Link>
              <Nav.Link className="text-danger" href="/Profile">Profile</Nav.Link>
              <Nav.Link className="text-danger" href="/Products">Products</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="/AboutUs">
                  AboutUs
                </NavDropdown.Item>
                <NavDropdown.Item href="/Contact">Contact</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <Nav.Link className="text-danger" href="/Registration"><Button className="bg-success">Registration</Button></Nav.Link>
            </Nav>
          </NavbarBs.Collapse>
        </Container>
      </NavbarBs>
      {/* <Navbar />   */}
    </div>
  );
};

export default Header;
