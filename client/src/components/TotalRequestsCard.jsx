//components
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const TotalRequestsCard = ({ reqData }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Total requests</Card.Title>
        <Card.Text>{reqData.length}</Card.Text>
        <Card.Link className="d-flex justify-content-center">
          <Link to="/requests">New request</Link>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default TotalRequestsCard;
