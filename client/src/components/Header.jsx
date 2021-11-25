//components
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Identicon from "react-identicons";

//actions
import { logout } from "../redux/actions/authActions";

//stylesheet
import "./styles/header.css";

const Header = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    history.push("/login");
  };

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
            {auth.userType === "Student" && (
              <Nav.Link>
                <Link to="/requests">Requests</Link>
              </Nav.Link>
            )}

            {auth.userType !== "Student" && (
              <Nav.Link>
                <Link to="/students">Students</Link>
              </Nav.Link>
            )}

            {auth._id && (
              <Nav.Link>
                <div onClick={() => handleLogout()}>Logout</div>
              </Nav.Link>
            )}

            <Nav.Link>
              <Identicon string={auth.userID} size="40" id="navbar-avatar" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
