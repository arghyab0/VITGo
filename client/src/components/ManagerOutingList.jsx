//components
import { useDispatch } from "react-redux";
import { Table, Button } from "react-bootstrap";

//actions
import { approveRejectRequests } from "../redux/actions/requestsActions";

const ManagerOutingList = ({ reqData }) => {
  const dispatch = useDispatch();

  const handleAccept = async (reqID) => {
    dispatch(approveRejectRequests("APPROVED", reqID));
  };

  const handleReject = async (reqID) => {
    dispatch(approveRejectRequests("REJECTED", reqID));
  };

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
        {reqData.map((item) => (
          <tr key={item._id}>
            <td>{item.issuedByRegNo}</td>
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
