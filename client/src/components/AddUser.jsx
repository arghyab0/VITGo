//components
import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import ConfirmationModal from "./ConfirmationModal";

const AddUser = () => {
  const [userID, setUserID] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const [modalShow, setModalShow] = useState(false);

  // console.log(userID, name, email, password, type);

  const addUser = (e) => {
    e.preventDefault();

    // setModalShow(true);
  };

  return (
    <>
      <Form onSubmit={addUser}>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option>Student</option>
              <option>Hostel manager</option>
              <option>Security personnel</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col className="d-flex justify-content-center">
            <Button type="submit">Add user</Button>
          </Col>
        </Form.Group>
      </Form>
      <ConfirmationModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default AddUser;
