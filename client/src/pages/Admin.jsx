//components
import { Container, Row, Col } from "react-bootstrap";
import AddUser from "../components/AddUser";

const Admin = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={1}></Col>
          <Col md={10}>
            <Row className="mt-5">
              <h1>Hi, adminName</h1>
            </Row>
            <Row className="mt-5 d-flex justify-content-center">
              <Col md={6}>
                <h3 className="mb-4 d-flex justify-content-center">Add user</h3>
                <AddUser />
              </Col>
            </Row>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;
