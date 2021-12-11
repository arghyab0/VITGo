//components
import { Card } from "react-bootstrap";

const BlacklistStatusCard = ({ ustatus }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Blacklist status</Card.Title>
        <Card.Text>
          {ustatus !== "BLACKLIST" ? "NOT BLACKLISTED" : "BLACKLISTED"}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BlacklistStatusCard;
