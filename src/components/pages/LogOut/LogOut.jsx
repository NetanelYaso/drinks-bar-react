import "./LogOut.css";
import React from "react";
import { Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

function Logout({user,setUser}) {
    const Logout = () => {
        setUser("")
    }
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      {user.fullname}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item ><Link to="/Profile">Profile</Link></Dropdown.Item>
        <Dropdown.Item><Button onClick={Logout}>Logout</Button></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Logout;
