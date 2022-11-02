import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import {NavDropdown,Nav,Container,Navbar as NavbarBs} from 'react-bootstrap';

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box mb-3">
        <span className="my_shop" onClick={() => setShow(true)}>
         Store
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
          <i className="ri-shopping-cart-2-line bg-dark rounded-circle"></i>          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


// import "./Navbar.css";
// import { Link } from "react-router-dom";

// function Navbar({ setShow, size}) {
//   return (
//     // <div className="navbar d-flex justify-content-evenly align-items-center">
//     //   <img id="logo_img" src="images\Logo 500x500 px (2).png" alt="" />
//     //     <Link to="/"><a>HOME</a></Link>
//     //     <Link to="/Profile"><a>PROFILE</a></Link>
//     //     <Link to="/AboutUs"><a>ABOUT US</a></Link>
//     //     <Link to="/Connect"><a>CONTACT</a></Link>
//     //   <Link to="/Registration"> <button type="button" className="btn btn-dark">Login</button></Link>
//     // </div >
//   )
// };

// export default Navbar;
