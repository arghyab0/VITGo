//components
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentsOutCard = (props) => {
  const [studentsOut, setStudentsOut] = useState(0);

  useEffect(() => {
    const fetchStudentsOut = async () => {
      const res = await axios.get("/api/user/");
      let count = 0;
      res.data.forEach((item) => {
        if (item.userStatus === "OUT") count++;
      });
      setStudentsOut(count);
    };
    fetchStudentsOut();
  }, []);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Students checked-out</Card.Title>
        <Card.Text>{studentsOut}</Card.Text>
        <Card.Link className="d-flex justify-content-center">
          <Link to="/students">View checked-out students</Link>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default StudentsOutCard;
