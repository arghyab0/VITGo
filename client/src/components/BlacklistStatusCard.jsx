//components
import { Card } from "react-bootstrap";

const BlacklistStatusCard = ({ userData }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Blacklist status</Card.Title>
        <Card.Text>
          {userData.userStatus !== "BLACKLIST"
            ? "NOT BLACKLISTED"
            : "BLACKLISTED"}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BlacklistStatusCard;
