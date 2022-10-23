import "./Header.css";
import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { Nav, Container, Navbar as NavbarBs, Button } from 'react-bootstrap';
import Logout from "../../pages/LogOut/LogOut";
import Connection from "../../pages/Connection/Connection";
import UserContext from "../../../contexts/UserContext";

function Header() {
  const { user, setUser } = useContext(UserContext)
  const useraName = localStorage.getItem('userName');
  const clearUser = () => {
    return localStorage.clear('uesrName')
  }
  return (
    <div className="header mb-1">
      <NavbarBs bg="light" expand="lg">
        <Container>
          <NavbarBs.Brand href="/"><img width="60px" src="images\Logo 500x500 px (2).png" alt="" /></NavbarBs.Brand>
          <NavbarBs.Toggle aria-controls="basic-navbarBs-nav" />
          <NavbarBs.Collapse id="basic-navbarBs-nav">
            <Nav className="me-auto">
              <Nav.Link className="" href="/">Home</Nav.Link>
              <Nav.Link className="" href="/Profile">Profile </Nav.Link>
              <Nav.Link className="" href="/Products">Products</Nav.Link>
              <Nav.Link className="" href="/AboutUs">AboutUs</Nav.Link>
              <Nav.Link className="" href="/Team">Team</Nav.Link>
              <Nav.Link className="" href="/Contact">Contact</Nav.Link>

              {/* <Nav.Link className="text-danger right-auto" href="/Registration"><Button className="bg-success">Log-In</Button></Nav.Link> */}
            </Nav>
            <div>
              {user ? <Logout user={user} setUser={setUser} /> : <Connection user={user} setUser={setUser} />}
            </div>
          </NavbarBs.Collapse>
        </Container>
      </NavbarBs>


    </div>
  );
};

export default Header;
