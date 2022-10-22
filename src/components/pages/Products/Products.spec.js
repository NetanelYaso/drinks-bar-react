import React    from "react";
import template from "./Products.spec.js";

class Products extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Products;
