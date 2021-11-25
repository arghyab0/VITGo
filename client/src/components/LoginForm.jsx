//components
import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//actions
import { login } from "../redux/actions/authActions";

const LoginForm = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ userID, password }));
  };

  if (auth._id) return <Redirect to="/" />; //if user already exists, redirect to home

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
