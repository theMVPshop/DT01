import React from "react";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"


const NavCard = () => {
  return (
    <div>
      <Card style={{ width: "36rem", height: "20rem" }} className="bg-dark text-white">
          <Card.Body>
          <Card.Title>Beyond Bootcamp</Card.Title>
          <Card.Text>nav stuff nav stuff</Card.Text>
          <div className="main-nav">
          <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">About</Nav.Link>
      <Nav.Link href="#features">Tutorials</Nav.Link>
      <Nav.Link href="#pricing">Social Links</Nav.Link>
    </Nav>
  </Navbar>
          </div>
          </Card.Body>
      </Card>
      </div>
  );
}

export default NavCard;
