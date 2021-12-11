//components
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const HistoryCard = ({ reqNo }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Request history</Card.Title>
        <Card.Text>Total outing requests issued: {reqNo}</Card.Text>
        <Card.Link className="d-flex justify-content-center">
          <Link to="/requests">View history</Link>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default HistoryCard;
