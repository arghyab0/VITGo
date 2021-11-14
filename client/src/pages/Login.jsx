//components
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col md={1}></Col>
          <Col md={10}>
            <Row className="mt-5 ">
              <h1 className="d-flex justify-content-center">Login</h1>
            </Row>
            <Row className="mt-5 d-flex justify-content-center">
              <Col md={6}>
                <LoginForm />
              </Col>
            </Row>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
