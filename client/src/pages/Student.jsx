//components
import { Row, Col } from "react-bootstrap";
import StudentOutings from "../components/StudentOutings";

//stylesheet
import "./stlyes/student.css";

const Student = () => {
  return (
    <>
      <Row>
        <Col md={1}></Col>
        <Col md={10}>
          <Row className="mt-5">
            <h1>Hi, Arghya</h1>
          </Row>
          <Row className="mt-5">
            <h4>Current status: token generated - 2134</h4>
          </Row>
          <Row className="mt-5">
            <Col md={4} className="mb-3">
              <StudentOutings
                title="Total requests"
                linkDest="/requests"
                linkText="New request"
              />
            </Col>
            <Col md={4} className="mb-3">
              <StudentOutings
                title="Request history"
                linkDest="/requests"
                linkText="View history"
              />
            </Col>
            <Col md={4} className="mb-3">
              <StudentOutings title="Blacklist status" />
            </Col>
          </Row>
          <Row className="mt-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              quaerat vero dolores odio! Dolorum, omnis ipsum. Animi non
              architecto voluptatibus? Odio eum blanditiis facere aut officiis
              tenetur inventore repudiandae tempora?
            </p>
          </Row>
        </Col>
        <Col md={1}></Col>
      </Row>
    </>
  );
};

export default Student;
