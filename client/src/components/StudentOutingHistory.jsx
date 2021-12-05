//components
import { Table, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const StudentOutingHistory = () => {
  const requests = useSelector((state) => state.requests);

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
              {["Raised at", "Request status", "Token", "Info"].map(
                (item, index) => (
                  <th key={index}>{item}</th>
                )
              )}
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
                <td>
                  <Button variant="outline-primary">
                    <Link to={`/request/${item._id}`}>Details</Link>
                  </Button>
                </td>
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
