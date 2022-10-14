import React    from "react";
import template from "./Home.spec.js";

class Home extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Home;
