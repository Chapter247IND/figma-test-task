


import React from "react";
import { Navbar } from "react-bootstrap";
import brandlogo from "../../assets/img/logo.svg"
const Header = () => {
  return (
    <Navbar className="navbar-header">
      <Navbar.Brand href="/"><img src= {brandlogo} alt="" /> </Navbar.Brand>
    </Navbar>
    
  );
};
export default Header;

