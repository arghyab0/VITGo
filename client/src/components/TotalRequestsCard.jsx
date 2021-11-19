//components
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import axios from "axios";

const TotalRequestsCard = () => {
  const [totalRequests, setTotalRequests] = useState(0);

  useEffect(() => {
    const fetchStatus = async () => {
      const res = await axios.get("/api/request");
      const myRequests = res.data.filter(
        (item) => item.issuedBy === "6193b68bb2b336e4d2335211"
      );

      setTotalRequests(myRequests.length);
    };
    fetchStatus();
  }, []);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Total requests</Card.Title>
        <Card.Text>{totalRequests}</Card.Text>
        <Card.Link className="d-flex justify-content-center">
          <Link to="/requests">New request</Link>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default TotalRequestsCard;
