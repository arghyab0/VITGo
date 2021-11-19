//components
import { Row, Col, Container } from "react-bootstrap";
import RequestForm from "../components/RequestForm";
import StudentOutingHistory from "../components/StudentOutingHistory";

const Requests = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={6} className="mt-5 mb-3">
            <h3 className="d-flex justify-content-center mb-5">
              New outing request
            </h3>
            <RequestForm />
          </Col>
          <Col md={6} className="mt-5 mb-3">
            <h3 className="d-flex justify-content-center mb-4">
              Outing request history
            </h3>
            <StudentOutingHistory />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Requests;
