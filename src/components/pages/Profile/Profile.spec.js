import React    from "react";
import template from "./Profile.spec.js";

class Profile extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Profile;
