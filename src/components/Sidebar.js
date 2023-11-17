import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
// import {HiColorSwatch } from "react-icons/fa"
function Sidebar() {
  let navigate = useNavigate();

  return (
    //  <--Navigation details-->
    <div className="navigation container-fluid">
      <Navbar bg="#0E1630" expand="lg">
        <Container fluid>
          <div className="icon">
            <FaShoppingCart />
            {/* <HiColorSwatch /> */}
          </div>
          <Navbar.Brand style={{ color: "white", fontSize: "2em" }}>
            <span className="green">C</span>olors
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "10em", gap: "3em", color: "red" }}
              navbarScroll
            >
              <Nav.Link href="/monday" style={{ color: "#808DAD" }}>
                Mon
              </Nav.Link>

              <Nav.Link href="/tuesday" style={{ color: "#808DAD" }}>
                Tue
              </Nav.Link>

              <Nav.Link href="/wednesday" style={{ color: "#808DAD" }}>
                Wed
              </Nav.Link>

              <Nav.Link href="/thursday" style={{ color: "#808DAD" }}>
                Thu
              </Nav.Link>

              <Nav.Link href="/friday" style={{ color: "#808DAD" }}>
                Fri
              </Nav.Link>

              <Nav.Link href="/saturday" style={{ color: "#808DAD" }}>
                Sat
              </Nav.Link>

              <Nav.Link href="/sunday" style={{ color: "#808DAD" }}>
                Sun
              </Nav.Link>

              <Button variant="danger" onClick={() => navigate("*")}>
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Sidebar;
