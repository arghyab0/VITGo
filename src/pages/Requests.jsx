//components
import { Row, Col, Container } from "react-bootstrap";
import RequestForm from "../components/RequestForm";

const Requests = () => {
  return (
    <>
      <Row>
        <Col md={6} className="mt-5" style={{ border: "1px black solid" }}>
          <Container>
            <h3 className="d-flex justify-content-center mb-4">
              New outing request
            </h3>
            <RequestForm />
          </Container>
        </Col>
        <Col md={6} className="mt-5" style={{ border: "1px black solid" }}>
          <Container>
            <h3 className="d-flex justify-content-center mb-4">
              Outing request history
            </h3>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default Requests;
