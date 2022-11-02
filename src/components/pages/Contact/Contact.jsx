import "./Contact.css";
import React from "react";
import { Button, Form } from "react-bootstrap"
function Contact() {
  return (
    <div className="home bg-dark d-flex justify-content-center align-items-center flex-column">
      <div className=" w-75 bg-light d-flex justify-content-center align-items-center flex-column">
        <h1 className="d-flex justify-content-center">Get In Touch</h1>
        <div className="d-flex justify-content-center">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Full Name" />
              <Form.Text className="text-muted">
                We'll never share your Name with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button  variant="success" type="submit">
            <a className="text-white text-decoration-none" href="mailto:netanelyaso12@gmail.com">Submit</a>
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
