//components
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

const ManagerOutingList = () => {
  const [requests, setRequests] = useState([]);
  const { search } = useLocation();

  const handleAccept = async (reqID) => {
    try {
      const res = await axios.put("/api/request/manager/" + reqID, {
        userType: "Manager", //get from store
        requestStatus: "APPROVED",
      });
      console.log(res.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const handleReject = async (reqID) => {
    try {
      const res = await axios.put("/api/request/" + reqID, {
        userType: "Manager", //get from store
        requestStatus: "REJECTED",
      });
      console.log(res.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    const fetchRequests = async () => {
      const res = await axios.get("/api/request/" + search);
      res.data.sort((a, b) =>
        a.createdAt > b.createdAt ? -1 : b.createdAt > a.createdAt ? 1 : 0
      );
      setRequests(res.data);
    };
    fetchRequests();
  }, [search]);

  return (
    <Table responsive>
      <thead>
        <tr>
          {[
            "Raised by",
            "Contact no.",
            "Raised at",
            "Request status",
            "Action",
          ].map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {requests.map((item) => (
          <tr key={item._id}>
            <td>{item.issuedBy}</td>
            <td>{item.contactNo}</td>
            <td>
              {`${new Date(item.createdAt).toDateString()} ${new Date(
                item.createdAt
              ).toLocaleTimeString()}`}
            </td>
            <td>{item.requestStatus}</td>
            <td>
              {item.requestStatus === "RAISED" && (
                <>
                  <Button onClick={() => handleAccept(item._id)}>Accept</Button>
                  <Button onClick={() => handleReject(item._id)}>Reject</Button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ManagerOutingList;
