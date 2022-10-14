import React    from "react";
import template from "./Navbar.jsx";

class Navbar extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Navbar;
