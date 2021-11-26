//components
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import StudentOutings from "../components/StudentOutings";
import TotalRequestsCard from "../components/TotalRequestsCard";
import BlacklistStatusCard from "../components/BlacklistStatusCard";

//actions
import { fetchRequests } from "../redux/actions/requestsActions";

//stylesheet
import "./stlyes/student.css";

const Student = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const requests = useSelector((state) => state.requests);

  useEffect(() => {
    dispatch(fetchRequests());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Row>
          <Col md={1}></Col>
          <Col md={10}>
            <Row className="mt-5">
              <h1>Hi, {auth.displayName}</h1>
            </Row>

            <Row className="mt-5">
              {/* <h4>Current status: token generated - {requests[0].token}</h4> */}
            </Row>

            <Row className="mt-5">
              <Col md={4} className="mb-3">
                <TotalRequestsCard reqData={requests} />
              </Col>

              <Col md={4} className="mb-3">
                <StudentOutings
                  title="Request history"
                  linkDest="/requests"
                  linkText="View history"
                />
              </Col>

              <Col md={4} className="mb-3">
                <BlacklistStatusCard userData={auth} />
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

export default Student;
