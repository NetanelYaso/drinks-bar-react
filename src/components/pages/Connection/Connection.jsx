import "./Connection.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Connection({ user,setUser }) {
  const [show, setShow] = useState(false);
  const [userLogin, setUserLogin] = useState({img:"",fullname:"",email:"",paswword:""});

  const handelChange = (e) => {
    setUserLogin({...userLogin,[e.target.name]:e.target.value});
    console.log(userLogin)
  };

  const saveUserName = () => {
    setUser(userLogin)
  }

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="passwordinput">
              <Form.Label>Add Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add Your Image Profile"
                autoFocus
                name="img"
                onChange={(e) => handelChange(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="fullnameinput">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Full Name"
                autoFocus
                name="fullname"
                onChange={(e) => handelChange(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                name="email"
                onChange={(e) => handelChange(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="passwordinput">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Password"
                autoFocus
                name="password"
                onChange={(e) => handelChange(e)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveUserName}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Connection;