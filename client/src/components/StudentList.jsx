//components
import { useState, useEffect } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import axios from "axios";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  const handleBlacklist = async (uid) => {
    try {
      const res = await axios.put("/api/user/blacklist/" + uid, {
        userType: "Manager", //get from store
      });
      console.log(res.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const handleUnBlacklist = async (uid) => {
    try {
      const res = await axios.put("/api/user/unblacklist/" + uid, {
        userType: "Manager", //get from store
      });
      console.log(res.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await axios.get("/api/user/");
      const studentList = res.data.filter(
        (item) => item.userType === "Student"
      );
      setStudents(studentList);
    };
    fetchStudents();
  }, []);

  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col md={1}></Col>
          <Col md={10}>
            <h1 className="mb-4">Student List</h1>
            <Table responsive>
              <thead>
                <tr>
                  {[
                    "Registration No.",
                    "Student Name",
                    "Student Email",
                    "Student Status",
                    "Action",
                  ].map((item, index) => (
                    <th key={index}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {students.map((item) => (
                  <tr key={item.userID}>
                    <td>{item.userID}</td>
                    <td>{item.displayName}</td>
                    <td>{item.email}</td>
                    <td>{item.userStatus}</td>
                    <td>
                      {item.userStatus !== "BLACKLIST" ? (
                        <Button
                          variant="danger"
                          onClick={(e) => handleBlacklist(item._id)}
                        >
                          Blacklist
                        </Button>
                      ) : (
                        <Button onClick={(e) => handleUnBlacklist(item._id)}>
                          Unblacklist
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </>
  );
};

export default StudentList;
