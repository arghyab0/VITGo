//components
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import StudentsOutCard from "../components/StudentsOutCard";
import BlacklistedCard from "../components/BlacklistedCard";
import ManagerOutingList from "../components/ManagerOutingList";

//actions
import { fetchRequests } from "../redux/actions/requestsActions";
import { fetchUsers } from "../redux/actions/usersActions";

const Manager = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const requests = useSelector((state) => state.requests);
  const users = useSelector((state) => state.users);

  const [studentsOut, setStudentsOut] = useState(0);
  const [studentsBlacklisted, setStudentsBlacklisted] = useState(0);

  useEffect(() => {
    dispatch(fetchRequests());
    dispatch(fetchUsers());

    const outArray = users.filter((item) => item.userStatus === "OUT");
    setStudentsOut(outArray.length);

    const blacklistArray = users.filter(
      (item) => item.userStatus === "BLACKLIST"
    );
    setStudentsBlacklisted(blacklistArray.length);
  }, [dispatch, users]);

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
                <StudentsOutCard number={studentsOut} />
              </Col>

              <Col md={6} className="mb-3">
                <BlacklistedCard number={studentsBlacklisted} />
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
