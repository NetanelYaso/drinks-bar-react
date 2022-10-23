import React    from "react";
import template from "./Team.spec.js";

class Team extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Team;
