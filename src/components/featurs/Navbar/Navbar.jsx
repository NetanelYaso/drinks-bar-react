import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container red topBotomBordersOut">
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
  <img id="logo_img" src="images\Logo 500x500 px (2).png" alt="" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/"><a>HOME</a> </Link>
        </li>
        <li className="nav-item">
        <Link to="/AboutUs"><a>ABOUT US</a></Link>
        </li>
        <li className="nav-item">
        <Link to="/Profile"><a>PROFILE</a></Link>
        </li>
        <li className="nav-item">
        <Link to="/Connect"><a>CONTACT</a></Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
        <Link to="/Registration"> <button type="button" className="btn btn-dark">Login</button></Link>
      </form>
    </div>
  </div>
</nav>
      {/* <img id="logo_img" src="images\Logo 500x500 px (2).png" alt="" /> */}
      {/* <Link to="/"><a>HOME</a> </Link> */}
      {/* <Link to="/AboutUs"><a>ABOUT US</a></Link> */}
      {/* <Link to="/Profile"><a>PROFILE</a></Link> */}
      {/* <Link to="/Connect"><a>CONTACT</a></Link> */}
      {/* <Link to="/Registration"> <button type="button" className="btn btn-dark">Login</button></Link> */}
    </div >
  )
};

export default Navbar;
