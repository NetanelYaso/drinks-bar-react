import React    from "react";
import template from "./Store.jsx";

class Store extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Store;
