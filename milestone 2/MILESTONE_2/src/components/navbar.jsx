import React from 'react'
import {Navbar,Nav,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function navbar() {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">S Technologies</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link as={Link} to={"/Home"}>Home</Nav.Link>
      <Nav.Link as={Link} to="/Attendence">Attendence</Nav.Link>
      <Nav.Link as={Link} to="/Leave">Leave</Nav.Link>
    </Nav>
    <Button variant="outline-light" as={Link} to="/">Logout</Button>
    </Navbar>
    </div>
  )
}
