//components
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Identicon from "react-identicons";

//stylesheet
import "./styles/header.css";

const Header = () => {
  return (
    <>
      <Navbar id="navbar">
        <Container>
          <Navbar.Brand className="align-items-center">
            <Link to="/">
              <img alt="" src="/logo.svg" width="40" height="40" />
              &ensp;VitGo
            </Link>
          </Navbar.Brand>
          <Nav className="justify-content-end align-items-center">
            <Nav.Link>
              <Link to="/requests">Requests</Link>
            </Nav.Link>
            <Nav.Link>
              <Identicon string="random" size="40" id="navbar-avatar" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
