//components

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const StudentsOutCard = ({ number }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Students checked-out</Card.Title>
        <Card.Text>{number}</Card.Text>
        <Card.Link className="d-flex justify-content-center">
          <Link to="/students">View checked-out students</Link>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default StudentsOutCard;
