//components
import { Row, Col, Form, Button } from "react-bootstrap";

const LoginForm = () => {
  return (
    <>
      <Row className="mt-5 mb-5">
        <Col style={{ display: "flex", justifyContent: "center" }}>
          <h1>Login</h1>
        </Col>
      </Row>
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <Form>
            <Form.Group as={Row} className="mb-4">
              <Form.Label column sm="4">
                Username
              </Form.Label>
              <Col sm="8">
                <Form.Control type="text" placeholder="Username" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-4">
              <Form.Label column sm="4">
                Password
              </Form.Label>
              <Col sm="8">
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col style={{ textAlign: "center" }}>
                <Button type="submit">Login</Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
        <Col md={4}></Col>
      </Row>
    </>
  );
};

export default LoginForm;
