//components
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import StudentsOutCard from "../components/StudentsOutCard";
import BlacklistedCard from "../components/BlacklistedCard";
import ManagerOutingList from "../components/ManagerOutingList";

//actions
import { fetchRequests } from "../redux/actions/requestsActions";

const Manager = () => {
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
              <Col md={6} className="mb-3">
                <StudentsOutCard />
              </Col>

              <Col md={6} className="mb-3">
                <BlacklistedCard />
              </Col>
            </Row>

            <Row className="mt-5">
              <h3 className="mb-4">Outing requests</h3>
              <ManagerOutingList reqData={requests} />
            </Row>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Manager;
