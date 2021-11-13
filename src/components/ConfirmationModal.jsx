//components
import { Modal, Button } from "react-bootstrap";

const ConfirmationModal = (props) => {
  return (
    <Modal {...props} size="lg" centered>
      <Modal.Body>
        <h4 className="mb-5">Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        <Button className="text-center" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default ConfirmationModal;
