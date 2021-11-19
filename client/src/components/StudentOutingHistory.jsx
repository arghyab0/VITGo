//components
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Table } from "react-bootstrap";
import axios from "axios";

const StudentOutingHistory = () => {
  const [requests, setRequests] = useState([]);
  const { search } = useLocation();

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
          {["Raised at", "Request status", "Token"].map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {requests.map(
          (item) =>
            item.issuedBy === "6193b68bb2b336e4d2335211" && (
              <tr key={item.id}>
                <td>
                  {`${new Date(item.createdAt).toDateString()} ${new Date(
                    item.createdAt
                  ).toLocaleTimeString()}`}
                </td>
                <td>{item.requestStatus}</td>
                <td>{item.token}</td>
              </tr>
            )
        )}
      </tbody>
    </Table>
  );
};

export default StudentOutingHistory;
