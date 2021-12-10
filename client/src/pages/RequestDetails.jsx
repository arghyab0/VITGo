//components
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import axios from "axios";

//helper function to set jwt token headers
import { setHeaders } from "../redux/helpers";

const RequestDetails = () => {
  const [request, setRequest] = useState({});
  const { reqID } = useParams();

  useEffect(() => {
    const getRequest = async () => {
      const res = await axios.get(`/api/request/${reqID}`, setHeaders());
      setRequest(res.data);
    };
    getRequest();
    console.log(request);
  }, [reqID]);

  return (
    <>
      <Container>
        <Row>
          <Col md={1}></Col>
          <Col md={10}>
            <Row className="mt-5">
              <h1>Outing request details</h1>
            </Row>

            <Row className="mt-5">
              <Col md={6} className="mb-4">
                Outing ID: &nbsp; {request._id}
              </Col>
              <Col md={6} className="mb-4">
                Outing request status: &nbsp; {request.requestStatus}
              </Col>
            </Row>

            <Row>
              <Col md={6} className="mb-4">
                Issued by: &nbsp; {request.issuedByRegNo}
              </Col>
              <Col md={6} className="mb-4">
                Token: &nbsp; {request.token}
              </Col>
            </Row>

            <Row>
              <Col md={6} className="mb-4">
                Contact no: &nbsp; {request.contactNo}
              </Col>
              <Col md={6} className="mb-4">
                Parent's contact no: &nbsp; {request.parentsContactNo}
              </Col>
            </Row>

            <Row>
              <Col md={4} className="mb-4">
                Hours: &nbsp; {request.hours}
              </Col>
              <Col md={8} className="mb-4">
                Purpose: &nbsp; {request.purpose}
              </Col>
            </Row>

            <Row className="mt-3">
              <h3>Outing timestamps</h3>
            </Row>

            <Row className="mt-4">
              <Col md={12} className="mb-4">
                Outing request raised at: &nbsp;{" "}
                {new Date(request?.createdAt).toLocaleString()}
              </Col>
              <Col md={12} className="mb-4">
                Request approved/rejected by manager at: &nbsp;{" "}
                {new Date(request?.managerAt).toLocaleString()}
              </Col>
              <Col md={12} className="mb-4">
                Student checked-out of campus at: &nbsp;{" "}
                {new Date(request?.checkoutAt).toLocaleString()}
              </Col>
              <Col md={12} className="mb-4">
                Student checked-in to cmapus at: &nbsp;{" "}
                {new Date(request?.checkinAt).toLocaleString()}
              </Col>
            </Row>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </>
  );
};

export default RequestDetails;
