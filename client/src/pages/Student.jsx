//components
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import NewRequestCard from "../components/NewRequestCard";
import HistoryCard from "../components/HistoryCard";
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
              <h4>Current status: {auth.userStatus}</h4>
            </Row>

            <Row className="mt-5">
              <Col md={4} className="mb-3">
                <NewRequestCard ustatus={auth.userStatus} />
              </Col>

              <Col md={4} className="mb-3">
                <HistoryCard reqNo={requests.length} />
              </Col>

              <Col md={4} className="mb-3">
                <BlacklistStatusCard ustatus={auth.userStatus} />
              </Col>
            </Row>

            <Row className="mt-5">
              <h4>Most recent outing:</h4>
              {requests.length > 0 ? (
                <Row>
                  <Col md={1}></Col>
                  <Col md={10}>
                    <Row className="mt-3">
                      <Col md={4} className="mb-3">
                        Token: &nbsp; {requests[0].token}
                      </Col>
                      <Col md={8} className="mb-3">
                        Outing request status: &nbsp;{" "}
                        {requests[0].requestStatus}
                      </Col>
                    </Row>

                    <Row>
                      <Col md={4} className="mb-3">
                        Hours: &nbsp; {requests[0].hours}
                      </Col>
                      <Col md={8} className="mb-3">
                        Purpose: &nbsp; {requests[0].purpose}
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12} className="mb-3">
                        Outing request raised at: &nbsp;{" "}
                        {new Date(requests[0].createdAt).toLocaleString()}
                      </Col>

                      {requests[0]?.managerAt && (
                        <Col md={12} className="mb-3">
                          Request approved/rejected by manager at: &nbsp;{" "}
                          {new Date(requests[0].managerAt).toLocaleString()}
                        </Col>
                      )}

                      {requests[0]?.checkoutAt && (
                        <Col md={12} className="mb-3">
                          Student checked-out of campus at: &nbsp;{" "}
                          {new Date(requests[0].checkoutAt).toLocaleString()}
                        </Col>
                      )}

                      {requests[0]?.checkinAt && (
                        <Col md={12} className="mb-3">
                          Student checked-in to campus at: &nbsp;{" "}
                          {new Date(requests[0].checkinAt).toLocaleString()}
                        </Col>
                      )}
                    </Row>
                  </Col>
                  <Col md={1}></Col>
                </Row>
              ) : (
                <p>No outing request to display</p>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Student;
