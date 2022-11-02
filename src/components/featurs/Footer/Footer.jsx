import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
          <span> About the company</span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
          ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
        </p>
        <div className="icons">
          <a href="#"><i class="ri-facebook-circle-fill"></i></a>
          <a href="#"><i class="ri-twitter-line"></i></a>
          <a href="https://www.linkedin.com/in/netanel-yaso-438150238/"><i class="ri-linkedin-box-fill"></i></a>
          <a href="https://mail.google.com/mail/u/0/#inbox"><i class="ri-google-fill"></i></a>
        </div>
      </div>
      <div className="footer-center col-md-4 col-sm-6">
        <div>
          <i className="fa fa-map-marker"></i>
          <p><span> Street name and number</span> City, Country</p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p> (+00) 0000 000 000</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p><a href="#">netanelyaso12@gmail.com</a></p>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        <h2> Yastetal<span> Original</span></h2>
        <p className="menu">
          <a href="/"> Home</a> |
          <a href="/AboutUs"> About Us</a> |
          <a href="/Products"> Products</a> |
          <a href="/"> Portfolio</a> |
          <a href="/"> News</a> |
          <a href="/"> Contact</a>
        </p>
        <p className="name"> Company Name &copy; 2016</p>
      </div>
    </footer>
  );
};

export default Footer;
