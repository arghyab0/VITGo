//components
import { Row, Col, Container } from "react-bootstrap";
import RequestForm from "../components/RequestForm";
import OutingHistory from "../components/OutingHistory";

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
            <OutingHistory />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Requests;
