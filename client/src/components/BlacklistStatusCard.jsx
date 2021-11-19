//components
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";

const BlacklistStatusCard = () => {
  const [blacklistStatus, setBlacklistStatus] = useState("");

  useEffect(() => {
    const fetchStatus = async () => {
      const res = await axios.get("/api/user/" + "6193b68bb2b336e4d2335211");
      setBlacklistStatus(res.data.userStatus);
    };
    fetchStatus();
  }, []);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Blacklist status</Card.Title>
        <Card.Text>{blacklistStatus}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BlacklistStatusCard;
