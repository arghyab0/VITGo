//components
import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

//actions
import { checkinCheckoutRequests } from "../redux/actions/requestsActions.js";

const SecurityCheckinForm = () => {
  const [userID, setUserID] = useState("");
  const [token, setToken] = useState("");

  const dispatch = useDispatch();

  const resetFields = () => {
    setUserID("");
    setToken("");
  };

  const checkUser = async (e) => {
    e.preventDefault();

    // try {
    //   const res = await axios.put("/api/request/security/", {
    //     userType: "Security", //get from store
    //     userID,
    //     token: token,
    //   });
    //   console.log(res.data);
    // } catch (err) {
    //   console.log(err.response.data);
    // }

    dispatch(checkinCheckoutRequests({ userID, token }));

    resetFields();
  };

  return (
    <>
      <Form onSubmit={checkUser}>
        <Form.Group as={Row} className="mb-5 d-flex justify-content-center">
          <Form.Label column xs={3}>
            Reg. No.
          </Form.Label>
          <Col xs={8}>
            <Form.Control
              type="text"
              placeholder="Registration no."
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-5 d-flex justify-content-center">
          <Form.Label column xs={3}>
            Token
          </Form.Label>
          <Col xs={8}>
            <Form.Control
              type="text"
              placeholder="Token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col className="d-flex justify-content-center">
            <Button type="submit">Submit token</Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
};

export default SecurityCheckinForm;
