//components
import { Container, Row, Col } from "react-bootstrap";

const RequestDetails = () => {
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
                Issued by: &nbsp; 18BCE7009
              </Col>
              <Col md={6} className="mb-4">
                Token: &nbsp; 3241
              </Col>
            </Row>

            <Row>
              <Col md={6} className="mb-4">
                Contact no: &nbsp; 9432437970
              </Col>
              <Col md={6} className="mb-4">
                Parent's contact no: &nbsp; 9432437970
              </Col>
            </Row>

            <Row>
              <Col md={4} className="mb-4">
                Hours: &nbsp; 4
              </Col>
              <Col md={8} className="mb-4">
                Purpose: &nbsp; Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Magnam veritatis, voluptatum illum nulla
                nostrum sunt assumenda repudiandae quo corporis voluptatibus,
                ipsa nam fugit repellendus dolorem provident nisi. Minus,
                similique assumenda!
              </Col>
            </Row>

            <Row className="mt-3">
              <h3>Outing timestamps</h3>
            </Row>

            <Row className="mt-4">
              <Col md={12} className="mb-4">
                Outing request raised at: &nbsp; 5/12/2021, 12:35:49
              </Col>
              <Col md={12} className="mb-4">
                Request approved/rejected by manager at: &nbsp; 5/12/2021,
                12:35:49
              </Col>
              <Col md={12} className="mb-4">
                Student checked-out of campus at: &nbsp; 5/12/2021, 12:35:49
              </Col>
              <Col md={12} className="mb-4">
                Student checked-in to cmapus at: &nbsp; 5/12/2021, 12:35:49
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
