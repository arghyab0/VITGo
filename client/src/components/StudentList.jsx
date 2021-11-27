//components
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Table, Button } from "react-bootstrap";

//actions
import { fetchUsers } from "../redux/actions/usersActions";
import { blacklistUsers } from "../redux/actions/usersActions";
import { unblacklistUsers } from "../redux/actions/usersActions";

const StudentList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const handleBlacklist = async (uid) => {
    dispatch(blacklistUsers(uid));
  };

  const handleUnBlacklist = async (uid) => {
    dispatch(unblacklistUsers(uid));
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

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
                {users.map((item) => (
                  <tr key={item.userID}>
                    <td>{item.userID}</td>
                    <td>{item.displayName}</td>
                    <td>{item.email}</td>
                    <td>{item.userStatus}</td>
                    <td>
                      {item.userStatus !== "BLACKLIST" ? (
                        <Button
                          variant="danger"
                          onClick={() => handleBlacklist(item._id)}
                        >
                          Blacklist
                        </Button>
                      ) : (
                        <Button onClick={() => handleUnBlacklist(item._id)}>
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
