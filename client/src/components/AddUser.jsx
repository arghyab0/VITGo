//components
import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import ConfirmationModal from "./ConfirmationModal";

const AddUser = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Form>
        <Form.Group as={Row} className="mb-5">
          <Form.Label column xs={4}>
            User ID
          </Form.Label>
          <Col xs={8}>
            <Form.Control type="text" placeholder="Student/staff ID" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-5">
          <Form.Label column xs={4}>
            User email
          </Form.Label>
          <Col xs={8}>
            <Form.Control type="email" placeholder="User email" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-5">
          <Form.Label column xs={4}>
            Password
          </Form.Label>
          <Col xs={8}>
            <Form.Control type="password" placeholder="Deafult password" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-5">
          <Form.Label column xs={4}>
            User type
          </Form.Label>
          <Col xs={8}>
            <Form.Select defaultValue="Choose">
              <option>Student</option>
              <option>Hostel manager</option>
              <option>Security personnel</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col className="d-flex justify-content-center">
            <Button type="submit" onClick={() => setModalShow(true)}>
              Add user
            </Button>
          </Col>
        </Form.Group>
      </Form>
      <ConfirmationModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default AddUser;
