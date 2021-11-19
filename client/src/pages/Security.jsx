//components
import { Container, Row, Col } from "react-bootstrap";
import SecurityCheckinForm from "../components/SecurityCheckinForm";

const Security = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <Row className="mt-5">
              <h1>Hi, securityName</h1>
            </Row>
            <Row className="mt-5">
              <SecurityCheckinForm />
            </Row>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Security;
