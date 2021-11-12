//components
import { Table } from "react-bootstrap";

const OutingHistory = () => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          {Array.from({ length: 5 }).map((_, index) => (
            <th key={index}>Table heading</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 10 }).map((_, index) => (
          <tr>
            <td>1</td>
            {Array.from({ length: 5 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default OutingHistory;
