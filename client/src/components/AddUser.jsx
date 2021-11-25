//components
import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

//actions
import { register } from "../redux/actions/authActions";

const AddUser = () => {
  const dispatch = useDispatch();

  const [userID, setUserID] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  const resetFields = () => {
    setUserID("");
    setDisplayName("");
    setEmail("");
    setPassword("");
    setUserType("");
  };

  const handleAddUser = (e) => {
    e.preventDefault();

    dispatch(register({ userID, displayName, email, password, userType }));

    resetFields();
  };

  return (
    <>
      <Form onSubmit={handleAddUser}>
        <Form.Group as={Row} className="mb-5">
          <Form.Label column xs={4}>
            User ID
          </Form.Label>
          <Col xs={8}>
            <Form.Control
              type="text"
              placeholder="Student/staff ID"
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-5">
          <Form.Label column xs={4}>
            Display name
          </Form.Label>
          <Col xs={8}>
            <Form.Control
              type="text"
              placeholder="Display name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-5">
          <Form.Label column xs={4}>
            User email
          </Form.Label>
          <Col xs={8}>
            <Form.Control
              type="email"
              placeholder="User email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              placeholder="Default password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-5">
          <Form.Label column xs={4}>
            User type
          </Form.Label>
          <Col xs={8}>
            <Form.Select
              defaultValue="Choose"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option>Choose</option>
              <option value="STUDENT">Student</option>
              <option value="MANAGER">Hostel manager</option>
              <option value="SECURITY">Security personnel</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col className="d-flex justify-content-center">
            <Button type="submit">Add user</Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
};

export default AddUser;
