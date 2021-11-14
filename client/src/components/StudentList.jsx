//components
import { Container, Row, Col, Table } from "react-bootstrap";

const StudentList = () => {
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col md={1}></Col>
          <Col md={10}>
            <h1 className="mb-4">Student List</h1>
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <th key={index}>Table heading</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 10 }).map((_, index) => (
                  <tr>
                    <td>1</td>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <td key={index}>Table cell {index}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </>
  );
};

export default StudentList;
