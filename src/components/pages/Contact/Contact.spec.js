import React    from "react";
import template from "./Contact.spec.js";

class Contact extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Contact;
