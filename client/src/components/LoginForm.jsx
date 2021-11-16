//components
import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";

const LoginForm = () => {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/auth/login", {
        userID,
        password,
      });
      console.log(res.data);
      localStorage.setItem("jwttoken", res.data.jwttoken);
      window.location.href = "/";
    } catch (err) {
      console.log(err.response.data);
    }
    // setModalShow(true);
  };

  return (
    <>
      <Form onSubmit={handleLogin}>
        <Form.Group as={Row} className="mb-4">
          <Form.Label column xs={4}>
            User ID
          </Form.Label>
          <Col xs={8}>
            <Form.Control
              type="text"
              placeholder="User ID"
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-5">
          <Form.Label column xs={4}>
            Password
          </Form.Label>
          <Col xs={8}>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
