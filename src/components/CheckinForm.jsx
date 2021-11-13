//components
import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import ConfirmationModal from "../components/ConfirmationModal";

const CheckinForm = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Form>
        <Form.Group as={Row} className="mb-5">
          <Form.Label column xs={4}>
            Enter token
          </Form.Label>
          <Col xs={8}>
            <Form.Control type="text" placeholder="Token" />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col className="d-flex justify-content-center">
            <Button type="submit" onClick={() => setModalShow(true)}>
              Submit token
            </Button>
          </Col>
        </Form.Group>
      </Form>
      <ConfirmationModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default CheckinForm;
