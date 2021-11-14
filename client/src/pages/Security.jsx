//components
import { Container, Row, Col } from "react-bootstrap";
import CheckinForm from "../components/CheckinForm";

const Security = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={1}></Col>
          <Col md={10}>
            <Row className="mt-5">
              <h1>Hi, securityName</h1>
            </Row>
            <Row className="mt-5">
              <CheckinForm />
            </Row>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Security;
