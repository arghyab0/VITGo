//components
import { Container, Row, Col } from "react-bootstrap";
import StudentsOutCard from "../components/StudentsOutCard";
import BlacklistedCard from "../components/BlacklistedCard";
import ManagerOutingList from "../components/ManagerOutingList";

const Manager = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={1}></Col>
          <Col md={10}>
            <Row className="mt-5">
              <h1>Hi, managerName</h1>
            </Row>

            <Row className="mt-5">
              <Col md={6} className="mb-3">
                <StudentsOutCard />
              </Col>

              <Col md={6} className="mb-3">
                <BlacklistedCard />
              </Col>
            </Row>

            <Row className="mt-5">
              <h3 className="mb-4">Outing requests</h3>
              <ManagerOutingList />
            </Row>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Manager;
