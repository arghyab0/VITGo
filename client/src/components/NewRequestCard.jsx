//components
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const NewRequestCard = ({ ustatus }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Submit new request</Card.Title>
        {ustatus === "IN" ? (
          <>
            <Card.Text>Your currently in campus and not blacklisted.</Card.Text>
            <Card.Link className="d-flex justify-content-center">
              <Link to="/requests">New request</Link>
            </Card.Link>
          </>
        ) : (
          <>
            <Card.Text>
              Your currently either out of campus or blacklisted.
            </Card.Text>
            <Card.Link className="d-flex justify-content-center">
              <Link
                to="/requests"
                style={{ pointerEvents: "none", color: "grey" }}
              >
                New request
              </Link>
            </Card.Link>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default NewRequestCard;
