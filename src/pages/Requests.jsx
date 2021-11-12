//components
import { Row, Col, Container } from "react-bootstrap";
import RequestForm from "../components/RequestForm";
import OutingHistory from "../components/OutingHistory";

const Requests = () => {
  return (
    <>
      <Row>
        <Col md={6} className="mt-5">
          <Container>
            <h3 className="d-flex justify-content-center mb-4">
              New outing request
            </h3>
            <RequestForm />
          </Container>
        </Col>
        <Col md={6} className="mt-5">
          <Container>
            <h3 className="d-flex justify-content-center mb-4">
              Outing request history
            </h3>
            <OutingHistory />
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default Requests;
