//components
import { Container, Row, Col } from "react-bootstrap";
import ManagerCards from "../components/ManagerCards";
import OutingList from "../components/OutingList";

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
                <ManagerCards
                  title="Students checked-out"
                  linkDest="/students"
                  linkText="View checked-out students"
                />
              </Col>
              <Col md={6} className="mb-3">
                <ManagerCards
                  title="Blacklist"
                  linkDest="/students"
                  linkText="View blacklisted students"
                />
              </Col>
            </Row>
            <Row className="mt-5">
              <h3 className="mb-4">Outing requests</h3>
              <OutingList />
            </Row>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Manager;
