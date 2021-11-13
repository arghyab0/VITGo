//components
import { Container, Row, Col } from "react-bootstrap";
import ManagerCards from "../components/ManagerCards";

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
                  linkDest="/requests"
                  linkText="New request"
                />
              </Col>
              <Col md={6} className="mb-3">
                <ManagerCards
                  title="Blacklist"
                  linkDest="/requests"
                  linkText="View history"
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident quaerat vero dolores odio! Dolorum, omnis ipsum. Animi
                non architecto voluptatibus? Odio eum blanditiis facere aut
                officiis tenetur inventore repudiandae tempora?
              </p>
            </Row>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Manager;
