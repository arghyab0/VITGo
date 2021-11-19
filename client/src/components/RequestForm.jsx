//components
import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";

const RequestForm = () => {
  const [contactNo, setContactNo] = useState("");
  const [parentsContactNo, setParentsContactNo] = useState("");
  const [hours, setHours] = useState("");
  const [purpose, setPurpose] = useState("");

  const resetFields = () => {
    setContactNo("");
    setParentsContactNo("");
    setHours("");
    setPurpose("");
  };

  const addRequest = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/request/", {
        // issuedBy: (pass user id from store here)
        issuedBy: "6193b68bb2b336e4d2335211",
        contactNo,
      });
      console.log(res.data);
      resetFields();
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <>
      <Form onSubmit={addRequest}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column xs={3}>
            Contact no.
          </Form.Label>
          <Col xs={9}>
            <Form.Control
              type="text"
              placeholder="Personal contact number"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column xs={3}>
            Parent's contact no.
          </Form.Label>
          <Col xs={9}>
            <Form.Control
              type="text"
              placeholder="Parent's contact number"
              value={parentsContactNo}
              onChange={(e) => setParentsContactNo(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column xs={3}>
            Time (hrs.)
          </Form.Label>
          <Col xs={9}>
            <Form.Control
              type="number"
              placeholder="Hours of leave"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-4">
          <Form.Label column xs={4}>
            Purpose of outing
          </Form.Label>
          <Col xs={8}>
            <Form.Control
              as="textarea"
              rows={3}
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col className="d-flex justify-content-center">
            <Button type="submit">Submit request</Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
};

export default RequestForm;
