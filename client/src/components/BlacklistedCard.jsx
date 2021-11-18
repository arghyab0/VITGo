//components
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const BlacklistedCard = (props) => {
  const [studentsBlacklisted, setStudentsBlacklisted] = useState(0);

  useEffect(() => {
    const fetchStudentsBlacklisted = async () => {
      const res = await axios.get("/api/user/");
      let count = 0;
      res.data.forEach((item) => {
        if (item.userStatus === "BLACKLIST") count++;
      });
      setStudentsBlacklisted(count);
    };
    fetchStudentsBlacklisted();
  }, []);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Blacklist</Card.Title>
        <Card.Text>{studentsBlacklisted}</Card.Text>
        <Card.Link className="d-flex justify-content-center">
          <Link to="/students">View blacklisted students</Link>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default BlacklistedCard;
