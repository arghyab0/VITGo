//components

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlacklistedCard = ({ number }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Blacklist</Card.Title>
        <Card.Text>{number}</Card.Text>
        <Card.Link className="d-flex justify-content-center">
          <Link to="/students">View blacklisted students</Link>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default BlacklistedCard;
