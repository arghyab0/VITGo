//components
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ManagerCards = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link className="d-flex justify-content-center">
          <Link to={props.linkDest}>{props.linkText}</Link>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ManagerCards;
