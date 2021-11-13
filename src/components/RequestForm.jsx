//components
import { Row, Col, Form, Button } from "react-bootstrap";

const RequestForm = () => {
  return (
    <>
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column xs={3}>
            Reg. no.
          </Form.Label>
          <Col xs={9}>
            <Form.Control type="text" placeholder="Registration number" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column xs={3}>
            Name
          </Form.Label>
          <Col xs={9}>
            <Form.Control type="text" placeholder="Name" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column xs={3}>
            Email
          </Form.Label>
          <Col xs={9}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column xs={3}>
            Contact no.
          </Form.Label>
          <Col xs={9}>
            <Form.Control type="text" placeholder="Personal contact number" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column xs={3}>
            Parent's contact no.
          </Form.Label>
          <Col xs={9}>
            <Form.Control type="text" placeholder="Parent's contact number" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column xs={3}>
            Time (hrs.)
          </Form.Label>
          <Col xs={9}>
            <Form.Control type="number" placeholder="Hours of leave" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-4">
          <Form.Label column xs={4}>
            Purpose of outing
          </Form.Label>
          <Col xs={8}>
            <Form.Control as="textarea" rows={3} />
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
