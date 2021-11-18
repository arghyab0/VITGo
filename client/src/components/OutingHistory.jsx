//components
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Table } from "react-bootstrap";
import axios from "axios";

const OutingHistory = () => {
  const [requests, setRequests] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchRequests = async () => {
      const res = await axios.get("/api/request/" + search);
      setRequests(res.data);
    };
    fetchRequests();
    console.log(requests);
  }, [search]);

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          {["Raised at", "Request status", "Token"].map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {requests.map(
          (item, index) =>
            item.issuedBy === "6193b68bb2b336e4d2335211" && (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.createdAt}</td>
                <td>{item.requestStatus}</td>
                <td>{item.token}</td>
              </tr>
            )
        )}
      </tbody>
    </Table>
  );
};

export default OutingHistory;
