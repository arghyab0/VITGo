//components
import { Row, Col, Form, Button } from "react-bootstrap";

const LoginForm = () => {
  return (
    <>
      <Form>
        <Form.Group as={Row} className="mb-4">
          <Form.Label column xs={4}>
            User ID
          </Form.Label>
          <Col xs={8}>
            <Form.Control type="text" placeholder="User ID" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-5">
          <Form.Label column xs={4}>
            Password
          </Form.Label>
          <Col xs={8}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col className="d-flex justify-content-center">
            <Button type="submit">Login</Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
};

export default LoginForm;
