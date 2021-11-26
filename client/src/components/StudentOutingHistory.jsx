//components
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

//actions
import { fetchRequests } from "../redux/actions/requestsActions";

const StudentOutingHistory = () => {
  // const { search } = useLocation();
  const dispatch = useDispatch();
  const requests = useSelector((state) => state.requests);

  // useEffect(() => {
  //   dispatch(fetchRequests());
  // }, [dispatch]);

  // useEffect(() => {
  //   const fetchRequests = async () => {
  //     const res = await axios.get("/api/request/" + search);
  //     res.data.sort((a, b) =>
  //       a.createdAt > b.createdAt ? -1 : b.createdAt > a.createdAt ? 1 : 0
  //     );
  //     setRequests(res.data);
  //   };
  //   fetchRequests();
  // }, [search]);

  return (
    <>
      {requests.length > 0 ? (
        <Table responsive>
          <thead>
            <tr>
              {["Raised at", "Request status", "Token"].map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {requests.map((item) => (
              <tr key={item._id}>
                <td>
                  {`${new Date(item.createdAt).toDateString()} ${new Date(
                    item.createdAt
                  ).toLocaleTimeString()}`}
                </td>
                <td>{item.requestStatus}</td>
                <td>{item.token}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p className="text-center">No outing requests in history</p>
      )}
    </>
  );
};

export default StudentOutingHistory;
